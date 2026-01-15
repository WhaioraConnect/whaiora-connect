import React from 'react';
import { ArrowRight, Heart, Activity, Brain, Flower2, Sparkles, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: Heart,
      title: "Yoga & Meditation",
      description: "Find inner peace and physical balance through guided yoga practices and mindfulness meditation sessions.",
      image: "/img/yoga-meditation.jpg",
      features: ["Hatha Yoga", "Vinyasa Flow", "Guided Meditation", "Breathwork"]
    },
    {
      icon: Activity,
      title: "Physiotherapy",
      description: "Restore movement and function with expert physiotherapy services for injury recovery and pain management.",
      image: "/img/physiotherapy.jpg",
      features: ["Injury Recovery", "Pain Management", "Sports Therapy", "Rehabilitation"]
    },
    {
      icon: Brain,
      title: "Mental Health Services",
      description: "Access compassionate mental health support from qualified counsellors and therapists who understand your journey.",
      image: "/img/mental-health.jpg",
      features: ["Counselling", "CBT Therapy", "Stress Management", "Anxiety Support"]
    },
    {
      icon: Flower2,
      title: "Massage Therapy",
      description: "Experience therapeutic touch and relaxation through various massage techniques tailored to your needs.",
      image: "/img/massage-therapy.jpg",
      features: ["Deep Tissue", "Aromatherapy", "Sports Massage", "Relaxation"]
    },
    {
      icon: Sparkles,
      title: "Holistic Healing",
      description: "Explore alternative healing modalities that address the whole person - mind, body, and spirit.",
      image: "/img/holistic-healing.jpg",
      features: ["Reiki", "Energy Healing", "Crystal Therapy", "Sound Healing"]
    },
    {
      icon: Users,
      title: "Nutrition & Wellness",
      description: "Get personalized nutrition guidance and wellness coaching to support your health goals.",
      image: "/img/nutrition.jpg",
      features: ["Meal Planning", "Dietary Advice", "Weight Management", "Lifestyle Coaching"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/cdn-cgi/image/width=1200,quality=80,format=auto/img/wellness-guide.jpg" 
            alt="Our Services"
            loading="lazy"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <nav className="mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </nav>

            {/* Page Title */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Discover the range of holistic wellness services available through Whaiora Connect. 
                Each service is delivered by qualified practitioners committed to your wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border-2 border-secondary/30 rounded-xl overflow-hidden hover:border-secondary hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden bg-muted relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary/90 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <Link
                      to="/register"
                      className="group/btn inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Find Practitioners
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Whaiora Connect?
            </h2>
            <p className="text-lg text-muted-foreground">
              We're committed to connecting you with qualified, caring practitioners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Verified Practitioners
              </h3>
              <p className="text-muted-foreground">
                All our providers are qualified, registered, and verified professionals
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Easy Booking
              </h3>
              <p className="text-muted-foreground">
                Book appointments online and manage your wellness journey with ease
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Holistic Approach
              </h3>
              <p className="text-muted-foreground">
                Services that honor mind, body, and spirit for complete wellbeing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're constantly expanding our network of wellness providers. Get in touch to learn 
              about additional services or suggest new categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
              <Link
                to="/register"
                className="px-8 py-4 border-2 border-border hover:border-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
              >
                Become a Provider
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
