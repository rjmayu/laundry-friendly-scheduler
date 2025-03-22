
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient -z-10" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-laundry-100 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-laundry-100 rounded-full blur-3xl opacity-60 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <div className="animate-fadeInLeft" style={{ animationDelay: '0.2s' }}>
              <span className="inline-block px-4 py-2 rounded-full bg-laundry-100 text-laundry-800 text-sm font-medium">
                #1 Rated Laundry Service
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fadeInLeft" style={{ animationDelay: '0.4s' }}>
              Fresh, Clean Laundry <span className="text-laundry-600">Delivered</span> to You
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-fadeInLeft" style={{ animationDelay: '0.6s' }}>
              Premium laundry and dry cleaning, picked up from your door and delivered back at your convenience. Save time, live better.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInLeft" style={{ animationDelay: '0.8s' }}>
              <Button size="lg" asChild>
                <Link to="/book-now" className="group">
                  Book Your Pickup
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/how-it-works">
                  How It Works
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-6 animate-fadeInLeft" style={{ animationDelay: '1s' }}>
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-laundry-600 border-2 border-white flex items-center justify-center text-xs text-white">
                  MS
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-white -ml-2 flex items-center justify-center text-xs text-white">
                  JT
                </div>
                <div className="w-8 h-8 rounded-full bg-laundry-800 border-2 border-white -ml-2 flex items-center justify-center text-xs text-white">
                  KL
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">500+</span> happy customers in your area
              </p>
            </div>
          </div>
          
          <div className="relative animate-fadeInRight" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 bg-laundry-600 rounded-2xl blur-2xl opacity-20 rotate-3 scale-105 -z-10" />
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Laundry Service"
                  className="w-full h-auto object-cover rounded-xl transition-transform hover:scale-105 duration-700"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-laundry-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-laundry-600">
                    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/>
                    <path d="M12 8v4l2 2"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Average delivery time</p>
                  <p className="text-sm font-semibold">24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-laundry-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-laundry-600">
                    <path d="M12 20v-6M6 20V10M18 20V4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Customer satisfaction</p>
                  <p className="text-sm font-semibold">98%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
