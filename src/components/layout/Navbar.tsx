
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-laundry-600 to-laundry-800 bg-clip-text text-transparent">
              FreshPress
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-laundry-600 dark:text-gray-200 dark:hover:text-laundry-400 transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-gray-700 hover:text-laundry-600 dark:text-gray-200 dark:hover:text-laundry-400 transition-colors">
              Pricing
            </Link>
            <Link to="/how-it-works" className="text-sm font-medium text-gray-700 hover:text-laundry-600 dark:text-gray-200 dark:hover:text-laundry-400 transition-colors">
              How It Works
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-laundry-600 dark:text-gray-200 dark:hover:text-laundry-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login" className="flex items-center space-x-1">
                <User size={18} />
                <span>Login</span>
              </Link>
            </Button>
            <Button asChild>
              <Link to="/book-now" className="flex items-center space-x-1">
                <ShoppingBag size={18} />
                <span>Book Now</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-[400px] border-b border-gray-200 dark:border-gray-800" : "max-h-0"
      )}>
        <div className="px-4 py-5 space-y-8">
          <nav className="flex flex-col space-y-4">
            <Link to="/services" className="text-base font-medium text-gray-700 hover:text-laundry-600 dark:text-gray-200 dark:hover:text-laundry-400">
              Services
            </Link>
            <Link to="/pricing" className="text-base font-medium text-gray-700 hover:text-laundry-600 dark:text-gray-200 dark:hover:text-laundry-400">
              Pricing
            </Link>
            <Link to="/how-it-works" className="text-base font-medium text-gray-700 hover:text-laundry-600 dark:text-gray-200 dark:hover:text-laundry-400">
              How It Works
            </Link>
            <Link to="/contact" className="text-base font-medium text-gray-700 hover:text-laundry-600 dark:text-gray-200 dark:hover:text-laundry-400">
              Contact
            </Link>
          </nav>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link to="/book-now">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
