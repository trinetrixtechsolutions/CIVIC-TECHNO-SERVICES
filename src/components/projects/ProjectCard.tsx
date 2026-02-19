// src/components/projects/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  projectType: string;
  location: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  name,
  description,
  projectType,
  location,
  category,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">

      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category Badge Overlay (Optional, kept for context) */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
          {category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-grow text-left items-start">

        {/* 1. Name of the Project */}
        <h3
          className="text-base font-bold text-gray-900 mb-2 leading-tight line-clamp-2 w-full text-left"
          title={name}
        >
          {name}
        </h3>

        {/* 2. Description */}
        <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3 flex-grow w-full text-left">
          {description}
        </p>
        
        {/* 3. Client and Location Section */}
        <div className="border-t border-gray-100 pt-3 mt-auto space-y-2 text-xs">

          {/* Client Row */}
          <div className="flex items-center gap-2 text-gray-500 min-w-0">
            <svg
              className="w-3.5 h-3.5 text-[#c59d5f] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>

            <span
              className="font-medium text-gray-700 truncate"
              title={name}
            >
              {typeof name === "string" ? name.split("(")[0] : ""}
            </span>
          </div>

          {/* Location Row */}
          <div className="flex items-center gap-2 text-gray-500 min-w-0">
            <svg
              className="w-3.5 h-3.5 text-[#c59d5f] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span
              className="font-medium text-gray-700 truncate"
              title={location}
            >
              {location || ""}
            </span>
          </div>

          {/* 4. Type of Work */}
          <div className="bg-gray-50 rounded-md px-3 py-2 text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Type of Work</p>
            <p className="text-sm font-bold text-[#c59d5f]">{projectType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;