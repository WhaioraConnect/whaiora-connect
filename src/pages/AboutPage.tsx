import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <div className='min-h-screen flex flex-col bg-background'>
            {/* Hero Section with Image */}
            <div className="relative h-[400px] overflow-hidden">
                <img 
                    src="/img/holistic-healing.jpg" 
                    alt="About Whaiora Connect"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                        <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>About Whaiora Connect</h1>
                        <p className='text-lg text-white/90 max-w-2xl'>
                            Whaiora Connect brings together wellness providers and community members, honoring te ao Māori principles and holistic wellbeing.
                        </p>
                    </div>
                </div>
            </div>
            
            <main className='flex-grow py-20'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <Link to='/' className='px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors'>
                        Back to Home
                    </Link>
                </div>
            </main>
        </div>
    );
}



