// src/pages/Projects.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import { projects } from '../data/projects';
import { Button } from '@mui/material';
import HeroBg from '../assets/clintlogos/hero_bg_img.png'; // Importing the Hero Image

const Projects: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    return (
        <div className="bg-white min-h-screen">

            {/* Hero Section with Background Image */}
            <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={HeroBg}
                        alt="Construction Background"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Gradient Overlays for readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50" />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-left py-20">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-200 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        >
                            Civic Techno Services
                        </motion.span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Projects</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                            Delivering excellence through engineering innovation across diverse industries globally.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Button
                                component={Link}
                                to="/project-schedule"
                                variant="contained"
                                size="large"
                                className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-3 shadow-2xl rounded-full transform hover:scale-105 transition-transform duration-300"
                            >
                                View Full Schedule
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Decorative Shape at Bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
                <ScrollToTopArrow />
            </section>

            {/* Projects Introduction */}
            <section className="py-20 lg:py-28 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Project Portfolio
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-600 leading-relaxed mb-10">
                            With <span className="font-bold text-blue-700">38+ major industrial</span> and institutional projects delivered, Civic Techno Services has established a strong track record of successful project execution across India and internationally.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section ref={ref} className="pb-24 lg:pb-32 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100"
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <Link to={`/projects/${project.id}`} className="block relative overflow-hidden h-64">
                                    <motion.img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        layoutId={`project-image-${project.id}`}
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                    {/* Top Tag */}
                                    <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {project.location}
                                    </div>

                                    {/* Content Overlay on Hover */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            <span className="text-blue-300 text-sm font-medium uppercase tracking-wider">{project.client}</span>
                                        </div>
                                    </div>
                                </Link>

                                <div className="p-6 flex flex-col flex-grow relative">
                                    {/* Decorative line */}
                                    <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-b-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                                        <Link to={`/projects/${project.id}`} className="hover:text-blue-700 transition-colors duration-300">
                                            {project.name}
                                        </Link>
                                    </h3>

                                    <div className="flex justify-between items-center text-sm mb-4 border-t border-gray-100 pt-4 mt-auto">
                                        <span className="text-gray-500">Project Value</span>
                                        <span className="font-bold text-blue-800 text-lg">{project.value}</span>
                                    </div>

                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors group/link"
                                    >
                                        View Details
                                        <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Projects;