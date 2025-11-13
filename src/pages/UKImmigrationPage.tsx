import React from 'react';
import { CheckCircle, Plane, Briefcase, GraduationCap, Heart, Home, TrendingUp, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const UKImmigrationPage: React.FC = () => {
  const navigate = useNavigate();

  const visaCategories = [
    {
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      title: "Visit & Short-Stay Visas",
      description: "The UK offers various short-term visa routes for tourism, business visits, medical treatment, or short study courses. Applicants must satisfy financial, intent, and return-home requirements.",
      types: [
        "Standard Visitor Visa",
        "Business Visitor Visa",
        "Short-Term Study Visa"
      ],
      note: "Visitor visas do not lead to long-term stay or settlement in the UK."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      title: "Work & Skilled Migration Routes",
      description: "The UK welcomes skilled professionals across multiple sectors under its points-based immigration system. These routes typically require sponsorship from an approved UK employer or endorsement by a recognized authority.",
      types: [
        "Skilled Worker Visa – for individuals with a job offer from a licensed UK sponsor",
        "Global Talent Visa – for leaders or potential leaders in academia, research, culture, or digital technology",
        "Health and Care Worker Visa – for qualified medical professionals in the NHS or related sectors",
        "Scale-up and Temporary Work Routes – for high-growth employers or short-term placements"
      ],
      note: "Many work routes can lead to Indefinite Leave to Remain (ILR) after five years of lawful residence."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "Student & Graduate Routes",
      description: "The UK's education system is globally recognized, offering world-class opportunities for international students.",
      types: [
        "Student Visa – for full-time study at licensed institutions",
        "Graduate Visa – allowing eligible students to remain in the UK for two to three years after completing their studies"
      ],
      note: "Applicants must meet financial, English language, and offer-of-study requirements."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Family & Partner Visas",
      description: "These routes allow family members of British citizens or settled persons to join or remain in the UK.",
      types: [
        "Spouse or Partner Visa",
        "Parent Visa",
        "Child or Dependent Relative Visa"
      ],
      note: "Applicants must provide strong evidence of genuine relationships, adequate accommodation, and financial capability. Some routes may lead to permanent settlement after five years."
    },
    {
      icon: <Home className="w-8 h-8 text-amber-600" />,
      title: "Settlement & British Citizenship",
      description: "After residing in the UK for a qualifying period, migrants may apply for Indefinite Leave to Remain (ILR) — a form of permanent residence. Following ILR, individuals may later be eligible for British citizenship through naturalization.",
      types: [
        "Five-year residence under Skilled Worker or Family visas",
        "Ten-year continuous lawful residence",
        "Settlement following humanitarian protection"
      ],
      note: "Applicants must usually pass the Life in the UK Test and meet English language and residence requirements."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-600" />,
      title: "Business, Investment & Entrepreneur Routes",
      description: "Entrepreneurs and investors can establish or expand businesses under specialized visa routes.",
      types: [
        "Innovator Founder Visa – for experienced business founders with approved business plans and endorsement",
        "Global Business Mobility Routes – for overseas businesses seeking to set up UK branches or transfer key staff"
      ],
      note: "Our advisors assist with endorsement strategies, compliance, and business plan alignment with Home Office requirements."
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Humanitarian & Protection Routes",
      description: "The UK offers specific immigration protection for those seeking asylum, humanitarian relief, or resettlement under international agreements. These cases are highly sensitive and governed by strict legal criteria.",
      types: [],
      note: "LiveFree Immigration Services provides guidance on eligibility, documentation, and procedural safeguards."
    }
  ];

  const whyChooseUs = [
    {
      title: "Comprehensive Expertise",
      description: "Guidance across all UK visa categories for individuals and businesses."
    },
    {
      title: "Cross-Border Understanding",
      description: "Offices serving clients from Bangladesh, Canada, and beyond, with insight into international documentation standards."
    },
    {
      title: "Personalized Strategy",
      description: "Each case is assessed and prepared with precision to meet Home Office and consular requirements."
    },
    {
      title: "Ethical & Transparent Service",
      description: "We uphold integrity and professionalism in every consultation and submission."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-24"
        style={{
          backgroundImage: 'url(/UK.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading className="text-5xl md:text-7xl text-white mb-6 leading-tight">
            UK Immigration <span className="text-amber-400">Services</span>
          </Heading>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Expert guidance for your UK visa applications, settlement, and citizenship journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-amber-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-600 transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-4xl md:text-5xl text-bg-dark-navy mb-6">
              Expert Guidance from LiveFree Immigration Services
            </SubHeading>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-text-body leading-relaxed">
                The United Kingdom remains one of the world's most sought-after destinations for education, work, business, and family life. At LiveFree Immigration Services, we assist individuals, families, and professionals in navigating the UK's complex immigration system with accuracy, strategy, and care.
              </p>
              <p className="text-xl text-text-body leading-relaxed">
                Our experienced advisors provide tailored support at every stage — from visa selection and document preparation to application submission and long-term settlement planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-4xl md:text-5xl text-bg-dark-navy mb-6">
              UK Immigration Pathways
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Comprehensive support across all UK visa categories and immigration routes
            </p>
          </div>

          <div className="space-y-8">
            {visaCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">{category.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-bg-dark-navy mb-4">
                      {index + 1}. {category.title}
                    </h3>
                    <p className="text-lg text-text-body leading-relaxed mb-4">
                      {category.description}
                    </p>

                    {category.types.length > 0 && (
                      <div className="mb-4">
                        <p className="font-semibold text-bg-dark-navy mb-2">
                          {category.title.includes('Settlement') ? 'Typical settlement routes include:' : 'Key visa types:'}
                        </p>
                        <ul className="space-y-2">
                          {category.types.map((type, typeIndex) => (
                            <li key={typeIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-text-body">{type}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {category.note && (
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                        <p className="text-sm font-semibold text-amber-900">
                          <span className="font-bold">Key Note:</span> {category.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-4xl md:text-5xl text-bg-dark-navy mb-6">
              Why Choose LiveFree Immigration Services
            </SubHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-bg-light-gray rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-bg-dark-navy mb-4">
                  {item.title}
                </h3>
                <p className="text-text-body leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SubHeading className="text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your UK Journey?
            </SubHeading>
            <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8">
              Contact us today for expert guidance on your UK immigration pathway. Our experienced advisors are ready to help you navigate the complex UK immigration system with confidence.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-amber-500 text-white px-10 py-4 rounded-md text-lg font-semibold hover:bg-amber-600 transition-colors"
            >
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 border-l-4 border-blue-900">
            <h3 className="text-2xl font-bold text-bg-dark-navy mb-4">Disclaimer</h3>
            <p className="text-text-body leading-relaxed">
              UK immigration law is subject to change, and eligibility varies based on individual circumstances. For personalized assessment, please contact LiveFree Immigration Services for a consultation with one of our licensed advisors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKImmigrationPage;
