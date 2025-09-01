import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const ContactPage: React.FC = () => {
  const contactDetails = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+1 (403) 402-4450',
      href: 'tel:+14034024450',
      description: 'Call us directly'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp (Canada)',
      value: '+1 (403) 402-4450',
      href: 'https://wa.me/14034024450',
      description: 'Message us on WhatsApp (Canada)'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp (Bangladesh)',
      value: '+880 1705-315758',
      href: 'https://wa.me/8801705315758',
      description: 'Message us on WhatsApp (Bangladesh)'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'info@livefreeimmigration.com',
      href: 'mailto:info@livefreeimmigration.com',
      description: 'Send us an email'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Office',
      value: '6708, 4 AVE NE, Calgary, Alberta, T2A5J2, Canada',
      href: '#',
      description: 'Visit our office'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero/Intro Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Intro */}
            <div className="lg:pr-8">
              <Heading className="text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
                Contact LiveFree Immigration
              </Heading>
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                Have questions about studying, working, or immigrating to Canada? Reach out and we'll guide you.
              </p>
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4 mr-2" />
                Response within 1 business day
              </div>
            </div>

            {/* Right Column - Contact Form (Above the fold on desktop) */}
            <div className="lg:order-first lg:order-last">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SubHeading className="text-3xl text-slate-900 mb-4">
              Get in Touch
            </SubHeading>
            <p className="text-lg text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactDetails.map((detail, index) => (
              <a
                key={index}
                href={detail.href}
                className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-gray-200 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {detail.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {detail.label}
                </h3>
                <p className="text-blue-600 font-medium mb-2 group-hover:text-blue-800">
                  {detail.value}
                </p>
                <p className="text-sm text-gray-600">
                  {detail.description}
                </p>
              </a>
            ))}
          </div>

          {/* Office Hours */}
          <div className="text-center">
            <div className="inline-flex items-center bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-200">
              <Clock className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-700 font-medium">
                Office Hours: Monday - Friday, 9:00 AM - 6:00 PM EST
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Need more information?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#faq"
                className="inline-flex items-center justify-center px-6 py-3 border border-secondary-navy text-secondary-navy rounded-md font-medium hover:bg-gray-50 transition-colors"
              >
                View FAQs
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-red text-white rounded-md font-medium hover:bg-primary-red-hover transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;