import React from 'react';
import { Shield, CheckCircle, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';
import { useInView } from 'react-intersection-observer';

const RefugeeApplicationPage: React.FC = () => {
  const navigate = useNavigate();

  // Intersection observers for scroll animations
  const { ref: whoCanApplyRef, inView: whoCanApplyInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: requirementsRef, inView: requirementsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const persecutionGrounds = [
    "Race",
    "Religion",
    "Nationality",
    "Political opinion",
    "Membership in a particular social group (e.g., gender-based groups, family ties)"
  ];

  const protectionRisks = [
    "Torture",
    "Risk to life",
    "Risk of cruel and unusual treatment or punishment"
  ];
  
  const ourServices = [
    "In-depth eligibility assessment",
    "Preparation of your Basis of Claim (BOC) with detailed narratives and supporting evidence",
    "Representation at the Immigration and Refugee Board (IRB)",
    "Assistance with appeals or judicial reviews if required",
    "Guidance on work permits, health coverage, and interim benefits during the claim process"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-800 py-20 animate-fadeIn">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/WhatsApp Image 2025-09-10 at 13.23.50.jpeg')" }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-primary-red" />
          </div>
          <Heading className="text-4xl md:text-6xl text-white mb-6 leading-tight">
            Refugee Applications
          </Heading>
          <p className="text-xl md:text-2xl text-primary-red font-semibold mb-6">
            Seeking Safety, Securing a Future
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              At LiveFree Immigration, we understand that seeking asylum or protection is one of the most sensitive and life-changing decisions a person can make. Our experienced legal and immigration professionals are committed to providing compassionate, thorough, and effective representation for those fleeing persecution, violence, or hardship.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary-red-hover transition-colors"
            >
              Request a Confidential Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Who Can Apply Section */}
          <div ref={whoCanApplyRef} className={`transition-opacity duration-1000 ease-in ${whoCanApplyInView ? 'opacity-100' : 'opacity-0'}`}>
            <SubHeading className="text-3xl md:text-4xl text-center mb-12 relative inline-block">
              Who Can Apply for Refugee Protection?
              <span className={`absolute bottom-0 left-0 h-1 bg-primary-red transition-all duration-700 ${whoCanApplyInView ? 'w-full' : 'w-0'}`}></span>
            </SubHeading>
            <p className="text-lg text-text-muted mb-8">
              You may be eligible to apply for refugee protection if you are physically present in Canada and meet one of the following conditions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-bg-light-gray p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-secondary-navy mb-4">Convention Refugee</h3>
                <p className="text-text-body mb-4">You have a well-founded fear of persecution in your home country based on:</p>
                <ul className="space-y-2">
                  {persecutionGrounds.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-red mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-light-gray p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-secondary-navy mb-4">Person in Need of Protection</h3>
                <p className="text-text-body mb-4">You are at risk in your home country of:</p>
                 <ul className="space-y-2">
                  {protectionRisks.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-red mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Minimum Requirements Section */}
          <div ref={requirementsRef} className={`mt-16 transition-opacity duration-1000 ease-in ${requirementsInView ? 'opacity-100' : 'opacity-0'}`}>
            <SubHeading className="text-3xl md:text-4xl text-center mb-12 relative inline-block">
              Minimum Requirements to Apply
               <span className={`absolute bottom-0 left-0 h-1 bg-primary-red transition-all duration-700 ${requirementsInView ? 'w-full' : 'w-0'}`}></span>
            </SubHeading>
            <ul className="space-y-4 text-lg">
                <li className="flex items-start p-4 bg-gray-50 rounded-md">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <span>Must be <strong>physically present in Canada</strong>.</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 rounded-md">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <span>Must <strong>not be subject to disqualifying grounds</strong> (e.g., prior refusals, criminality).</span>
                </li>
                <li className="flex items-start p-4 bg-gray-50 rounded-md">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <span>Must provide <strong>credible evidence</strong> of your risk or persecution.</span>
                </li>
                 <li className="flex items-start p-4 bg-gray-50 rounded-md">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <span>Must file a complete and accurate <strong>Basis of Claim (BOC) Form</strong>.</span>
                </li>
            </ul>
          </div>
          
           {/* Our Services Section */}
          <div ref={servicesRef} className={`mt-16 transition-opacity duration-1000 ease-in ${servicesInView ? 'opacity-100' : 'opacity-0'}`}>
             <SubHeading className="text-3xl md:text-4xl text-center mb-12 relative inline-block">
              What’s Included in Our Service
               <span className={`absolute bottom-0 left-0 h-1 bg-primary-red transition-all duration-700 ${servicesInView ? 'w-full' : 'w-0'}`}></span>
            </SubHeading>
             <div className="bg-slate-800 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {ourServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-red mr-4 mt-1 flex-shrink-0" />
                    <p className="text-white text-lg leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </div>
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
              Official government information on seeking asylum in Canada.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <ExternalLink className="w-10 h-10 text-secondary-navy" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              IRCC – Refugee Protection in Canada
            </h3>
            <p className="text-text-body mb-6 leading-relaxed">
              Explore the official process, forms, and rights for individuals making a refugee claim from inside Canada.
            </p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary-navy text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Visit IRCC Refugee Information
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefugeeApplicationPage;