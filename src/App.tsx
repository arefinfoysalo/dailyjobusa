/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Clock, 
  Briefcase, 
  CheckCircle, 
  DollarSign, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  Globe,
  ChevronDown
} from 'lucide-react';

const TRACKING_URL = "https://www.af9m8trk.com/HMK117TB/QLQ11Y4B/";
const NAVY_BLUE = "#002366";
const ACTION_RED = "#FF4757";

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleInteraction = () => {
    window.location.href = TRACKING_URL;
  };

  const navLinks = [
    { name: "Browse Jobs", slug: "browse-jobs" },
    { name: "Companies", slug: "certified-companies" },
    { name: "Remote Guide", slug: "remote-success-guide" },
    { name: "Verify Residency", slug: "verify-identity" }
  ];

  const trustCompanies = [
    { name: "WorkSpace Inc.", icon: "🏢" },
    { name: "GlobalConnect", icon: "🌐" },
    { name: "TechFlow", icon: "💻" },
    { name: "NovaSolutions", icon: "🚀" },
    { name: "StaffUSA", icon: "🇺🇸" }
  ];

  const jobOpenings = [
    { title: "Remote Data Entry Clerk", category: "Administrative", slug: "remote-data-entry-clerk", pay: "$28/hr" },
    { title: "Virtual Customer Success", category: "Support", slug: "virtual-customer-success", pay: "$32/hr" },
    { title: "Transcription Specialist", category: "Editorial", slug: "transcription-specialist", pay: "$25/hr" },
    { title: "Online Support Chat", category: "Support", slug: "online-chat-support", pay: "$30/hr" },
    { title: "Content Moderator", category: "Operations", slug: "content-moderator-us", pay: "$27/hr" },
    { title: "Executive Assistant", category: "Management", slug: "remote-exec-assistant", pay: "$42/hr" }
  ];

  const footerLinks = ["Privacy Policy", "Terms of Service", "Contact Us", "DMCA"];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-600">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md h-20 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tight text-[#002366]">
                DailyJobs™
              </span>
            </div>
            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button 
                  key={link.slug} 
                  onClick={handleInteraction}
                  className="text-sm font-semibold text-slate-500 hover:text-[#002366] transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full">
              <span className="w-2 h-2 bg-[#FF4757] rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-[#FF4757] uppercase tracking-wider">Verification Required</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8 text-center lg:text-left"
              >
                <h1 className="text-5xl font-[900] text-[#002366] leading-[1.1] sm:text-7xl tracking-tighter">
                  Real Remote Work. <br />
                  <span className="text-blue-600">Daily Payouts.</span>
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Access <span className="font-bold text-slate-900">$25-$45 per hour</span> part-time opportunities. Built exclusively for United States residents seeking flexibility.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                  <button 
                    onClick={handleInteraction}
                    className="w-full sm:w-auto bg-[#FF4757] hover:bg-red-600 text-white text-xl font-[900] px-12 py-5 rounded-xl shadow-2xl shadow-red-200 transition-all text-center group active:scale-95"
                  >
                    Apply Here <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </button>
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="flex -space-x-3 mb-2">
                       {[...Array(4)].map((_, i) => (
                         <img key={i} src={`https://i.pravatar.cc/100?u=${i+100}`} className="w-8 h-8 rounded-full border-2 border-white" alt="v" />
                       ))}
                    </div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                      5,204 Applicants this hour
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-16 lg:mt-0 relative group"
              >
                <div 
                  onClick={handleInteraction} 
                  className="block relative aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2000" 
                    alt="Trusted Marketplace" 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002366] via-[#002366]/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
                    <div>
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400">★</span>)}
                      </div>
                      <p className="text-white text-2xl font-black">Rated 4.9/5 by Workers</p>
                      <p className="text-blue-100/70 text-sm">Verified through independent audit</p>
                    </div>
                    <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                      <ShieldCheck className="w-8 h-8 text-[#002366]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Trust Section */}
        <section className="bg-gray-50/50 border-y border-gray-100 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-center text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 mb-10">
              Trusted for remote hirings by
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale">
              {trustCompanies.map((company) => (
                <div key={company.name} className="flex items-center gap-2">
                  <span className="text-2xl">{company.icon}</span>
                  <span className="font-bold text-lg tracking-tight">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Job Listings with Slugs */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex items-end justify-between mb-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-extrabold text-[#002366] mb-4">Latest US Verified Openings</h2>
                <p className="text-slate-500 font-medium">All jobs listed below are currently active and strictly for USA residents. Click any to begin verification.</p>
              </div>
              <button onClick={handleInteraction} className="hidden md:flex items-center text-blue-600 font-bold hover:underline gap-2">
                View All Listings <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobOpenings.map((job) => (
                <motion.div 
                  key={job.slug}
                  whileHover={{ y: -5 }}
                  onClick={handleInteraction}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-50 text-[#002366] text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {job.category}
                    </span>
                    <span className="text-green-600 font-bold text-lg">{job.pay}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center text-[11px] text-slate-400 font-mono tracking-tighter">
                      <Globe className="w-3 h-3 mr-1" />
                      slug: <span className="text-slate-500 ml-1">dailyjobs.us/{job.slug}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-500 pt-4 border-t border-slate-50">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Fully Remote</span>
                      <span className="flex items-center gap-1 text-red-500"><Zap className="w-3 h-3" /> Urgent Hire</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center md:hidden">
              <button 
                onClick={handleInteraction}
                className="w-full bg-slate-50 text-slate-900 border border-slate-200 py-4 rounded-xl font-bold"
              >
                Browse All Openings
              </button>
            </div>
          </div>
        </section>

        {/* Expanded Trust Details */}
        <section className="bg-[#002366] py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute border border-white rounded-full translate-x-[-50%]" style={{ width: i*200, height: i*200 }}></div>
            ))}
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10 text-center">
            <h2 className="text-white text-3xl md:text-5xl font-[900] mb-16 tracking-tight">Verified Secure Marketplace</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Identity Protection", desc: "Your data is only used for verification. We follow strict US Privacy Laws during email submission.", icon: ShieldCheck },
                { title: "Guaranteed Payouts", desc: "Employers are required to process payments through verified platforms like PayPal or Direct Deposit.", icon: DollarSign },
                { title: "Resident Exclusive", desc: "By restricting access to US residents, we ensure higher hourly rates for our community.", icon: Globe }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl">
                  <div className="bg-blue-400/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <item.icon className="w-8 h-8 text-blue-300" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-blue-100/60 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer (Dark Luxury Theme) */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-10 text-center">
          <div className="flex justify-center flex-wrap gap-8 text-[11px] uppercase font-black tracking-[0.2em]">
            {footerLinks.map((item, idx) => (
              <a key={idx} href={TRACKING_URL} className="hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
          
          <div className="h-px bg-slate-800 w-full"></div>
          
          <p className="text-[12px] leading-relaxed opacity-60 text-slate-400 font-light max-w-2xl mx-auto italic">
            DailyJobs is a job matching platform. We are not a direct employer. By clicking 'Apply', you will be redirected to our partner's secure email submission page. This offer is valid for United States residents only.
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-[10px] opacity-40 tracking-widest uppercase">&copy; {new Date().getFullYear()} DailyJobs Interactive. All Rights Reserved.</p>
            <p className="text-[9px] opacity-20 uppercase font-mono tracking-widest">Authorized US Employment Relay • #774-DJ-PRO</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

