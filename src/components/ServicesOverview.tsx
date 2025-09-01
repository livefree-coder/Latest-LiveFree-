import React, { useEffect, useRef } from 'react';
import { GraduationCap, Plane, Briefcase, MapPin, TrendingUp } from 'lucide-react';
import { SubHeading } from '../components/SubHeading';

const ServicesOverview: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = parseInt(target.dataset.index || '0');
            
            // Add staggered delay based on card index
            setTimeout(() => {
              target.classList.add('is-visible');
            }, index * 150); // 150ms delay between each card
            
            // Stop observing this element after animation
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before card is fully visible
      }
    );

    // Observe all card elements
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      title: 'Study in Canada',
      description: 'Open the doors to world-class education with comprehensive study permit assistance, SOP preparation, and post-arrival support for your Canadian academic journey.',
      path: '/study-in-canada',
      icon: GraduationCap
    },
    {
      title: 'Visit Canada',
      description: 'Explore Canada with confidence through our visitor visa services, including TRV, eTA, business visitor visas, and Super Visa for parents and grandparents.',
      path: '/visit-canada',
      icon: Plane
    },
    {
      title: 'Work in Canada',
      description: 'Unlock your career potential with expert work permit guidance, including spousal open work permits, PGWP, LMIA-based permits, and pathways to permanent residency.',
      path: '/work-in-canada',
      icon: Briefcase
    },
    {
      title: 'Immigrate (PR)',
      description: 'Make Canada your permanent home through Express Entry, Provincial Nominee Programs, family sponsorship, and strategic pathways to Canadian citizenship.',
      path: '/immigrate-pr',
      icon: MapPin
    },
    {
      title: 'Business Immigration',
      description: 'Invest, innovate, and succeed in Canada through Start-Up Visa programs, Self-Employed Persons Program, and agricultural immigration pathways.',
      path: '/business-immigration',
      icon: TrendingUp
    }
  ];

  return (
    // UPDATED THIS LINE: Changed bg-[#100E09] to bg-bg-dark-navy
    <section id="services-section" className="bg-secondary-navy py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SubHeading className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Help You With
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className="scroll-fade-in relative overflow-hidden rounded-lg transition-transform hover:scale-105 bg-primary-red group"
            >
              <div className="relative p-8 h-full flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="w-12 h-1 bg-white group-hover:bg-secondary-navy transition-colors duration-300 mb-6"></div>
                  <div className="flex items-center mb-6">
                    {React.createElement(service.icon, {
                      className: "w-8 h-8 text-white group-hover:text-secondary-navy transition-colors duration-300"
                    })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative group inline-block">
                    {service.title}
                    <span className="absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </h3>
                  <p className="text-white mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <a
                  href={service.path}
                  className="self-start px-6 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg bg-secondary-navy text-white hover:bg-white hover:text-secondary-navy"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;