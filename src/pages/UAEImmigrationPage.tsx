import React from 'react';
import { CheckCircle, Briefcase, Award, Building2, Plane } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const UAEImmigrationPage: React.FC = () => {
  const navigate = useNavigate();

  const visaCategories = [
    {
      icon: <Briefcase className="w-8 h-8 text-emerald-600" />,
      title: "Investor, Partner & Business-Owner Visas",
      description: "Dubai's investor and business-owner visas allow foreign nationals to live, work, and operate businesses in the UAE.",
      eligibility: [
        "Applicants must demonstrate ownership or partnership in a UAE-licensed company, provide a valid trade licence or proof of company registration, and meet Dubai's regulatory and compliance requirements",
        "Free Zone companies often allow 100% foreign ownership and streamlined visa processing",
        "Visas typically last 2–3 years, renewable upon maintaining business activity and compliance",
        "Benefits include the ability to sponsor family members, open bank accounts, lease property, and legally operate a business in Dubai"
      ],
      note: "Ideal for entrepreneurs, investors, and business partners seeking a strategic foothold in Dubai's vibrant economy."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: "Long-Term Residency: Golden & Green Visas",
      description: "For high-net-worth individuals, investors, and entrepreneurs, Dubai offers long-term residency through the Golden Visa (10 years) and Green Visa (5 years).",
      eligibility: [],
      sections: [
        {
          subtitle: "Golden Visa (Investor & Entrepreneur Categories):",
          points: [
            "Real estate investment: Minimum AED 2 million in property",
            "Business investment: Minimum AED 2 million in a UAE company or investment fund",
            "Bank deposits: Some routes allow AED 2 million in a UAE bank for residency",
            "Duration: 10 years, renewable",
            "Benefits: No local sponsor required, family sponsorship, long-term stability, and business operation rights"
          ]
        },
        {
          subtitle: "Green Visa (Investor & Partner Category):",
          points: [
            "For investors, partners, freelancers, and self-employed professionals",
            "Requires proof of investment, company ownership, or income meeting UAE thresholds",
            "Duration: 5 years, self-sponsored",
            "Enables residency without the need for employer sponsorship"
          ]
        }
      ],
      note: "Suitable for individuals seeking long-term strategic presence in Dubai, with residency security for themselves and their families."
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Property-Purchase Residency via Real Estate Investment",
      description: "Dubai (and other UAE emirates) have established real-estate investment routes that allow foreign nationals to obtain long-term residency via the purchase of property.",
      eligibility: [
        "The minimum property value for eligibility is AED 2 million (approx USD 545,000) for the 10-year Golden Visa via real-estate",
        "Freehold residential or commercial properties in eligible zones may qualify. Off-plan or ready properties may be accepted, subject to developer/authority rules",
        "Mortgages may be permitted (depending on bank and jurisdiction) provided the combined property value meets the threshold",
        "Multiple properties can be aggregated to reach the threshold, subject to each being in your name and properly registered",
        "While this yields long-term residency, it is not 'permanent residence' in the sense of citizenship; rather it is a renewable long-term residency permit"
      ],
      note: "This route is ideal for individuals who wish to establish long-term residency via property investment, combining real estate ownership with immigration strategy."
    },
    {
      icon: <Plane className="w-8 h-8 text-teal-600" />,
      title: "Visitor & Short-Stay Visas",
      description: "Dubai also provides multiple options for visitors seeking short-term stays:",
      eligibility: [
        "Tourist / Visit Visas: Single or multiple-entry options for 30, 60, or 90 days, extendable depending on nationality and sponsorship",
        "5-Year Multiple Entry Tourist Visa: Allows repeated visits, each stay up to 90 days",
        "Sponsor-based Visit Visas: Residents, travel agents, or hotels can sponsor visitors"
      ],
      note: "Ideal for exploring Dubai, attending meetings or conferences, and assessing business opportunities before committing to long-term investment or relocation."
    }
  ];

  const whyChooseUs = [
    {
      title: "Specialized Expertise",
      description: "Focused on investor, business, and long-term residency visas in Dubai."
    },
    {
      title: "Tailored Solutions",
      description: "We align visa strategies with your business, investment, property-acquisition and family goals."
    },
    {
      title: "Comprehensive Support",
      description: "From documentation, business compliance, property-valuation advice, visa applications to family sponsorship and residency renewal."
    },
    {
      title: "Global Perspective",
      description: "Serving clients from Bangladesh, Canada, and worldwide, ensuring international compliance and insights."
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
            Dubai Business, Residency & <span className="text-amber-200">Property-Investment Visa Programmes</span>
          </Heading>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore Dubai's Investment, Residency, Property-Purchase and Visitor Opportunities
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
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-text-body leading-relaxed">
              Dubai offers world-class opportunities for investors, entrepreneurs, business owners, property purchasers and visitors. At LiveFree Immigration Services, we guide clients through Dubai's key visa and residency programmes — from business-owner visas to long-term "Golden/Green" residency, property-investment-based programmes and visitor stays. We help you choose the right pathway, meet the eligibility requirements, and plan for both immediate and long-term goals.
            </p>
            <p className="text-xl text-text-body leading-relaxed">
              Whether you are looking to invest or partner in a business, buy property and reside long-term, secure premium residency via Golden/Green Visa schemes, or view Dubai for business or leisure, our experienced advisors provide end-to-end support for individuals and families from Bangladesh and around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                    {category.eligibility && category.eligibility.length > 0 && (
                      <div className="mb-4">
                        <p className="font-semibold text-bg-dark-navy mb-2">
                          {category.title.includes('Property') ? 'Key Requirements & Highlights:' : category.title.includes('Visitor') ? '' : 'Eligibility & Highlights:'}
                        </p>
                        <ul className="space-y-2">
                          {category.eligibility.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-text-body">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {category.sections && category.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="mb-4">
                        <p className="font-semibold text-bg-dark-navy mb-2">{section.subtitle}</p>
                        <ul className="space-y-2">
                          {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-text-body">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {category.note && (
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mt-4">
                        <p className="text-sm font-semibold text-amber-900">
                          {category.note}
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

      <section className="py-20 bg-gradient-to-r from-amber-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SubHeading className="text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your Dubai Journey?
            </SubHeading>
            <p className="text-xl text-gray-100 leading-relaxed max-w-4xl mx-auto mb-8">
              Contact us today for expert guidance on your Dubai investment, business, property-purchase or residency pathway. Our experienced advisors are ready to help you navigate Dubai's immigration opportunities with confidence.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-amber-600 px-10 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 border-l-4 border-amber-600">
            <h3 className="text-2xl font-bold text-bg-dark-navy mb-4">Disclaimer</h3>
            <p className="text-text-body leading-relaxed">
              UAE immigration laws, investment thresholds, real estate-based visa rules and visa regulations are subject to frequent change. Eligibility varies depending on individual circumstances, emirate, free-zone jurisdiction, property type and regulatory approval. LiveFree Immigration Services will provide up-to-date guidance and a personalised assessment for all clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UAEImmigrationPage;
