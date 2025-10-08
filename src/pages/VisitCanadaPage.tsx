import React, { useState } from 'react';
import { Plane, Users, Briefcase, Heart, ExternalLink, CheckCircle, Clock, Globe, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const VisitCanadaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const navigate = useNavigate();

  const visaTypes = [
    {
      id: 'trv',
      title: 'Temporary Resident Visa (TRV)',
      subtitle: 'Visitor Visa',
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      description: 'For tourists, family visits, friends, or short stays in Canada.',
      details: [
        'Typically issued for up to 6 months per visit',
        'Valid for single or multiple entries during the visa validity period',
        'Required for citizens of visa-required countries'
      ],
      services: [
        'Assessing eligibility',
        'Assisting with purpose-of-visit documentation',
        'Ties to home country proof',
        'Application preparation and submission',
        'Addressing previous refusals or complex cases'
      ]
    },
    {
      id: 'eta',
      title: 'Electronic Travel Authorization (eTA)',
      subtitle: '',
      icon: <Globe className="w-8 h-8 text-green-600" />,
      description: 'Required for visa-exempt nationals traveling to Canada by air.',
      details: [
        'Linked electronically to your passport',
        'Valid for up to 5 years or until the passport expires',
        'Common for tourists, short business trips, and family visits'
      ],
      services: [
        'Confirming whether eTA applies to you',
        'Managing eTA applications for error-free processing',
        'Guiding next steps if additional authorization is required'
      ]
    },
    {
      id: 'business',
      title: 'Business Visitor Visa',
      subtitle: '',
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      description: 'For foreign nationals visiting Canada temporarily for business meetings, conferences, trade shows, training, or partnership discussions.',
      details: [
        'Does not permit working in Canada',
        'No entry into the Canadian labor market',
        'Primary business activity remains outside Canada',
        'Must demonstrate sufficient funds, purpose, and temporary intent'
      ],
      services: [
        'Drafting strong business purpose letters',
        'Organizing invitation letters, proof of business relationships',
        'Preparing comprehensive application packages ensuring a hassle-free process'
      ]
    },
    {
      id: 'supervisa',
      title: 'Super Visa',
      subtitle: 'For Parents & Grandparents',
      icon: <Heart className="w-8 h-8 text-red-600" />,
      description: 'Allows parents and grandparents of Canadian citizens or permanent residents to visit Canada for up to 5 years at a time.',
      details: [
        'Valid for up to 10 years (multiple entries)',
        'No need to renew status frequently',
        'Requires invitation letter from child/grandchild in Canada',
        'Proof of financial support (meeting the LICO requirement)',
        'Valid Canadian medical insurance coverage (minimum 1 year)',
        'Completed immigration medical exam'
      ],
      services: [
        'Full support in preparing invitation letters and financial documents',
        'Ensuring compliance with all Super Visa requirements',
        'Handling medical, insurance, and application complexities',
        'Solutions for previous refusals or tricky cases'
      ]
    }
  ];

  const benefits = [
    'Expert guidance through complex visa processes',
    'High success rate with personalized approach',
    'Support for previous refusals and complex cases',
    'Comprehensive documentation assistance',
    'Legal precision with compassionate service',
    'End-to-end support from application to approval'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-800 py-20 animate-fadeIn">
        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('/WhatsApp Image 2025-09-10 at 13.22.38 copy copy.jpeg')" }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Plane className="w-16 h-16 text-primary-red" />
            </div>
            <Heading className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              Visitor & Super Visa
            </Heading>
            <p className="text-xl md:text-2xl text-primary-red font-semibold mb-6">
              Explore Canada with Confidence
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                At LiveFree Immigration, we understand that visiting family, exploring business
                opportunities, or experiencing Canada's beauty matters deeply. Whether it's for
                tourism, visiting loved ones, or attending important business events, our expert
                team ensures a smooth, stress-free visa process tailored to your needs.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                With our personalized advice, legal precision and exceptional success record,
                we help you navigate Canada's visitor visa processes efficiently, accurately, and confidently.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-primary-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary-red-hover transition-colors"
              >
                Start Your Application
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-bg-light-gray animate-fadeIn"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-3xl md:text-4xl mb-6">
              Why Choose Our Visitor Visa Services?
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Experience the difference of working with licensed professionals who care about your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:bg-primary-red cursor-pointer">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 group-hover:text-white mr-3 mt-1 flex-shrink-0 transition-colors duration-300" />
                  <p className="text-text-body group-hover:text-white leading-relaxed transition-colors duration-300">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Visa Options */}
      <section className="py-20 bg-white animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-3xl md:text-4xl mb-6">
              Visitor Visa Options at a Glance
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Choose the right visa type for your visit to Canada
            </p>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:block">
            <div className="flex border-b border-gray-200 mb-8">
              {visaTypes.map((visa, index) => (
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
                    {visa.icon}
                  </div>
                  <div className="text-sm">{visa.title}</div>
                  {visa.subtitle && <div className="text-xs text-gray-500">{visa.subtitle}</div>}
                </button>
              ))}
            </div>

            {activeTab !== null && (
              <div className="bg-bg-light-gray rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white rounded-full mr-4 shadow-sm">
                    {visaTypes[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-heading">
                      {visaTypes[activeTab].title}
                    </h3>
                    {visaTypes[activeTab].subtitle && (
                      <p className="text-lg text-text-muted">{visaTypes[activeTab].subtitle}</p>
                    )}
                  </div>
                </div>

                <p className="text-text-body mb-6 leading-relaxed">
                  {visaTypes[activeTab].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-text-heading mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {visaTypes[activeTab].details.map((detail, index) => (
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
                      {visaTypes[activeTab].services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <Shield className="w-5 h-5 text-secondary-navy mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-text-body">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-4">
            {visaTypes.map((visa, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === index ? null : index)}
                  className="w-full p-6 text-left bg-bg-light-gray hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 bg-white rounded-full mr-4 shadow-sm">
                        {visa.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-heading">{visa.title}</h3>
                        {visa.subtitle && (
                          <p className="text-sm text-text-muted">{visa.subtitle}</p>
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

                {activeTab === index && (
                  <div className="p-6 bg-white animate-fadeIn">
                    <p className="text-text-body mb-6 leading-relaxed">
                      {visa.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-text-heading mb-4">Key Features:</h4>
                        <ul className="space-y-2">
                          {visa.details.map((detail, detailIndex) => (
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
                          {visa.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start">
                              <Shield className="w-5 h-5 text-secondary-navy mr-2 mt-0.5 flex-shrink-0" />
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
            <SubHeading className="text-3xl md:text-4xl mb-6">
              Important Resources
            </SubHeading>
            <p className="text-xl text-text-muted">
              Official government resources for your visitor visa application
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <ExternalLink className="w-10 h-10 text-secondary-navy" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              Check if You Need a Visa or eTA
            </h3>
            <p className="text-text-body mb-6 leading-relaxed">
              Use the official IRCC tool to determine what type of authorization you need
              to visit Canada based on your country of citizenship and travel purpose.
            </p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary-navy text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Check Visa Requirements
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-navy to-bg-dark-navy animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Ready to Visit Canada?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let our experienced team help you navigate the visitor visa process with confidence and success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary-red-hover transition-colors"
            >
              Schedule Free Consultation
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

export default VisitCanadaPage;