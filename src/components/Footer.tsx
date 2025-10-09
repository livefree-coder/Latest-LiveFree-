import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">LiveFree Immigration Canada</div>
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
                  <div className="p-2 bg-gray-700 rounded-full hover:bg-blue-500 transition-colors cursor-pointer">
                    <Facebook className="h-5 w-5 text-white" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/livefree-immigration-canada/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <div className="p-2 bg-gray-700 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                </a>
                <a href="https://wa.me/8801705315758" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <div className="p-2 bg-gray-700 rounded-full hover:bg-green-600 transition-colors cursor-pointer">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
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
              {/* --- ADDED THESE TWO LINKS --- */}
              <li><a href="/refugee-application" className="text-gray-300 hover:text-white transition-colors">Refugee Applications</a></li>
              <li><a href="/status-restoration" className="text-gray-300 hover:text-white transition-colors">Status Restoration</a></li>
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