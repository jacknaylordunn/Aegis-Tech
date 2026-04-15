import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export const EResusPrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">
            eResus Privacy Policy
          </h1>
          <p className="text-gray-400 mb-12 text-lg">
            Last Updated: April 2026
          </p>

          <div className="space-y-8 text-gray-300 leading-relaxed font-light">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                Aegis Medical Solutions is committed to protecting your privacy. This Privacy Policy outlines how the eResus application collects, uses, and safeguards your information. We prioritize data minimization and ensure that your data is used solely to provide and improve our services.
              </p>
              <p className="mt-4 font-medium text-white">
                No data is used for tracking, third-party sharing, or marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Data Not Linked to You</h2>
              <p className="mb-4">
                The following data may be collected but is not linked to your identity:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Diagnostics</li>
                <li>Contact Info</li>
                <li>Usage Data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Data Types Collected</h2>
              <p className="mb-4">
                There are 4 data types collected from this app: Performance Data, Email Address, Other Usage Data, and Crash Data.
              </p>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Contact Info</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Email Address:</strong> Used for App Functionality</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Usage Data</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Other Usage Data:</strong> Used for Analytics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Diagnostics</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Crash Data:</strong> Used for App Functionality</li>
                    <li><strong>Performance Data:</strong> Used for App Functionality, and Analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Research Mode & Resuscitation Logs</h2>
              <p>
                eResus includes an optional "Research Mode" designed to help advance pre-hospital care. When Research Mode is enabled, the app collects specific, anonymized resuscitation logs and clinical data points (such as initial rhythm, ROSC rates, and intervention timings) for research purposes. 
              </p>
              <p className="mt-4">
                This data is strictly aggregated and anonymized. We never collect Personally Identifiable Information (PII) or Protected Health Information (PHI) within these logs. For full details on what is collected during Research Mode, please refer to our <a href="/eresus/data-policy" className="text-aegis-accent hover:underline">Data Collection Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
              <p>
                We employ industry-standard security measures to ensure that any data transmitted from the app is encrypted and stored securely. Your trust is paramount, and we build our tools with a "Privacy by Design" philosophy to protect both clinicians and patients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us through our official support channels.
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
