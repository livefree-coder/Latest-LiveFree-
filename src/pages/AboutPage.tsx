import React from 'react';
import { CheckCircle, Users, Award, Globe, Shield, Heart, Target, Scale, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

// This is a new helper component to handle the animation for each stat card.
// It uses the `useInView` hook to detect when it's visible on the screen.
const AnimatedStatCard = ({ number, label, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation runs only once
    threshold: 0.1,    // Triggers the animation when 10% of the card is visible
  });

  // This logic separates the number from any text/symbols (like "80" from "80%+")
  const endValue = parseInt(number, 10);
  const suffix = number.replace(/[0-9]/g, '');

  return (
    <div ref={ref} className="text-center">
      <div className="bg-gradient-to-br from-secondary-navy to-bg-dark-navy rounded-2xl p-8 mb-4">
        <div className="text-4xl md:text-5xl font-bold text-primary-red mb-2 h-14">
          {/* The CountUp component will animate from 0 to the endValue when `inView` is true */}
          {inView ? (
            // Handles non-numeric values like "24/7" gracefully
            number === '24/7' ? (
              <span>
                <CountUp end={24} duration={2.5} />/7
              </span>
            ) : (
              isNaN(endValue) ? (
                <span>{number}</span>
              ) : (
                <CountUp end={endValue} duration={2.5} suffix={suffix} />
              )
            )
          ) : (
            // Shows a placeholder before the animation starts
            <span>{isNaN(endValue) ? number : `0${suffix}`}</span>
          )}
        </div>
        <div className="text-xl font-semibold text-white mb-2">
          {label}
        </div>
      </div>
      <p className="text-text-muted">{description}</p>
    </div>
  );
};


