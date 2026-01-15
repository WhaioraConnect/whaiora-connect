import { Home, Info, Briefcase, Lightbulb, LogIn, UserPlus, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, to: '/' },
    { id: 'about', label: 'About', icon: Info, to: '/about' },
    { id: 'services', label: 'Services', icon: Briefcase, to: '/services' },
    { id: 'wellness', label: 'Wellness Tips', icon: Lightbulb, to: '/wellness-tips' },
  ]

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto h-20 flex items-center justify-between px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            🌿
          </div>
          <div>
            <p className="font-bold text-primary">Whaiora Connect</p>
            <p className="text-xs text-muted-foreground">Holistic Digital Wellness</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-2">
          {navItems.map(({ id, label, icon: Icon, to }) => (
            <Link
              key={id}
              to={to}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                isActive(to)
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Auth */}
        <div className="hidden lg:flex gap-3">
          <Link to="/login" className="px-4 py-2 hover:text-primary">Login</Link>
          <Link to="/register" className="px-4 py-2 bg-secondary rounded-lg">
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          {navItems.map(({ id, label, to }) => (
            <Link
              key={id}
              to={to}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 hover:bg-muted"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
