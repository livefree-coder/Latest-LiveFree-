import React, { useState } from 'react';
import { Briefcase, Lightbulb, Users, Wheat, CheckCircle, ExternalLink, Target, Award, Globe, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const BusinessImmigrationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const navigate = useNavigate();

  const businessPathways = [
    {
      id: 'startup-visa',
      title: 'Start-Up Visa',
      subtitle: 'For Innovative Entrepreneurs',
      icon: <Lightbulb className="w-8 h-8 text-amber-600" />,
      description: 'Designed for entrepreneurs who want to start an innovative business in Canada that can compete globally and create jobs.',
      details: [
        'A qualifying business idea with innovation potential',
        'Support from a designated organization (venture capital fund, angel investor group, or business incubator)',
        'Meet language requirements (CLB 5 in English or French)',
        'Show enough settlement funds for you and your family',
        'Permanent Residency pathway — not a temporary visa'
      ],
      services: [
        'Matching clients with designated organizations',
        'Business plan preparation aligned with Canadian market expectations',
        'Full immigration process handling from eligibility to PR',
        'Strategic advice for founders and partners',
        'Pitch preparation and investor presentation support'
      ]
    },
    {
      id: 'self-employed',
      title: 'Self-Employed Persons Program',
      subtitle: 'For Cultural & Athletic Professionals',
      icon: <Users className="w-8 h-8 text-purple-600" />,
      description: 'For individuals with relevant experience in cultural activities or athletics who can contribute to Canada\'s cultural or athletic life.',
      details: [
        'Significant experience in cultural activities (artists, performers, writers, etc.)',
        'Experience in athletics (professional athletes, coaches, etc.)',
        'Minimum 2 years of relevant experience required',
        'Ability to be self-employed in Canada',
        'Demonstrate contribution to Canada\'s cultural or athletic life'
      ],
      services: [
        'Eligibility assessment based on your experience and achievements',
        'Documentation proving intent and ability to be self-employed',
        'Business plans showcasing economic and cultural contribution',
        'Handling complex profiles and maximizing success chances',
        'Portfolio preparation for cultural professionals'
      ]
    },
    {
      id: 'agriculture',
      title: 'Agriculture Immigration',
      subtitle: 'Pathways for Farm Owners & Workers',
      icon: <Wheat className="w-8 h-8 text-green-600" />,
      description: 'Various federal and provincial pathways for farm owners, operators, investors, and agricultural workers.',
      details: [
        'Provincial Nominee Program (PNP) – Entrepreneur Streams for farmers',
        'Rural and Northern Immigration Pilot (RNIP) for agricultural communities',
        'Agri-Food Pilot for meat production, greenhouse, nursery, and animal production',
        'Experience in agricultural management, livestock, or crop production',
        'Investment opportunities in Canadian agricultural ventures'
      ],
      services: [
        'Assessment for the right agriculture-focused immigration stream',
        'Business plan development for farm purchase or agricultural ventures',
        'Guidance through both federal and provincial pathways',
        'Handling LMIA exemptions where applicable',
        'Market research and investment guidance for agricultural opportunities'
      ]
    }
  ];

  const benefits = [
    'Expert guidance through complex business immigration processes',
    'High success rate with innovative business strategies',
    'Support for entrepreneurs, investors, and self-employed professionals',
    'Comprehensive business plan development and review',
    'Strategic pathways to permanent residency through business',
    'End-to-end support from concept to Canadian citizenship'
  ];

  const whyCanadaBusiness = [
    'Stable economy with strong support for entrepreneurs',
    'Access to NAFTA/USMCA markets and global trade opportunities',
    'Government incentives and support programs for businesses',
    'Highly educated workforce and multicultural talent pool',
    'World-class infrastructure and business-friendly environment',
    'Clear pathways from business ownership to permanent residency'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-800 py-20 animate-fadeIn">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <TrendingUp className="w-16 h-16 text-primary-red" />
            </div>
            <Heading className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              Business Immigration
            </Heading>
            <p className="text-xl md:text-2xl text-primary-red font-semibold mb-6">
              Invest, Innovate & Succeed in Canada
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                At LiveFree Immigration, we specialize in helping entrepreneurs, innovators, and
                investors turn their business ambitions into reality in Canada. Whether you're
                launching a start-up, bringing creative or athletic talents, or contributing to
                Canada's vital agricultural sector, our experienced team provides precise, tailored
                guidance to navigate Canada's business immigration pathways with confidence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                From strategy to execution, we're committed to making your Canadian business dream
                a reality — efficiently and successfully.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-primary-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary-red-hover transition-colors"
              >
                Start Your Business Journey
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
              >
                Free Business Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Canada for Business */}
      <section className="py-20 bg-bg-light-gray animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-3xl md:text-4xl text-text-heading mb-6">
              Why Choose Canada for Your Business?
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Discover why Canada is the ideal destination for entrepreneurs and business investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCanadaBusiness.map((reason, index) => (
              <div key={index} className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:bg-primary-red cursor-pointer">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 group-hover:text-white mr-3 mt-1 flex-shrink-0 transition-colors duration-300" />
                  <p className="text-text-body group-hover:text-white leading-relaxed transition-colors duration-300">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-3xl md:text-4xl text-text-heading mb-6">
              Why Choose Our Business Immigration Services?
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Experience the difference of working with business immigration specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-bg-light-gray rounded-lg p-6 hover:bg-primary-red transition-all duration-300 cursor-pointer">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-secondary-navy group-hover:text-white mr-3 mt-1 flex-shrink-0 transition-colors duration-300" />
                  <p className="text-text-body group-hover:text-white leading-relaxed transition-colors duration-300">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Immigration Pathways */}
      <section className="py-20 bg-bg-light-gray animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-3xl md:text-4xl text-text-heading mb-6">
              Explore Business Immigration Pathways
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Find the right business immigration program that matches your entrepreneurial goals
            </p>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:block">
            <div className="flex border-b border-gray-200 mb-8">
              {businessPathways.map((pathway, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                    activeTab === index
                      ? 'border-b-2 border-secondary-navy text-secondary-navy'
                      : 'text-text-muted hover:text-secondary-navy'
                  }`}
                >
                  <div className="flex items-center justify-center mb-2">
                    {pathway.icon}
                  </div>
                  <div className="text-sm leading-tight">{pathway.title}</div>
                  {pathway.subtitle && <div className="text-xs text-gray-500">{pathway.subtitle}</div>}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              {activeTab !== null && (
                <>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-bg-light-gray rounded-full mr-4">
                      {businessPathways[activeTab].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-heading">
                        {businessPathways[activeTab].title}
                      </h3>
                      {businessPathways[activeTab].subtitle && (
                        <p className="text-lg text-text-muted">{businessPathways[activeTab].subtitle}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-text-body mb-6 leading-relaxed">
                    {businessPathways[activeTab].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-text-heading mb-4">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {businessPathways[activeTab].details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-text-body">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-text-heading mb-4">Our Services Include:</h4>
                      <ul className="space-y-2">
                        {businessPathways[activeTab].services.map((service, index) => (
                          <li key={index} className="flex items-start">
                            <Target className="w-5 h-5 text-secondary-navy mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-text-body">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-4">
            {businessPathways.map((pathway, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === index ? null : index)}
                  className="w-full p-6 text-left bg-white hover:bg-bg-light-gray transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 bg-bg-light-gray rounded-full mr-4">
                        {pathway.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-heading">{pathway.title}</h3>
                        {pathway.subtitle && (
                          <p className="text-sm text-text-muted">{pathway.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <div className={`transform transition-transform ${
                      activeTab === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {activeTab !== null && activeTab === index && (
                  <div className="p-6 bg-bg-light-gray animate-fadeIn">
                    <p className="text-text-body mb-6 leading-relaxed">
                      {pathway.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-text-heading mb-4">Key Requirements:</h4>
                        <ul className="space-y-2">
                          {pathway.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-text-body">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-text-heading mb-4">Our Services Include:</h4>
                        <ul className="space-y-2">
                          {pathway.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start">
                              <Target className="w-5 h-5 text-secondary-navy mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-text-body">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="py-20 bg-blue-50 animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SubHeading className="text-3xl md:text-4xl text-text-heading mb-6">
              Important Resources
            </SubHeading>
            <p className="text-xl text-text-muted">
              Official government resources for business immigration to Canada
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <ExternalLink className="w-10 h-10 text-secondary-navy" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              IRCC – Business Immigration Overview
            </h3>
            <p className="text-text-body mb-6 leading-relaxed">
              Explore official information about all business immigration programs, eligibility requirements,
              application procedures, and investment opportunities directly from Immigration, Refugees and Citizenship Canada.
            </p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/investors-entrepreneurs.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary-navy text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Visit IRCC Business Immigration
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-navy to-bg-dark-navy animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Ready to Start Your Business in Canada?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let our experienced team guide you through your business immigration journey with strategic planning and expert support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary-red-hover transition-colors"
            >
              Schedule Business Consultation
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessImmigrationPage;