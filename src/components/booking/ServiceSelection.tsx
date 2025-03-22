
import React, { useState } from 'react';
import { Check, Shirt, Droplet, Iron, PanelTop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'wash-fold',
    title: 'Wash & Fold',
    description: 'Perfect for everyday clothes, towels, and bedding',
    icon: Droplet,
    color: 'blue',
    basePrice: '$1.99/lb'
  },
  {
    id: 'dry-cleaning',
    title: 'Dry Cleaning',
    description: 'For suits, dresses, and delicate items',
    icon: Shirt,
    color: 'purple',
    basePrice: 'From $4.99/item'
  },
  {
    id: 'ironing',
    title: 'Ironing Service',
    description: 'Professional pressing for wrinkle-free clothes',
    icon: Iron,
    color: 'green',
    basePrice: '$2.50/item'
  },
  {
    id: 'household',
    title: 'Household Items',
    description: 'Comforters, curtains, and other large items',
    icon: PanelTop,
    color: 'amber',
    basePrice: 'From $14.99'
  }
];

interface ServiceSelectionProps {
  onSelect: (service: string) => void;
  onContinue: () => void;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ onSelect, onContinue }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    onSelect(serviceId);
  };

  const getColorClasses = (color: string, isSelected: boolean) => {
    const colorMap: Record<string, { bg: string, border: string, iconBg: string, iconText: string }> = {
      blue: {
        bg: isSelected ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-transparent',
        border: isSelected ? 'border-blue-500 dark:border-blue-400' : 'border-gray-200 dark:border-gray-700',
        iconBg: 'bg-blue-100 dark:bg-blue-900/30',
        iconText: 'text-blue-600 dark:text-blue-400'
      },
      purple: {
        bg: isSelected ? 'bg-purple-50 dark:bg-purple-900/20' : 'bg-transparent',
        border: isSelected ? 'border-purple-500 dark:border-purple-400' : 'border-gray-200 dark:border-gray-700',
        iconBg: 'bg-purple-100 dark:bg-purple-900/30',
        iconText: 'text-purple-600 dark:text-purple-400'
      },
      green: {
        bg: isSelected ? 'bg-green-50 dark:bg-green-900/20' : 'bg-transparent',
        border: isSelected ? 'border-green-500 dark:border-green-400' : 'border-gray-200 dark:border-gray-700',
        iconBg: 'bg-green-100 dark:bg-green-900/30',
        iconText: 'text-green-600 dark:text-green-400'
      },
      amber: {
        bg: isSelected ? 'bg-amber-50 dark:bg-amber-900/20' : 'bg-transparent',
        border: isSelected ? 'border-amber-500 dark:border-amber-400' : 'border-gray-200 dark:border-gray-700',
        iconBg: 'bg-amber-100 dark:bg-amber-900/30',
        iconText: 'text-amber-600 dark:text-amber-400'
      }
    };

    return colorMap[color];
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Select a Service</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Choose the type of service you need
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => {
          const isSelected = selectedService === service.id;
          const colorClasses = getColorClasses(service.color, isSelected);
          
          return (
            <div
              key={service.id}
              onClick={() => handleServiceSelect(service.id)}
              className={cn(
                "relative rounded-xl p-6 border-2 transition-all cursor-pointer overflow-hidden",
                colorClasses.bg,
                colorClasses.border,
                "hover:shadow-md"
              )}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-laundry-600 text-white flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
              )}
              
              <div className="flex items-start">
                <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mr-4", colorClasses.iconBg)}>
                  <service.icon className={cn("w-6 h-6", colorClasses.iconText)} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{service.description}</p>
                  <p className="text-sm font-medium">{service.basePrice}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-end pt-4">
        <Button 
          onClick={onContinue} 
          disabled={!selectedService}
          className={cn(
            "transition-all",
            !selectedService && "opacity-50 cursor-not-allowed"
          )}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ServiceSelection;
