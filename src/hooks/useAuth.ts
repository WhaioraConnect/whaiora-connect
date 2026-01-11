import { useEffect, useState } from "react";
import { supabase } from "@lib/supabaseClient";

export type Role = "admin" | "provider" | "seeker";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [providerStatus, setProviderStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      setUser(user);

      const { data: profile } = await supabase
        .from("profiles")
        .select("role, provider_status")
        .eq("id", user.id)
        .single();

      if (profile) {
        setRole(profile.role);
        setProviderStatus(profile.provider_status || null);
      }

      setLoading(false);
    };

    init();
  }, []);

  return { user, role, providerStatus, loading };
}

