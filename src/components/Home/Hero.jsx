"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, X, Info, ClipboardList, Eye, Download, Coins } from "lucide-react";

export default function Hero() {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const steps = [
    { icon: <ClipboardList className="text-blue-500" />, text: "প্রথমে Create Now বা Generator-এ ক্লিক করো।" },
    { icon: <Info className="text-[#E2136E]" />, text: "তারপর সঠিক Information ফিলাপ করো।" },
    { icon: <Eye className="text-purple-500" />, text: "Preview-তে ক্লিক করে সব চেক করে নাও।" },
    { icon: <Download className="text-green-500" />, text: "ব্যাস! এবার Download করো। ভেরি ইজি!" }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-[#FFF5F8] to-white pt-32">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-[#E2136E] text-sm font-bold mb-8 border border-pink-100">
          <Sparkles size={16} /> <span>ঈদ স্পেশাল ২০২৬</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
          বিকাশ <span className="text-[#E2136E]">সালামি</span> <br className="hidden md:block" /> প্র্যাঙ্ক জেনারেটর
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          বন্ধুদের সাথে মজার ঈদ সালামি শেয়ার করুন। একদম আসল বিকাশের মতো স্ক্রিনশট তৈরি করে সবাইকে চমকে দিন!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/salami" className="bg-[#E2136E] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#D11162] transition-all flex items-center justify-center gap-2 active:scale-95">
            সালামি বানানো শুরু করুন <ArrowRight size={20} />
          </Link>
          <button 
            onClick={() => setShowHowItWorks(true)}
            className="bg-white text-gray-700 border border-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-sm cursor-pointer"
          >
            কিভাবে কাজ করে?
          </button>
        </div>
      </div>

      {/* How It Works Modal */}
      {showHowItWorks && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setShowHowItWorks(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 pt-12 ">
              <h2 className="text-2xl font-black text-gray-800 mb-8 flex items-center gap-2">
                কিভাবে কাজ করে?
              </h2>

              <div className="space-y-6 mb-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                      {step.icon}
                    </div>
                    <p className="text-gray-700 font-bold text-[15px]">{step.text}</p>
                  </div>
                ))}
              </div>

              {/* Special Note */}
              <div className="bg-pink-50 p-5 rounded-3xl border border-pink-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#E2136E]">
                  <Coins size={24} />
                </div>
                <p className="text-gray-700 font-bold text-sm leading-relaxed">
                  সব তো বুঝলে, কিন্তু <span className="text-[#E2136E]">গরিব ডেভেলপারকে</span> কিছু সালামি দিও কিন্তু! 😉
                </p>
              </div>

              <button 
                onClick={() => setShowHowItWorks(false)}
                className="w-full bg-[#E2136E] text-white py-4 rounded-2xl font-bold mt-8 shadow-lg active:scale-95 transition-all"
              >
                ঠিক আছে, বুঝেছি!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}