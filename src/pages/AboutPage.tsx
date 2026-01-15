import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Leaf, ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      title: 'Manaakitanga',
      subtitle: 'Hospitality, kindness, and care for others',
      description: 'We believe in extending genuine care and hospitality to all members of our community, ensuring everyone feels welcomed and valued.'
    },
    {
      icon: Users,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      title: 'Whanaungatanga',
      subtitle: 'Building relationships and connections',
      description: 'Creating strong, meaningful connections between wellness providers and community members, fostering a sense of belonging and mutual support.'
    },
    {
      icon: Leaf,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      title: 'Holistic Wellbeing',
      subtitle: 'Caring for mind, body, and spirit',
      description: 'Embracing a comprehensive approach to wellness that nurtures the whole person—physical, mental, emotional, and spiritual health.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Wellness Providers' },
    { number: '10,000+', label: 'Community Members' },
    { number: '50+', label: 'Service Categories' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="/cdn-cgi/image/width=1200,quality=80,format=auto/img/holistic-healing.jpg" 
          alt="About Whaiora Connect - Holistic Healing"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            {/* Back Navigation */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Whaiora Connect
            </h1>
            <p className="text-xl text-white/95 max-w-3xl leading-relaxed">
              Whaiora Connect brings together wellness providers and community members, 
              honouring Te Ao Māori principles and holistic wellbeing.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto mb-20">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Whaiora Connect is more than a wellness directory—it's a community 
                  built on the values of Te Ao Māori. We believe in the power of 
                  connection, cultural respect, and holistic wellbeing.
                </p>
                <p className="text-lg">
                  Our platform connects you with qualified wellness providers who 
                  share our commitment to{' '}
                  <span className="font-semibold text-primary">manaakitanga</span>,{' '}
                  <span className="font-semibold text-primary">whanaungatanga</span>, 
                  and caring for the whole person—body, mind, and spirit.
                </p>
                <p className="text-lg">
                  Founded on principles that honour both traditional Māori values 
                  and modern healthcare practices, we're creating a space where 
                  wellness is accessible, culturally responsive, and truly holistic.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-16 h-16 ${value.bgColor} rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <Icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-foreground/80 mb-3 font-medium">
                        {value.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 md:p-12 border border-secondary/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            </div>
            <p className="text-lg text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              To create a thriving digital ecosystem where wellness providers and 
              community members connect authentically, guided by cultural values and 
              a shared commitment to holistic health and wellbeing for all.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-5xl font-bold text-primary mb-3">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-primary mb-4">
                For Clients
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to verified wellness providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Easy booking and appointment management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Culturally responsive care options</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Holistic wellness resources and tips</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-primary mb-4">
                For Providers
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professional profile showcase</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Client management tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Marketing and visibility support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community of like-minded practitioners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're seeking wellness services or offering them, 
            Whaiora Connect is your platform for meaningful connections and holistic health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-border hover:border-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
