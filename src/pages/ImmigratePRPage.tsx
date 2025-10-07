import React, { useState } from 'react';
import { MapPin, Users, Heart, Award, Globe, CheckCircle, ExternalLink, Clock, Star, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const ImmigratePRPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const navigate = useNavigate();

  const immigrationPathways = [
    {
      id: 'express-entry',
      title: 'Express Entry',
      subtitle: 'Fast-Track Skilled Immigration',
      icon: <Star className="w-8 h-8 text-amber-600" />,
      description: 'Canada\'s flagship immigration pathway for skilled workers managing three economic programs.',
      details: [
        'Federal Skilled Worker (FSW) program',
        'Federal Skilled Trades (FST) program',
        'Canadian Experience Class (CEC) program',
        'Selection based on Comprehensive Ranking System (CRS)',
        'Factors include age, education, work experience, language proficiency, and adaptability'
      ],
      services: [
        'CRS score evaluation and optimization strategies',
        'Profile creation and comprehensive documentation',
        'Strategies to increase your score (PNP, job offers, language upgrades)',
        'Full support from profile submission to Permanent Residency approval'
      ]
    },
    {
      id: 'pnp',
      title: 'Provincial Nominee Program (PNP)',
      subtitle: 'Tailored to Provinces',
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      description: 'For individuals with skills that meet specific provincial needs across Canada.',
      details: [
        'Base PNP: Direct application to a province or territory',
        'Express Entry-linked PNP: Adds 600 CRS points to your profile',
        'Popular for those with lower CRS scores or province-specific job offers',
        'Each province has unique streams and requirements',
        'Covers in-demand occupations, entrepreneurs, and international graduates'
      ],
      services: [
        'Identifying the right province and stream for your profile',
        'Navigating complex PNP criteria and requirements',
        'Managing both provincial and federal application stages',
        'Handling job offer-based streams and entrepreneur pathways'
      ]
    },
    {
      id: 'family-sponsorship',
      title: 'Family Sponsorship',
      subtitle: 'Reunite with Loved Ones',
      icon: <Heart className="w-8 h-8 text-red-600" />,
      description: 'For Canadian citizens and permanent residents sponsoring eligible family members.',
      details: [
        'Spouse, common-law, or conjugal partner (Inland or Outland processing)',
        'Dependent children of all ages',
        'Parents and grandparents via Family Class Sponsorship',
        'Other eligible relatives in specific circumstances',
        'Financial commitment and undertaking requirements'
      ],
      services: [
        'Crafting strong relationship proof and documentation',
        'Completing sponsorship and PR applications accurately',
        'Assistance with medicals, police certificates, and complex situations',
        'Support with appeals and reapplications in case of refusals'
      ]
    },
    {
      id: 'cec',
      title: 'Canadian Experience Class (CEC)',
      subtitle: 'From Work to Permanent Residency',
      icon: <Award className="w-8 h-8 text-blue-600" />,
      description: 'For individuals with at least one year of skilled work experience in Canada.',
      details: [
        'Minimum one year of skilled work experience in Canada within last 3 years',
        'Key stream within Express Entry system',
        'Designed for international graduates and temporary foreign workers',
        'No requirement for settlement funds if applying from within Canada',
        'Fast processing - often 6 months or less'
      ],
      services: [
        'Verifying your work experience qualifies under CEC',
        'Perfecting your Express Entry profile under CEC stream',
        'Navigating documentation like job reference letters',
        'Strategic advice for maximizing CEC advantages'
      ]
    },
    {
      id: 'citizenship',
      title: 'Canadian Citizenship',
      subtitle: 'Complete Your Journey',
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      description: 'For permanent residents ready to become Canadian citizens.',
      details: [
        'Physically present in Canada for 3 out of the last 5 years',
        'Language proficiency requirements (if age 18–54)',
        'Filed taxes for the required years',
        'Passing the Citizenship Test (if applicable)',
        'No serious criminal history or immigration violations'
      ],
      services: [
        'End-to-end citizenship application support',
        'Guidance with complex residency calculations',
        'Test preparation and documentation assistance',
        'Help for cases involving absences or prior PR issues'
      ]
    }
  ];

  const benefits = [
    'Expert guidance through complex immigration processes',
    'High success rate with personalized strategies',
    'Support for all family members and situations',
    'Comprehensive documentation and application assistance',
    'Strategic pathways optimization for faster processing',
    'End-to-end support from eligibility to citizenship'
  ];

  const whyCanada = [
    'World-class healthcare and education systems',
    'Strong economy with diverse job opportunities',
    'Multicultural society with welcoming communities',
    'High quality of life and safety standards',
    'Clear pathways from temporary to permanent status',
    'Excellent social benefits and support systems'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-800 py-20 animate-fadeIn">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/WhatsApp Image 2025-09-10 at 13.23.15.jpeg')" }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <MapPin className="w-16 h-16 text-primary-red" />
            </div>
            <Heading className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              Immigrate to Canada
            </Heading>
            <p className="text-xl md:text-2xl text-primary-red font-semibold mb-6">
              Your Journey Starts Here
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                At LiveFree Immigration, we understand that moving to Canada isn't just about
                paperwork — it's about building your future. Whether you're a skilled professional,
                a graduate, or looking to reunite with family, our experienced team of licensed
                consultants and legal professionals offers precise, efficient, and personalized
                guidance every step of the way.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                With a deep understanding of Canada's complex immigration pathways, we help turn
                aspirations into approvals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-primary-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary-red-hover transition-colors"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
              >
                Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Canada */}
      <section className="py-20 bg-bg-light-gray animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-3xl md:text-4xl mb-6">
              Why Choose Canada for Immigration?
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Discover why millions choose Canada as their new home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCanada.map((reason, index) => (
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
            <SubHeading className="text-3xl md:text-4xl mb-6">
              Why Choose Our Immigration Services?
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Experience the difference of working with licensed professionals who understand your dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-bg-light-gray rounded-lg p-6 hover:bg-primary-red transition-all duration-300 cursor-pointer">
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-secondary-navy group-hover:text-white mr-3 mt-1 flex-shrink-0 transition-colors duration-300" />
                  <p className="text-text-body group-hover:text-white leading-relaxed transition-colors duration-300">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immigration Pathways */}
      <section className="py-20 bg-bg-light-gray animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-3xl md:text-4xl mb-6">
              Explore Immigration Pathways
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Find the right immigration program that matches your profile and goals
            </p>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:block">
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
              {immigrationPathways.map((pathway, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 py-4 px-4 text-center font-semibold transition-colors min-w-0 ${
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
                      {immigrationPathways[activeTab].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-heading">
                        {immigrationPathways[activeTab].title}
                      </h3>
                      {immigrationPathways[activeTab].subtitle && (
                        <p className="text-lg text-text-muted">{immigrationPathways[activeTab].subtitle}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-text-body mb-6 leading-relaxed">
                    {immigrationPathways[activeTab].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-text-heading mb-4">Key Features:</h4>
                      <ul className="space-y-2">
                        {immigrationPathways[activeTab].details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-text-body">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-text-heading mb-4">We Assist With:</h4>
                      <ul className="space-y-2">
                        {immigrationPathways[activeTab].services.map((service, index) => (
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
            {immigrationPathways.map((pathway, index) => (
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

                {activeTab === index && activeTab !== null && (
                  <div className="p-6 bg-bg-light-gray animate-fadeIn">
                    <p className="text-text-body mb-6 leading-relaxed">
                      {pathway.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-text-heading mb-4">Key Features:</h4>
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
                        <h4 className="text-lg font-semibold text-text-heading mb-4">We Assist With:</h4>
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
            <SubHeading className="text-3xl md:text-4xl mb-6">
              Important Resources
            </SubHeading>
            <p className="text-xl text-text-muted">
              Official government resources for your immigration journey
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <ExternalLink className="w-10 h-10 text-secondary-navy" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              IRCC – Immigrate to Canada Overview
            </h3>
            <p className="text-text-body mb-6 leading-relaxed">
              Explore official information about all immigration programs, eligibility requirements,
              processing times, and application procedures directly from Immigration, Refugees and Citizenship Canada.
            </p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary-navy text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Visit IRCC Immigration Overview
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-navy to-bg-dark-navy animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Ready to Make Canada Your Home?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let our experienced team guide you through your immigration journey with personalized strategies and expert support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary-red-hover transition-colors"
            >
              Schedule Free Assessment
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

export default ImmigratePRPage;