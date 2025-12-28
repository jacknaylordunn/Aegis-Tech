import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Activity, BarChart2, Zap } from 'lucide-react';

export const CPRStat: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center">
         <ScrollReveal>
            <div className="inline-flex items-center space-x-2 text-yellow-500 border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                <span>In Development</span>
             </div>
         </ScrollReveal>
         <ScrollReveal delay={0.1}>
           <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-white">
             CPR Stat
           </h1>
         </ScrollReveal>
         <ScrollReveal delay={0.2}>
           <p className="text-2xl text-gray-400 font-light max-w-2xl mx-auto">
             High-fidelity feedback. Directly on your wrist.
           </p>
         </ScrollReveal>
      </section>

      {/* Main Visual */}
      <section className="relative py-20">
         <ScrollReveal delay={0.4}>
           <div className="relative z-10 flex justify-center">
              <img 
                 src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/4.png" 
                 alt="Apple Watch" 
                 className="w-72 md:w-96 h-auto drop-shadow-[0_0_80px_rgba(255,100,0,0.2)]"
              />
           </div>
         </ScrollReveal>
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] pointer-events-none"></div>
      </section>

      {/* Metrics Flow */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row justify-between gap-16 text-center md:text-left">
            
            <ScrollReveal className="flex-1">
               <Activity className="w-12 h-12 text-green-500 mb-6 mx-auto md:mx-0" />
               <h3 className="text-4xl font-bold mb-4">Real-Time Haptics</h3>
               <p className="text-gray-400 text-lg font-light leading-relaxed">
                  Uses the Apple Watch accelerometer to measure depth and rate. Feel the rhythm with haptic taps.
               </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="flex-1">
               <BarChart2 className="w-12 h-12 text-blue-500 mb-6 mx-auto md:mx-0" />
               <h3 className="text-4xl font-bold mb-4">Session Analysis</h3>
               <p className="text-gray-400 text-lg font-light leading-relaxed">
                  Instant visual breakdown on your iPhone. Identify fatigue points and improve consistency.
               </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="flex-1">
               <Zap className="w-12 h-12 text-yellow-500 mb-6 mx-auto md:mx-0" />
               <h3 className="text-4xl font-bold mb-4">Metronome</h3>
               <p className="text-gray-400 text-lg font-light leading-relaxed">
                  Audio-visual cues to keep you locked at 100-120 compressions per minute.
               </p>
            </ScrollReveal>

         </div>
      </section>

      {/* Interface Preview */}
      <section className="py-24 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal>
                <h2 className="text-5xl font-bold mb-16 text-center tracking-tight">iPhone Companion App</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                
                {/* Image 1: Results */}
                <div className="flex flex-col items-center">
                   <ScrollReveal>
                       <img src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/5.png" className="h-[500px] rounded-2xl shadow-2xl mb-12" alt="Results" /> 
                       <div className="text-center max-w-sm">
                          <h3 className="text-2xl font-bold text-white mb-4">Granular Performance Data</h3>
                          <p className="text-gray-400 leading-relaxed">Review compression fraction, depth consistency, and recoil velocity immediately after training. Identify your fatigue points.</p>
                       </div>
                   </ScrollReveal>
                </div>

                {/* Image 2: Landscape */}
                <div className="flex flex-col items-center">
                   <ScrollReveal delay={0.2}>
                       <img src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/6.png" className="h-[500px] rounded-2xl shadow-2xl mb-12" alt="Landscape" />
                       <div className="text-center max-w-sm">
                          <h3 className="text-2xl font-bold text-white mb-4">Built for Instructors</h3>
                          <p className="text-gray-400 leading-relaxed">Monitor live feedback data. Control haptic and watch screen behavior. View and store results.</p>
                       </div>
                   </ScrollReveal>
                </div>

            </div>
         </div>
      </section>

      {/* Bottom Banner - Real World Use */}
      <section className="relative w-full h-[80vh] overflow-hidden">
         <div className="absolute inset-0">
             <img 
               src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/7.png" 
               alt="CPR Stat in action" 
               className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         </div>
         <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-8 max-w-7xl mx-auto">
            <ScrollReveal>
               <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Train like a life depends on it.</h2>
               <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light">
                  Bridge the gap between mannequin training and real-world arrest management with wearable biofeedback.
               </p>
            </ScrollReveal>
         </div>
      </section>
    </div>
  );
};