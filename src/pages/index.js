"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients";
import Alsaif from "@/components/Alsaif";
import HomeProjects from "@/components/HomeProjects";
import Highlight from "@/components/Highlight";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import SeoHead from "@/components/SeoHead";

import roomImg from "../../public/assets/hom1.jpg";
import excellence from "../../public/assets/allogo.png";
import HighlightStyle from "@/components/HighlightStyle";
import FooterStyle from "@/components/FooterStyle";
import ServiceCard from "@/components/ServiceCard";

// Animation config outside render
const fadeInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SeoHead
        title="Al Saif Decor | Office Interior Design, Structure Work & Fit-Out Solutions in UAE"
        description="Transform your workspace with Al Saif Decor. We specialize in office interior design, complete structure work, and fit-out services across the UAE. Quality, innovation, and excellence since 2006."
        keywords="Office Interior Design, Structure Work, Office Fit-Out UAE, Commercial Interiors, Al Saif Decor, Office Renovation, Interior Contractors UAE"
        canonical="https://www.alsaifdecor.com"
      />

      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4 md:px-20 py-16 lg:-mt-16">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-9xl font-stretch-50% leading-tight text-gray-900">    Transform Your Workspace  
             
            </h1>

          
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={roomImg}
              alt="Modern Office Design by Al Saif Decor"
              width={950}
              height={650}
              className="object-contain md:object-cover md:w-[2550px] md:-mt-22 md:ml-20 clip-diagonal"
              priority
            />
          </div>
        </div>
      </div>
<ServiceCard />
      <Alsaif />
      <HomeProjects />
      <Clients />
      {/* <Highlight /> */}
      {/* <HighlightStyle/> */}
      {/* <Services /> */}
      <FooterStyle />
      <Footer />
    </>
  );
}
