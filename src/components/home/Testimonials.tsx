
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "FreshPress has completely eliminated my laundry stress. The quality of service is outstanding, and my clothes come back perfectly folded every time.",
    author: "Michael Johnson",
    role: "Marketing Executive",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    quote: "As a busy parent, FreshPress saves me at least 5 hours each week. Their recurring service is a game-changer, and the delivery is always on time.",
    author: "Sarah Thompson",
    role: "Product Manager",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    quote: "Their dry cleaning service is exceptional. My suits have never looked better, and I love being able to schedule everything from my phone.",
    author: "David Chen",
    role: "Financial Analyst",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join thousands of satisfied customers who have transformed their laundry experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 p-6 transition-all duration-300 hover:-translate-y-1 relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -top-5 -right-5 bg-laundry-50 dark:bg-laundry-900/20 rounded-full p-3 shadow-md">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.72222 16.9444L6.22222 13.4444L4.66667 15L9.72222 20.0556L19.8333 9.94444L18.2778 8.38889L9.72222 16.9444Z" fill="#2A9FFF"/>
                </svg>
              </div>
              
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
