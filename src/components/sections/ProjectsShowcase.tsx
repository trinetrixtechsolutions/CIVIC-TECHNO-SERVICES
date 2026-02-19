// src/components/sections/ProjectsShowcase.tsx

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

// Images
import MarutiImg from '../../assets/projects_images/Maruti_Suzuki_Battery_Plant.png';
import NDDBImg from '../../assets/projects_images/National_Dairy_Development_Board.png';
import IITImg from '../../assets/projects_images/IIT_Guwahati_Testing_Lab.png';
import NIABImg from '../../assets/projects_images/National_Institute_of_Animal_Biotechnology.png';

const ProjectsShowcase: React.FC = () => {
    const navigate = useNavigate();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15
    });

    const projects = [
        {
            name: "Maruti Suzuki Battery Plant",
            client: "Maruti Suzuki",
            location: "Gujarat",
            image: MarutiImg
        },
        {
            name: "National Dairy Development Board",
            client: "NDDB",
            location: "Odisha",
            image: NDDBImg
        },
        {
            name: "IIT Guwahati Testing Lab",
            client: "IIT Guwahati",
            location: "Assam",
            image: IITImg
        },
        {
            name: "National Institute of Animal Biotechnology",
            client: "NIAB",
            location: "Hyderabad",
            image: NIABImg
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    return (
        <section ref={ref} className="py-24 lg:py-28 bg-white relative overflow-hidden">

            {/* Subtle Gold Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c59d5f]/10 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c59d5f]/10 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    className="relative mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* View All Button */}
                    <div className="absolute right-0 top-16 hidden md:block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/projects")}
                            className="px-8 py-3 bg-[#c59d5f] text-black font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-[#b88c47] transition-all duration-300"
                        >
                            View All
                        </motion.button>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        {/* Script Heading */}
                        <h2
                            className="text-[60px] md:text-[100px] lg:text-[120px] text-[#c59d5f] leading-none"
                            style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                        >
                            Our
                        </h2>

                        {/* Main Heading */}
                        <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#111111] text-[28px] md:text-[40px] lg:text-[47px] leading-[0.8] -mt-2 md:-mt-6 lg:-mt-8 mb-6">
                            Featured Projects
                        </h1>

                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            A showcase of precision-driven engineering excellence
                            across industrial and infrastructure sectors.
                        </p>

                        {/* Mobile Button */}
                        <div className="mt-8 md:hidden">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("/projects")}
                                className="px-8 py-3 bg-[#c59d5f] text-black font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-[#b88c47] transition-all duration-300"
                            >
                                View All
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            onClick={() => navigate("/projects")}
                            className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                        >

                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition duration-500"></div>

                            {/* Bottom Info */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                                <h3 className="text-lg font-bold mb-2">
                                    {project.name}
                                </h3>

                                <div className="text-sm text-gray-200 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <p>
                                        <span className="font-semibold text-[#c59d5f]">Client:</span> {project.client}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-[#c59d5f]">Location:</span> {project.location}
                                    </p>
                                </div>

                            </div>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default ProjectsShowcase;
