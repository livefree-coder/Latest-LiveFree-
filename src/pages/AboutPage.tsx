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
      <div className="bg-secondary-navy rounded-2xl p-8 mb-4">
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
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true, threshold: 0.1 });


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-800 py-24">
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
              More Info
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

      {/* --- NEW OUR TEAM SECTION --- */}
      <section ref={teamRef} className={`py-20 bg-bg-light-gray transition-opacity duration-1000 ease-in ${teamInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SubHeading className="text-4xl md:text-5xl text-bg-dark-navy mb-4">
              Our Leadership Team
            </SubHeading>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Meet the experienced professionals dedicated to your success.
            </p>
          </div>

          <div className="space-y-16">
            {/* Rumaiya Huq Profile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img src="https://res.cloudinary.com/dankeqpe3/image/upload/v1757858289/WhatsApp_Image_2025-09-10_at_13.23.23_wn0tdw.jpg" alt="Rumaiya Huq" className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square"/>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-secondary-navy">Rumaiya Huq, Barrister-at-Law</h3>
                <p className="text-primary-red font-semibold text-lg mt-1 mb-4">Director - International Legal & Corporate Affairs | Strategic Advisor | Canada & Bangladesh Offices</p>
                <p className="text-text-body mb-6">
                  Rumaiya Huq brings over a decade of expertise in corporate law, international business, and cross-border legal matters. With an LLM in International Business Law from Osgoode Hall Law School, York University, one of Canada's leading law schools, LLM in International Commercial Law, Northumbria University, UK, and as a Barrister-at-Law (England & Wales), she strengthens the firm's governance, compliance, and operational excellence. She leads strategic initiatives, global partnerships, and client service standards, ensuring that the firm operates with integrity and efficiency. As immigration advice and representation are delivered by the firm's licensed RCICs and Canadian immigration professionals, her oversight of procedural and operational frameworks ensures clients experience a streamlined, transparent, and consistently high-quality service.
                </p>
                <div>
                  <h4 className="text-xl font-bold text-secondary-navy mb-2">Education</h4>
                  <ul className="list-disc list-inside text-text-body space-y-1">
                    <li>LLM, International Business Law, Osgoode Hall Law School, York University, CA</li>
                    <li>LLM, International Commercial Law, Northumbria University, UK</li>
                    <li>LLB (Hons.), University of London, UK</li>
                    <li>PGDip in Bar Training (BPTC), Northumbria University, UK</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Raed Saadman Karim Profile */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 md:order-2">
                <img src="/Untitled design (1).png" alt="Raed Saadman Karim" className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square"/>
              </div>
              <div className="md:col-span-2 md:order-1">
                <h3 className="text-3xl font-bold text-secondary-navy">Raed Saadman Karim - Barrister</h3>
                <p className="text-primary-red font-semibold text-lg mt-1 mb-4">Director - Operations and Case Management | Bangladesh office</p>
                <p className="text-text-body">
                  Raed Saadman Karim is a dedicated legal professional with a strong background in international law and a passion for helping people build better futures. He earned his LLB (Hons) from the University of the West of England, Bristol and went on to complete the Barrister Training Course at BPP University, London. After qualifying as a Barrister in the UK, Raed now works on a wide range of cases, from labour compliance and corporate matters to family law, custody, divorce, and migrant workers' rights. This diverse experience allowed him to develop a deep understanding of the challenges individuals and families face when navigating legal systems especially when their futures depend on fair and timely outcomes. With this unique blend of international training, legal expertise, and real-world experience, Raed is committed to guiding clients through the often-complex Canadian immigration process.
                </p>
              </div>
            </div>

            {/* Shahriar Ahmed Profile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img src="/WhatsApp Image 2025-11-04 at 16.17.47_b96474bc.jpg" alt="Shahriar Ahmed" className="rounded-lg shadow-lg w-full h-auto object-contain aspect-square"/>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-secondary-navy">Shahriar Ahmed</h3>
                <p className="text-primary-red font-semibold text-lg mt-1 mb-4">Regulated Canadian Immigration Consultant (RCIC) | Licensed Immigration Consultant</p>
                <p className="text-text-body mb-6">
                  Shahriar Ahmed is a Regulated Canadian Immigration Consultant (RCIC) and a member in good standing with the College of Immigration and Citizenship Consultants (CICC). With extensive experience in Canadian immigration law and policy, Shahriar specializes in providing comprehensive immigration solutions for individuals, families, and businesses seeking to make Canada their home. His practice encompasses a wide range of immigration matters, including permanent residence applications, temporary residence permits, work and study permits, family sponsorships, and humanitarian and compassionate cases. Known for his meticulous attention to detail and client-centered approach, Shahriar is committed to navigating the complexities of the immigration system while ensuring transparency and integrity throughout the process. His dedication to achieving successful outcomes has helped countless clients realize their Canadian dreams.
                </p>
                <div>
                  <h4 className="text-xl font-bold text-secondary-navy mb-2">Professional Credentials</h4>
                  <ul className="list-disc list-inside text-text-body space-y-1">
                    <li>Regulated Canadian Immigration Consultant (RCIC)</li>
                    <li>Member, College of Immigration and Citizenship Consultants (CICC)</li>
                  </ul>
                </div>
              </div>
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
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col">
                <div className="bg-bg-light-gray rounded-xl p-8 mb-6 group-hover:bg-red-50 transition-colors flex-1 flex flex-col">
                  <div className="flex justify-center mb-4">
                    <div className="group-hover:rotate-[360deg] transition-transform duration-500">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-bg-dark-navy mb-4">
                    {value.title}
                  </h4>
                  <p className="text-text-muted leading-relaxed flex-1">
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
            <div className="bg-bg-light-gray rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col">
              <div className="w-32 h-32 bg-gradient-to-br from-secondary-navy to-bg-dark-navy rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h4 className="text-xl font-bold text-bg-dark-navy mb-2">
                  Senior Immigration Consultant
                </h4>
                <p className="text-secondary-navy font-semibold mb-4">RCIC</p>
                <p className="text-text-muted leading-relaxed">
                  Regulated Canadian Immigration Consultant with extensive experience in complex immigration cases.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-bg-light-gray rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-red to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Scale className="w-16 h-16 text-white" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h4 className="text-xl font-bold text-bg-dark-navy mb-2">
                  Legal Advisor
                </h4>
                <p className="text-secondary-navy font-semibold mb-4">Barrister, England & Wales</p>
                <p className="text-text-muted leading-relaxed">
                  International legal expert specializing in immigration law and humanitarian cases.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-bg-light-gray rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col">
              <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Globe className="w-16 h-16 text-white" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
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
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-secondary-navy to-bg-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Target className="w-12 h-12 text-primary-red mr-4" />
            <SubHeading className="text-4xl md:text-5xl text-white">
              Your Dream. Our Mission.
            </SubHeading>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SubHeading className="text-3xl md:text-4xl text-bg-dark-navy mb-6">
            Ready to Begin Your Canadian Journey?
          </SubHeading>
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