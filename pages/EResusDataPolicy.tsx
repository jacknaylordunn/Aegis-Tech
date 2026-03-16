import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export const EResusDataPolicy: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">
            eResus Data Collection Policy & Agreement
          </h1>
          <p className="text-gray-400 mb-12 text-lg">
            Last Updated: March 2026
          </p>

          <div className="space-y-8 text-gray-300 leading-relaxed font-light">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                At Aegis Medical Solutions, we are committed to advancing pre-hospital care through data-driven insights. 
                The "Research Mode" in eResus allows clinicians to contribute anonymised, aggregated data to help us 
                understand resuscitation outcomes, improve clinical algorithms, and enhance the effectiveness of interventions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. What Data We Collect</h2>
              <p className="mb-4">When Research Mode is enabled, eResus collects specific, non-identifiable clinical data points, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Initial presenting rhythm (e.g., VF, VT, PEA, Asystole)</li>
                <li>Rate of Return of Spontaneous Circulation (ROSC)</li>
                <li>Number of shocks delivered</li>
                <li>Timing and frequency of drug administration (e.g., Adrenaline, Amiodarone)</li>
                <li>Overall duration of the resuscitation effort</li>
                <li>General demographic categories (if provided, strictly anonymised)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. What Data We DO NOT Collect</h2>
              <p>
                We strictly adhere to a Privacy by Design philosophy. We <strong>never</strong> collect Personally Identifiable Information (PII) or Protected Health Information (PHI). 
                We do not collect patient names, dates of birth, exact locations, hospital numbers, or any narrative text that could identify a patient or clinician.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. How We Use the Data</h2>
              <p>
                The collected data is used exclusively for clinical research, quality improvement, and the enhancement of the eResus application. 
                Aggregated findings may be shared with medical research institutions or published in clinical journals to contribute to the broader understanding of resuscitation science.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Your Consent and Control</h2>
              <p>
                Participation in Research Mode is entirely voluntary. 
                Upon updating to or installing version 1.1 or later, you will be prompted to accept or decline this data collection agreement.
                If you decline, Research Mode will be disabled, and no clinical data will be transmitted from your device. 
                You can toggle Research Mode on or off at any time within the app's settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
              <p>
                All data transmitted through Research Mode is encrypted in transit and stored securely on our servers. 
                Access to this data is strictly limited to authorised research personnel at Aegis Medical Solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
              <p>
                If you have any questions regarding this policy or our data practices, please contact us through our official support channels.
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
