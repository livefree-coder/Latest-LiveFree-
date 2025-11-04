import React from 'react';
import { Heading } from '../components/Heading';
import { SubHeading } from '../components/SubHeading';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading className="text-4xl md:text-5xl text-center mb-12">Privacy Policy</Heading>
        <div className="space-y-8 text-lg text-text-body">
          <p><strong>Last Updated:</strong> September 13, 2025</p>
          
          <SubHeading className="text-2xl border-b pb-2">1. Introduction</SubHeading>
          <p>
            LiveFree Immigration Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <SubHeading className="text-2xl border-b pb-2">2. Collection of Your Information</SubHeading>
          <p>
            We collect information that you voluntarily provide to us when you fill out a contact form on our Site. This information may include your full name, email address, phone number, and any other details you provide in your message.
          </p>

          <SubHeading className="text-2xl border-b pb-2">3. Use of Your Information</SubHeading>
          <p>
            We use the information we collect solely to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Respond to your inquiries and provide you with the services or information you have requested.</li>
            <li>Communicate with you regarding your case or questions.</li>
            <li>Improve our website and services.</li>
          </ul>

          <SubHeading className="text-2xl border-b pb-2">4. Disclosure of Your Information</SubHeading>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <SubHeading className="text-2xl border-b pb-2">5. Security of Your Information</SubHeading>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. However, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or misuse.
          </p>

          <SubHeading className="text-2xl border-b pb-2">6. Contact Us</SubHeading>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> info@livefreeimmigration.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;