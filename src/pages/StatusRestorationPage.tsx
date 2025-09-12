import React from 'react';
import { RefreshCw, CheckCircle, ExternalLink, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';
import { useInView } from 'react-intersection-observer';

const StatusRestorationPage: React.FC = () => {
  const navigate = useNavigate();

  // Intersection observers for scroll animations
  const { ref: whoCanApplyRef, inView: whoCanApplyInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: commonSituationsRef, inView: commonSituationsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const eligibilityCriteria = [
    "You were a temporary resident in Canada (visitor, student, or worker) and held a valid status.",
    "You continue to meet the requirements of the type of status you are applying to restore.",
    "You intend to continue under the same permit type or transition to another valid status.",
    "You cannot apply for restoration at a port of entry — it must be done from within Canada."
  ];

  const commonSituations = [
    "Forgetting to apply for an extension before your status expired.",
    "Misunderstanding the expiry date on your permit.",
    "Processing delays that exceeded your initial authorized stay.",
    "Personal emergencies that prevented timely renewal."
  ];

  const ourServices = [
    "Assessing your eligibility for status restoration.",
    "Preparing a complete and persuasive application.",
    "Drafting strong explanation letters to IRCC.",
    "Advising on next steps, including alternative pathways if restoration is not viable."
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-800 py-20 animate-fadeIn">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <RefreshCw className="w-16 h-16 text-primary-red" />
          </div>
          <Heading className="text-4xl md:text-6xl text-white mb-6 leading-tight">
            Status Restoration
          </Heading>
          <p className="text-xl md:text-2xl text-primary-red font-semibold mb-6">
            Get Back on Track in Canada
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              At LiveFree Immigration, we understand that life happens. If your visitor, student, or worker status in Canada has expired, you may still have the opportunity to restore it. Our experts guide you through this sensitive process with precision and care.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary-red-hover transition-colors"
            >
              Discuss Your Situation
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
              Who Can Apply for Status Restoration?
              <span className={`absolute bottom-0 left-0 h-1 bg-primary-red transition-all duration-700 ${whoCanApplyInView ? 'w-full' : 'w-0'}`}></span>
            </SubHeading>
            <p className="text-lg text-text-muted mb-8">
              You may be eligible to apply for Status Restoration if:
            </p>
            <ul className="space-y-4 text-lg">
                {eligibilityCriteria.map((item, index) => (
                    <li key={index} className="flex items-start p-4 bg-gray-50 rounded-md">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
          </div>
          
          {/* Common Situations */}
          <div ref={commonSituationsRef} className={`mt-16 transition-opacity duration-1000 ease-in ${commonSituationsInView ? 'opacity-100' : 'opacity-0'}`}>
            <SubHeading className="text-3xl md:text-4xl text-center mb-12 relative inline-block">
              Common Situations for Restoration
              <span className={`absolute bottom-0 left-0 h-1 bg-primary-red transition-all duration-700 ${commonSituationsInView ? 'w-full' : 'w-0'}`}></span>
            </SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonSituations.map((item, index) => (
                <div key={index} className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                  <p className="text-lg text-amber-800">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t-2 border-red-200 pt-6">
                <div className="flex items-start text-red-700">
                    <AlertTriangle className="w-8 h-8 mr-4 flex-shrink-0"/>
                    <p><strong>Important Note:</strong> Restoration is not a guaranteed approval. The reasons for your overstay are critical. If your application is refused, you must leave Canada immediately.</p>
                </div>
            </div>
          </div>
          
           {/* Our Services Section */}
          <div ref={servicesRef} className={`mt-16 transition-opacity duration-1000 ease-in ${servicesInView ? 'opacity-100' : 'opacity-0'}`}>
             <SubHeading className="text-3xl md:text-4xl text-center mb-12 relative inline-block">
              How We Assist With Restoration
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
              Official government information on restoring your temporary resident status.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <ExternalLink className="w-10 h-10 text-secondary-navy" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              IRCC – Restore Your Status in Canada
            </h3>
            <p className="text-text-body mb-6 leading-relaxed">
              Find detailed eligibility requirements and application forms directly from the official IRCC website.
            </p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/extend-stay/restore-status.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary-navy text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Visit IRCC Restoration Page
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusRestorationPage;