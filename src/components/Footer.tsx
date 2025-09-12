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
            
            {/* UPDATED Contact Info Section */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">Main Office:</h4>
                <div className="space-y-2 pl-2 border-l border-gray-700">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-primary-red flex-shrink-0 mt-1" />
                    <span className="text-gray-300">6708, 4 AVE NE, Calgary, Alberta, T2A5J2, Canada</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary-red" />
                    <span className="text-gray-300">+1 (403) 402-4450</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Overseas Office:</h4>
                 <div className="space-y-2 pl-2 border-l border-gray-700">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-primary-red flex-shrink-0 mt-1" />
                    <span className="text-gray-300">90 Kakrail (Musafir Tower), 3rd Floor, Kakrail, Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary-red" />
                    <span className="text-gray-300">+88017 0531 5758</span>
                  </div>
                </div>
              </div>

               <div className="flex items-center pt-2">
                <Mail className="h-5 w-5 mr-2 text-primary-red" />
                <span className="text-gray-300">info@livefreeimmigration.com</span>
              </div>
            </div>
            
            {/* UPDATED Social Media Icons */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/19r7vFtrdK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <div className="p-2 bg-gray-700 rounded-full hover:bg-primary-red transition-colors cursor-pointer">
                    <Facebook className="h-5 w-5 text-white" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/livefree-immigration-canada/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <div className="p-2 bg-gray-700 rounded-full hover:bg-primary-red transition-colors cursor-pointer">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
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
            © 2025 LiveFree Immigration Canada. All rights reserved. | 
            <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors mx-2">Privacy Policy</a> | 
            <a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors mx-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;