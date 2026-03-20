"use client";
import React, { useRef, Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { domToPng } from "modern-screenshot";
import { 
  EyeOff, Eye, Copy, Share2, ArrowRight, Star, 
  RefreshCw, PhoneCall, ChevronLeft, Download, Wifi, Signal, 
  BatteryMedium
} from "lucide-react";

function PreviewContent() {
  const searchParams = useSearchParams();
  const [trxId, setTrxId] = useState("");
  const router = useRouter();
  const receiptRef = useRef(null);

  const [showStatus, setShowStatus] = useState(true);
  const [hideBalance, setHideBalance] = useState(false);

  useEffect(() => {
    const newTrx = "CF92R" + Math.random().toString(36).substring(2, 7).toUpperCase();
    setTrxId(newTrx);
  }, []);

  const name = searchParams.get("name") || "MD NIROB ISLAM";
  const number = searchParams.get("number") || "01908716502";
  const amount = searchParams.get("amount") || "2,005.00";
  const time = searchParams.get("time") || "";


  const downloadReceipt = async () => {
    if (receiptRef.current) {
      const dataUrl = await domToPng(receiptRef.current, { 
        quality: 1, scale: 4, backgroundColor: "#FFFFFF" 
      });
      const link = document.createElement("a");
      link.download = `bkash-salami-${number}.png`;
      link.href = dataUrl;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        
        {/* Header - Mobile friendly */}
        <button onClick={() => router.back()} className="mb-8 flex items-center gap-2 text-gray-500 hover:text-[#E2136E] font-bold transition-colors cursor-pointer mt-15 md:mt-5 ">
          <ChevronLeft size={22} /> তথ্য পরিবর্তন করুন
        </button>

        <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
          
          {/* Left Side: Filters & Download Button */}
          <div className="w-full md:w-80 space-y-6 order-2 md:order-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-6 border-b pb-3">ফিল্টার সিস্টেম</h3>
              
              <div className="space-y-5">
                {/* Toggle 1 */}
                <div className="flex items-center justify-between group cursor-pointer" onClick={() => setShowStatus(!showStatus)}>
                  <span className="text-[15px] font-semibold text-gray-600">Add Home Screen</span>
                  <div className={`w-12 h-6 rounded-full transition-all relative ${showStatus ? 'bg-[#E2136E]' : 'bg-gray-200'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${showStatus ? 'left-7' : 'left-1'}`} />
                  </div>
                </div>

                {/* Toggle 2 */}
                <div className="flex items-center justify-between group cursor-pointer" onClick={() => setHideBalance(!hideBalance)}>
                  <span className="text-[15px] font-semibold text-gray-600">Hide Balance</span>
                  <div className={`w-12 h-6 rounded-full transition-all relative ${hideBalance ? 'bg-[#E2136E]' : 'bg-gray-200'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${hideBalance ? 'left-7' : 'left-1'}`} />
                  </div>
                </div>
              </div>

              {/* Download Button - desktop visible here */}
              <button 
                onClick={downloadReceipt} 
                className="hidden md:flex mt-10 w-full bg-[#E2136E] text-white py-4 rounded-xl font-bold items-center justify-center gap-3 shadow-lg shadow-pink-100 hover:bg-[#c1105d] active:scale-95 transition-all cursor-pointer"
              >
                <Download size={20} /> ডাউনলোড করুন
              </button>
            </div>
          </div>

          {/* Middle: Receipt Preview */}
          <div className="w-full flex justify-center order-1 md:order-2">
            <div className="relative group ">
              {/* Actual bKash Design */}
              <div ref={receiptRef} className="w-full min-w-[360px] bg-white flex flex-col shadow-2xl overflow-hidden ring-1 ring-black/5 min-h-[685px]" style={{ height: 'auto' }}>
                
                {/* Status Bar */}
                {showStatus ? <div className="bg-[#B3B3B3] px-4 py-1.5 flex justify-between items-center text-white scale-y-95 origin-top">
                    <div className="flex items-center gap-1.5 text-[10px] font-medium opacity-90">
                       <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.13a1.002 1.002 0 0 1-.94 0l-7.97-4.13c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.13c.31-.16.63-.16.94 0l7.97 4.13c.32.17.53.5.53.88v9z"/></svg>
                       <span className="mt-0.5">bKash</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold">
                       <Wifi size={11} strokeWidth={3} />
                       <Signal size={11} strokeWidth={3} />
                       <div className="flex items-center border-white/60 px-0.5 rounded-[1px]">
                         <BatteryMedium size={11} strokeWidth={3} />
                       </div>
                       <span className="opacity-90">43%</span>
                    </div>
                  </div> : <div className=" px-4 py-4 flex justify-between items-center text-white scale-y-95 origin-top"></div>}

                {/* Content Header */}
                <div className="pt-10 pb-6 flex items-center justify-center gap-3 px-4">
                  <h1 className="text-[#139944] text-[16px] tracking-tight font-semibold flex items-baseline gap-1">
                    <span className="text-[#f4408e]">আপনার</span> <span className="text-[#E2136E] font-bold">সেন্ড মানি</span> <span className="ml-1 text-[#139944]">সফল হয়েছে</span>
                  </h1>
                  <div className="w-[26px] h-[26px] border-[2.5px] border-[#1BB954] rounded-full flex items-center justify-center pt-0.5 shrink-0">
                    <svg className="w-4 h-4 text-[#1BB954]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                </div>

                {/* User Identity */}
                <div className="px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#D1D1D1] rounded-full flex items-center justify-center text-white font-bold text-xl uppercase">{name.charAt(0)}</div>
                    <div className="leading-tight">
                      <p className="text-[#333333] font-bold text-[15px]">{name}</p>
                      <p className="text-[#666666] text-[14px]">{number}</p>
                    </div>
                  </div>
                  <div className="border border-[#E2136E] rounded-md px-3 py-1 flex items-center gap-2 text-[#E2136E] shrink-0">
                    <PhoneCall size={14} fill="#E2136E" stroke="none" /> <span className="text-[13px] font-bold">কল</span>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 border-t border-[#f0f0f0] bg-[#f0f0f0] gap-[0.5px] mt-2">
                  <div className="bg-white p-4 font-semibold border-b border-[#f0f0f0]">
                    <p className="text-[#999999] text-[11px] mb-1 font-semibold uppercase tracking-wider">সময়</p>
                    <p className="text-[#333333] text-[14px]">{time}</p>
                  </div>
                  <div className="bg-white p-4 font-semibold border-b border-[#f0f0f0]">
                    <p className="text-[#999999] text-[11px] mb-1 font-semibold uppercase tracking-wider">ট্রানজেকশন আইডি</p>
                    <div className="flex items-center gap-2">
                      <p className="text-[#333333d7] text-[14px] uppercase font-bold  tracking-[1px]">{trxId || "GENERATING..."}</p>
                      <Copy size={13} className="text-[#E2136E]" />
                    </div>
                  </div>
                  <div className="bg-white p-4 font-semibold">
                    <p className="text-[#999999] text-[11px] mb-1 font-semibold uppercase tracking-wider">সর্বমোট</p>
                    <p className="text-[#333333] text-[16px]">৳{amount}</p>
                    <p className="text-[#999999] text-[13px] mt-0.5 font-normal">৳{(parseFloat(amount.replace(/,/g, "")) - 5).toLocaleString()}.00 + ৳5.00</p>
                  </div>
                  <div className="bg-white p-4 font-semibold">
                    <p className="text-[#999999] text-[11px] mb-1 font-semibold uppercase tracking-wider">নতুন ব্যালেন্স</p>
                    <div className="flex items-center gap-2">
                      <p className="text-[#333333] text-[15px] font-semibold">
                        {hideBalance ? "৳ * * * * " : "৳1,556.91"}
                      </p>
                      {hideBalance ? <Eye size={15} className="text-[#E2136E]" /> : <EyeOff size={15} className="text-[#E2136E]" />}
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="px-4 py-6 flex gap-3">
                  <button className="flex-1 border-2 border-[#E2136E] rounded-md py-2.5 flex items-center justify-center gap-2 text-[#E2136E] font-bold text-[13px]">
                    <div className="border border-[#E2136E] rounded-full p-0.5"><RefreshCw size={10} strokeWidth={2.5} /></div> অটো পে চালু করুন
                  </button>
                  <button className="flex-1 border-2 border-[#E2136E] rounded-md py-2.5 flex items-center justify-center gap-2 text-[#E2136E] font-bold text-[13px]">
                    <Share2 size={14}  color="#E2136E" fill="#E2136E" strokeWidth={1} /> শেয়ার
                  </button>
                </div>

                {/* Rewards */}
                <div className="mt-2 flex flex-col items-center pb-8">
                  <div className="w-10 h-10 bg-[#E2136E] rounded-full flex items-center justify-center text-white mb-2 shadow-md"><Star size={18} fill="white" stroke="none" /></div>
                  <p className="text-[11px] text-gray-500 font-medium">আপনি অর্জন করেছেন</p>
                  <p className="text-[#333333] font-bold text-[14px]">বিকাশ রিওয়ার্ড পয়েন্ট</p>
                  <p className="text-[10px] text-gray-400 mt-1 text-center px-4">পয়েন্ট ব্যবহার করতে <span className="text-[#E2136E] font-bold">বিকাশ রিওয়ার্ডস</span> চেক করুন!</p>
                </div>

                <div className="flex-grow min-h-[40px]"></div>

                {/* Footer Nav */}
                <div className="bg-[#E2136E] text-white py-7 rounded-t-xl flex justify-between items-center px-6">
                  <span className="font-bold text-[15px]">হোম-এ ফিরে যাই</span> <ArrowRight size={25} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Download Button - Only visible on mobile */}
          <div className="w-full md:hidden order-3 mt-4">
            <button onClick={downloadReceipt} className="w-full bg-[#E2136E] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-pink-100 active:scale-95 transition-all cursor-pointer">
              <Download size={22} /> ডাউনলোড ইমেজ
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function PreviewPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading Preview...</div>}>
      <PreviewContent />
    </Suspense>
  );
}