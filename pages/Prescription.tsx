import React from 'react';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { Stamp, AlertTriangle, Clock, FileText, CheckCircle2, XCircle, Search, Brain } from 'lucide-react';

export const Prescription: React.FC = () => {
  return (
    <div className="bg-[#111] text-[#d4d4d4] min-h-screen font-mono selection:bg-[#bd3b3b] selection:text-white overflow-hidden">
      
      {/* CRT Scanline Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.02),rgba(0,0,255,0.03))] bg-[length:100%_4px,6px_100%] opacity-60"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 border-b-4 border-[#333]">
         <div className="absolute inset-0 z-0">
            <img 
               src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/Prescription%2c%20Please/4.png" 
               alt="Background" 
               className="w-full h-full object-cover opacity-20 grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent"></div>
         </div>

         <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <ScrollReveal>
               <div className="inline-block border-2 border-[#bd3b3b] text-[#bd3b3b] px-6 py-2 mb-8 tracking-widest uppercase font-bold text-sm bg-[#bd3b3b]/10 backdrop-blur-sm transform -rotate-2">
                  Ministry of Pharmacology
               </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
               <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter uppercase text-[#e0e0e0] drop-shadow-[4px_4px_0px_rgba(189,59,59,0.5)]">
                 Prescription,<br/> Please.
               </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
               <h2 className="text-2xl md:text-3xl text-white font-bold mb-6 tracking-wide">
                  Learn Pharmacology. The Fun Way.
               </h2>
               <p className="text-lg md:text-xl text-[#888] mb-12 max-w-2xl mx-auto leading-relaxed">
                  Mastering medications is essential but daunting. Transform learning into an engaging experience. 
                  Identify UK medications, classes, and indications through a fast-paced quiz.
               </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
               <Button 
                  href="https://prescription-please.netlify.app/" 
                  className="!bg-[#bd3b3b] !text-white !rounded-none hover:!bg-[#a03030] px-12 py-4 text-xl border-2 border-transparent hover:border-white uppercase tracking-widest shadow-[4px_4px_0px_rgba(50,50,50,1)] transition-transform active:translate-y-1 active:shadow-none"
               >
                  Start Shift
               </Button>
            </ScrollReveal>
         </div>
      </section>

      {/* Gameplay Section: The Job / Investigation */}
      <section className="py-24 border-b border-[#333] bg-[#1a1a1a]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               
               <div className="order-2 lg:order-1 relative">
                  <ScrollReveal>
                     {/* Decorative 'Paper' effect backing */}
                     <div className="absolute top-4 left-4 w-full h-full border-2 border-[#444] bg-[#222] -z-10"></div>
                     <img 
                        src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/Prescription%2c%20Please/1-2.png" 
                        alt="Game Interface" 
                        className="w-full shadow-2xl grayscale-[0.2] contrast-110 hover:grayscale-0 transition-all duration-500"
                     />
                     <div className="absolute -bottom-6 -right-6 bg-[#2a2a2a] p-4 border border-[#444] shadow-xl">
                        <div className="text-xs uppercase text-[#666] mb-1">Evidence</div>
                        <div className="text-xl text-[#4ade80] font-bold flex items-center">
                           <Search className="w-5 h-5 mr-2" /> FOUND
                        </div>
                     </div>
                  </ScrollReveal>
               </div>

               <div className="order-1 lg:order-2">
                  <ScrollReveal delay={0.2}>
                     <div className="flex items-center space-x-4 mb-6 text-[#bd3b3b]">
                        <FileText className="w-8 h-8" />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">Protocol 1: Investigate</h2>
                     </div>
                     <p className="text-lg text-[#999] mb-8 leading-loose">
                        Patients often cannot recall their history. You rely on what you find: prescriptions, discharge letters, DNACPRs.
                        <br/><br/>
                        Develop the investigative skills to look at a list of medications and decipher the patient's underlying condition.
                     </p>
                     
                     <ul className="space-y-6">
                        <li className="flex items-start">
                           <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#333] text-[#fff] font-bold mr-4 border border-[#555]">1</span>
                           <div>
                              <h4 className="text-white font-bold uppercase mb-1">Analyze Documents</h4>
                              <p className="text-sm text-[#777]">Scan realistic medical documents for clues.</p>
                           </div>
                        </li>
                        <li className="flex items-start">
                           <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#333] text-[#fff] font-bold mr-4 border border-[#555]">2</span>
                           <div>
                              <h4 className="text-white font-bold uppercase mb-1">Build the Picture</h4>
                              <p className="text-sm text-[#777]">What do these drugs tell you about the patient?</p>
                           </div>
                        </li>
                     </ul>
                  </ScrollReveal>
               </div>

            </div>
         </div>
      </section>

      {/* Gameplay Section: The Quiz/Challenge */}
      <section className="py-24 border-b border-[#333] bg-[#111]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               
               <div className="lg:col-start-2 relative">
                  <ScrollReveal>
                     <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#bd3b3b]/30 bg-[#bd3b3b]/5 -z-10"></div>
                     <img 
                        src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/Prescription%2c%20Please/2-1.png" 
                        alt="Quiz Interface" 
                        className="w-full shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                     />
                     
                     <div className="absolute -top-6 -left-6 bg-[#2a2a2a] p-4 border border-[#bd3b3b] shadow-xl transform rotate-3">
                        <div className="text-xs uppercase text-[#666] mb-1">Knowledge</div>
                        <div className="text-xl text-[#bd3b3b] font-bold flex items-center">
                           <Brain className="w-5 h-5 mr-2" /> TESTED
                        </div>
                     </div>
                  </ScrollReveal>
               </div>

               <div className="lg:col-start-1 lg:row-start-1">
                  <ScrollReveal delay={0.2}>
                     <div className="flex items-center space-x-4 mb-6 text-[#bd3b3b]">
                        <Stamp className="w-8 h-8" />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">Protocol 2: Master</h2>
                     </div>
                     <p className="text-lg text-[#999] mb-8 leading-loose">
                        Flashcard-style gameplay. Rapidly identify common UK medications. 
                        Link the drug name to its class and indication before time runs out.
                     </p>
                     
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 border border-[#333] bg-[#1a1a1a]">
                           <Clock className="w-6 h-6 text-[#e0e0e0] mb-3" />
                           <h4 className="uppercase text-sm font-bold text-[#777]">Fast Paced</h4>
                           <p className="text-xs text-[#555] mt-1">Train your recall reflexes.</p>
                        </div>
                        <div className="p-4 border border-[#333] bg-[#1a1a1a]">
                           <FileText className="w-6 h-6 text-[#e0e0e0] mb-3" />
                           <h4 className="uppercase text-sm font-bold text-[#777]">UK Formulary</h4>
                           <p className="text-xs text-[#555] mt-1">Based on real practice.</p>
                        </div>
                     </div>
                  </ScrollReveal>
               </div>

            </div>
         </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-32 bg-[#15803d] text-white text-center relative overflow-hidden">
         {/* Texture */}
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4">
            <ScrollReveal>
               <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-8 drop-shadow-md">
                  Glory to Pharmacology.
               </h2>
               <div className="flex justify-center space-x-8 mb-12">
                   <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center mb-4 bg-white text-[#15803d]">
                         <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest">Correct</span>
                   </div>
                   <div className="flex flex-col items-center opacity-50">
                      <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center mb-4">
                         <XCircle className="w-8 h-8" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest">Incorrect</span>
                   </div>
               </div>
               <Button 
                  href="https://prescription-please.netlify.app/" 
                  className="!bg-white !text-[#15803d] !rounded-none hover:!bg-[#f0f0f0] px-16 py-5 text-xl font-bold uppercase tracking-widest shadow-xl"
               >
                  Play Game
               </Button>
            </ScrollReveal>
         </div>
      </section>

    </div>
  );
};