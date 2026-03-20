"use client";
import React from "react";
import { Facebook, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-[#E2136E] rounded-lg flex items-center justify-center text-white font-bold shadow-md shadow-pink-100">
              E
            </div>
            <span className="text-xl font-bold text-[#E2136E]">Eid Salami</span>
          </div>

          {/* Disclaimer text */}
          <p className="text-gray-500 text-sm max-w-md mb-8 leading-relaxed">
            এই ওয়েবসাইটটি শুধুমাত্র বিনোদনের উদ্দেশ্যে তৈরি। কোনো ধরনের
            প্রতারণামূলক কাজে এটি ব্যবহার করা সম্পূর্ণ নিষিদ্ধ।
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mb-10">
            <a
              href="https://www.facebook.com/MernStackExpert"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 shadow-sm"
              title="Facebook"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/mdnirobsarkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 shadow-sm"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:mdnirob30k@gmail.com"
              className="w-11 h-11 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#E2136E] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-200 transition-all duration-300 shadow-sm"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Credits & Copyright */}
          <div className="w-full border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm font-medium">
            <p className="flex items-center gap-1">
              Created By{" "}
              <span className="text-[#333333] font-bold hover:text-[#E2136E] transition-colors cursor-pointer">
                MD NIROB SARKAR
              </span>
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#E2136E] transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-[#E2136E] transition-colors">
                Terms
              </a>
            </div>

            <p className="flex items-center gap-1.5 text-xs">
              © {new Date().getFullYear()} Eid Salami Pro. Built with{" "}
              <Heart size={12} fill="#E2136E" stroke="none" /> for fun.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
