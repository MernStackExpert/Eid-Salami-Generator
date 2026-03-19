import React from "react";
import { Smartphone, CheckCircle, Users } from "lucide-react";

const features = [
  { 
    icon: <Smartphone className="text-[#E2136E]" />, 
    title: "রিয়েল UI", 
    desc: "একদম অরিজিনাল বিকাশ অ্যাপের মতো ডিজাইন ও ফন্ট ব্যবহার করা হয়েছে।" 
  },
  { 
    icon: <CheckCircle className="text-[#E2136E]" />, 
    title: "সহজ ব্যবহার", 
    desc: "মাত্র কয়েক সেকেন্ডে নাম ও টাকা বসিয়ে হাই-কোয়ালিটি ইমেজ ডাউনলোড করুন।" 
  },
  { 
    icon: <Users className="text-[#E2136E]" />, 
    title: "১০০% প্র্যাঙ্ক", 
    desc: "বন্ধুদের সাথে মজার মুহূর্ত তৈরি করার জন্য এটি সেরা একটি টুল।" 
  }
];

export default function Features() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="p-10 border border-gray-100 rounded-[2rem] hover:shadow-2xl hover:shadow-pink-100 transition-all bg-white group">
            <div className="mb-6 bg-[#FDE8EF] w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed text-lg">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}