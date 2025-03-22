
import React from 'react';
import { Check, Shirt, Droplet, Shirt2, PanelTop, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'wash-fold',
    title: 'Wash & Fold',
    description: 'Your everyday laundry, washed, dried, and folded to perfection.',
    icon: Droplet,
    color: 'bg-blue-50 text-blue-600',
    features: [
      'Weighed by pound',
      'Stain treatment included',
      'Folded to perfection',
      'Same-day option available'
    ]
  },
  {
    id: 'dry-cleaning',
    title: 'Dry Cleaning',
    description: 'Expert care for your delicate garments, suits, dresses, and formal wear.',
    icon: Shirt,
    color: 'bg-purple-50 text-purple-600',
    features: [
      'Individually inspected',
      'Spot treatment',
      'Professional pressing',
      'Eco-friendly process'
    ]
  },
  {
    id: 'ironing',
    title: 'Ironing Service',
    description: 'Crisp, wrinkle-free garments delivered ready to wear.',
    icon: Shirt2,
    color: 'bg-green-50 text-green-600',
    features: [
      'Hand-finished pressing',
      'Garment steaming',
      'Folded or on hangers',
      '24-hour turnaround'
    ]
  },
  {
    id: 'household',
    title: 'Household Items',
    description: 'Speciality cleaning for bedding, curtains, and other household textiles.',
    icon: PanelTop,
    color: 'bg-amber-50 text-amber-600',
    features: [
      'Comforters & duvets',
      'Pillows & cushions',
      'Curtains & drapes',
      'Delicate fabrics'
    ]
  },
  {
    id: 'subscriptions',
    title: 'Recurring Service',
    description: 'Set up regular pickups and never worry about laundry again.',
    icon: CalendarDays,
    color: 'bg-red-50 text-red-600',
    features: [
      'Weekly or bi-weekly options',
      'Priority scheduling',
      'Discount on all services',
      'Flexible rescheduling'
    ]
  }
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Laundry Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            From everyday essentials to special garments, we have the perfect service for all your laundry needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 p-6 hover:-translate-y-1 group"
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", service.color)}>
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-laundry-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" size="sm" className="w-full group-hover:bg-laundry-50 dark:group-hover:bg-gray-700" asChild>
                <Link to={`/services/${service.id}`}>
                  Learn More
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
