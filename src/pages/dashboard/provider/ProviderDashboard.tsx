'use client';
import { DashboardLayout } from '@layouts/DashboardLayout';

export default function ProviderDashboard() {
  return (
    <DashboardLayout requiredRole="provider">
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Provider Dashboard</h1>
        <p>Welcome, approved provider!</p>
      </div>
    </DashboardLayout>
  );
}



