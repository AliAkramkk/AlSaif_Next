import React from "react";
import { useRouter } from "next/router";
import { homeProjects } from "../data/clientsData";

const HomeProjects = () => {
  const router = useRouter();

  return (
    <div className="hidden md:block">
      <div className="bg-slate-50 flex flex-col md:flex-row h-[80vh] overflow-hidden">
        {homeProjects.map((project) => (
          <div
            key={project.id}
            className="relative flex-1 group overflow-hidden border-r border-gray-200 last:border-none"
          >
            {/* Vertical text */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-300 group-hover:opacity-0">
              <p className="transform rotate-0 md:rotate-90 text-gray-900 tracking-wider text-base  font-semibold">
                {project.title}
              </p> 
            </div>

            {/* Image and overlay */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-[700px] w-[550px] object-scale-down opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <div className="absolute inset-0 flex items-start justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white p-6 shadow-lg max-w-[80%] max-h-[50%]">
                <h4 className="text-sm text-gray-500 uppercase">Setup  {project.number}</h4>
                <h2 className="text-lg font-semibold">➔{project.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{project.subtitle}</p>
                <button
                  onClick={() => router.push(`/project/${project.id}`)}
                  className="text-sm text-blue-600 mt-4 hover:underline"
                >
                  See Detail →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
