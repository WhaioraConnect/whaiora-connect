export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary/10 border-b">
        <div className="container mx-auto px-4 py-12">
          <Link href="/" className="text-primary hover:underline">← Back</Link>
          <h1 className="text-3xl font-bold mt-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 12, 2026</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
            <p className="text-muted-foreground">Name, email, phone, health information, and usage data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">How We Use Information</h2>
            <p className="text-muted-foreground">To provide services, facilitate appointments, and improve your experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Information Sharing</h2>
            <p className="text-muted-foreground">Shared with healthcare providers for appointments and service providers as needed.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Your Rights</h2>
            <p className="text-muted-foreground">Access, correct, or delete your information. Contact privacy@whaioraconnect.nz</p>
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
