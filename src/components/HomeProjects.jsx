import React from "react";
import Image from "next/image";
import { homeProjects } from "../data/clientsData";

const ProjectGallery = () => {
  return (
    <section className="bg-slate-50 py-16 px-6 md:px-12">
      {/* Section Title */}
      <h1 className="text-6xl md:text-8xl font-stretch-50% text-center mb-14">
        Our <span className="font-semibold text-purple-900">Recent Works</span>
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {homeProjects.map((project, index) => (
          <div
            key={project.id}
            className={`relative overflow-hidden rounded-3xl shadow-md group 
              ${index % 5 === 0 ? "row-span-1" : ""} 
              ${index % 3 === 0 ? "col-span-2" : ""}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
