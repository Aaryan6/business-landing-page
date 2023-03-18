"use client";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <main
      style={{ backgroundImage: "url(/hero-bg.jpg)" }}
      className={`${montserrat.className} bg-cover bg-fixed`}
    >
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Showcase />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}
