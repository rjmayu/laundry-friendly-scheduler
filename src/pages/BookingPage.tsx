
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ServiceSelection from '@/components/booking/ServiceSelection';
import SchedulePicker from '@/components/booking/SchedulePicker';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, Loader2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

// Booking steps
const STEPS = {
  SERVICE: 0,
  SCHEDULE: 1,
  ADDRESS: 2,
  PAYMENT: 3,
  CONFIRMATION: 4
};

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.SERVICE);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  const handleScheduleSelect = (date: Date, timeSlot: string) => {
    setSelectedDate(date);
    setSelectedTimeSlot(timeSlot);
  };

  const handleNextStep = () => {
    if (currentStep < STEPS.CONFIRMATION) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > STEPS.SERVICE) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmitBooking = () => {
    setLoading(true);
    
    // Simulate booking process
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
      
      toast.success('Booking Confirmed!', {
        description: 'Your pickup has been scheduled successfully.',
        duration: 5000,
      });
    }, 2000);
  };

  // Dummy function to handle Address and Payment steps
  // In real app, these would be proper components
  const renderPlaceholderStep = (title: string, description: string) => (
    <div className="max-w-2xl mx-auto py-8 space-y-8 animate-fadeIn">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          This is a placeholder for the {title.toLowerCase()} step.
        </p>
        <p className="text-sm mt-2">
          In a complete application, this would contain a form to collect {title.toLowerCase()} details.
        </p>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={handlePreviousStep}>
          Back
        </Button>
        <Button onClick={currentStep === STEPS.PAYMENT ? handleSubmitBooking : handleNextStep}>
          {currentStep === STEPS.PAYMENT ? (
            loading ? (
              <span className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </span>
            ) : (
              'Complete Booking'
            )
          ) : (
            'Continue'
          )}
        </Button>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case STEPS.SERVICE:
        return (
          <ServiceSelection 
            onSelect={handleServiceSelect} 
            onContinue={handleNextStep} 
          />
        );
      case STEPS.SCHEDULE:
        return (
          <SchedulePicker 
            onSelect={handleScheduleSelect} 
            onContinue={handleNextStep}
            onBack={handlePreviousStep}
          />
        );
      case STEPS.ADDRESS:
        return renderPlaceholderStep('Delivery Address', 'Where should we deliver your clean laundry?');
      case STEPS.PAYMENT:
        return renderPlaceholderStep('Payment Details', 'Provide your payment information to complete your booking');
      case STEPS.CONFIRMATION:
        return (
          <div className="max-w-lg mx-auto py-8 space-y-8 animate-fadeIn text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            
            <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Your laundry pickup has been scheduled. We'll be there at the selected time!
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-left">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Service</p>
                  <p className="font-medium">
                    {selectedService === 'wash-fold' ? 'Wash & Fold' : 
                     selectedService === 'dry-cleaning' ? 'Dry Cleaning' :
                     selectedService === 'ironing' ? 'Ironing Service' : 'Household Items'}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Pickup Date & Time</p>
                  <p className="font-medium">
                    {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    {' '}&bull;{' '}
                    {selectedTimeSlot === '8-10' ? '8:00 AM - 10:00 AM' :
                     selectedTimeSlot === '10-12' ? '10:00 AM - 12:00 PM' :
                     selectedTimeSlot === '12-14' ? '12:00 PM - 2:00 PM' :
                     selectedTimeSlot === '14-16' ? '2:00 PM - 4:00 PM' :
                     selectedTimeSlot === '16-18' ? '4:00 PM - 6:00 PM' : '6:00 PM - 8:00 PM'}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Order Number</p>
                  <p className="font-medium">#FP-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 pt-4">
              <Button asChild>
                <Link to="/">Return Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="#">Track Order</Link>
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="py-16 md:py-24 container max-w-5xl mx-auto px-4">
        {/* Progressive Steps Indicator */}
        {!completed && (
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative flex justify-between mb-6">
              {/* Progress bar */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 -translate-y-1/2">
                <div 
                  className="h-full bg-laundry-600 dark:bg-laundry-500 transition-all duration-300" 
                  style={{ width: `${(currentStep / (Object.keys(STEPS).length / 2 - 1)) * 100}%` }}
                />
              </div>
              
              {/* Steps */}
              {Object.keys(STEPS).slice(0, Object.keys(STEPS).length / 2).map((step, index) => (
                <div 
                  key={step} 
                  className="relative z-10 flex flex-col items-center"
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      index < currentStep 
                        ? 'bg-laundry-600 text-white' 
                        : index === currentStep 
                          ? 'bg-white dark:bg-gray-800 text-laundry-600 dark:text-laundry-400 border-2 border-laundry-600 dark:border-laundry-400' 
                          : 'bg-white dark:bg-gray-800 text-gray-400 border-2 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {index < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span 
                    className={`text-xs font-medium mt-2 ${
                      index <= currentStep ? 'text-gray-900 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {step.charAt(0) + step.slice(1).toLowerCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {renderStep()}
      </div>
    </Layout>
  );
};

export default BookingPage;
