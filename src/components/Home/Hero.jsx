import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
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
          <button className="bg-white text-gray-700 border border-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-sm">
            কিভাবে কাজ করে?
          </button>
        </div>
      </div>
    </section>
  );
}