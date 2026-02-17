// src/pages/ProjectDetails.tsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { projects } from '../data/projects';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useEffect } from 'react';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
                    <Button
                        component={Link}
                        to="/projects"
                        variant="contained"
                        startIcon={<ArrowBackIcon />}
                        className="bg-blue-800 text-white"
                    >
                        Back to Projects
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Image Section */}
            <motion.div
                className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden"
                layoutId={`project-image-${project.id}`}
            >
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16 container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Button
                            onClick={() => navigate('/projects')}
                            startIcon={<ArrowBackIcon />}
                            className="text-white mb-6 hover:bg-white/20"
                        >
                            Back to Projects
                        </Button>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
                            {project.name}
                        </h1>
                        <div className="flex flex-wrap gap-4 text-blue-100 text-lg">
                            <span>{project.location}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{project.client}</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                {project.detailedDescription}
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Gallery</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.gallery?.map((img, index) => (
                                    <div key={index} className="rounded-lg overflow-hidden shadow-lg h-64">
                                        <img
                                            src={img}
                                            alt={`${project.name} gallery ${index + 1}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar Details */}
                    <div className="lg:col-span-1">
                        <motion.div
                            className="bg-gray-50 p-8 rounded-xl shadow-inner border border-gray-100"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Project Details
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Client</p>
                                    <p className="text-lg font-medium text-gray-900">{project.client}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                                    <p className="text-lg font-medium text-gray-900">{project.location}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Project Value</p>
                                    <p className="text-xl font-bold text-blue-800">{project.value}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Scope</p>
                                    <p className="text-gray-700">{project.description}</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <Button
                                    component={Link}
                                    to="/contact"
                                    variant="contained"
                                    className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 font-bold"
                                >
                                    Discuss Similar Project
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectDetails;
