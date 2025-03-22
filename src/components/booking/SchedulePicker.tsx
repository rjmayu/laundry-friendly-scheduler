
import React, { useState } from 'react';
import { format, addDays, startOfToday, isToday, isTomorrow, isAfter } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Create fake time slots from 8 AM to 8 PM with 2-hour intervals
const generateTimeSlots = () => {
  return [
    { id: '8-10', label: '8:00 AM - 10:00 AM', available: true },
    { id: '10-12', label: '10:00 AM - 12:00 PM', available: true },
    { id: '12-14', label: '12:00 PM - 2:00 PM', available: true },
    { id: '14-16', label: '2:00 PM - 4:00 PM', available: true },
    { id: '16-18', label: '4:00 PM - 6:00 PM', available: true },
    { id: '18-20', label: '6:00 PM - 8:00 PM', available: false },
  ];
};

interface SchedulePickerProps {
  onSelect: (date: Date, timeSlot: string) => void;
  onContinue: () => void;
  onBack: () => void;
}

const SchedulePicker: React.FC<SchedulePickerProps> = ({ onSelect, onContinue, onBack }) => {
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState(generateTimeSlots());

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
    
    // Simulate different availability based on date
    if (date) {
      // For demonstration purposes, let's make some time slots unavailable
      // In a real app, you would fetch availability from an API
      const newTimeSlots = generateTimeSlots().map(slot => {
        if (isToday(date)) {
          // Make some times unavailable for today
          return { ...slot, available: slot.id !== '8-10' && slot.id !== '10-12' };
        }
        if (isTomorrow(date)) {
          // Different availability for tomorrow
          return { ...slot, available: slot.id !== '18-20' };
        }
        // Full availability for other days
        return { ...slot, available: true };
      });
      
      setTimeSlots(newTimeSlots);
    }
  };

  const handleTimeSlotSelect = (slotId: string) => {
    setSelectedTimeSlot(slotId);
    if (selectedDate) {
      onSelect(selectedDate, slotId);
    }
  };

  const isDateSelectable = (date: Date) => {
    return isAfter(date, today) || isToday(date);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Schedule Your Pickup</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Select a convenient date and time for us to collect your laundry
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Select a Date</h3>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateChange}
              disabled={(date) => !isDateSelectable(date)}
              fromDate={today}
              toDate={addDays(today, 14)} // Allow booking 2 weeks in advance
              className="pointer-events-auto rounded-md"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium text-lg">
            {selectedDate 
              ? `Available Times for ${format(selectedDate, 'EEEE, MMMM d')}` 
              : 'Select a date first'
            }
          </h3>
          
          <div className={cn(
            "grid grid-cols-1 gap-3 transition-opacity duration-300",
            !selectedDate && "opacity-50 pointer-events-none"
          )}>
            {timeSlots.map((slot) => (
              <div
                key={slot.id}
                onClick={() => slot.available && handleTimeSlotSelect(slot.id)}
                className={cn(
                  "p-4 rounded-lg border transition-all cursor-pointer",
                  slot.available ? "hover:border-laundry-500 hover:bg-laundry-50 dark:hover:bg-laundry-900/10" : "opacity-50 cursor-not-allowed",
                  selectedTimeSlot === slot.id
                    ? "border-laundry-500 bg-laundry-50 dark:bg-laundry-900/20"
                    : "border-gray-200 dark:border-gray-700"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "font-medium",
                    selectedTimeSlot === slot.id && "text-laundry-600 dark:text-laundry-400"
                  )}>
                    {slot.label}
                  </span>
                  {!slot.available && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      Unavailable
                    </span>
                  )}
                </div>
              </div>
            ))}
            
            {selectedDate && timeSlots.every(slot => !slot.available) && (
              <div className="text-center p-4">
                <p className="text-gray-500 dark:text-gray-400">No time slots available for this date.</p>
                <p className="text-sm mt-1">Please select another date.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button 
          onClick={onContinue} 
          disabled={!selectedDate || !selectedTimeSlot}
          className={cn(
            "transition-all",
            (!selectedDate || !selectedTimeSlot) && "opacity-50 cursor-not-allowed"
          )}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SchedulePicker;
