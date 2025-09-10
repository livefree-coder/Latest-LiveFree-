import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-950 text-white">
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
            
            {/* Social Media Icons */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="p-2 bg-gray-700 rounded-full hover:bg-primary-red transition-colors cursor-pointer">
                  <Facebook className="h-5 w-5 text-white" />
                </div>
                <div className="p-2 bg-gray-700 rounded-full hover:bg-primary-red transition-colors cursor-pointer">
                  <Linkedinn className="h-5 w-5 text-white" />
                </div>
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
              <li><a href="/study-in-canada" className="text-gray-300 hover:text-white transition-colors">Study in Canada</a></li>
              <li><a href="/visit-canada" className="text-gray-300 hover:text-white transition-colors">Visit Canada</a></li>
              <li><a href="/work-in-canada" className="text-gray-300 hover:text-white transition-colors">Work in Canada</a></li>
              <li><a href="/immigrate-pr" className="text-gray-300 hover:text-white transition-colors">Immigrate (PR)</a></li>
              <li><a href="/business-immigration" className="text-gray-300 hover:text-white transition-colors">Business Immigration</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 LiveFree Immigration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;