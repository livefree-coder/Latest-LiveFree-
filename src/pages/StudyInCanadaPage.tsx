import React from 'react';
import { BookOpen, FileText, AlertCircle, Users, Home, ExternalLink, GraduationCap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const StudyInCanadaPage: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Study Permit Application",
      description: "Full assistance in applying for your study permit with precision."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "SOP & Documentation Support",
      description: "Craft compelling Statements of Purpose and guide document preparation."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-amber-600" />,
      title: "Visa Refusal Solutions",
      description: "Expert handling of previous refusals with strategic reapplication."
    },
    {
      icon: <Home className="w-8 h-8 text-purple-600" />,
      title: "Post-Arrival Services",
      description: "Guidance on work permits, extensions, permanent residency pathways, and settlement."
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Family Accompaniment Support",
      description: "Assisting with spouse open work permits and dependent child visas."
    }
  ];

  const benefits = [
    "Top-ranked institutions with global recognition",
    "Multicultural communities and inclusive environment",
    "Clear pathways to permanent residency",
    "Post-graduation work permit opportunities",
    "World-class education at affordable costs",
    "Safe and welcoming environment for international students"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="services-section" className="bg-slate-800 py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <GraduationCap className="w-16 h-16 text-primary-red" />
            </div>
            <Heading className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              Study in Canada
            </Heading>
            <p className="text-xl md:text-2xl text-primary-red font-semibold mb-6">
              Open the Doors to World-Class Education & Limitless Opportunities
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                Canada is one of the world's most sought-after destinations for international students,
                offering top-ranked institutions, multicultural communities, and clear pathways to
                permanent residency. Whether you're aiming for academic excellence, career advancement,
                or a global experience, studying in Canada is a life-changing step.
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

      {/* Why Study in Canada */}
      <section className="py-20 bg-bg-light-gray animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-3xl md:text-4xl text-bg-dark-navy mb-6">
              Why Choose Canada for Your Education?
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Discover the advantages that make Canada the preferred destination for millions of international students
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

      {/* What We Help You With */}
      <section className="py-20 bg-white animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-3xl md:text-4xl text-bg-dark-navy mb-6">
              What We Help You With
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Comprehensive support throughout your entire study journey in Canada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-bg-light-gray rounded-xl p-8 text-center hover:bg-gray-100 transition-colors group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-bg-dark-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="py-20 bg-blue-50 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SubHeading className="text-3xl md:text-4xl text-bg-dark-navy mb-6">
              Important Resources
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Essential links and resources for your study permit application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DLI List */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <BookOpen className="w-8 h-8 text-secondary-navy" />
                </div>
                <h3 className="text-2xl font-bold text-bg-dark-navy">
                  Designated Learning Institutions (DLI) List
                </h3>
              </div>
              <p className="text-text-body mb-6 leading-relaxed">
                Only institutions approved by a provincial or territorial government can host
                international students. Verify if your chosen institution is authorized by
                visiting the official IRCC list.
              </p>
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
              >
                Check the DLI List Here
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Student Visa Check */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <FileText className="w-8 h-8 text-secondary-navy" />
                </div>
                <h3 className="text-2xl font-bold text-bg-dark-navy">
                  Check if You Need a Student Visa
                </h3>
              </div>
              <p className="text-text-body mb-6 leading-relaxed">
                Use the official IRCC tool to determine if you need a study permit
                based on your country of citizenship and the program you plan to study.
              </p>
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
              >
                Check Student Visa Requirements
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-navy to-bg-dark-navy animate-fadeIn">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Ready to Start Your Canadian Education Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let our expert team guide you through every step of your study permit application process
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

export default StudyInCanadaPage;