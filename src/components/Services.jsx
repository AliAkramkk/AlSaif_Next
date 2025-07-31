import React from "react";

const Services = () => {
  return (
    <>
      <div className="font-thin text-xs px-5 mt-5 p-3 mb-10">S E R V I C E S</div>

      <div className="flex items-center justify-between mb-5">
        <div className="font-semibold px-5 text-black md:text-4xl">
          We Deliver Excellence in Every Detail
        </div>
        <div className="ml-auto px-5">
          <a href="/portfolio">
            <button className="relative overflow-hidden px-4 py-2 rounded-full text-xs md:text-sm tracking-widest flex items-center gap-2 group border">
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                View Our Portfolio
              </span>
              <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0" />
            </button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5 m-5">
        
        {/* Interior Fit Out */}
        <div className="shadow-sm p-5 rounded-l-lg">
          <p className="text-lg font-semibold mb-2">Interior Fit Out Services</p>
          <p className="text-sm font-light p-4">
            Al Saif Decor is a trusted leader in interior fit-out solutions across the UAE 
            Whether it is a boutique shop or a large corporate office our skilled team ensures 
            precision style and quality at every stage We deliver complete turnkey solutions 
            with a focus on craftsmanship timelines and client satisfaction
          </p>
        </div>

        {/* Architectural Services */}
        <div className="shadow-sm p-5">
          <p className="text-lg font-semibold mb-2">Architectural Design & Consultancy</p>
          <p className="text-sm font-light p-4">
            Our architectural experts at Al Saif bring a strategic approach to every project 
            We combine creativity with functionality ensuring every structure meets the highest 
            technical standards while reflecting your brands identity Let us help you design 
            sustainable and future-ready spaces
          </p>
        </div>

        {/* Maintenance & MEP Services */}
        <div className="shadow-sm p-5 rounded-r-lg">
          <p className="text-lg font-semibold mb-2 px-4">Maintenance & MEP Solutions</p>
          <p className="text-sm font-light p-4">
            Al Saif provides comprehensive Maintenance and MEP (Mechanical Electrical and Plumbing) 
            services to keep your properties operating at peak efficiency From routine maintenance 
            to complex system installations our professional team delivers reliability and peace of mind
          </p>
        </div>

        {/* Visualization & 3D Designs */}
        <div className="shadow-sm p-5 rounded-l-lg">
          <p className="text-lg font-semibold mb-2 px-4">3D Visualization & Rendering</p>
          <p className="text-sm font-light p-4">
            See your dreams come to life with Al Saif high-quality 3D rendering services 
            Ideal for architects developers and interior designers our photo-realistic visualizations 
            help you showcase spaces before they are built — ensuring clarity trust and excitement
          </p>
        </div>

        {/* Interior Design & Consultancy */}
        <div className="shadow-sm p-5">
          <p className="text-lg font-semibold mb-2 px-4">Interior Design & Consultation</p>
          <p className="text-sm font-light p-4">
            Al Saif Decor specializes in bespoke interior design consultancy for residential and commercial projects 
            We create spaces that inspire — blending functionality style and your personal taste 
            From concept to final detailing we transform your ideas into reality
          </p>
        </div>

        {/* Space Planning & Furniture Layouts */}
        <div className="shadow-sm p-5 rounded-r-lg">
          <p className="text-lg font-semibold mb-2 px-4">Space Planning & Furniture Layouts</p>
          <p className="text-sm font-light p-4">
            A smartly planned space can transform the way you live and work 
            Our expert designers at Al Saif optimize layouts to maximize usability 
            comfort and visual appeal — ensuring every square foot serves a purpose without compromising on style
          </p>
        </div>

      </div>
    </>
  );
};

export default Services;
