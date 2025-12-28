import React from 'react';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { Clipboard, ShieldCheck, Truck, Calendar, Syringe, Database, Activity, CheckCircle } from 'lucide-react';

export const Aspis: React.FC = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
         {/* Background Grid/Effect */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <ScrollReveal>
             <div className="inline-block mb-10">
               <img 
                 src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/Aspis/Logo.png" 
                 alt="Aspis Logo" 
                 className="h-24 w-auto brightness-200 grayscale contrast-125"
               />
             </div>
           </ScrollReveal>
           <ScrollReveal delay={0.2}>
             <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 text-white">
               The Operating System <br/> for Medical Services.
             </h1>
           </ScrollReveal>
           <ScrollReveal delay={0.4}>
             <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-light">
               Clinical, operational, and fleet management unified in one secure ecosystem.
             </p>
           </ScrollReveal>
           <ScrollReveal delay={0.6}>
             <div className="inline-flex items-center space-x-2 text-blue-400 border border-blue-500/30 bg-blue-500/10 px-4 py-2 rounded-full text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>Beta Access Only</span>
             </div>
           </ScrollReveal>
        </div>
      </section>

      {/* Feature 1: ePRF */}
      <section className="py-24 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="order-2 lg:order-1">
                  <ScrollReveal>
                     <img 
                        src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/Aspis/1.png" 
                        alt="ePRF Interface" 
                        className="w-full rounded-lg shadow-2xl border border-white/10 opacity-90 hover:opacity-100 transition-opacity duration-500"
                     />
                  </ScrollReveal>
               </div>
               <div className="order-1 lg:order-2">
                  <ScrollReveal delay={0.2}>
                     <Clipboard className="w-12 h-12 text-blue-500 mb-6" />
                     <h2 className="text-5xl font-bold mb-6 tracking-tight">Advanced ePRF.</h2>
                     <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                        Document care with precision. Primary surveys, trauma triage, and dynamic vitals tracking working completely offline. 
                        Aspis adapts to the patient's acuity, presenting only relevant fields to reduce cognitive load.
                     </p>
                     <ul className="space-y-4">
                        <li className="flex items-center text-gray-300">
                           <Activity className="w-5 h-5 text-blue-500 mr-4" />
                           Dynamic Vitals Trending
                        </li>
                        <li className="flex items-center text-gray-300">
                           <Database className="w-5 h-5 text-blue-500 mr-4" />
                           100% Offline Capability
                        </li>
                        <li className="flex items-center text-gray-300">
                           <ShieldCheck className="w-5 h-5 text-blue-500 mr-4" />
                           Automated coding & compliance
                        </li>
                     </ul>
                  </ScrollReveal>
               </div>
            </div>
         </div>
      </section>

      {/* Feature 2: Drug Tracking */}
      <section className="py-24 border-t border-white/5 bg-[#05050A]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="lg:col-start-2">
                  <ScrollReveal>
                     <img 
                        src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/Aspis/2.png" 
                        alt="Drug Tracking Interface" 
                        className="w-full rounded-lg shadow-2xl border border-white/10 opacity-90 hover:opacity-100 transition-opacity duration-500"
                     />
                  </ScrollReveal>
               </div>
               <div className="lg:col-start-1 lg:row-start-1">
                  <ScrollReveal delay={0.2}>
                     <Syringe className="w-12 h-12 text-red-500 mb-6" />
                     <h2 className="text-5xl font-bold mb-6 tracking-tight">Controlled Drug Governance.</h2>
                     <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                        End-to-end digital chain of custody for controlled medications. From stock room to patient administration, every mg is accounted for.
                     </p>
                     <div className="space-y-6">
                        <div className="border-l-2 border-red-500/30 pl-6">
                           <h4 className="text-white font-bold mb-2">Shift Handovers</h4>
                           <p className="text-sm text-gray-500">Digital signatures and stock counts at every crew change, eliminating paper register errors.</p>
                        </div>
                        <div className="border-l-2 border-red-500/30 pl-6">
                           <h4 className="text-white font-bold mb-2">Usage Audit</h4>
                           <p className="text-sm text-gray-500">Automatically link drug usage in ePRF to the stock register for seamless restocking.</p>
                        </div>
                     </div>
                  </ScrollReveal>
               </div>
            </div>
         </div>
      </section>

      {/* Feature 3: Vehicle & Kit Management */}
      <section className="py-24 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="order-2 lg:order-1">
                  <ScrollReveal>
                     <img 
                       src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/Aspis/4.png" 
                       alt="Fleet Management Dashboard" 
                       className="w-full rounded-lg shadow-2xl border border-white/10 opacity-90 hover:opacity-100 transition-opacity duration-500"
                     />
                  </ScrollReveal>
               </div>
               <div className="order-1 lg:order-2">
                  <ScrollReveal delay={0.2}>
                     <Truck className="w-12 h-12 text-orange-500 mb-6" />
                     <h2 className="text-5xl font-bold mb-6 tracking-tight">Fleet & Asset Intelligence.</h2>
                     <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                        Digital VDI checks, fault reporting, and kit expiry tracking. Keep your fleet compliant and road-ready without the paper chase.
                     </p>
                     
                     <div className="space-y-4">
                        <div className="flex items-start">
                           <CheckCircle className="w-6 h-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                           <div>
                              <h4 className="text-white font-bold">Digital VDI</h4>
                              <p className="text-sm text-gray-400 mt-1">Instant fail notifications sent directly to fleet managers.</p>
                           </div>
                        </div>
                        <div className="flex items-start">
                           <CheckCircle className="w-6 h-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                           <div>
                              <h4 className="text-white font-bold">Asset Tracking</h4>
                              <p className="text-sm text-gray-400 mt-1">Monitor defibrillator service dates & kit expiry in real-time.</p>
                           </div>
                        </div>
                        <div className="flex items-start">
                           <CheckCircle className="w-6 h-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                           <div>
                              <h4 className="text-white font-bold">Compliance</h4>
                              <p className="text-sm text-gray-400 mt-1">Full audit trail ready for CQC inspections.</p>
                           </div>
                        </div>
                     </div>
                  </ScrollReveal>
               </div>
            </div>
         </div>
      </section>
      
      {/* Feature 4: Smart Rostering */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <ScrollReveal>
                   <Calendar className="w-12 h-12 text-green-500 mb-6" />
                   <h3 className="text-4xl font-bold mb-4">Smart Rostering</h3>
                   <p className="text-lg text-gray-400 font-light leading-relaxed mb-6">
                      Complete workforce management. Geolocation clock-ins, shift bidding, and automated coverage alerts ensure your team is where they need to be.
                   </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                         <div className="text-xl font-bold text-green-500 mb-2">Intelligent</div>
                         <div className="text-sm text-gray-400">Coverage Reminders</div>
                      </div>
                      <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                         <div className="text-3xl font-bold text-blue-500 mb-2">0</div>
                         <div className="text-sm text-gray-400">Paper Timesheets</div>
                      </div>
                      <div className="bg-white/5 p-6 rounded-2xl border border-white/5 col-span-2">
                         <div className="text-xl font-bold text-white mb-2">Geolocation Verified</div>
                         <div className="text-sm text-gray-400">Clock-in only allowed within base radius.</div>
                      </div>
                   </div>
                </ScrollReveal>
             </div>
          </div>
      </section>

      {/* Bottom Section: Real World Usage */}
      <section className="py-24 bg-black">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1">
                   <ScrollReveal>
                      <h2 className="text-5xl font-bold mb-8 tracking-tight">Built for the <br/> Front Line.</h2>
                      <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                         Aspis isn't just software; it's a tool for survival. High contrast interfaces for night shifts. Large touch targets for moving vehicles. Workflows designed by paramedics, for paramedics.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                         <Button href="mailto:tech@aegismedicalsolutions.co.uk?subject=Beta Access Request - Aspis" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                            Request Demo
                         </Button>
                      </div>
                   </ScrollReveal>
               </div>
               <div className="order-1 lg:order-2">
                  <ScrollReveal delay={0.2}>
                     <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                       <img 
                         src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/Aspis/3.png" 
                         alt="EMT using Aspis" 
                         className="w-full opacity-90 hover:scale-105 transition-transform duration-700"
                       />
                       <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none"></div>
                     </div>
                  </ScrollReveal>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};