import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="py-24 lg:py-16 bg-white relative overflow-hidden"
    >
      {/* Subtle Gold Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c59d5f]/10 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c59d5f]/10 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Desktop View All */}
          <div className="absolute right-0 top-40 hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services")}
              className="px-8 py-3 bg-[#c59d5f] text-black font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-[#b88c47] transition-all duration-300"
            >
              View All
            </motion.button>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2
              className="text-[60px] md:text-[100px] lg:text-[120px] text-[#c59d5f] leading-none"
              style={{ fontFamily: "Herr Von Muellerhoff, serif" }}
            >
              Our
            </h2>

            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#111111] text-[28px] md:text-[40px] lg:text-[47px] leading-[0.8] -mt-2 md:-mt-6 lg:-mt-8 mb-6">
              Services
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Delivering integrated engineering solutions built on precision,
              accountability, and technical excellence.
            </p>

            {/* Mobile View All */}
            <div className="mt-8 md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/services")}
                className="px-8 py-3 bg-[#c59d5f] text-black font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-[#b88c47] transition-all duration-300"
              >
                View All
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onClick={() => navigate("/services")}
              className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4">
                  {service.description}
                </p>

                <span className="inline-block text-[#c59d5f] font-semibold text-sm uppercase tracking-wide">
                  Explore →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
