
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold bg-gradient-to-r from-laundry-600 to-laundry-800 bg-clip-text text-transparent">
                FreshPress
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Premium laundry and dry cleaning services delivered to your door. Schedule with ease, track in real-time.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/wash-fold" className="text-sm text-gray-600 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                  Wash & Fold
                </Link>
              </li>
              <li>
                <Link to="/services/dry-cleaning" className="text-sm text-gray-600 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                  Dry Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/ironing" className="text-sm text-gray-600 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                  Ironing Service
                </Link>
              </li>
              <li>
                <Link to="/services/bedding" className="text-sm text-gray-600 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                  Bedding & Linen
                </Link>
              </li>
              <li>
                <Link to="/services/subscriptions" className="text-sm text-gray-600 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                  Recurring Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-gray-600 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-600 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+1-800-123-4567" className="text-sm text-gray-600 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors flex items-center">
                  <Phone size={16} className="mr-2" />
                  (800) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:help@freshpress.com" className="text-sm text-gray-600 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors flex items-center">
                  <Mail size={16} className="mr-2" />
                  help@freshpress.com
                </a>
              </li>
              <li>
                <div className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                  <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <span>123 Clean Street<br />San Francisco, CA 94103</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy; {currentYear} FreshPress. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-xs text-gray-500 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-gray-500 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-xs text-gray-500 hover:text-laundry-600 dark:text-gray-400 dark:hover:text-laundry-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
