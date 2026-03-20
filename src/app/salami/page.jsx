"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, Download } from "lucide-react";

export default function SalamiForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("2,005.00");
  const [time, setTime] = useState("");

useEffect(() => {
    const now = new Date();

    const timePart = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(now);

    const datePart = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }).format(now);

    const finalFormatted = `${timePart} ${datePart}`;
    
    setTime(finalFormatted.toLowerCase());
  }, []);

  const handlePreview = () => {
    const query = new URLSearchParams({ name, number, amount, time }).toString();
    router.push(`/salami/preview?${query}`);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-2xl font-bold text-[#E2136E] mb-6 text-center">সালামি তথ্য প্রদান করুন</h2>
        <div className="space-y-5">
          <input type="text" className="bkash-input" placeholder="নাম বা নাম্বার ( উদাহরন - MD NIROB SARKAR )" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" className="bkash-input" placeholder="নাম্বার ( উদাহরন - 01908716502 )" value={number} onChange={(e) => setNumber(e.target.value)} />
          <input type="text" className="bkash-input" placeholder="টাকা ( উদাহরন - 2,005.00)" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <input type="text" className="bkash-input" placeholder="সময় ( উদাহরন - 08:02 am 03/20/26 )" value={time} onChange={(e) => setTime(e.target.value)} />
          
          <div className="flex flex-col gap-3 pt-4">
            <button onClick={handlePreview} className="w-full bg-white border-2 border-[#E2136E] text-[#E2136E] py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#FDE8EF] transition-all cursor-pointer">
              <Eye size={20} /> প্রিভিউ দেখুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}