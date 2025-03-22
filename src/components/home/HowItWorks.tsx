
import React from 'react';
import { CheckCircle2, Truck, Shirt, Calendar } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Schedule a Pickup',
    description: 'Choose a convenient date and time slot for us to collect your laundry.',
    icon: Calendar,
    color: 'bg-laundry-100 text-laundry-600'
  },
  {
    id: 2,
    title: 'We Collect Your Laundry',
    description: 'Our professional driver will pick up your items from your doorstep.',
    icon: Truck,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 3,
    title: 'Expert Cleaning',
    description: 'Your garments are cleaned with premium products and detailed care.',
    icon: Shirt,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 4,
    title: 'Fast Delivery',
    description: 'We return your fresh, clean laundry to your doorstep within 24-48 hours.',
    icon: CheckCircle2,
    color: 'bg-amber-100 text-amber-600'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How FreshPress Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Our simple 4-step process makes laundry day effortless
          </p>
        </div>
        
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-laundry-100 dark:bg-gray-700 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-laundry-400 to-laundry-600 w-[30%]" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="relative flex flex-col items-center text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-6 z-10 shadow-lg`}>
                  <step.icon className="w-10 h-10" />
                </div>
                
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-700 border-2 border-laundry-500 text-sm font-bold text-laundry-800 dark:text-laundry-300 absolute top-0 -right-3 md:top-6 md:right-auto transform md:translate-x-8 z-20 shadow-md">
                  {step.id}
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
