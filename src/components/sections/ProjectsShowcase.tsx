// src/components/sections/ProjectsShowcase.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProjectsShowcase: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15
    });

    const projects = [
        {
            name: "Maruti Suzuki Battery Plant",
            client: "Maruti Suzuki",
            location: "Gujarat",
            value: "446 Lakhs"
        },
        {
            name: "National Dairy Development Board",
            client: "NDDB",
            location: "Odisha",
            value: "465 Lakhs"
        },
        {
            name: "IIT Guwahati Testing Lab",
            client: "IIT Guwahati",
            location: "Assam",
            value: "145 Lakhs"
        },
        {
            name: "National Institute of Animal Biotechnology",
            client: "NIAB",
            location: "Hyderabad",
            value: "215 Lakhs"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0, rotateX: -10 },
        visible: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full filter blur-3xl opacity-60 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-blue-600 font-semibold uppercase tracking-widest mb-4 block">Our Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A glimpse of our major executions across diverse industries, showcasing our expertise and commitment.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                        >
                            {/* Top Gradient Strip */}
                            <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:h-24 transition-all duration-500 ease-in-out flex items-center justify-center overflow-hidden">
                                <motion.span 
                                    className="opacity-0 group-hover:opacity-100 text-white font-bold text-lg transition-opacity duration-300"
                                    initial={{ y: 20 }}
                                    whileHover={{ y: 0 }}
                                >
                                    {project.value}
                                </motion.span>
                            </div>

                            <div className="p-6 relative bg-white group-hover:bg-slate-50 transition-colors duration-300">
                                {/* Value Badge */}
                                <div className="absolute top-[-16px] right-6 bg-white border border-gray-200 px-4 py-1 rounded-full shadow-sm group-hover:opacity-0 transition-opacity duration-300">
                                    <span className="font-bold text-blue-800 text-sm">{project.value}</span>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-4 mt-2 line-clamp-2">{project.name}</h3>
                                
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                        <span className="font-medium">{project.client}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        <span>{project.location}</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <Link to="/projects" className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        View Details 
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Button
                        component={Link}
                        to="/projects"
                        variant="contained"
                        className="bg-blue-800 hover:bg-blue-900 text-white px-10 py-4 font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        Explore All Projects
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsShowcase;