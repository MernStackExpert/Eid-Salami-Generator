"use client";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";
import React from "react";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
    </main>
  );
}