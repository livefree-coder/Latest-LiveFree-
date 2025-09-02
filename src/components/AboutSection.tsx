import React, { useEffect, useRef } from 'react';
import { CheckCircle, Users, Award, Globe, Shield, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SubHeading } from './SubHeading';

const AboutSection: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = parseInt(target.dataset.cardIndex || '0');
            
            setTimeout(() => {
              target.classList.add('about-card-visible');
            }, index * 200);
            
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.2,
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

  const strengths = [
    "Deep expertise in Canadian education and immigration policy",
    "A team that includes both RCICs and international legal professionals",
    "80%+ success rate in refugee and humanitarian claims",
    "End-to-end support: from eligibility assessment to application and appeal",
    "Transparent process and ethical, honest guidance",
    "Support for clients both inside and outside Canada"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Us Section */}
        <div className="text-center mb-16">
          <SubHeading className="text-4xl md:text-5xl text-secondary-navy mb-6">
            About Us
          </SubHeading>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              LiveFree Immigration Canada is a client-focused immigration consultancy built on 
              expertise, integrity, and results. Our team of highly skilled licensed consultants, 
              legal professionals and immigration experts brings years of combined experience in 
              Canadian immigration law and global mobility.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We specialize in providing tailored immigration solutions for individuals, families, 
              students, and businesses. Whether it's permanent residency, study permits, work visas, 
              or business immigration, our advice is strategic, accurate, and effective.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              What sets us apart is our commitment to excellence. Our team's deep legal acumen, 
              sharp problem-solving skills, and personalized approach ensure that every client's 
              journey is smooth, transparent, and successful.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <SubHeading className="text-4xl md:text-5xl text-secondary-navy mb-4">
              Why Choose Us?
            </SubHeading>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                More Than Applications. We Build Futures.
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                At LiveFree Immigration, we're not just another immigration firm. We're a dedicated 
                team of licensed immigration consultants and legal experts who understand that 
                immigration is about people, not just paperwork. Whether you're hoping to study, 
                work, reunite with family, or build a new life in Canada, we bring clarity, 
                strategy, and care to every step of your journey.
              </p>
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-secondary-navy mb-8 flex items-center justify-center">
              <Users className="w-8 h-8 text-secondary-navy mr-3" />
              What Sets Us Apart?
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="what-sets-us-apart-cards">
              {/* Licensed Professionals */}
              <div 
                ref={(el) => (cardRefs.current[0] = el)}
                className="about-card bg-gray-50 rounded-xl p-8 transition-all duration-500 ease-out hover:bg-white hover:shadow-xl hover:scale-105 hover:-translate-y-2 cursor-pointer group" 
                data-card-index="0"
              >
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-primary-red mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <h4 className="text-xl font-bold text-slate-900">
                    Licensed Professionals with Legal Insight
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  Our team is composed of Regulated Canadian Immigration Consultants (RCICs) and 
                  Barristers qualified in England and Wales. This blend of Canadian regulatory 
                  expertise and international legal knowledge gives you an edge — especially in 
                  complex or high-stakes applications.
                </p>
              </div>

              {/* Strategic Approach */}
              <div 
                ref={(el) => (cardRefs.current[1] = el)}
                className="about-card bg-gray-50 rounded-xl p-8 transition-all duration-500 ease-out hover:bg-white hover:shadow-xl hover:scale-105 hover:-translate-y-2 cursor-pointer group" 
                data-card-index="1"
              >
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-secondary-navy mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <h4 className="text-xl font-bold text-slate-900">
                    We Don't Just File – We Strategize
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  Every successful immigration case starts with the right strategy. We analyze your 
                  profile, goals, and circumstances to recommend the most effective immigration path — 
                  not just the easiest or most obvious one. Whether it's choosing the right province, 
                  strengthening your Express Entry profile, or navigating a humanitarian case, we 
                  craft a solution that fits you.
                </p>
              </div>

              {/* Personalized Service */}
              <div 
                ref={(el) => (cardRefs.current[2] = el)}
                className="about-card bg-gray-50 rounded-xl p-8 transition-all duration-500 ease-out hover:bg-white hover:shadow-xl hover:scale-105 hover:-translate-y-2 cursor-pointer group" 
                data-card-index="2"
              >
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-primary-red mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <h4 className="text-xl font-bold text-slate-900">
                    Personalized Service, Every Step of the Way
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  At LiveFree, we don't believe in one-size-fits-all solutions. We listen carefully, 
                  stay responsive, and tailor our advice and applications to your unique needs — 
                  whether you're an international student, skilled professional, entrepreneur, or 
                  refugee claimant.
                </p>
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-secondary-navy mb-8 flex items-center justify-center">
              <Shield className="w-8 h-8 text-secondary-navy mr-3" />
              Our Core Strengths
            </h3>
            
            <div className="bg-slate-800 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-red mr-4 mt-1 flex-shrink-0" />
                    <p className="text-white text-lg leading-relaxed">{strength}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-secondary-navy to-bg-dark-navy rounded-2xl p-8 md:p-12 text-left">
              <h3 className="text-3xl font-bold text-white mb-6 text-left">
                Your Dream. Our Mission.
              </h3>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                We believe immigration isn't just a transaction — it's a life-changing decision. 
                That's why we've built our practice around integrity, transparency, and results. 
                Our goal is to empower you to live free, make informed choices, and reach your 
                full potential in Canada.
              </p>
              <div className="text-left">
                <p className="text-2xl font-bold text-white mb-8">
                  At LiveFree Immigration, we don't just process applications — we build futures.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-primary-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary-red-hover transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  Start Your Journey Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;