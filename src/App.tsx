/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Search, 
  HelpCircle, 
  UserPlus, 
  LogIn, 
  ChevronDown, 
  Globe, 
  SearchIcon,
  Bell,
  ArrowRight,
  Info,
  X,
  ExternalLink,
  Users,
  CreditCard,
  Briefcase,
  Plane,
  Home,
  ShieldCheck,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Components ---

const Navbar = ({ onAuthClick }: { onAuthClick: (type: 'signin' | 'signup') => void }) => {
  return (
    <nav className="bg-irembo-blue text-white py-4 px-6 w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold tracking-tight flex items-center">
            irembo<span className="font-extralight ml-1">Gov</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <button className="flex items-center gap-2 hover:text-irembo-yellow transition-colors">
            <HelpCircle size={18} />
            Support Center
          </button>
          <button onClick={() => onAuthClick('signup')} className="flex items-center gap-2 hover:text-irembo-yellow transition-colors">
            <UserPlus size={18} />
            Sign Up
          </button>
          <button onClick={() => onAuthClick('signin')} className="flex items-center gap-2 hover:text-irembo-yellow transition-colors">
            <LogIn size={18} />
            Log In
          </button>
          <button className="bg-irembo-blue border border-white/40 rounded px-4 py-2.5 flex items-center gap-2 hover:bg-white/10 transition-colors">
            <SearchIcon size={18} />
            Find Applications
          </button>
          <button className="flex items-center gap-2 hover:text-irembo-yellow transition-colors border-l border-white/20 pl-6 ml-2">
            <Globe size={18} />
            English
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const AnnouncementBar = () => (
  <div className="bg-[#FFCB05] text-slate-900 py-3 px-6 flex items-center justify-center gap-3 font-medium text-sm border-b border-[#f0bf00]">
    <div className="flex items-center gap-2">
      <Bell size={18} className="text-irembo-orange animate-pulse" />
      <p>New! The fiscal year 2026/2027 has started. Pay for your family’s mutuelle coverage <span className="text-irembo-blue font-bold underline cursor-pointer">here</span></p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <header className="bg-irembo-blue text-white pt-12 pb-16 px-6 relative overflow-hidden bg-[url('https://irembo.gov.rw/home/assets/img/hero-bg.svg')] bg-cover bg-center min-h-[360px]">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black mb-12 tracking-tight"
        >
          Welcome
        </motion.h1>
        
        <div className="relative max-w-3xl mx-auto">
          <input 
            type="text" 
            placeholder="Search for services" 
            className="w-full bg-white text-slate-800 rounded-lg py-5 pl-14 pr-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-4 focus:ring-irembo-yellow/20 transition-all text-xl"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={28} />
        </div>
      </div>

      {/* Decorative pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
    </header>
  );
};

const ServiceCard = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
  <div className="bg-white border border-slate-100 p-6 rounded-xl hover:shadow-lg transition-all cursor-pointer group hover:border-irembo-blue/20">
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-slate-50 rounded-lg text-irembo-blue group-hover:bg-irembo-blue group-hover:text-white transition-all">
        {icon}
      </div>
      <ExternalLink size={16} className="text-slate-300 group-hover:text-irembo-blue" />
    </div>
    <h3 className="font-semibold text-slate-800 group-hover:text-irembo-blue transition-colors">{title}</h3>
  </div>
);

const AuthModal = ({ isOpen, onClose, type }: { isOpen: boolean, onClose: () => void, type: 'signin' | 'signup' }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-irembo-blue/40 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative z-10 overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-irembo-blue">
              {type === 'signin' ? 'Sign In to IremboGov' : 'Create an Account'}
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X size={20} className="text-slate-400" />
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {type === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Christopher Harris"
                  className="w-full border border-slate-200 rounded-lg py-2.5 px-4 focus:outline-none focus:border-irembo-blue transition-colors"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                placeholder="christopherharis12@gmail.com"
                className="w-full border border-slate-200 rounded-lg py-2.5 px-4 focus:outline-none focus:border-irembo-blue transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full border border-slate-200 rounded-lg py-2.5 px-4 focus:outline-none focus:border-irembo-blue transition-colors"
              />
            </div>
            
            <button className="w-full bg-irembo-blue text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              {type === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              {type === 'signin' ? "Don't have an account?" : "Already have an account?"}
              <button className="ml-1 text-irembo-blue font-bold hover:underline">
                {type === 'signin' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main Page ---

export default function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authType, setAuthType] = useState<'signin' | 'signup'>('signin');
  const [services, setServices] = useState<any>(null);

  useEffect(() => {
    fetch("/api/services")
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setServices(data))
      .catch(err => console.error("Irembo Services Load Failed:", err));
  }, []);

  const openAuth = (type: 'signin' | 'signup') => {
    setAuthType(type);
    setIsAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <AnnouncementBar />
      <Navbar onAuthClick={openAuth} />
      <Hero />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 -mt-20 relative z-20 space-y-12 pb-20">
        
        {/* Update Banner */}
        <div className="bg-white/80 backdrop-blur-md border border-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-irembo-blue shadow-inner border border-blue-100">
              <Bell size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Services on the upgraded IremboGov</h3>
              <p className="text-slate-500 max-w-xl">Experience the upgraded IremboGov! With new features and a smoother experience shaped by your feedback.</p>
            </div>
          </div>
          <button className="bg-irembo-blue text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 group">
            Explore 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-irembo-blue pl-4">Family</h2>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-4 p-8">
              {services?.family?.map((service: string) => (
                <div key={service} className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 py-2 px-3 rounded-lg transition-colors">
                  <span className="text-slate-700 font-medium group-hover:text-irembo-blue">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-irembo-blue pl-4">Identification</h2>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-4 p-8">
              {services?.identification?.map((service: string) => (
                <div key={service} className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 py-2 px-3 rounded-lg transition-colors">
                  <span className="text-slate-700 font-medium group-hover:text-irembo-blue">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-irembo-blue pl-4">Land</h2>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-4 p-8">
              {services?.land?.map((service: string) => (
                <div key={service} className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 py-2 px-3 rounded-lg transition-colors">
                  <span className="text-slate-700 font-medium group-hover:text-irembo-blue">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky Alert (Top right floating) */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-10 right-10 z-[80] max-w-sm"
        >
          <div className="bg-irembo-orange text-white p-5 rounded-xl shadow-2xl relative">
            <button className="absolute top-2 right-2 p-1 hover:bg-white/10 rounded">
              <X size={16} />
            </button>
            <div className="flex gap-4">
              <Info size={24} className="shrink-0" />
              <div className="space-y-2">
                <p className="text-sm font-bold">Imbogamizi mu kwishyura Mituweli, Temporary disruption in...</p>
                <p className="text-[10px] opacity-80 uppercase tracking-widest font-black">Last updated 2 hours ago</p>
                <button className="text-xs font-bold underline">View latest updates</button>
              </div>
            </div>
          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="bg-irembo-blue text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <div className="text-3xl font-black">irembo<span className="font-light">Gov</span></div>
            <p className="text-sm text-blue-100/70">Empowering citizens through efficient government services.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-irembo-yellow">Services</h4>
            <ul className="space-y-2 text-sm text-blue-100/70">
              <li className="hover:text-white cursor-pointer transition-colors">Family Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Identification</li>
              <li className="hover:text-white cursor-pointer transition-colors">Land Registry</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-irembo-yellow">Company</h4>
            <ul className="space-y-2 text-sm text-blue-100/70">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Career</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-irembo-yellow">Support</h4>
            <ul className="space-y-2 text-sm text-blue-100/70">
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
              <li className="hover:text-white cursor-pointer transition-colors">Report Issue</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium opacity-60">
          <p>© 2026 Irembo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isAuthOpen && (
          <AuthModal 
            isOpen={isAuthOpen} 
            onClose={() => setIsAuthOpen(false)} 
            type={authType} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
