"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients";
import Alsaif from "@/components/Alsaif";
import HomeProjects from "@/components/HomeProjects";
import Highlight from "@/components/Highlight";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import SeoHead from "@/components/SeoHead"; // 🛜 Added for SEO

import roomImg from "../../public/assets/hom1.jpg";
import excellence from "../../public/assets/allogo.png";

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
            <h1 className="text-4xl md:text-6xl font-mono leading-tight text-gray-900 md:mt-4">
              Transform Your Workspace with <br />
              <span className="  font-playpen text-blue-800">Al <span className="text-gold"> Saif Dec</span>or</span>
            </h1>
            <p className="text-gray-800 mt-6 font-light text-lg md:w-3/4">
              A well designed space is more than just visual appeal  it is
              where comfort meets creativity  Whether you are structuring a
              new office or upgrading interiors Al Saif Decor brings vision to
              life through thoughtful design quality craftsmanship and
              excellence built over 17 years
            </p>

            <Link href="/contact">
              <button className="relative overflow-hidden px-4 py-2 mt-5 rounded-md text-sm tracking-widest flex items-center gap-2 group border">
                <span className="relative  z-10 text-black group-hover:text-white transition-colors duration-300">
                  EXPLORE NOW
                </span>
                <span className="text-2xl relative z-10 text-black group-hover:text-white transition-colors duration-300">
                  ↗
                </span>
                <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0" />
              </button>
            </Link>

            <div className="mt-4">
              <Image
                src={excellence}
                alt="17 Years of Excellence at Al Saif Decor"
                width={200}
                height={200}
                className="slow-bounce "
                priority
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={roomImg}
              alt="Modern Office Design by Al Saif Decor"
              width={950}
              height={650}
              className="object-contain md:object-cover md:w-[1950px] md:-mt-22 md:ml-20 clip-diagonal"
              priority
            />
          </div>
        </div>
      </div>

      <Clients />
      <Alsaif />
      <HomeProjects />
      <Highlight />
      <Services />
      <Footer />
    </>
  );
}
