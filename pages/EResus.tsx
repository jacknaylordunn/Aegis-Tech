import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { Clock, Zap, ShieldCheck, Check, Lock, WifiOff, Database, ChevronDown, ChevronUp } from 'lucide-react';

export const EResus: React.FC = () => {
  const [openTab, setOpenTab] = useState<string>('v1.2');

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Product Hero */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <ScrollReveal>
              <img 
                src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/eResus/eResus.svg" 
                alt="eResus Logo" 
                className="mx-auto h-24 w-24 md:h-32 md:w-32 object-contain mb-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] rounded-3xl"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-10">
                Cardiac arrest. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Solved.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
                The intelligent digital scribe. Times loops. Prompts drugs. Logs actions. <br/>
                Focus on the patient, not the paperwork.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
               <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Button href="https://apps.apple.com/gb/app/eresus/id6753123316" className="bg-white !text-black hover:bg-gray-200 px-10 py-4 text-lg border-0 shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full sm:w-auto">
                    Download on App Store
                  </Button>
                  <Button href="https://eresus.app" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg w-full sm:w-auto">
                    Open Web App
                  </Button>
               </div>
            </ScrollReveal>

            <ScrollReveal delay={0.8} className="mt-24 w-full max-w-4xl">
               <div className="relative">
                 <img 
                   src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/eResus/eResus%20website%20image.png" 
                   alt="eResus Interface" 
                   className="w-full h-auto drop-shadow-2xl"
                 />
                 <div className="absolute -inset-4 bg-red-600/20 blur-[60px] -z-10 rounded-full"></div>
               </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tighter text-center">
              What's New in eResus
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {/* v1.2 */}
            <ScrollReveal>
              <div className="border border-white/10 rounded-2xl bg-black/50 overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenTab(openTab === 'v1.2' ? '' : 'v1.2')}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
                      Version 1.2
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Research Mode, Live Session Transfer & Sync
                    </h3>
                  </div>
                  {openTab === 'v1.2' ? (
                    <ChevronUp className="w-6 h-6 text-gray-400 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 shrink-0 ml-4" />
                  )}
                </button>
                
                <div className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openTab === 'v1.2' ? 'max-h-[2000px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed pt-4 border-t border-white/10">
                    <p>
                      In this version, we are introducing <strong>Research Mode</strong>...
                    </p>
                    <p>
                      When enabled, Research Mode allows our clinicians to collect data from your resus logs to help improve cardiac arrest outcomes. You can now opt in to anonymously contribute your resuscitation data to ongoing research - choose your ambulance trust and get started in seconds. Opt out at any time. Over the coming months, Aegis Medical Solutions and our Paramedic led team hope to begin making this data and ongoing research available to the public through forms of journal articles and published studies.
                    </p>

                    <p>
                      This update also brings <strong>Live Session Transfer</strong> to eResus - Battery running low, or another crew taking over the arrest? You can now hand off a live arrest to another device instantly. Just AirDrop or Generate a secure QR code and scan it on any second device - iPhone, iPad, Android, or web - to pick up right where you left off.
                    </p>
                    
                    <p>Other great features that are new in this update include...</p>
                    
                    <ul className="space-y-4 pl-2">
                      <li className="flex items-start">
                        <Check className="w-6 h-6 text-blue-500 mr-4 shrink-0 mt-0.5" />
                        <span><strong>Authentication - Sign In & Sync:</strong> Create an account with Apple, Google, or email to sync your logbook across devices. Prefer not to? No problem - the app still works fully without signing in.</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-6 h-6 text-blue-500 mr-4 shrink-0 mt-0.5" />
                        <span><strong>Smarter Logbook:</strong> Add patient age and gender to any log, even after the arrest has ended. Your logbook now displays this info at a glance, and every summary includes real-world timestamps for IV/IO access, airway management, and ROSC.</span>
                      </li>
                    </ul>

                    <div className="pt-6 mt-6 border-t border-white/10">
                      <p className="mb-6">
                        We are excited for you to try these new features and to share with you what we think is the number one digital cardiac arrest scribe for UK healthcare professionals!
                      </p>
                      <p>
                        If you find eResus helpful in your clinical practice, please consider leaving a review on the App Store. Your feedback helps us continue to improve life-saving tools for the frontline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* v1.1 */}
            <ScrollReveal>
              <div className="border border-white/10 rounded-2xl bg-black/50 overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenTab(openTab === 'v1.1' ? '' : 'v1.1')}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold tracking-wide uppercase mb-3">
                      Version 1.1
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Newborn Life Support & Smarter Logic
                    </h3>
                  </div>
                  {openTab === 'v1.1' ? (
                    <ChevronUp className="w-6 h-6 text-gray-400 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 shrink-0 ml-4" />
                  )}
                </button>
                
                <div className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openTab === 'v1.1' ? 'max-h-[2000px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed pt-4 border-t border-white/10">
                    <p>
                      As requested by many users, eResus now hosts a brand new <strong>Newborn Life Support Module</strong>: A fully interactive interface and algorithm to guide you through transition-to-life and newborn resuscitation.
                    </p>
                    
                    <p>We have also...</p>
                    
                    <ul className="space-y-4 pl-2">
                      <li className="flex items-start">
                        <Check className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-0.5" />
                        <span><strong>Improved Drug Logic:</strong> Enhanced backend calculations for faster, safer drug administration prompts.</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-0.5" />
                        <span><strong>Better Handovers:</strong> Improved the saved summary and log layout to make your handovers as smooth as possible. All saved logs prior to this update will remain visible, but some users may experience inaccurate details.</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-0.5" />
                        <span><strong>General UI & Bug Fixes:</strong> Performance updates and layout refinements for a smoother, more reliable experience in the field.</span>
                      </li>
                    </ul>

                    <div className="pt-6 mt-6 border-t border-white/10">
                      <p className="text-xl font-medium text-white italic">
                        Master every resus with eResus. Real-time algorithms, precise drug calculations, and now a brand-new Newborn Life Support interface. Built for clinicians, by clinicians.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feature Flow */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-48">
          
          {/* Feature 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
             <div className="order-2 md:order-1">
                <ScrollReveal>
                   <div className="relative">
                      <img src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/1.png" alt="Timers" className="w-full max-w-sm mx-auto drop-shadow-2xl opacity-90" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/20 blur-[80px] -z-10"></div>
                   </div>
                </ScrollReveal>
             </div>
             <div className="order-1 md:order-2">
                <ScrollReveal delay={0.2}>
                   <Clock className="w-12 h-12 text-red-500 mb-8" />
                   <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Logic Timers.</h2>
                   <p className="text-xl text-gray-400 leading-relaxed mb-8 font-light">
                      Dynamic timers adapt based on the patient’s rhythm. Shockable or non-shockable, eResus keeps the pace.
                   </p>
                   <ul className="space-y-4">
                      {['Automatic rhythm adaptation', 'Drug dosage prompts', 'Intervention reminders'].map(item => (
                        <li key={item} className="flex items-center text-gray-300 font-medium">
                          <Check className="w-5 h-5 text-red-500 mr-4" /> {item}
                        </li>
                      ))}
                   </ul>
                </ScrollReveal>
             </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
             <div className="order-1">
                <ScrollReveal delay={0.2}>
                   <Zap className="w-12 h-12 text-blue-500 mb-8" />
                   <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Instant Scribing.</h2>
                   <p className="text-xl text-gray-400 leading-relaxed font-light">
                      Tap to log. Shock. Airway. Drugs. Instantly recorded. Generate a defensible audit trail for your ePCR in seconds.
                   </p>
                </ScrollReveal>
             </div>
             <div className="order-2">
                <ScrollReveal>
                   <div className="border-l-2 border-white/10 pl-8 ml-8">
                      <div className="space-y-6 font-mono text-lg text-gray-500">
                        <p>12:00:00 <span className="text-white ml-4">Cardiac Arrest</span></p>
                        <p>12:00:15 <span className="text-white ml-4">CPR Started</span></p>
                        <p>12:02:00 <span className="text-blue-400 ml-4">VF (Shockable)</span></p>
                        <p>12:02:10 <span className="text-red-500 ml-4">Shock 1 (150J)</span></p>
                        <p className="text-gray-700 animate-pulse">| Logging...</p>
                      </div>
                   </div>
                </ScrollReveal>
             </div>
          </div>

          {/* Feature 3 - Redesigned Privacy Section */}
          <div className="relative">
            <ScrollReveal>
               <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-3xl mb-8 ring-1 ring-white/10">
                     <ShieldCheck className="w-10 h-10 text-gray-200" />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Privacy by Design.</h2>
                  <p className="text-xl text-gray-400 leading-relaxed font-light">
                      Built for the most sensitive environments. eResus ensures data integrity without compromising on capability.
                   </p>
               </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { 
                   icon: Lock, 
                   title: "No PII Stored", 
                   desc: "Patient data never touches the disk in a retrievable format once the case is closed." 
                 },
                 { 
                   icon: WifiOff, 
                   title: "100% Offline", 
                   desc: "No internet connection required. Critical logic works in a bunker or a basement." 
                 },
                 { 
                   icon: Database, 
                   title: "Zero Cloud Dependency", 
                   desc: "Your data stays on your device until you choose to export it to your ePCR." 
                 }
               ].map((item, i) => (
                 <ScrollReveal key={i} delay={0.2 + (i * 0.1)} className="h-full">
                    <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                       <item.icon className="w-10 h-10 text-gray-400 mb-6 group-hover:text-white transition-colors" />
                       <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                       <p className="text-gray-400 leading-relaxed text-sm">
                          {item.desc}
                       </p>
                    </div>
                 </ScrollReveal>
               ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 text-center px-4 relative">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
         <ScrollReveal>
            <h2 className="text-5xl font-bold mb-12 tracking-tighter text-white">Upgrade your toolkit.</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button href="https://apps.apple.com/gb/app/eresus/id6753123316" className="bg-white !text-black hover:bg-gray-200 px-12 py-5 text-xl rounded-full w-full sm:w-auto">
                 Get eResus for iOS
              </Button>
              <Button href="https://eresus.app" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-12 py-5 text-xl rounded-full w-full sm:w-auto">
                 Open Web App (Android)
              </Button>
            </div>
         </ScrollReveal>
      </section>
    </div>
  );
};