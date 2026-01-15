import React, { useMemo } from 'react'
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom'
import { useAuth } from '@contexts/AuthContext'
import {
  Home,
  Users,
  Settings,
  Calendar,
  FileText,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import { cn } from '@lib/utils'

interface DashboardLayoutProps {
  requiredRole: 'admin' | 'provider' | 'seeker'
  children?: React.ReactNode
}

interface NavItem {
  name: string
  path: string
  icon: React.ComponentType<{ className?: string }>
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  requiredRole,
  children,
}) => {
  const { user, isAuthenticated, isLoading, signOut } = useAuth()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  // Get navigation items based on role
  const navigationItems = useMemo<NavItem[]>(() => {
    const baseItems: Record<string, NavItem[]> = {
      admin: [
        { name: 'Dashboard', path: '/dashboards/admin', icon: Home },
        { name: 'Manage Providers', path: '/dashboards/admin/providers', icon: Users },
        { name: 'Reports', path: '/dashboards/admin/reports', icon: FileText },
        { name: 'Settings', path: '/dashboards/admin/settings', icon: Settings },
      ],
      provider: [
        { name: 'Dashboard', path: '/dashboards/provider', icon: Home },
        { name: 'My Services', path: '/dashboards/provider/services', icon: FileText },
        { name: 'Schedule', path: '/dashboards/provider/schedule', icon: Calendar },
        { name: 'Settings', path: '/dashboards/provider/settings', icon: Settings },
      ],
      seeker: [
        { name: 'Dashboard', path: '/dashboards/seeker', icon: Home },
        { name: 'My Bookings', path: '/dashboards/seeker/bookings', icon: Calendar },
        { name: 'Find Services', path: '/dashboards/seeker/search', icon: FileText },
        { name: 'Settings', path: '/dashboards/seeker/settings', icon: Settings },
      ],
    }

    return baseItems[requiredRole] || []
  }, [requiredRole])

  // Generate breadcrumbs
  const breadcrumbs = useMemo(() => {
    return location.pathname
      .split('/')
      .filter(Boolean)
      .map((segment, idx, arr) => ({
        name: segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        path: '/' + arr.slice(0, idx + 1).join('/'),
      }))
  }, [location.pathname])

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  // Check authentication
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // Check role authorization
  if (user.role !== requiredRole) {
    return <Navigate to="/" replace />
  }

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Failed to sign out:', error)
    }
  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 transform bg-card border-r border-border transition-transform duration-300 ease-in-out lg:static lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">
                {requiredRole.charAt(0).toUpperCase() + requiredRole.slice(1)}
              </h2>
              <p className="text-sm text-muted-foreground">
                {user.fullName || user.email}
              </p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
              aria-label="Close sidebar"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-card px-4 lg:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Breadcrumb */}
          <nav className="flex-1 text-sm text-muted-foreground">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((bc, idx) => (
                <React.Fragment key={idx}>
                  <li className="text-muted-foreground/50">/</li>
                  <li>
                    <Link
                      to={bc.path}
                      className={cn(
                        'transition-colors',
                        idx === breadcrumbs.length - 1
                          ? 'text-foreground font-medium'
                          : 'hover:text-primary'
                      )}
                    >
                      {bc.name}
                    </Link>
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </nav>

          {/* User info (desktop only) */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
              {user.fullName
                ? user.fullName
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)
                : user.email[0].toUpperCase()}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 lg:p-6">
          {children ?? <Outlet />}
        </div>
      </main>
    </div>
  )
}
