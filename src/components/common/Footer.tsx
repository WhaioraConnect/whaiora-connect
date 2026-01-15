import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto py-10 px-4 grid md:grid-cols-4 gap-8 text-sm">

        <div>
          <h4 className="font-bold mb-2">Whaiora Connect</h4>
          <p className="text-muted-foreground">
            Holistic digital wellbeing for Aotearoa 🌿
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Explore</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/wellness-tips" className="text-muted-foreground hover:text-primary transition-colors">Wellness Tips</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Account</h4>
          <ul className="space-y-2">
            <li><Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">Login</Link></li>
            <li><Link to="/register" className="text-muted-foreground hover:text-primary transition-colors">Register</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Whaiora Connect
          </p>
        </div>
      </div>
    </footer>
  )
}
