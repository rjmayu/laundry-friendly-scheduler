
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-laundry-50 to-laundry-100 dark:from-gray-900 dark:to-gray-800 -z-10" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-laundry-200 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-laundry-200 rounded-full blur-3xl opacity-60 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-laundry-400 to-laundry-600 rounded-t-2xl" />
          
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Simplify Your Laundry Life?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have freed themselves from laundry day stress. 
              Your first order includes a special discount!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/book-now" className="group">
                Book Your First Pickup 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-1">100% Satisfaction</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Guaranteed or your money back</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Free Pickup & Delivery</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">On orders over $30</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">24-48 Hour Turnaround</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">For standard orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
