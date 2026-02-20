import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Electrical Infrastructure",
    description:
      "HT & LT Panels, Transformers, Cable Laying, Distribution Boards, DG & UPS Installations.",
    image:
      "https://s3.amazonaws.com/brt.org/GettyImages-875327478-5.jpg?width=2000",
  },
  {
    title: "HVAC & High-Side Engineering",
    description:
      "Clean Rooms, Chillers, AHU Systems, Ventilation & Humidification Systems.",
    image:
      "https://www.rsi.edu/wp-content/uploads/hvac-engineer-working-on-hvac.jpg",
  },
  {
    title: "Automation & Smart Systems",
    description:
      "BMS Systems, Smart Controls, Energy Monitoring & Optimization.",
    image:
      "https://www.iot-now.com/wp-content/uploads/2021/10/Smart-Home-Automation-System.jpg",
  },
  {
    title: "Electronic Management System (EMS)",
    description:
      "Smart Electronic Monitoring, Energy Data Analysis, Load Optimization & Digital Control Solutions.",
    image:
      "https://newgensoft.com/in/wp-content/uploads/sites/3/2025/03/Electronic-Document-Management-scaled.jpg",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveIndex(0);
    else if (latest < 0.5) setActiveIndex(1);
    else if (latest < 0.75) setActiveIndex(2);
    else setActiveIndex(3);
  });

  // Smoothly slide each card up from below the screen (100vh) to its natural position (0vh)
  const yCard2 = useTransform(scrollYProgress, [0.15, 0.35], ["100vh", "0vh"]);
  const yCard3 = useTransform(scrollYProgress, [0.45, 0.65], ["100vh", "0vh"]);
  const yCard4 = useTransform(scrollYProgress, [0.75, 0.95], ["100vh", "0vh"]);

  const cardYs = [null, yCard2, yCard3, yCard4];

  return (
    // 400vh gives us enough scroll distance to comfortably trigger 3 sequential parallax animations
    <section ref={containerRef} className="bg-white relative w-full h-[400vh]">

      {/* 
        This is the single overarching sticky container. 
        It sticks slightly below the main navbar (top-[80px]) to prevent overlapping, 
        and its height takes up exactly the rest of the screen. 
        As long as the user scrolls within the 400vh parent, this ENTIRE block stays perfectly still.
      */}
      <div className="sticky top-[80px] h-[calc(100vh-80px)] w-full overflow-hidden flex flex-col pt-6 z-30">

        {/* Subtle Gold Glow Background Layout */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c59d5f]/10 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c59d5f]/10 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>

        {/* Header Section remains totally fixed inside the sticky container */}
        <div className="container mx-auto px-6 relative z-10 flex-shrink-0">
          <div className="relative flex flex-col items-center">

            {/* Desktop View All */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block z-20">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/services")}
                className="px-8 py-3 bg-[#c59d5f] text-white font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-gray-900 transition-colors duration-300"
              >
                View All
              </motion.button>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h2
                className="text-[50px] md:text-[80px] lg:text-[100px] text-[#c59d5f] leading-none -mb-2 md:-mb-4"
                style={{ fontFamily: "Herr Von Muellerhoff, serif" }}
              >
                Our
              </h2>

              <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#111111] text-[24px] md:text-[36px] lg:text-[42px] leading-[0.8] mb-4">
                Services
              </h1>

              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed hidden sm:block">
                Delivering integrated engineering solutions built on precision,
                accountability, and technical excellence.
              </p>

              {/* Mobile View All */}
              <div className="mt-4 md:hidden">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/services")}
                  className="px-6 py-2 text-sm bg-[#c59d5f] text-white font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-gray-900 transition-colors duration-300"
                >
                  View All
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Dynamic Banners Container */}
        {/* We use flex-grow so it perfectly spans the remaining bottom height of the screen */}
        <div className="relative w-full flex-grow z-10 mx-auto px-0 bg-white flex flex-col justify-end">

          {/* Setting the height of the card block slightly larger to reduce the gap to the header */}
          <div className="relative w-full h-[60vh] md:h-[65vh]">

            {/* Pagination Dots Overlay - Centered at the top of the cards */}
            <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-50">
              {services.map((_, idx) => (
                <motion.div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-8 bg-[#c59d5f]" : "w-2 bg-gray-300"
                    }`}
                />
              ))}
            </div>

            {services.map((service, index) => {
              const isFirst = index === 0;
              return (
                <motion.div
                  key={index}
                  // The first card stays pinned at 0. Subsequent cards use our scroll transforms to slide up!
                  style={{ y: isFirst ? 0 : cardYs[index] || 0 }}
                  className="absolute inset-x-0 bottom-0 w-full h-full cursor-pointer group bg-black"
                  onClick={() => navigate("/services")}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      // Removed hover scaling effect as requested
                      className="w-full h-full object-cover transition-transform duration-1000"
                    />
                  </div>

                  {/* Top Gradient for text readability since text is now at the top */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent"></div>

                  {/* Card Content Layout (Moved to Top) */}
                  <div className="absolute inset-0 flex flex-col justify-start px-6 pt-16 md:px-12 md:pt-24 text-white container mx-auto">
                    <div className="max-w-3xl">

                      <h3 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 font-primary uppercase tracking-tight leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-sm md:text-xl text-gray-200 mb-6 max-w-2xl font-medium leading-relaxed hidden sm:block">
                        {service.description}
                      </p>

                      <button className="flex items-center gap-2 text-[#c59d5f] font-bold text-xs md:text-sm uppercase tracking-wider relative overflow-hidden group/btn">
                        <span className="relative z-10 flex items-center gap-2">
                          Explore Service
                          {/* Removed arrow translation hover effect as requested */}
                          <span>→</span>
                        </span>
                      </button>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
