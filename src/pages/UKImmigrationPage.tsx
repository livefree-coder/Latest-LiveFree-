import React from 'react';
import { CheckCircle, FileText, Users, Scale, Globe, Shield, Clock, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const UKImmigrationPage: React.FC = () => {
  const navigate = useNavigate();

  const visaCategories = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Skilled Worker Visa",
      description: "For individuals with a job offer from a UK employer with a valid sponsor license. Allows you to live and work in the UK for up to 5 years with a pathway to settlement."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: "Global Talent Visa",
      description: "For leaders or potential leaders in academia, research, arts, culture, or digital technology. Offers flexibility and a fast-track route to settlement."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Graduate Visa",
      description: "Allows international students who have completed a UK degree to stay and work for 2 years (3 years for PhD graduates)."
    },
    {
      icon: <FileText className="w-8 h-8 text-red-600" />,
      title: "Student Visa",
      description: "For those accepted to study at a UK institution. Grants the right to study and work part-time during your course."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Family & Spouse Visa",
      description: "Allows family members of UK citizens or settled persons to join them in the UK. Includes spouse, partner, children, and dependent relatives."
    },
    {
      icon: <Scale className="w-8 h-8 text-teal-600" />,
      title: "Innovator Founder Visa",
      description: "For experienced entrepreneurs looking to establish an innovative business in the UK. Requires endorsement from an approved body."
    }
  ];

  const services = [
    "Comprehensive eligibility assessment for UK visa categories",
    "Application preparation and document review",
    "Sponsor license guidance for UK employers",
    "Priority and super-priority application services",
    "Settlement (Indefinite Leave to Remain) applications",
    "British citizenship and naturalization applications",
    "Visa extension and switching applications",
    "Administrative review and appeal representation"
  ];

  const whyChooseUs = [
    {
      title: "UK Immigration Expertise",
      description: "Our team includes legal professionals qualified in England and Wales with deep knowledge of UK immigration law and Home Office requirements."
    },
    {
      title: "End-to-End Support",
      description: "From initial consultation to application submission and follow-up, we guide you through every step of the UK immigration process."
    },
    {
      title: "High Success Rate",
      description: "Our meticulous approach to application preparation and documentation has resulted in consistently successful outcomes for our clients."
    },
    {
      title: "Personalized Strategy",
      description: "We understand that every case is unique. We tailor our advice and strategy to your specific circumstances and immigration goals."
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
              UK Visa Categories We Handle
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Whether you're looking to work, study, join family, or establish a business in the UK, we provide expert guidance across all major visa categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaCategories.map((category, index) => (
              <div
                key={index}
                className="bg-bg-light-gray rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-bg-dark-navy mb-4">
                  {category.title}
                </h3>
                <p className="text-text-body leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-4xl md:text-5xl text-bg-dark-navy mb-6">
              Our UK Immigration Services
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Comprehensive support for all aspects of UK immigration
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-amber-500 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-white text-lg leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-4xl md:text-5xl text-bg-dark-navy mb-6">
              Why Choose Us for UK Immigration?
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
              Understanding UK Immigration Law
            </SubHeading>
            <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8">
              The UK immigration system is complex and constantly evolving. From points-based work visas to family reunification, each pathway has specific requirements and documentation standards. Our team stays current with the latest Home Office guidance and Immigration Rules to ensure your application meets all necessary criteria.
            </p>
            <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-12">
              Whether you're seeking temporary residence or permanent settlement in the UK, we provide strategic advice tailored to your unique circumstances, maximizing your chances of success while ensuring full compliance with UK immigration law.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-amber-500 text-white px-10 py-4 rounded-md text-lg font-semibold hover:bg-amber-600 transition-colors"
            >
              Schedule Your UK Immigration Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SubHeading className="text-3xl md:text-4xl text-bg-dark-navy mb-6">
            Ready to Start Your UK Journey?
          </SubHeading>
          <p className="text-xl text-text-muted mb-8 max-w-3xl mx-auto">
            Contact us today for expert guidance on your UK visa application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-blue-900 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Get in Touch
            </button>
            <button
              onClick={() => navigate('/about')}
              className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKImmigrationPage;
