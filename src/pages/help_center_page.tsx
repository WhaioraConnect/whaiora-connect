import { useState } from 'react'

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('')

  const helpTopics = [
    {
      title: 'Getting Started',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      articles: [
        'Creating your account',
        'Setting up your profile',
        'Understanding the dashboard',
        'First steps guide'
      ]
    },
    {
      title: 'Finding Providers',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      articles: [
        'How to search for providers',
        'Understanding provider profiles',
        'Reading reviews and ratings',
        'Filtering search results'
      ]
    },
    {
      title: 'Bookings & Appointments',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      articles: [
        'Booking your first appointment',
        'Cancelling or rescheduling',
        'Virtual consultations guide',
        'Managing your appointments'
      ]
    },
    {
      title: 'Account & Settings',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      articles: [
        'Updating your profile',
        'Privacy settings',
        'Notification preferences',
        'Account security'
      ]
    },
    {
      title: 'For Healthcare Providers',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      articles: [
        'Provider registration process',
        'Managing your practice',
        'Setting availability',
        'Handling appointments'
      ]
    },
    {
      title: 'Billing & Payments',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      articles: [
        'Understanding fees',
        'Payment methods',
        'Invoices and receipts',
        'Refund policy'
      ]
    },
    {
      title: 'Privacy & Security',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      articles: [
        'How we protect your data',
        'Privacy policy explained',
        'GDPR compliance',
        'Data retention'
      ]
    },
    {
      title: 'Technical Support',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      ),
      articles: [
        'Browser compatibility',
        'Troubleshooting login issues',
        'Mobile app usage',
        'System requirements'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 border-b">
        <div className="container mx-auto px-4 py-16">
          <nav className="mb-8">
            <a href="/" className="text-primary hover:underline">← Back to Home</a>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Find guides, tutorials, and answers to help you get the most out of Whaiora Connect
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-lg border-2 focus:outline-none focus:border-primary bg-background"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Links */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            <a href="/faq" className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
              FAQ
            </a>
            <a href="/contact" className="px-4 py-2 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
              Contact Support
            </a>
            <a href="/provider-application" className="px-4 py-2 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
              Provider Resources
            </a>
          </div>
        </div>

        {/* Help Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpTopics.map((topic, index) => (
            <div key={index} className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{topic.title}</h3>
              <ul className="space-y-2">
                {topic.articles.map((article, idx) => (
                  <li key={idx}>
                    <button className="text-muted-foreground hover:text-primary transition-colors text-left">
                      {article}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Support CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-6">
            Our support team is available Monday to Friday, 9am-5pm NZST
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@whaioraconnect.nz"
              className="inline-flex items-center justify-center px-8 py-3 border rounded-lg hover:bg-muted transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}