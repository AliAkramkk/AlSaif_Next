import React from 'react';
import clients from '../data/clientsData';

const Clients = () => {
  const allClients = [...clients, ...clients]; // duplicate for smooth loop

  return (
  <div className="bg-slate-50 py-10 px-6 md:px-10 md:py-3 overflow-hidden relative space-y-10">
      {/* Inline keyframe CSS */}
      <style>
        {`
          @keyframes slideLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes slideRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .slider:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Title */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full text-center">
         
        </div>
      </div>

      {/* First Slider (Big Clients - Right to Left) */}
      <div className="w-full overflow-hidden">
        <div
          className="flex space-x-10 w-max hover:animate-none"
          style={{
            animation: 'slideLeft 140s linear infinite ',
          }}
        >
          {allClients.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={client.name}
              className="h-10 md:h-14 w-auto object-contain hover:grayscale-0 transition duration-300 bg-transparent"
            />
          ))}
        </div>
      </div>

      {/* Second Slider (Normal Clients - Left to Right) */}
      <div className="w-full overflow-hidden">
        <div
          className="flex space-x-10 w-max slider"
          style={{
            animation: 'slideRight 70s linear infinite',
          }}
        >
          {allClients.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={client.name}
              className="h-7 md:h-10 w-auto object-contain hover:grayscale-0 transition duration-300 bg-transparent"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
