import React, { useState } from 'react';
import { Briefcase, Users, GraduationCap, Building, Shield, CheckCircle, ExternalLink, Globe, Clock, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const WorkInCanadaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const navigate = useNavigate();

  const workPermitTypes = [
    {
      id: 'sowp',
      title: 'Spousal Open Work Permit (SOWP)',
      subtitle: '',
      icon: <Users className="w-8 h-8 text-red-600" />,
      description: 'For spouses or common-law partners of international students, skilled workers, or some PR applicants.',
      details: [
        'No job offer needed - work for any employer in Canada',
        'Available for spouses of international students with valid study permits',
        'Available for spouses of skilled workers with valid work permits',
        'Some permanent residency applicants under inland sponsorship qualify'
      ],
      services: [
        'Comprehensive eligibility assessment',
        'Complete application preparation and submission',
        'Assistance with renewals and extensions',
        'Solutions for previous refusals and complex cases'
      ]
    },
    {
      id: 'owp',
      title: 'Open Work Permit (OWP)',
      subtitle: '',
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      description: 'Allows eligible applicants to work for any employer in Canada without needing an LMIA.',
      details: [
        'Work for any employer without job offer restrictions',
        'Common for PR applicants under specific streams',
        'Bridging Open Work Permit (BOWP) for those transitioning to PR',
        'Protection for vulnerable workers from abusive employers'
      ],
      services: [
        'Determining eligibility for open work permits',
        'Preparing thorough and accurate applications',
        'Guiding extensions and renewals process',
        'Strategic advice for PR transition pathways'
      ]
    },
    {
      id: 'pgwp',
      title: 'Post-Graduation Work Permit (PGWP)',
      subtitle: '',
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
      description: 'For international students who have graduated from a Designated Learning Institution (DLI) in Canada.',
      details: [
        'Validity up to 3 years, depending on program length',
        'Key step toward gaining Canadian work experience',
        'Pathway to PR through Canadian Experience Class (CEC)',
        'Eligibility for Provincial Nominee Programs (PNPs)'
      ],
      services: [
        'End-to-end support for PGWP applications',
        'Solutions for missed deadlines or previous refusals',
        'Guidance on work-to-PR pathways and strategies',
        'Assistance with program eligibility verification'
      ]
    },
    {
      id: 'lmia',
      title: 'LMIA-Based Work Permit',
      subtitle: 'Employer-Specific',
      icon: <Building className="w-8 h-8 text-purple-600" />,
      description: 'For foreign workers with a valid Labour Market Impact Assessment (LMIA) approved job offer.',
      details: [
        'Employer-specific - tied to employer, position, and location',
        'Requires approved LMIA from Canadian employer',
        'Pathway to permanent residency through various programs',
        'Higher CRS points in Express Entry system'
      ],
      services: [
        'LMIA application assistance for employers',
        'Preparing employer compliance documentation',
        'Full support with worker\'s work permit application',
        'Advising on PR pathways linked to LMIA-based jobs'
      ]
    },
    {
      id: 'exemptions',
      title: 'Work Permit Exemptions',
      subtitle: '',
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      description: 'Certain jobs and circumstances allow foreign nationals to work in Canada without a work permit.',
      details: [
        'Business visitors not entering Canadian labor market',
        'Performing artists for short-term events',
        'Athletes and team members participating in events',
        'Public speakers, clergy, emergency service providers',
        'Foreign government officers, news reporters, military personnel'
      ],
      services: [
        'Assessment of work permit exemption eligibility',
        'Guidance through exemption application processes',
        'Documentation support for exemption categories',
        'Advice on duration and nature of work limitations'
      ]
    }
  ];

  const benefits = [
    'Expert guidance through complex work permit processes',
    'High success rate with personalized approach',
    'Support for employers and workers alike',
    'Comprehensive documentation assistance',
    'Strategic pathways to permanent residency',
    'End-to-end support from application to approval'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-navy via-bg-dark-navy to-secondary-navy py-20 animate-fadeIn">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Briefcase className="w-16 h-16 text-primary-red" />
            </div>
            <Heading className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              Work Permit
            </Heading>
            <p className="text-xl md:text-2xl text-primary-red font-semibold mb-6">
              Unlock Your Career in Canada
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                At LiveFree Immigration, we understand that working in Canada is a crucial step
                toward building a future here — whether it's supporting your family, gaining
                international experience, or transitioning to permanent residency.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Our team of licensed consultants and immigration experts specialize in helping
                individuals, spouses, graduates, and employers navigate the complexities of
                Canada's work permit system. With us, you gain precision, clarity, and a
                pathway to success — without the stress.
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
            <SubHeading className="text-3xl md:text-4xl text-text-heading mb-6">
              Why Choose Our Work Permit Services?
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Experience the difference of working with licensed professionals who understand Canada's work permit system
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

      {/* Work Permit Options */}
      <section className="py-20 bg-white animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-3xl md:text-4xl text-text-heading mb-6">
              Explore Work Permit Options
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Choose the right work permit type for your situation and career goals
            </p>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:block">
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
              {workPermitTypes.map((permit, index) => (
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
                    {permit.icon}
                  </div>
                  <div className="text-sm leading-tight">{permit.title}</div>
                  {permit.subtitle && <div className="text-xs text-gray-500">{permit.subtitle}</div>}
                </button>
              ))}
            </div>

            {activeTab !== null && (
              <div className="bg-bg-light-gray rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white rounded-full mr-4 shadow-sm">
                    {workPermitTypes[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-heading">
                      {workPermitTypes[activeTab].title}
                    </h3>
                    {workPermitTypes[activeTab].subtitle && (
                      <p className="text-lg text-text-muted">{workPermitTypes[activeTab].subtitle}</p>
                    )}
                  </div>
                </div>

                <p className="text-text-body mb-6 leading-relaxed">
                  {workPermitTypes[activeTab].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-text-heading mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {workPermitTypes[activeTab].details.map((detail, index) => (
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
                      {workPermitTypes[activeTab].services.map((service, index) => (
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
            {workPermitTypes.map((permit, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === index ? null : index)}
                  className="w-full p-6 text-left bg-bg-light-gray hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 bg-white rounded-full mr-4 shadow-sm">
                        {permit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-heading">{permit.title}</h3>
                        {permit.subtitle && (
                          <p className="text-sm text-text-muted">{permit.subtitle}</p>
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
                  <div className="p-6 bg-white animate-fadeIn">
                    <p className="text-text-body mb-6 leading-relaxed">
                      {permit.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-text-heading mb-4">Key Features:</h4>
                        <ul className="space-y-2">
                          {permit.details.map((detail, detailIndex) => (
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
                          {permit.services.map((service, serviceIndex) => (
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
            <SubHeading className="text-3xl md:text-4xl text-text-heading mb-6">
              Important Resources
            </SubHeading>
            <p className="text-xl text-text-muted">
              Official government resources for your work permit application
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <ExternalLink className="w-10 h-10 text-secondary-navy" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              Check If You Need a Work Permit
            </h3>
            <p className="text-text-body mb-6 leading-relaxed">
              Use the official IRCC tool to determine if you need a work permit based on
              your situation, nationality, and the type of work you plan to do in Canada.
            </p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary-navy text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Check Work Permit Requirements
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-navy to-bg-dark-navy animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SubHeading className="text-3xl md:text-4xl text-white mb-6">
            Ready to Start Working in Canada?
          </SubHeading>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let our experienced team help you navigate the work permit process and unlock your career potential in Canada
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

export default WorkInCanadaPage;