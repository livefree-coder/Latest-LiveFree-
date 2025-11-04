import React from 'react';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading className="text-4xl md:text-5xl text-center mb-12">Terms of Service</Heading>
        <div className="space-y-8 text-lg text-text-body">
          <p><strong>Last Updated:</strong> September 13, 2025</p>

          <SubHeading className="text-2xl border-b pb-2">1. Agreement to Terms</SubHeading>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this site.
          </p>

          <SubHeading className="text-2xl border-b pb-2">2. No Consultant-Client Relationship</SubHeading>
          <p>
            The information provided on this website is for general informational purposes only and does not constitute legal or immigration advice. Your use of this website, including submitting a contact form, does not create a consultant-client relationship with LiveFree Immigration Services. Such a relationship is only formed upon the signing of a formal retainer agreement.
          </p>

          <SubHeading className="text-2xl border-b pb-2">3. Intellectual Property</SubHeading>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of LiveFree Immigration Services and is protected by copyright laws. Unauthorized use of any material on this site is prohibited.
          </p>
          
          <SubHeading className="text-2xl border-b pb-2">4. Limitation of Liability</SubHeading>
          <p>
            LiveFree Immigration Services is not liable for any errors or omissions in the content of this site or for any damages arising from the use or performance of this site under any circumstances.
          </p>

          <SubHeading className="text-2xl border-b pb-2">5. Governing Law</SubHeading>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the Province of Alberta, Canada, without regard to its conflict of law principles.
          </p>

          <SubHeading className="text-2xl border-b pb-2">6. Contact Us</SubHeading>
          <p>
            If you have any questions about these Terms of Service, please contact us at info@livefreeimmigration.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;