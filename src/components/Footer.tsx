import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">LiveFree Immigration</div>
            <p className="text-gray-300 mb-4">
              Your trusted partners in seamless immigration. We provide expert guidance 
              to help you achieve your Canadian immigration dreams.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary-red" />
                <span className="text-gray-300">6708, 4 AVE NE, Calgary, Alberta, T2A5J2, Canada</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary-red" />
                <span className="text-gray-300">+1 (403) 402-4450</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary-red" />
                <span className="text-gray-300">info@livefreeimmigration.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Study Permits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Work Permits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Family Sponsorship</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Visa Appeals</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 LiveFree Immigration. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;