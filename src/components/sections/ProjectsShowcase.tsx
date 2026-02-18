// src/components/sections/ProjectsShowcase.tsx

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

// ✅ Import Local Images
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
        hidden: { y: 50, opacity: 0, rotateX: -10 },
        visible: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section ref={ref} className="py-2 bg-white relative overflow-hidden">

            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    className="relative mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* View All Button */}
                    <div className="absolute right-0 top-16">
                        <button
                            onClick={() => navigate("/projects")}
                            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                        >
                            View All
                        </button>
                    </div>

                    <div className="text-center">
                        <span className="text-blue-600 font-semibold uppercase tracking-widest mb-4 block">
                            Our Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A glimpse of our major executions across diverse industries.
                        </p>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            onClick={() => navigate("/projects")}
                            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                        >

                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

                            {/* Bottom Reveal Panel */}
                            <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">

                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {project.name}
                                </h3>

                                <div className="text-sm text-gray-600 space-y-1">
                                    <p>
                                        <span className="font-semibold">Client:</span> {project.client}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Location:</span> {project.location}
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
