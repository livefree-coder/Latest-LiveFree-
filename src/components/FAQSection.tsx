import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [animatingFAQ, setAnimatingFAQ] = useState<number | null>(null);
  const navigate = useNavigate();

  const faqs = [
    {
      question: 'How long does it take to process a Canadian immigration application?',
      answer: 'Processing times vary depending on the type of application and the applicant\'s country of residence. For example, study permits can take anywhere from 1 to 4 months, while permanent residency applications may take 6 months to over a year. We always provide clients with an estimated timeline after reviewing their case.'
    },
    {
      question: 'What documents do I need for a study permit application?',
      answer: 'Required documents typically include a letter of acceptance from a Canadian institution, proof of financial support, passport, medical exam results (if required), police certificates, and a statement of purpose. We provide a comprehensive checklist tailored to your specific situation.'
    },
    {
      question: 'Can you help if my visa application was previously refused?',
      answer: 'Yes, we specialize in visa refusal solutions. We analyze the reasons for refusal, address the concerns raised by immigration officers, and help you prepare a stronger application. Our success rate for previously refused cases is significantly high.'
    },
    {
      question: 'Do you provide services after I arrive in Canada?',
      answer: 'Absolutely! Our post-arrival services include assistance with SIN number application, bank account setup, healthcare registration, finding accommodation, job search support, and general settlement guidance to help you integrate smoothly into Canadian society.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our fees vary depending on the complexity of your case and the services required. We offer transparent pricing with no hidden costs. Contact us for a free consultation where we\'ll provide a detailed quote based on your specific needs.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setAnimatingFAQ(index);
    
    // Small delay to show the animation before changing state
    setTimeout(() => {
      setOpenFAQ(openFAQ === index ? null : index);
      setAnimatingFAQ(null);
    }, 150);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-navy mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about Canadian immigration
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ${
                animatingFAQ === index ? 'scale-[1.02] shadow-md' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-200 ${
                  animatingFAQ === index ? 'bg-blue-50' : ''
                }`}
              >
                <span className="text-lg font-semibold text-slate-900 pr-4">
                </span>
                <span className="text-lg font-semibold text-bg-dark-navy pr-4 text-center flex-1">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 transition-transform duration-200 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  {openFAQ === index ? (
                    <Minus className="h-5 w-5 text-secondary-navy" />
                  ) : (
                    <Plus className="h-5 w-5 text-secondary-navy" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4 animate-fadeIn">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-primary-red text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-red-hover transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;