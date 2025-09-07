import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    title: "18 Years of Expertise",
    description:
      "Proudly shaping Dubai’s interiors for nearly two decades — trusted by leading businesses and elite homeowners alike.",
  },
  {
    title: "Collaborative Approach",
    description:
      "We work hand-in-hand with clients, architects, and developers to deliver interiors that exceed expectations.",
  },
  {
    title: "Luxury Residences",
    description:
      "From penthouses on the Palm to villas in Emirates Hills, we craft bespoke spaces for Dubai’s most prestigious addresses.",
  },
  {
    title: "Corporate & Commercial",
    description:
      "Elegant offices, hospitality venues, and retail spaces designed to inspire, engage, and reflect your brand’s identity.",
  },
  {
    title: "End-to-End Delivery",
    description:
      "From concept design to execution, project management, and finishing — we handle every detail with precision.",
  }
];


const StepCard = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6, once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.9, filter: "blur(6px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0.4, scale: 0.95, filter: "blur(4px)" }
      }
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 relative"
    >
      {/* Number Badge */}
      <div className="absolute -left-6 top-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#1C3F3A] text-white font-bold shadow-md">
        {index + 1}
      </div>

      <h2 className="text-2xl font-semibold text-[#1C3F3A] mb-4">
        {step.title}
      </h2>
      <p className="text-gray-600">{step.description}</p>
    </motion.div>
  );
};

const ServiceCard = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#f7f9fc] to-[#e6f0ec] my-28 mx-4 md:m-24">
      <div className="md:max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6">
        {/* Left fixed heading */}
        <div className="sticky md:top-40 h-fit flex flex-col items-start">
         <h1 className="text-3xl md:text-7xl font-stretch-50% text-[#1C3F3A] m-4 md:m-0 mb-6">
      Designing Dubai’s Interiors<br /> for Over <span className="font-bold ">18</span> Years
    </h1>
    <p className="text-lg text-black font-thin m-4 md:m-0 max-w-sm">
      Specializing in co-operative projects and high-profile residences, we blend luxury, functionality, and timeless design for Dubai’s most discerning clients.
    </p>
        </div>

        {/* Right scroll steps */}
        <div className="space-y-32 relative">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