const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const coreStrengths = [
    "Deep expertise in Canadian education and immigration policy",
    "A team that includes both RCICs and international legal professionals",
    "80%+ success rate in refugee and humanitarian claims",
    "End-to-end support: from eligibility assessment to application and appeal",
    "Transparent process and ethical, honest guidance",
    "Support for clients both inside and outside Canada"
  ];

  const values = [
    {
      icon: <Scale className="w-8 h-8 text-blue-600" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty throughout your immigration journey."
    },
    {
      icon: <Target className="w-8 h-8 text-amber-500" />,
      title: "Excellence",
      description: "We strive for perfection in every application, leveraging our expertise to maximize your chances of success."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Compassion",
      description: "We understand that immigration is deeply personal. We treat every client with empathy and respect."
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Reliability",
      description: "You can count on us to meet deadlines, respond promptly, and keep you informed every step of the way."
    }
  ];

  const achievements = [
    {
      number: "80%",
      label: "Success Rate",
      description: "In refugee and humanitarian claims"
    },
    {
      number: "500+",
      label: "Clients Served",
      description: "Across various immigration programs"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Combined team expertise"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Available when you need us"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We assess your profile, goals, and circumstances to understand your unique situation."
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "We develop a customized immigration strategy tailored to your specific needs and objectives."
    },
    {
      step: "03",
      title: "Application Preparation",
      description: "We meticulously prepare and review all documentation to ensure accuracy and completeness."
    },
    {
      step: "04",
      title: "Submission & Follow-up",
      description: "We submit your application and provide ongoing support throughout the process."
    },
    {
      step: "05",
      title: "Post-Arrival Support",
      description: "We continue to assist you even after you arrive in Canada to ensure smooth settlement."
    }
  ];

  const { ref: whoWeAreRef, inView: whoWeAreInView } = useInView({ threshold: 0.1 });
  const { ref: whyChooseUsRef, inView: whyChooseUsInView } = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-navy via-bg-dark-navy to-secondary-navy py-24">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading className="text-5xl md:text-7xl text-white mb-6 leading-tight">
            About <span className="text-primary-red">LiveFree</span>
          </Heading>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Your trusted partners in Canadian immigration, building futures and making dreams reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary-red-hover transition-colors"
            >
              Schedule Consultation
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section ref={whoWeAreRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-4xl md:text-5xl text-bg-dark-navy mb-6 relative inline-block">
              Who We Are
              <span className={`absolute left-0 bottom-0 h-1 bg-primary-red transition-all duration-700 ${whoWeAreInView ? 'w-full' : 'w-0'}`}></span>
            </SubHeading>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-text-body leading-relaxed mb-8">
                LiveFree Immigration Canada is a client-focused immigration consultancy built on
                expertise, integrity, and results. Our team of highly skilled licensed consultants,
                legal professionals and immigration experts brings years of combined experience in
                Canadian immigration law and global mobility.
              </p>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                We specialize in providing tailored immigration solutions for individuals, families,
                students, and businesses. Whether it's permanent residency, study permits, work visas,
                or business immigration, our advice is strategic, accurate, and effective.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                What sets us apart is our commitment to excellence. Our team's deep legal acumen,
                sharp problem-solving skills, and personalized approach ensure that every client's
                journey is smooth, transparent, and successful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-4xl md:text-5xl text-bg-dark-navy mb-6">
              Our Track Record
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Numbers that speak to our commitment and success in helping clients achieve their Canadian dreams
            </p>
          </div>

          {/* UPDATED SECTION */}
          {/* This now maps to the new AnimatedStatCard component */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedStatCard
                key={index}
                number={achievement.number}
                label={achievement.label}
                description={achievement.description}
              />
            ))}
          </div>
          {/* END OF UPDATED SECTION */}

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseUsRef} className="py-20 bg-bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-4xl md:text-5xl text-bg-dark-navy mb-4 relative inline-block">
              Why Choose Us?
              <span className={`absolute left-0 bottom-0 h-1 bg-primary-red transition-all duration-700 ${whyChooseUsInView ? 'w-full' : 'w-0'}`}></span>
            </SubHeading>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-secondary-navy mb-6">
                More Than Applications. We Build Futures.
              </h3>
              <p className="text-lg text-text-body leading-relaxed">
                At LiveFree Immigration, we're not just another immigration firm. We're a dedicated
                team of licensed immigration consultants and legal experts who understand that
                immigration is about people, not just paperwork. Whether you're hoping to study,
                work, reunite with family, or build a new life in Canada, we bring clarity,
                strategy, and care to every step of your journey.
              </p>
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-20">
            <SubHeading className="text-3xl font-bold text-bg-dark-navy mb-12 flex items-center justify-center">
              <Users className="w-8 h-8 text-secondary-navy mr-3" />
              What Sets Us Apart?
            </SubHeading>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Licensed Professionals */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 group hover:scale-105 hover:shadow-lg hover:bg-red-50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Award className="w-10 h-10 text-primary-red mr-4 group-hover:rotate-[360deg] transition-transform duration-500" />
                  <h4 className="text-xl font-bold text-bg-dark-navy">
                    Licensed Professionals with Legal Insight
                  </h4>
                </div>
                <p className="text-text-body leading-relaxed">
                  Our team is composed of Regulated Canadian Immigration Consultants (RCICs) and
                  Barristers qualified in England and Wales. This blend of Canadian regulatory
                  expertise and international legal knowledge gives you an edge — especially in
                  complex or high-stakes applications.
                </p>
              </div>

              {/* Strategic Approach */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 group hover:scale-105 hover:shadow-lg hover:bg-red-50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Globe className="w-10 h-10 text-secondary-navy mr-4 group-hover:rotate-[360deg] transition-transform duration-500" />
                  <h4 className="text-xl font-bold text-bg-dark-navy">
                    We Don't Just File – We Strategize
                  </h4>
                </div>
                <p className="text-text-body leading-relaxed">
                  Every successful immigration case starts with the right strategy. We analyze your
                  profile, goals, and circumstances to recommend the most effective immigration path —
                  not just the easiest or most obvious one. Whether it's choosing the right province,
                  strengthening your Express Entry profile, or navigating a humanitarian case, we
                  craft a solution that fits you.
                </p>
              </div>

              {/* Personalized Service */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 group hover:scale-105 hover:shadow-lg hover:bg-red-50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Heart className="w-10 h-10 text-primary-red mr-4 group-hover:rotate-[360deg] transition-transform duration-500" />
                  <h4 className="text-xl font-bold text-bg-dark-navy">
                    Personalized Service, Every Step of the Way
                  </h4>
                </div>
                <p className="text-text-body leading-relaxed">
                  At LiveFree, we don't believe in one-size-fits-all solutions. We listen carefully,
                  stay responsive, and tailor our advice and applications to your unique needs —
                  whether you're an international student, skilled professional, entrepreneur, or
                  refugee claimant.
                </p>
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="mb-20">
            <SubHeading className="text-3xl font-bold text-bg-dark-navy mb-12 flex items-center justify-center">
              <Shield className="w-8 h-8 text-secondary-navy mr-3" />
              Our Core Strengths
            </SubHeading>

            <div className="bg-slate-800 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreStrengths.map((strength, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-red mr-4 mt-1 flex-shrink-0" />
                    <p className="text-white text-lg leading-relaxed">{strength}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-4xl md:text-5xl text-bg-dark-navy mb-6">
              Our Values
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="bg-bg-light-gray rounded-xl p-8 mb-6 group-hover:bg-red-50 transition-colors">
                  <div className="flex justify-center mb-4">
                    <div className="group-hover:rotate-[360deg] transition-transform duration-500">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-bg-dark-navy mb-4">
                    {value.title}
                  </h4>
                  <p className="text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-4xl md:text-5xl text-bg-dark-navy mb-6">
              Our Process
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              A systematic approach to ensure your immigration success
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8 group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-secondary-navy text-white rounded-full flex items-center justify-center text-2xl font-bold group-hover:bg-primary-red transition-colors duration-300">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h4 className="text-2xl font-bold text-bg-dark-navy mb-4 relative inline-block">
                    {step.title}
                    <span className="absolute left-0 bottom-0 h-1 bg-primary-red w-0 group-hover:w-full transition-all duration-300"></span>
                  </h4>
                  <p className="text-lg text-text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block w-px h-16 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-4xl md:text-5xl text-bg-dark-navy mb-6">
              Our Leadership Team
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Meet the experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-bg-light-gray rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-32 h-32 bg-gradient-to-br from-secondary-navy to-bg-dark-navy rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-xl font-bold text-bg-dark-navy mb-2">
                Senior Immigration Consultant
              </h4>
              <p className="text-secondary-navy font-semibold mb-4">RCIC, LLB</p>
              <p className="text-text-muted leading-relaxed">
                Regulated Canadian Immigration Consultant with extensive experience in complex immigration cases.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-bg-light-gray rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-red to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Scale className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-xl font-bold text-bg-dark-navy mb-2">
                Legal Advisor
              </h4>
              <p className="text-secondary-navy font-semibold mb-4">Barrister, England & Wales</p>
              <p className="text-text-muted leading-relaxed">
                International legal expert specializing in immigration law and humanitarian cases.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-bg-light-gray rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Globe className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-xl font-bold text-bg-dark-navy mb-2">
                Client Relations Manager
              </h4>
              <p className="text-secondary-navy font-semibold mb-4">Immigration Specialist</p>
              <p className="text-text-muted leading-relaxed">
                Dedicated to ensuring exceptional client experience and seamless communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-secondary-navy to-bg-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Target className="w-12 h-12 text-primary-red mr-4" />
            <h2 className="text-4xl md:text-5xl text-white">
              Your Dream. Our Mission.
            </h2>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-12">
            We believe immigration isn't just a transaction — it's a life-changing decision.
            That's why we've built our practice around integrity, transparency, and results.
            Our goal is to empower you to live free, make informed choices, and reach your
            full potential in Canada.
          </p>
          <div className="bg-primary-red rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl font-bold text-white mb-6">
              At LiveFree Immigration, we don't just process applications — we build futures.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-secondary-navy px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-bg-dark-navy mb-6">
            Ready to Begin Your Canadian Journey?
          </h2>
          <p className="text-xl text-text-muted mb-8">
            Let's discuss how we can help you achieve your immigration goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-secondary-navy text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Schedule Free Consultation
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-secondary-navy text-secondary-navy px-8 py-4 rounded-md text-lg font-semibold hover:bg-secondary-navy hover:text-white transition-colors"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;