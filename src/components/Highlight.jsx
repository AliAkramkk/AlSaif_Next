import React from "react";
import Image from "next/image"; // 👈 this is required
// import img1 from "../assets/proj1.jpg";
// import img2 from "../assets/homecard5.webp";

const Highlight = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-3 py-6 px-6">
        <div className="text-xl md:text-3xl font-mono md:w-1/3">
          We Convert It as per Your Dream
        </div>
        <div className="text-xl md:text-3xl font-mono md:w-2/3 flex flex-col">
          <h1>
            From Structure to Design We are here to help you with your dream
            project.
          </h1>
          <div className="flex md:flex-row items-center justify-between mt-4 font-light">
            <p className="text-xs md:text-sm font-extralight p-3">
              Whether you're building from the ground up or refreshing an
              existing space, our team blends creativity with precision to
              deliver results that reflect your style and needs.
            </p>
            <p className="text-xs md:text-sm font-extralight">
              We handle everything from structure to interior detailing,
              ensuring your journey is smooth, collaborative, and driven by
              quality craftsmanship every step of the way.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 py-6 px-6">
        <div className="flex flex-col gap-4">
          <img
            src="/assets/hom3.jpeg"
            alt="Interior design project"
            className="object-fit "
            width={450}
            height={710}
          />
          {/* <Image
            src="/assets/hom2.jpg"
            alt="Interior design project"
            className="object-cover md:h-[553px]"
            width={950}
            height={710}
          /> */}
        <img
  src="/assets/hom2.jpeg"
  alt="Interior design project"
  className="object-fill md:h-[278px]"
  width={450}
  height={450}
/>
</div>
<div>
<img
  src="/assets/ega.jpeg"
  alt="Finished home project"
  className="object-cover md:h-[553px]"
  width={950}
  height={710}
/>
        </div>
      </div>
    </>
  );
};

export default Highlight;
