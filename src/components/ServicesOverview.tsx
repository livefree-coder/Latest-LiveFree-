import React, { useEffect, useRef } from 'react';
import { GraduationCap, Plane, Briefcase, MapPin, TrendingUp, Shield, RefreshCw } from 'lucide-react';
import { SubHeading } from '../components/SubHeading';

const ServicesOverview: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = parseInt(target.dataset.index || '0');
            
            setTimeout(() => {
              target.classList.add('is-visible');
            }, index * 150);
            
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      title: 'Study in Canada',
      description: 'Comprehensive study permit assistance, SOP preparation, and post-arrival support for your academic journey.',
      path: '/study-in-canada',
      icon: GraduationCap
    },
    {
      title: 'Visit Canada',
      description: 'Explore Canada with confidence through our visitor visa, eTA, business visitor, and Super Visa services.',
      path: '/visit-canada',
      icon: Plane
    },
    {
      title: 'Work in Canada',
      description: 'Unlock your career potential with expert work permit guidance, including SOWP, PGWP, and LMIA-based permits.',
      path: '/work-in-canada',
      icon: Briefcase
    },
    {
      title: 'Immigrate (PR)',
      description: 'Make Canada your permanent home through Express Entry, PNP, family sponsorship, and pathways to citizenship.',
      path: '/immigrate-pr',
      icon: MapPin
    },
    {
      title: 'Business Immigration',
      description: 'Invest and innovate in Canada through Start-Up Visa programs, Self-Employed, and agricultural pathways.',
      path: '/business-immigration',
      icon: TrendingUp
    },
    // --- ADDED REFUGEE APPLICATIONS ---
    {
      title: 'Refugee Applications',
      description: 'Compassionate and effective representation for those fleeing persecution and seeking safety in Canada.',
      path: '/refugee-application',
      icon: Shield
    },
    // --- ADDED STATUS RESTORATION ---
    {
      title: 'Status Restoration',
      description: 'Expert guidance to help you restore your visitor, student, or worker status if it has expired.',
      path: '/status-restoration',
      icon: RefreshCw
    }
  ];

  return (
    <section id="services-section" className="bg-slate-800 py-20" style={{ backgroundColor: '#1e293b', backgroundImage: 'none' }}>
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