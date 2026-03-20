"use client";
import React, { useState } from "react";
import {
  Heart,
  Gift,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  X,
  Coffee,
  Coins,
  Cpu,
  Glasses,
  Zap,
  Copy,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

export default function GoribDeveloper() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF5F8] font-sans pb-20">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 text-center">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-[2.5rem] shadow-xl shadow-pink-100 border border-pink-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Coins size={100} />
          </div>

          <div className="w-20 h-20 bg-[#FDE8EF] rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart
              size={40}
              className="text-[#E2136E] animate-pulse"
              fill="#E2136E"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            ডেভেলপার অনেক{" "}
            <span className="text-[#E2136E]">গরিব ও মিসকিন! 😌</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            এই ঈদের খুশিতে অভুক্ত ও অবিবাহিত এই অসহায় এই ডেভেলপারকে আপনার সামর্থ্য অনুযায়ী
            ঈদ সালামি প্রদান করে মুখে হাসি ফোটান 🙂
          </p>

          {/* Reference Card */}
          <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#E2136E] text-left mb-8">
            <p className="text-gray-700 italic text-sm mb-2">
              "নিশ্চয়ই দানশীল পুরুষ ও দানশীল নারী... তাদের জন্য রয়েছে সম্মানজনক
              প্রতিদান।"
            </p>
            <p className="text-[#E2136E] font-bold text-xs uppercase">
              — সূরা আল-হাদিদ, আয়াত: ১৮
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setShowContact(true)}
              className="w-full bg-[#E2136E] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-pink-200 flex items-center justify-center gap-3 active:scale-95 transition-all"
            >
              <Coins size={22} /> গরিবকে সালামি দিন
            </button>

            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Coffee size={16} /> <span>এক কাপ চা পান করালেও সওয়াব হবে!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Funny Content Section */}
      <section className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-4">
            <Gift size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">পাঞ্জাবি গিফট করুন</h3>
          <p className="text-gray-500 text-sm">
            ঈদের দিন পরার মতো কোনো ভালো জামা নেই, দয়া করে একটি পাঞ্জাবি গিফট
            করুন।
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-4">
            <Smartphone size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">ইন্টারনেট বিল দিন</h3>
          <p className="text-gray-500 text-sm">
            এমবি কেনার টাকা নেই ভাই, কোডিং করতে পারছি না। একটু সাহায্য করুন!
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:border-pink-100 transition-all">
          <div className="w-14 h-14 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
            <Cpu size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">পিসি অনেক স্লো</h3>
          <p className="text-gray-500 text-sm">
            একটা কোড রান দিলে পিসি হ্যাং করে, দয়া করে একটা ভালো র‍্যাম বা এসএসডি
            দান করুন।
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:border-pink-100 transition-all">
          <div className="w-14 h-14 bg-cyan-50 text-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
            <Glasses size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">চোখের পাওয়ার শেষ</h3>
          <p className="text-gray-500 text-sm">
            রাত জেগে কোডিং করে চোখের পাওয়ার বারোটা বেজে গেছে। নতুন একটা চশমা
            দরকার ভাই!
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:border-pink-100 transition-all">
          <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
            <Coffee size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">এক কাপ কফি খাওয়ান</h3>
          <p className="text-gray-500 text-sm">
            কফির অভাবে বাগ ফিক্স হচ্ছে না। অন্তত এক কাপ কফি খাওয়ার টাকা পাঠিয়ে
            সওয়াব কামাই করুন।
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:border-pink-100 transition-all">
          <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
            <Zap size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">কারেন্ট বিল বাকি</h3>
          <p className="text-gray-500 text-sm">
            তিন মাসের কারেন্ট বিল বাকি, যে কোনো সময় লাইন কেটে দিবে। পিসি চালাবো
            কিভাবে?
          </p>
        </div>
      </section>

      {/* Contact Modal (Popup) */}
      {showContact && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 pt-12">
              <h2 className="text-2xl font-black text-gray-800 mb-8 flex items-center gap-2">
                <Coins className="text-[#E2136E]" /> গরিবের তথ্য
              </h2>

              <div className="space-y-4 mb-10">
                {/* Mobile Banking Number Card */}
                <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-5 rounded-3xl border border-pink-100 relative group transition-all">
                  <p className="text-[9px] text-[#E2136E] font-black uppercase tracking-widest mb-3">
                    বিকাশ / নগদ / রকেট (সালামি পাঠাতে)
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#E2136E]">
                        <Smartphone size={20} />
                      </div>
                      <p className="text-lg font-black text-gray-800 tracking-wider">
                        01827269974
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("01827269974");
                        alert("সালামি নম্বরটি কপি করা হয়েছে!");
                      }}
                      className="bg-white p-2.5 rounded-xl text-[#E2136E] shadow-sm hover:bg-[#E2136E] hover:text-white transition-all active:scale-90 border border-pink-50"
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                </div>

                {/* Direct Call Option */}
                <a
                  href="tel:01908716502"
                  className="bg-green-50 p-5 rounded-3xl border border-green-100 flex items-center justify-between group hover:bg-green-100 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm text-green-500 group-hover:scale-110 transition-transform">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <p className="text-[9px] text-green-600 font-black uppercase tracking-widest mb-1">
                        সরাসরি গরিব কে কল করুন
                      </p>
                      <p className="text-lg font-black text-gray-800 tracking-wider">
                        01908716502
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-500 text-white p-2 rounded-full animate-pulse">
                    <ArrowRight size={16} />
                  </div>
                </a>

                {/* Email & Address in Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-50 flex flex-col items-center text-center">
                    <Mail size={18} className="text-blue-500 mb-2" />
                    <p className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter">
                      মিসকিন এর ইমেইল
                    </p>
                    <p className="text-[11px] text-gray-700 font-bold truncate w-full">
                      mdnirob30k@gmail.com
                    </p>
                  </div>
                  <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-50 flex flex-col items-center text-center">
                    <MapPin size={18} className="text-emerald-500 mb-2" />
                    <p className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter">
                      গরিবের ঠিকানা
                    </p>
                    <p className="text-[11px] text-gray-700 font-bold">
                      Rajshahi, BD
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="border-t pt-8">
                <p className="text-center text-[10px] font-black text-gray-400 uppercase mb-5 tracking-[0.2em]">
                  সোশ্যাল লিঙ্ক
                </p>
                <div className="flex justify-center gap-5">
                  <a
                    href="https://www.facebook.com/MernStackExpert"
                    target="_blank"
                    className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white hover:border-transparent hover:shadow-lg transition-all"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mdnirobsarkar/"
                    target="_blank"
                    className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white hover:border-transparent hover:shadow-lg transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:mdnirob30k@gmail.com"
                    className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#E2136E] hover:text-white hover:border-transparent hover:shadow-lg transition-all"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 py-4 text-center">
              <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase italic">
                আল্লাহ আপনার মঙ্গল করবেন ইনশাআল্লাহ!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper icon
function Smartphone({ size, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
