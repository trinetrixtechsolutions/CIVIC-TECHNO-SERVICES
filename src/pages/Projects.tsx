// src/pages/Projects.tsx
import { useState } from "react";
import ScrollToTopArrow from "../components/common/ScrollToTopArrow";
import HeroBg from "../assets/clintlogos/hero_bg_img.png";
import DividerImg from "../assets/clintlogos/download.svg";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../components/projects/projects";
import { motion } from 'framer-motion';

const categories = [
  "All",
  "Commercial",
  "Healthcare",
  "Residential",
  "Industrial",
  "Assembly",
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;

    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.projectType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* HERO SECTION — MATCHING ABOUT */}
      <section className="relative min-h-[60vh] flex items-center justify-center">

        {/* Background Image with Grayscale Filter */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover grayscale"
          style={{ backgroundImage: `url(${HeroBg})` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-left py-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <div className="text-center lg:text-left relative">
              <h2
                className="text-[110px] md:text-[130px] text-[#c59d5f] leading-none"
                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
              >
                Our
              </h2>

              <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[47px] md:text-[65px] leading-[0.5] -mt-6">
                Projects
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 mt-5 max-w-2xl">
              Delivering engineering excellence across industries with precision and integrity.
            </p>
          </motion.div>
        </div>

        {/* Divider Strip */}
        <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 pointer-events-none overflow-hidden">
          <div className="flex w-max">
            {Array.from({ length: 120 }).map((_, i) => (
              <img
                key={i}
                src={DividerImg}
                className="h-6 shrink-0"
                alt=""
              />
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2
            className="text-[120px] text-[#c59d5f] leading-none"
            style={{ fontFamily: "Herr Von Muellerhoff, serif" }}
          >
            Our
          </h2>

          <h1 className="font-primary mb-6 font-black uppercase text-[#111111] text-[47px] -mt-8">
            Portfolio
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Explore our diverse project portfolio across multiple sectors.
          </p>

          {/* FILTER BAR */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">

            {/* Category Filters */}
            <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center md:justify-start gap-2 md:gap-6 order-2 md:order-1 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-1 md:px-6 py-2 rounded-full font-medium transition-all duration-300 text-[10px] sm:text-xs md:text-sm w-full md:w-auto ${activeCategory === cat
                    ? "bg-[#c59d5f] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-[#c59d5f]/20"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72 order-1 md:order-2">

              {/* Search Icon */}
              <svg
                className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search by name, type, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
      w-full
      pl-10 pr-6 py-3
      rounded-full
      border border-black
      focus:border-[#c59d5f]
      focus:outline-none
      transition-colors duration-300
    "
              />

            </div>
          </div>

          {/* GRID — 4 PER ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  image={project.image}
                  name={project.name}
                  description={project.description}
                  projectType={project.projectType}
                  location={project.location}
                  category={project.category}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500">
                No projects found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </section>

      <ScrollToTopArrow />
    </div>
  );
};

export default Projects;