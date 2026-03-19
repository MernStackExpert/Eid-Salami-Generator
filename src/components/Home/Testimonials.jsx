import React from "react";

const reviews = [
  {
    name: "নিরব সরকার",
    text: "ভাই জাস্ট জোস! বন্ধুদের ৫০০ টাকা সালামি পাঠিয়ে অবাক করে দিয়েছি। ডিজাইনটা একদম অরিজিনাল।",
    rating: 5
  },
  {
    name: "আরিফ আহমেদ",
    text: "ঈদ আড্ডায় এটা দিয়ে অনেক মজা করেছি। ডাউনলোড করা ইমেজগুলো একদম ক্লিয়ার আসে।",
    rating: 5
  },
  {
    name: "সুমাইয়া আক্তার",
    text: "খুবই সহজ ইন্টারফেস। জাস্ট ডিটেইলস দিলেই কাজ হয়ে যায়। থ্যাংক ইউ ডেভেলপারকে!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">ইউজাররা কি বলছে?</h2>
          <div className="w-20 h-1.5 bg-[#E2136E] mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:border-pink-200 transition-colors">
              <div className="flex gap-1 text-orange-400 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed mb-6">"{review.text}"</p>
              <div className="font-bold text-[#E2136E] flex items-center gap-2">
                <span className="w-6 h-0.5 bg-pink-200"></span> {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}