import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { AuthProvider } from '@contexts/AuthContext'
import { MainLayout } from '@layouts/MainLayout'
import { DashboardLayout } from '@layouts/DashboardLayout'

// Pages
import HomePage from '@pages/HomePage'
import LoginPage from '@pages/login/LoginPage'
import SignUp from '@pages/SignUp'
import NotFound from '@pages/NotFound'
import AboutPage from '@pages/AboutPage'
import ServicesPage from '@pages/ServicesPage'
import WellnessTipsPage from '@pages/WellnessTipsPage'
import RegisterPage from '@pages/register/RegisterPage'
import ProviderApplicationPage from '@pages/provider-application/ProviderApplicationPage'
import VerifyEmailPage from '@pages/verify-email/VerifyEmailPage'
import ContactPage from '@pages/ContactPage'
import PrivacyPage from '@pages/PrivacyPage'
import TermsPage from '@pages/TermsPage'

// Article Pages
import BreathingTechniquesPage from '@pages/articles/BreathingTechniquesPage'
import HolisticWellnessPage from '@pages/articles/HolisticWellnessPage'
import BuildingResiliencePage from '@pages/articles/BuildingResiliencePage'
import HealthyBoundariesPage from '@pages/articles/HealthyBoundariesPage'
import MindfulnessDailyLifePage from '@pages/articles/MindfulnessDailyLifePage'
import NutritionMentalHealthPage from '@pages/articles/NutritionMentalHealthPage'
import SleepMentalHealthPage from '@pages/articles/SleepMentalHealthPage'

// Dashboard Pages
import AdminDashboard from '@pages/dashboard/admin/AdminDashboard'
import ProviderDashboard from '@pages/dashboard/provider/ProviderDashboard'
import SeekerDashboard from '@pages/dashboard/seeker/SeekerDashboard'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes with Main Layout */}
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/wellness-tips" element={<WellnessTipsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/provider-application" element={<ProviderApplicationPage />} />
              <Route path="/verify-email" element={<VerifyEmailPage />} />
              
              {/* Article Routes */}
              <Route path="/articles/breathing-techniques" element={<BreathingTechniquesPage />} />
              <Route path="/articles/holistic-wellness-guide" element={<HolisticWellnessPage />} />
              <Route path="/articles/building-resilience" element={<BuildingResiliencePage />} />
              <Route path="/articles/healthy-boundaries" element={<HealthyBoundariesPage />} />
              <Route path="/articles/mindfulness-daily-life" element={<MindfulnessDailyLifePage />} />
              <Route path="/articles/nutrition-mental-health" element={<NutritionMentalHealthPage />} />
              <Route path="/articles/sleep-mental-health" element={<SleepMentalHealthPage />} />
            </Route>

            {/* Admin Dashboard Routes */}
            <Route
              path="/dashboards/admin"
              element={<DashboardLayout requiredRole="admin" />}
            >
              <Route index element={<AdminDashboard />} />
              {/* Add more admin routes */}
              {/* <Route path="providers" element={<ManageProviders />} /> */}
              {/* <Route path="reports" element={<Reports />} /> */}
              {/* <Route path="settings" element={<AdminSettings />} /> */}
            </Route>

            {/* Provider Dashboard Routes */}
            <Route
              path="/dashboards/provider"
              element={<DashboardLayout requiredRole="provider" />}
            >
              <Route index element={<ProviderDashboard />} />
              {/* Add more provider routes */}
              {/* <Route path="services" element={<MyServices />} /> */}
              {/* <Route path="schedule" element={<Schedule />} /> */}
              {/* <Route path="settings" element={<ProviderSettings />} /> */}
            </Route>

            {/* Seeker Dashboard Routes */}
            <Route
              path="/dashboards/seeker"
              element={<DashboardLayout requiredRole="seeker" />}
            >
              <Route index element={<SeekerDashboard />} />
              {/* Add more seeker routes */}
              {/* <Route path="bookings" element={<MyBookings />} /> */}
              {/* <Route path="search" element={<FindServices />} /> */}
              {/* <Route path="settings" element={<SeekerSettings />} /> */}
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
  )
}

export default App
