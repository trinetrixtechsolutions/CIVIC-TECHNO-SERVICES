// src/pages/Projects.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { projects } from '../data/projects';
import { Button } from '@mui/material';

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
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Our <span className="text-blue-800">Projects</span>
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Major Executions Across Diverse Industries
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Introduction */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Project Portfolio</h2>
                        <div className="w-24 h-1 bg-blue-800 mb-6"></div>
                        <p className="text-lg text-gray-700 mb-8">
                            With 38+ major industrial and institutional projects delivered, Civic Techno Services has established a strong track record of successful project execution across India and internationally.
                        </p>
                        <Button
                            component={Link}
                            to="/project-schedule"
                            variant="outlined"
                            className="border-blue-800 text-blue-800 hover:bg-blue-50 px-8 py-3 font-bold"
                        >
                            View Full Project Schedule
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section ref={ref} className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <Link to={`/projects/${project.id}`} className="block relative group overflow-hidden h-56">
                                    <motion.img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        layoutId={`project-image-${project.id}`}
                                    />
                                    {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-0 transition-all duration-300">
                                            <Button variant="contained" className="bg-white text-blue-900 hover:bg-gray-100">
                                                View Details
                                            </Button>
                                        </div>
                                    </div> */}
                                </Link>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                                        <Link to={`/projects/${project.id}`} className="hover:text-blue-800 transition-colors">
                                            {project.name}
                                        </Link>
                                    </h3>
                                    {/* <div className="mb-4 space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Client:</span>
                                            <span className="font-medium text-gray-900">{project.client}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Location:</span>
                                            <span className="font-medium text-gray-900">{project.location}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Value:</span>
                                            <span className="font-bold text-blue-800">{project.value}</span>
                                        </div>
                                    </div> */}
                                    {/* <p className="text-gray-700 text-sm line-clamp-3 mb-4 flex-grow">{project.description}</p> */}
                                    {/* <Button
                                        component={Link}
                                        to={`/projects/${project.id}`}
                                        variant="outlined"
                                        className="w-full border-blue-800 text-blue-800 hover:bg-blue-50 mt-auto"
                                    >
                                        View Project
                                    </Button> */}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div >
            </section >
        </div >
    );
};

export default Projects;