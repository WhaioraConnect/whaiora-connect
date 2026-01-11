// src/services/applicationService.ts
import { supabase } from '@lib/supabaseClient';

export interface ProviderApplication {
  fullName: string;
  email: string;
  phone?: string;
  specialty: string;
  experience: number;
  qualifications: string;
  culturalApproach: string;
}

export async function submitProviderApplication(
  application: ProviderApplication
): Promise<{ success: boolean; error?: string }> {
  try {
    // Insert the application linked to the current user
    const { data, error } = await supabase
      .from('provider_applications')
      .insert([
        {
          user_id: supabase.auth.getUser().data?.user?.id,
          full_name: application.fullName,
          email: application.email,
          phone: application.phone,
          specialty: application.specialty,
          experience: application.experience,
          qualifications: application.qualifications,
          cultural_approach: application.culturalApproach
        }
      ])
      .select(); // optional: returns inserted row

    if (error) throw error;

    return { success: true };
  } catch (err: any) {
    console.error('Submit Provider Application Error:', err);
    return { success: false, error: err.message || 'Failed to submit application.' };
  }
}

// Admin function to update application status
export async function updateProviderApplicationStatus(
  applicationId: string,
  status: 'approved' | 'rejected'
): Promise<{ success: boolean; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('provider_applications')
      .update({ status })
      .eq('id', applicationId);

    if (error) throw error;

    return { success: true };
  } catch (err: any) {
    console.error('Update Provider Application Status Error:', err);
    return { success: false, error: err.message || 'Failed to update application.' };
  }
}

// Optional: Admin fetch all applications
export async function fetchAllProviderApplications() {
  try {
    const { data, error } = await supabase
      .from('provider_applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (err: any) {
    console.error('Fetch Provider Applications Error:', err);
    return [];
  }
}

