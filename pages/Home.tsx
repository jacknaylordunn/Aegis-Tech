import React, { useRef } from 'react';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={ref} className="relative z-10">
      <motion.img 
        style={{ y }}
        src={src} 
        alt={alt} 
        className={className} 
      />
    </div>
  );
};

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div ref={containerRef} className="overflow-x-hidden bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background - Animated */}
        <div className="absolute inset-0">
           <motion.div 
             animate={{ 
               scale: [1, 1.2, 1],
               opacity: [0.3, 0.5, 0.3], 
             }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/30 blur-[150px] rounded-full mix-blend-screen"
           ></motion.div>
           <motion.div 
             animate={{ 
               scale: [1.2, 1, 1.2],
               opacity: [0.2, 0.4, 0.2], 
               x: [0, 50, 0]
             }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen"
           ></motion.div>
        </div>
        
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
        >
          
          <ScrollReveal delay={0.2}>
            <h1 className="text-7xl md:text-9xl font-semibold tracking-tighter text-white mb-8 leading-[0.95] drop-shadow-2xl">
              Clinical logic.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-300 to-white">
                Perfectly applied.
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 font-light">
              Intelligent digital solutions for pre-hospital care.<br/> 
              Document, decide, and deliver with precision.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => onNavigate('/eresus')} 
                className="bg-blue-600 text-white hover:bg-blue-500 px-10 py-4 text-lg border-0 font-semibold shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all duration-300"
              >
                Explore eResus
              </Button>
              <Button 
                onClick={() => onNavigate('/aspis')} 
                className="!bg-white !text-blue-600 !hover:bg-gray-100 px-10 py-4 text-lg border-0 font-semibold shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all duration-300"
              >
                Discover Aspis
              </Button>
            </div>
          </ScrollReveal>
        </motion.div>
      </section>

      {/* eResus Immersive Section */}
      <section className="relative py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            
            {/* Image Side */}
            <div className="relative order-2 md:order-1">
               <ParallaxImage 
                 src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/1.png" 
                 alt="eResus iPhone" 
                 className="w-full max-w-md mx-auto drop-shadow-[0_0_50px_rgba(255,50,50,0.2)] hover:scale-105 transition-transform duration-1000 ease-out"
               />
               <ScrollReveal>
                 {/* Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none"></div>
               </ScrollReveal>
            </div>

            {/* Text Side */}
            <div className="order-1 md:order-2">
               <ScrollReveal delay={0.2}>
                 <div className="flex items-center space-x-4 mb-8">
                    <img src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/eResus/eResus.svg" className="h-12 w-12 opacity-90" alt="Logo"/>
                    <h2 className="text-3xl font-bold tracking-tight text-white">eResus</h2>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                    Order from <br/> <span className="text-red-500">chaos.</span>
                 </h2>
                 <p className="text-xl text-gray-400 mb-10 max-w-lg font-light leading-relaxed">
                    The cognitive load of a cardiac arrest is immense. eResus handles the logic, timers, and scribing so you can handle the patient.
                 </p>
                 
                 <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button 
                      href="https://eresus.app" 
                      className="bg-red-600 hover:bg-red-700 text-white border-0 px-8 py-3 shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                    >
                      Open Web App
                    </Button>
                    <a href="https://apps.apple.com/gb/app/eresus/id6753123316" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <img 
                        src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg" 
                        alt="Download on the App Store" 
                        className="h-[52px] w-auto"
                      />
                    </a>
                 </div>

                 <button onClick={() => onNavigate('/eresus')} className="mt-8 group text-gray-400 text-base font-medium flex items-center hover:text-white transition-colors">
                    View features <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                 </button>
               </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Aspis Immersive Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-black via-[#0B0F19] to-black">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-24">
               
               <div className="max-w-2xl">
                  <ScrollReveal>
                     {/* Removed Logo/Header as requested */}
                     <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-none">
                        Aspis. <br/> Total Control.
                     </h2>
                     <p className="text-2xl text-gray-400 font-light mb-12">
                        From offline ePRF to fleet management. <br/> The operating system for modern ambulance services.
                     </p>
                     <Button 
                        onClick={() => onNavigate('/aspis')} 
                        className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300"
                     >
                        Explore the Ecosystem
                     </Button>
                  </ScrollReveal>
               </div>

               <div className="relative w-full max-w-2xl">
                  <motion.div
                     animate={{ y: [0, -15, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                     {/* Floating Graphic with Parallax, Drop Shadow for transparency support, no border */}
                     <ParallaxImage 
                       src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/Aspis/Aspis%20(mockup).png" 
                       alt="Aspis Dashboard" 
                       className="w-full drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-700"
                     />
                  </motion.div>
                  <div className="absolute -inset-10 bg-blue-600/10 blur-[80px] -z-10 rounded-full pointer-events-none"></div>
               </div>

            </div>
         </div>
      </section>

      {/* CPR Stat Immersive Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-gray-900/20 to-transparent pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               
               <div className="order-2 md:order-1 flex justify-center">
                  <div className="relative">
                    <ParallaxImage 
                       src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Tech/4.png" 
                       alt="Apple Watch CPR" 
                       className="w-64 md:w-80 drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                    />
                    <div className="absolute inset-0 bg-white/5 blur-[80px] -z-10 pointer-events-none"></div>
                  </div>
               </div>

               <div className="order-1 md:order-2">
                  <ScrollReveal delay={0.2}>
                     <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
                        CPR Stat. <br/> <span className="text-gray-500">Precision on wrist.</span>
                     </h2>
                     <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                        Real-time feedback on compression depth, rate, and recoil. Integrated directly with Apple Watch for seamless training and operational use.
                     </p>
                     <Button onClick={() => onNavigate('/cprstat')} className="bg-gray-800 hover:bg-gray-700 text-white border-0">
                        View Details
                     </Button>
                  </ScrollReveal>
               </div>

            </div>
         </div>
      </section>

      {/* Prescription Please Immersive Section */}
      <section className="relative py-12 md:py-20 bg-[#020808]">
         {/* Ambient Teal Light */}
         <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-teal-900/10 blur-[150px] rounded-full pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-10">
               <ScrollReveal>
                  <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
                     Prescription, <span className="text-teal-500">Please.</span>
                  </h2>
               </ScrollReveal>
               <ScrollReveal delay={0.2}>
                  <p className="text-2xl text-gray-400 font-light max-w-2xl mx-auto">
                     Gamified pharmacology learning. Master medications without the headache.
                  </p>
               </ScrollReveal>
            </div>

            <ScrollReveal delay={0.4}>
               {/* Phone Mockup Floating - No Border, Floating Animation */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="relative max-w-4xl mx-auto cursor-pointer" 
                 onClick={() => onNavigate('/prescription')}
               >
                 <img 
                    src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/Prescription%2c%20Please/1-2.png" 
                    alt="Prescription Please Mockup"
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 drop-shadow-2xl"
                 />
                 
                  {/* Floating Elements behind */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-500/5 blur-[100px] -z-10 rounded-full"></div>
                  
                  <div className="mt-12 text-center">
                     <Button variant="outline" className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10">
                        Start Learning
                     </Button>
                  </div>
               </motion.div>
            </ScrollReveal>
         </div>
      </section>

    </div>
  );
};