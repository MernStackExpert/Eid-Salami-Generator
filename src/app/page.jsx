"use client";
import React, { useState, useRef, useEffect } from "react";
import { domToPng } from "modern-screenshot";
import {
  EyeOff,
  Copy,
  Share2,
  ArrowRight,
  Star,
  RefreshCw,
  PhoneCall,
} from "lucide-react";

export default function EidSalami() {
  const [number, setNumber] = useState("01908716502");
  const [amount, setAmount] = useState("2,005.00");
  const [name, setName] = useState("MD NIROB ISLAM");
  const [type, setType] = useState("সেন্ড মানি");
  const [time, setTime] = useState("");
  const [trxId, setTrxId] = useState("");
  const receiptRef = useRef(null);

  useEffect(() => {
    const now = new Date();
    const formattedTime = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
      .format(now)
      .replace(",", "");

    setTime(formattedTime.toLowerCase());
    generateTrx();
  }, []);

  const generateTrx = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setTrxId(result);
  };

  const downloadReceipt = async () => {
    if (receiptRef.current) {
      try {
        const dataUrl = await domToPng(receiptRef.current, {
          quality: 1,
          scale: 4,
          backgroundColor: "#FFFFFF",
        });
        const link = document.createElement("a");
        link.download = `bkash-receipt.png`;
        link.href = dataUrl;
        link.click();
        generateTrx();
      } catch (err) {
        console.error("Download failed", err);
      }
    }
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center bg-[#F5F5F5] font-sans">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-bold text-[#E2136E] mb-4">
          Eid Salami Pro Generator
        </h2>
        <div className="space-y-3">
          <input
            type="text"
            className="bkash-input"
            placeholder="নাম"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="bkash-input"
            placeholder="নম্বর"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="text"
            className="bkash-input"
            placeholder="টাকা"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            className="bkash-input"
            placeholder="সময় (যেমন: 11:17am 16/02/26)"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button
            onClick={downloadReceipt}
            className="w-full bg-[#E2136E] text-white py-3 rounded-lg font-bold mt-2 active:scale-95 transition-all"
          >
            ডাউনলোড ইমেজ
          </button>
        </div>
      </div>

      <div
        ref={receiptRef}
        className="w-[360px] bg-white relative overflow-hidden flex flex-col shadow-sm"
      >
        <div className="pt-10 pb-6 flex items-center justify-evenly gap-3">
          <h1 className="text-[#139944] text-[16px] tracking-tight font-semibold flex items-baseline gap-1">
            <span className="text-[#f4408e]">আপনার</span>{" "}
            <span className="text-[#E2136E] font-bold">{type}</span>
            <span className="ml-1">সফল হয়েছে</span>
          </h1>

          <div className="flex items-center pt-1">
            <div className="w-[26px] h-[26px] border-[2px] border-[#1BB954] rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[#1BB954]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#D1D1D1] rounded-full flex items-center justify-center text-white font-bold text-xl">
              {number.charAt(0)}
            </div>
            <div className="leading-tight">
              <p className="text-[#333333] font-medium text-[15px]">{number}</p>
              <p className="text-[#666666] text-[14px]">{number}</p>
            </div>
          </div>
          <div className="border border-[#E2136E] rounded-md px-3 py-1 flex items-center gap-2 text-[#E2136E]">
            <PhoneCall size={14} fill="#E2136E" stroke="none" />
            <span className="text-[13px] font-medium">কল</span>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-[#f0f0f0] bg-[#f0f0f0] gap-[0.5px] mt-2">
          <div className="bg-white p-4 font-semibold border-b border-[#f0f0f0]">
            <p className="text-[#999999] text-xs mb-1">সময়</p>
            <p className="text-[#333333] text-[15px]">{time}</p>
          </div>
          <div className="bg-white p-4 font-semibold border-b border-[#f0f0f0]">
            <p className="text-[#999999] text-xs mb-1">ট্রানজেকশন আইডি</p>
            <div className="flex items-center gap-2">
              <p className="text-[#333333] text-[15px] uppercase">{trxId}</p>
              <Copy size={13} className="text-[#E2136E]" />
            </div>
          </div>
          <div className="bg-white p-4 font-semibold">
            <p className="text-[#999999] text-xs mb-1">সর্বমোট</p>
            <p className="text-[#333333] text-[16px]">৳{amount}</p>
            <p className="text-[#999999] text-[13px] mt-0.5">
              ৳{parseFloat(amount.replace(/,/g, "") - 5).toFixed(2)} + ৳5.00
            </p>
          </div>
          <div className="bg-white p-4 font-semibold">
            <p className="text-[#999999] text-xs mb-1">নতুন ব্যালেন্স</p>
            <div className="flex items-center gap-2">
              <p className="text-[#333333] text-[16px]">৳1,556.91</p>
              <EyeOff size={14} className="text-[#E2136E]" />
            </div>
          </div>
          <div className="bg-white p-4 col-span-2 min-h-[55px] border-b border-[#f0f0f0]">
            <p className="text-[#999999] text-xs mb-1">রেফারেন্স</p>
          </div>
        </div>

        <div className="px-4 py-6 flex gap-3">
          <button className="flex-1 border border-[#E2136E] rounded-md py-2.5 flex items-center justify-center gap-2 text-[#E2136E] font-medium text-[13px] font-semibold border-2">
            <div className="border border-[#E2136E] rounded-full p-0.5">
              <RefreshCw size={10} strokeWidth={2.5} />
            </div>
            অটো পে চালু করুন
          </button>
          <button className="flex-1 border border-[#E2136E] rounded-md py-2.5 flex items-center justify-center gap-2 text-[#E2136E] font-medium text-[13px] font-semibold border-2">
            <Share2 size={14} color="#E2136E" strokeWidth={2.5} /> শেয়ার
          </button>
        </div>

        <div className="mt-2 flex flex-col items-center">
          <div className="w-10 h-10 bg-[#E2136E] rounded-full flex items-center justify-center text-white mb-2 shadow-sm">
            <Star size={18} fill="white" stroke="none" />
          </div>
          <p className="text-[11px] text-gray-500">আপনি অর্জন করেছেন</p>
          <p className="text-[#333333] font-bold text-[14px]">
            বিকাশ রিওয়ার্ড পয়েন্ট
          </p>
          <p className="text-[10px] text-gray-400 mt-1">
            পয়েন্ট ব্যবহার করতে{" "}
            <span className="text-[#E2136E]">বিকাশ রিওয়ার্ডস</span> চেক করুন!
          </p>
        </div>

        <div className="bg-[#E2136E] text-white py-3.5 mt-6 flex justify-between items-center px-6">
          <span className="font-bold text-[15px]">হোম-এ ফিরে যাই</span>
          <ArrowRight size={25} />
        </div>
      </div>
    </div>
  );
}
