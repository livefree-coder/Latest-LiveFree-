import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      title: 'Study in Canada',
      path: '/study-in-canada'
    },
    {
      title: 'Visit Canada',
      path: '/visit-canada'
    },
    {
      title: 'Work in Canada',
      path: '/work-in-canada'
    },
    {
      title: 'Immigrate (PR)',
      path: '/immigrate-pr'
    },
    {
      title: 'Business Immigration',
      path: '/business-immigration'
    },
    // --- ADDED REFUGEE APPLICATIONS ---
    {
      title: 'Refugee Applications',
      path: '/refugee-application'
    },
    // --- ADDED STATUS RESTORATION ---
    {
      title: 'Status Restoration',
      path: '/status-restoration'
    }
  ];

  const handleHomeClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <a href="/" className="site-logo py-3">
            <img 
              src="/logo2.svg"
              alt="LiveFree Immigration Canada Logo" 
              className="h-full w-auto"
            />
          </a>

          <nav className="hidden md:flex space-x-8 items-center h-full">
            <button 
              onClick={handleHomeClick}
              className="text-gray-700 px-3 py-2 text-sm font-medium nav-link-underline"
            >
              Home
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 px-3 py-2 text-sm font-medium flex items-center nav-link-underline"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50 transition-all duration-300 ease-in-out overflow-hidden ${
                isServicesOpen 
                  ? 'max-h-96 opacity-100 transform translate-y-0' 
                  : 'max-h-0 opacity-0 transform -translate-y-2'
              }`}>
                <div className="py-1">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.path}
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <span className="inline-block nav-link-underline">{service.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <a href="/about" className="text-gray-700 px-3 py-2 text-sm font-medium nav-link-underline">
              About Us
            </a>
            <a href="/contact" className="text-gray-700 px-3 py-2 text-sm font-medium nav-link-underline">
              Contact Now
            </a>
          </nav>

          <div className="hidden md:flex items-center h-full">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-transparent border border-primary-red text-gray-700 px-6 py-2 rounded-md text-sm font-medium hover:bg-primary-red hover:text-white transition-colors"
            >
              Free Consultation
            </button>
          </div>

          <div className="md:hidden flex items-center h-full">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-red"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 overflow-y-auto max-h-[calc(100vh-80px)]">
            <button 
              onClick={handleHomeClick}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700"
            >
              Home
            </button>
            <div className="px-3 py-2">
              <div className="text-base font-medium text-gray-700 mb-2">Services</div>
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.path}
                  className="block px-4 py-2 text-sm font-medium text-gray-700 transition-colors"
                >
                  {service.title}
                </a>
              ))}
            </div>
            <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-700">
              About Us
            </a>
            <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700">
              Contact Now
            </a>
            <button 
              onClick={() => navigate('/contact')}
              className="w-full mt-4 bg-primary-red text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-primary-red-hover transition-colors"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;