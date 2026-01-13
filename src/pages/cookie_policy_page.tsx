export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary/10 border-b">
        <div className="container mx-auto px-4 py-12">
          <a href="/" className="text-primary hover:underline">← Back</a>
          <h1 className="text-3xl font-bold mt-4">Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: January 12, 2026</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-2">What Are Cookies?</h2>
            <p className="text-muted-foreground">Small files that help websites remember your preferences and improve your experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">How We Use Cookies</h2>
            <p className="text-muted-foreground">For authentication, preferences, analytics, and platform improvements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Types of Cookies</h2>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Essential: Required for platform functionality</li>
              <li>• Functional: Remember your preferences</li>
              <li>• Analytics: Help us improve the platform</li>
              <li>• Marketing: Personalized content and ads</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Managing Cookies</h2>
            <p className="text-muted-foreground">Control cookies through your browser settings. Disabling may affect platform functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <p className="text-muted-foreground">Questions? Email privacy@whaioraconnect.nz</p>
          </section>
        </div>
      </div>
    </div>
  );
}