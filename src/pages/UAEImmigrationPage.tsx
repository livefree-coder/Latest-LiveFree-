import React from 'react';
import { CheckCircle, Briefcase, Building2, GraduationCap, Home, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const UAEImmigrationPage: React.FC = () => {
  const navigate = useNavigate();

  const visaCategories = [
    {
      icon: <Briefcase className="w-8 h-8 text-emerald-600" />,
      title: "Employment Visa",
      description: "For professionals with job offers from UAE-based companies. Typically valid for 2-3 years and renewable, providing stability for you and your family."
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Investor Visa",
      description: "For investors establishing or investing in UAE businesses. Offers long-term residency options including the prestigious Golden Visa for qualifying investments."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: "Golden Visa",
      description: "A 5 or 10-year renewable residence visa for investors, entrepreneurs, specialized talents, researchers, and outstanding students. Provides long-term stability in the UAE."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "Student Visa",
      description: "For international students enrolled in UAE universities and educational institutions. Allows full-time study and limited work opportunities."
    },
    {
      icon: <Home className="w-8 h-8 text-red-600" />,
      title: "Property Owner Visa",
      description: "Available to those who own property in the UAE meeting certain value thresholds. Offers residency benefits for property investors."
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Family Sponsorship",
      description: "Allows UAE residents to sponsor their spouse, children, and parents, enabling families to live together in the UAE."
    }
  ];

  const services = [
    "Visa eligibility assessment and strategic planning",
    "Employment visa processing for companies and employees",
    "Golden Visa application assistance",
    "Investor and business visa facilitation",
    "Family sponsorship and dependent visa applications",
    "Visa renewal and status change services",
    "Emirates ID and medical fitness test coordination",
    "Labour card and work permit processing",
    "Free zone company setup and visa packages",
    "Residence permit cancellation and final exit procedures"
  ];

  const whyUAE = [
    {
      title: "Tax-Free Income",
      description: "The UAE offers zero personal income tax, allowing you to maximize your earnings and savings."
    },
    {
      title: "Strategic Location",
      description: "Situated at the crossroads of East and West, the UAE provides excellent connectivity to global markets."
    },
    {
      title: "World-Class Infrastructure",
      description: "From modern cities to state-of-the-art facilities, the UAE offers an exceptional quality of life."
    },
    {
      title: "Business-Friendly Environment",
      description: "With numerous free zones and 100% foreign ownership options, the UAE is ideal for entrepreneurs and businesses."
    },
    {
      title: "Safety and Security",
      description: "The UAE is one of the safest countries in the world with low crime rates and political stability."
    },
    {
      title: "Multicultural Society",
      description: "Home to over 200 nationalities, the UAE embraces diversity and offers a welcoming environment for expatriates."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-r from-amber-600 to-red-600 py-24"
        style={{
          backgroundImage: 'url(/UAE.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading className="text-5xl md:text-7xl text-white mb-6 leading-tight">
            UAE Immigration <span className="text-amber-200">Services</span>
          </Heading>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Your gateway to living, working, and thriving in the United Arab Emirates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-amber-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
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
              UAE Visa Categories
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              From employment and investment to family reunification, we handle all types of UAE visas and residence permits
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
              Our UAE Immigration Services
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Comprehensive support for all your UAE visa and residency needs
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-red-600 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-4 mt-1 flex-shrink-0" />
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
              Why Choose the UAE?
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Discover the advantages of living and working in the United Arab Emirates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUAE.map((item, index) => (
              <div
                key={index}
                className="bg-bg-light-gray rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-bg-dark-navy mb-4">
                  {item.title}
                </h3>
                <p className="text-text-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SubHeading className="text-4xl md:text-5xl text-white mb-6">
              Navigating UAE Immigration
            </SubHeading>
            <p className="text-xl text-gray-100 leading-relaxed max-w-4xl mx-auto mb-8">
              The UAE immigration system offers various pathways for professionals, entrepreneurs, investors, and families. With the introduction of the Golden Visa and long-term residence schemes, the UAE has become even more attractive for those seeking stability and opportunities in the Gulf region.
            </p>
            <p className="text-xl text-gray-100 leading-relaxed max-w-4xl mx-auto mb-12">
              Our team has extensive experience with UAE immigration procedures, free zone regulations, and mainland company requirements. We ensure your application is processed efficiently and correctly, whether you're relocating for employment, establishing a business, or joining family in the UAE.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-amber-600 px-10 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your UAE Immigration Journey
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SubHeading className="text-3xl md:text-4xl text-bg-dark-navy mb-6">
            Ready to Move to the UAE?
          </SubHeading>
          <p className="text-xl text-text-muted mb-8 max-w-3xl mx-auto">
            Contact us today for expert guidance on your UAE visa and residency options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Get in Touch
            </button>
            <button
              onClick={() => navigate('/about')}
              className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UAEImmigrationPage;
