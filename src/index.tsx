import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

// Use path aliases
import { AuthProvider } from '@contexts/AuthContext'
import { MainLayout } from '@layouts/MainLayout'
import { DashboardLayout } from '@layouts/DashboardLayout'

// Pages
import HomePage from '@pages/HomePage'
import AboutPage from '@pages/AboutPage'
import ServicesPage from '@pages/ServicesPage'
import WellnessTipsPage from '@pages/WellnessTipsPage'
import LoginPage from '@pages/login/LoginPage'
import RegisterPage from '@pages/register/RegisterPage'
import VerifyEmailPage from '@pages/verify-email/VerifyEmailPage'
import AdminDashboard from '@pages/dashboard/admin/AdminDashboard'
import ProviderDashboard from '@pages/dashboard/provider/ProviderDashboard'
import SeekerDashboard from '@pages/dashboard/seeker/SeekerDashboard'
import ProviderApplicationPage from '@pages/provider-application/ProviderApplicationPage'
import NotFound from '@pages/NotFound'

// Article Pages
import HolisticWellnessPage from '@pages/articles/HolisticWellnessPage'
import BreathingTechniquesPage from '@pages/articles/BreathingTechniquesPage'
import BuildingResiliencePage from '@pages/articles/BuildingResiliencePage'
import SleepMentalHealthPage from '@pages/articles/SleepMentalHealthPage'
import NutritionMentalHealthPage from '@pages/articles/NutritionMentalHealthPage'
import HealthyBoundariesPage from '@pages/articles/HealthyBoundariesPage'
import MindfulnessDailyLifePage from '@pages/articles/MindfulnessDailyLifePage'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes with Main Layout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/wellness-tips" element={<WellnessTipsPage />} />
              
              {/* Article Routes */}
              <Route path="/articles/holistic-wellness-guide" element={<HolisticWellnessPage />} />
              <Route path="/articles/breathing-techniques" element={<BreathingTechniquesPage />} />
              <Route path="/articles/building-resilience" element={<BuildingResiliencePage />} />
              <Route path="/articles/sleep-mental-health" element={<SleepMentalHealthPage />} />
              <Route path="/articles/nutrition-mental-health" element={<NutritionMentalHealthPage />} />
              <Route path="/articles/healthy-boundaries" element={<HealthyBoundariesPage />} />
              <Route path="/articles/mindfulness-daily-life" element={<MindfulnessDailyLifePage />} />
            </Route>

            {/* Auth Routes (without layout if custom styled) */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route path="/provider-application" element={<ProviderApplicationPage />} />

            {/* Admin Dashboard Routes with Protected Layout */}
            <Route
              path="/dashboard/admin"
              element={<DashboardLayout requiredRole="admin" />}
            >
              <Route index element={<AdminDashboard />} />
            </Route>

            {/* Provider Dashboard Routes with Protected Layout */}
            <Route
              path="/dashboard/provider"
              element={<DashboardLayout requiredRole="provider" />}
            >
              <Route index element={<ProviderDashboard />} />
            </Route>

            {/* Seeker Dashboard Routes with Protected Layout */}
            <Route
              path="/dashboard/seeker"
              element={<DashboardLayout requiredRole="seeker" />}
            >
              <Route index element={<SeekerDashboard />} />
            </Route>

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)
