import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPath, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'eResus', path: '/eresus' },
    { name: 'Aspis', path: '/aspis' },
    { name: 'CPR Stat', path: '/cprstat' },
    { name: 'Prescription, Please', path: '/prescription' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled || isMenuOpen 
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent pt-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer group" 
              onClick={() => onNavigate('/')}
            >
              <img 
                className="h-10 w-auto rounded-xl shadow-lg shadow-blue-900/20 transition-transform duration-500 group-hover:scale-105" 
                src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Logo%20FINAL%20(2).png" 
                alt="Aegis Medical Solutions" 
              />
              <span className="ml-4 text-xl font-bold tracking-tight text-white">
                Aegis<span className="text-blue-500">Tech</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => onNavigate(link.path)}
                    className={`px-5 py-2 text-xs font-medium rounded-full transition-all duration-500 ${
                      currentPath === link.path 
                        ? 'bg-white text-black shadow-lg' 
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <div className="pl-4 ml-2">
                <a 
                  href="https://www.aegismedicalsolutions.co.uk" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20"
                >
                  Main Site <ExternalLink className="ml-1.5 h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none p-2 rounded-full text-white hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-4 pb-8 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      onNavigate(link.path);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-5 py-4 rounded-2xl text-lg font-medium transition-colors ${
                      currentPath === link.path
                        ? 'bg-white/10 text-white'
                        : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto pt-24 pb-6 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  className="h-10 w-auto rounded-lg" 
                  src="https://145955222.fs1.hubspotusercontent-eu1.net/hubfs/145955222/AMS/Logo%20FINAL%20(2).png" 
                  alt="Aegis Medical Solutions" 
                />
                <span className="ml-4 text-xl font-bold text-white tracking-tight">
                  Aegis Tech
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Empowering pre-hospital care with intelligent, reliable digital solutions. Designed in the UK for the front line.
              </p>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-xs font-bold text-white tracking-widest uppercase mb-8">Technologies</h3>
              <ul className="space-y-4">
                <li><button onClick={() => onNavigate('/eresus')} className="text-sm text-gray-500 hover:text-blue-400 transition-colors">eResus</button></li>
                <li><button onClick={() => onNavigate('/aspis')} className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Aspis</button></li>
                <li><button onClick={() => onNavigate('/cprstat')} className="text-sm text-gray-500 hover:text-blue-400 transition-colors">CPR Stat</button></li>
                <li><button onClick={() => onNavigate('/prescription')} className="text-sm text-gray-500 hover:text-blue-400 transition-colors">Prescription, Please</button></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-xs font-bold text-white tracking-widest uppercase mb-8">Connect</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-gray-500">
                   <a href="mailto:tech@aegismedicalsolutions.co.uk" className="hover:text-blue-400 transition-colors">Contact Support</a>
                </li>
                <li>
                  <a href="https://www.aegismedicalsolutions.co.uk" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                    Corporate Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Aegis Medical Solutions Ltd.
            </p>
            <p className="text-xs text-gray-600 mt-2 md:mt-0">
              Made for life savers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};