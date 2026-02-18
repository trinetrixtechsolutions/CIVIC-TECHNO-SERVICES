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

            {/* Hero Image Section with LayoutId for smooth transition */}
            <motion.div
                className="relative h-[75vh] w-full overflow-hidden"
                layoutId={`project-image-${project.id}`}
            >
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

                {/* Navigation & Content over Image */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <Button
                                onClick={() => navigate('/projects')}
                                startIcon={<ArrowBackIcon />}
                                className="mb-8 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full px-6 py-2 border border-white/20"
                            >
                                All Projects
                            </Button>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl tracking-tight">
                                {project.name}
                            </h1>
                            
                            <div className="flex flex-wrap gap-6 text-white/90 text-lg items-center">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    <span>{project.location}</span>
                                </div>
                                <span className="text-white/40">|</span>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                    <span>{project.client}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Main Content */}
                    <motion.div 
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
                            Project Overview
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-12">
                            {project.detailedDescription}
                        </p>

                        {/* Gallery Grid */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.gallery?.map((img, index) => (
                                <motion.div 
                                    key={index} 
                                    className="rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={img}
                                        alt={`${project.name} gallery ${index + 1}`}
                                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Sidebar Details */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <div className="sticky top-32 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <div className="w-12 h-1.5 bg-blue-600 rounded-full mb-6"></div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">
                                Key Details
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Client</p>
                                        <p className="text-lg font-semibold text-gray-900">{project.client}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                                        <p className="text-lg font-semibold text-gray-900">{project.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-50 rounded-lg text-green-600">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Project Value</p>
                                        <p className="text-xl font-bold text-blue-800">{project.value}</p>
                                    </div>
                                </div>
                                
                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Scope</p>
                                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Button
                                    component={Link}
                                    to="/contact"
                                    variant="contained"
                                    fullWidth
                                    className="bg-blue-800 hover:bg-blue-900 text-white py-4 font-bold rounded-xl shadow-lg shadow-blue-800/30 hover:shadow-xl hover:shadow-blue-800/40 transition-all duration-300"
                                >
                                    Start Similar Project
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectDetails;