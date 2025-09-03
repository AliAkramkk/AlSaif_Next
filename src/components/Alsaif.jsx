import React from "react";
import img from "next/image";
import { FaRegCommentDots, FaRegStickyNote ,FaCheckCircle} from "react-icons/fa";
const Alsaif = () => {
  return (
    <>
    <div className="bg-white py-10 px-6 md:px-10 md:py-10 overflow-hidden relative">
      <h1 className="text-3xl md:text-8xl text-center font-stretch-50% py-8 md:m-20">
        Shape Your space with <br /> <span className="font-semibold text-purple-900">Al Saif Interiors</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Advice Card */}
        <div className="  md:h-[600px] m-4  md:ml-24 rounded-3xl p-8 flex flex-col ">
     

      {/* Big Heading */}
      <div className="md:flex justify-center gap-y-6 md:gap-6 ">
        <div className="md:w-56 md:h-44 bg-[#fae4ca] rounded-2xl p-4 text-center shadow-md -rotate-2 ">
          <h2 className="md:font-stretch-50% md:text-4xl">Interior Fit Out Services</h2>
          {/* <p className="text-xs md:text-sm mt-2">Discover your brand voice</p> */}
        </div>
        <div className="md:w-56 md:h-44 bg-[#fde68a] rounded-2xl p-4 text-center shadow-md z-10">
          <h2 className="md:font-stretch-50% md:text-4xl">Architectural Design & Consultancy</h2>
        </div>
        <div className="md:w-56 md:h-44 bg-[#fca5a5] rounded-2xl p-4 text-center shadow-md transform rotate-3">
       <h2 className="md:font-stretch-50% md:text-4xl">Maintenance & MEP Solutions</h2>
        </div>
        <div className="md:w-56 md:h-44 bg-[#fde68a] rounded-2xl p-2 text-center shadow-md z-10">
          <h2 className="md:font-stretch-50% md:text-4xl ">3D Visualization & Rendering</h2>
        </div>
         {/* <div className="w-40 h-32 bg-[#fae4ca] rounded-2xl p-4 text-center shadow-md transform rotate-6">
         <h2 className="md:font-stretch-50% md:text-2xl">Interior Design & Consultation</h2>
        </div> */}
      </div>

      {/* Step Cards */}
      <div className="flex justify-center gap-6 mt-10">
        <div className="w-56 h-44 bg-[#fae4ca] rounded-2xl p-4 text-center shadow-md transform -rotate-6">
        <h2 className="md:font-stretch-50% md:text-3xl">Space Planning & Furniture Layouts</h2>
        </div>
        <div className="w-56 h-44 bg-[#fde68a] rounded-2xl p-4 text-center shadow-md z-10">
          <h2 className="md:font-stretch-50% md:text-4xl">Interior Design & Consultation</h2>
        </div>
        <div className="w-56 h-44 bg-[#fca5a5] rounded-2xl p-4 text-center shadow-md transform rotate-6">
         <h2 className="md:font-stretch-50% md:text-3xl">Kiosk Design & Manufacturing</h2>
        </div>
      </div>
    </div>

        {/* Action Card */}
       
      </div>
    </div>
   
    </>
  );
};

export default Alsaif;
