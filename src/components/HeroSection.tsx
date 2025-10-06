import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';


const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      image: 'https://res.cloudinary.com/dankeqpe3/image/upload/v1756155016/christina-wocintechchat-com-faEfWCdOKIg-unsplash_zlxgsp.jpg',
      title: 'Expert Guidance',
      description: 'Navigate your Canadian immigration journey with confidence and expert support.'
    },
    {
      image: 'https://res.cloudinary.com/dankeqpe3/image/upload/v1756155029/naassom-azevedo-Q_Sei-TqSlc-unsplash_wx2f3m.jpg',
      title: 'Study Permit',
      description: 'Turn your educational dreams into reality with our comprehensive study permit services.'
    },
    {
      image: 'https://res.cloudinary.com/dankeqpe3/image/upload/v1756155000/kevin-delvecchio-7noZJ_4nhU8-unsplash_tozey5.jpg',
      title: 'Family Reunification',
      description: 'Reunite with your loved ones through our expert family sponsorship programs.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden z-0">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center w-full">
            <div className="max-w-3xl">
              <Heading className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                {slides[currentSlide].title}
              </Heading>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="liquid-button-pulse text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  SCHEDULE DISCOVERY CALL
                </button>
                <button 
                  onClick={scrollToServices}
                  className="bg-secondary-navy text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  Explore Our Services
                </button>
              </div>
            </div>
            
            {/* Top Right Tagline */}
            <div className="hidden lg:block absolute top-8 right-8">
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-white mb-1">
                    Unlock Your Future – LiveFree!
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-transparent border-2 border-primary-red text-primary-red px-6 py-3 rounded-md text-sm font-semibold hover:bg-primary-red hover:text-white transition-colors whitespace-nowrap"
                >
                  Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Section */}
      <div className="lg:hidden absolute top-4 left-4 right-4 z-20">
        <div className="flex flex-col items-center gap-3">
          <p className="text-xl font-bold text-white text-center">
            Unlock Your Future – LiveFree!
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-transparent border-2 border-primary-red text-primary-red px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary-red hover:text-white transition-colors"
          >
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;