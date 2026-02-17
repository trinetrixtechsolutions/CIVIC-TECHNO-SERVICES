// src/components/sections/ProjectsShowcase.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProjectsShowcase: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
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
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section ref={ref} className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        A glimpse of our major executions across diverse industries
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className="h-40 bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <h3 className="text-lg font-bold">{project.name}</h3>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-gray-600 mb-1">Client: {project.client}</p>
                                <p className="text-sm text-gray-600 mb-1">Location: {project.location}</p>
                                <p className="text-lg font-bold text-blue-800">Value: {project.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button
                        component={Link}
                        to="/projects"
                        variant="contained"
                        className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                    >
                        View All Projects
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsShowcase;