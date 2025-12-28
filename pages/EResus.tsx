import React from 'react';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { Clock, Zap, ShieldCheck, Check, Lock, WifiOff, Database } from 'lucide-react';

export const EResus: React.FC = () => {
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
               <div className="flex justify-center items-center space-x-6">
                  <Button href="https://apps.apple.com/gb/app/eresus/id6753123316" className="bg-white !text-black hover:bg-gray-200 px-10 py-4 text-lg border-0 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Download on App Store
                  </Button>
               </div>
            </ScrollReveal>

            <ScrollReveal delay={0.8} className="mt-24 w-full max-w-4xl">
               <div className="relative">
                 <img 
                   src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/Untitled%20design%20(2).png" 
                   alt="eResus Interface" 
                   className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
                 />
                 <div className="absolute -inset-4 bg-red-600/20 blur-[60px] -z-10 rounded-full"></div>
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
            <Button href="https://apps.apple.com/gb/app/eresus/id6753123316" className="bg-white !text-black hover:bg-gray-200 px-12 py-5 text-xl rounded-full">
               Get eResus
            </Button>
         </ScrollReveal>
      </section>
    </div>
  );
};