import React from 'react';
import { ArrowRight, Heart, Brain, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const services = [
    {
      icon: Heart,
      title: "Yoga & Meditation",
      desc: "Find inner peace and physical balance through guided yoga practices and mindfulness meditation sessions.",
      image: "/cdn-cgi/image/width=600,quality=80,format=auto/img/yoga-meditation.jpg"
    },
    {
      icon: Activity,
      title: "Physiotherapy",
      desc: "Restore movement and function with expert physiotherapy services for injury recovery and pain management.",
      image: "/cdn-cgi/image/width=600,quality=80,format=auto/img/physiotherapy.jpg"
    },
    {
      icon: Brain,
      title: "Mental Health Services",
      desc: "Access compassionate mental health support from qualified counsellors and therapists who understand your journey.",
      image: "/cdn-cgi/image/width=600,quality=80,format=auto/img/mental-health.jpg"
    }
  ];

  const wellnessTips = [
    {
      href: "/articles/breathing-techniques",
      title: "5 Simple Breathing Techniques for Daily Stress Relief",
      desc: "Learn practical breathwork exercises you can do anywhere to calm your mind and reduce anxiety.",
      image: "/cdn-cgi/image/width=600,quality=80,format=auto/img/breathing-techniques.jpg"
    },
    {
      href: "/articles/holistic-wellness-guide",
      title: "Understanding Holistic Wellness: A Complete Guide",
      desc: "Discover how integrating mind, body, and spirit can transform your approach to health and wellbeing.",
      image: "/cdn-cgi/image/width=600,quality=80,format=auto/img/wellness-guide.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo + NZBN */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 text-primary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3C12 3 9 6 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9C15 6 12 3 12 3Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 12C12 12 9 15 9 18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18C15 15 12 12 12 12Z"
                    fill="currentColor"
                    opacity="0.6"
                  />
                </svg>
                <span className="font-semibold">
                  Whaiora Connect Limited NZBN: 9429053139641
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Connecting Communities with Holistic Wellness
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Kia ora and welcome to Whaiora Connect. We bring together wellness
              providers and community members, honouring the values of
              <span className="font-semibold text-primary"> manaakitanga</span> (hospitality and care),
              <span className="font-semibold text-primary"> whanaungatanga</span> (relationships and connection),
              and <span className="font-semibold text-primary"> holistic wellbeing</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/register"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              >
                Join as Provider
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl"
              >
                Find a Provider
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the range of holistic wellness services available through Whaiora Connect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div 
                  key={i} 
                  className="group bg-card border-2 border-secondary/30 rounded-xl overflow-hidden hover:border-secondary hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Icon className="absolute bottom-4 right-4 w-12 h-12 text-white opacity-80" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>

                    <Link
                      to="/services"
                      className="group/btn inline-flex items-center gap-2 text-primary font-semibold transition-all hover:gap-3"
                    >
                      Find Practitioners
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Services Link */}
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Wellness Tips Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wellness Tips & Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Expert guidance for your holistic wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {wellnessTips.map((tip, i) => (
              <Link
                key={i}
                to={tip.href}
                className="bg-card rounded-xl border-2 border-border hover:border-primary hover:shadow-xl transition-all group overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={tip.image} 
                    alt={tip.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{tip.desc}</p>
                  <span className="text-primary font-semibold inline-flex items-center gap-2">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/wellness-tips"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg"
            >
              View All Wellness Tips
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Teaser */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Values & Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Whaiora Connect is built on the principles of Te Ao Māori, 
                  emphasizing manaakitanga, whanaungatanga, and holistic wellbeing. 
                  We're committed to creating meaningful connections between wellness 
                  providers and community members.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <img 
                  src="/cdn-cgi/image/width=800,quality=80,format=auto/img/holistic-healing.jpg" 
                  alt="Holistic healing approach"
                  loading="lazy"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join our community of wellness providers and members today
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
              >
                Become a Provider
              </Link>

              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
              >
                Browse Providers
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
