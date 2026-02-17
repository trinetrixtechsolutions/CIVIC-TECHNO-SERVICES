// src/pages/ProjectSchedule.tsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { projectSchedule } from '../data/projectSchedule';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProjectSchedule: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <div className="pt-24 pb-12 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                Project Duration Schedule
                            </h1>
                            <div className="w-20 h-1 bg-blue-800"></div>
                        </div>
                        <Button
                            component={Link}
                            to="/projects"
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                            className="border-blue-800 text-blue-800 hover:bg-blue-50"
                        >
                            Back to Projects
                        </Button>
                    </div>

                    <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
                                        <th className="p-4 font-semibold text-sm uppercase tracking-wider border-b border-blue-900 w-16">SL No</th>
                                        <th className="p-4 font-semibold text-sm uppercase tracking-wider border-b border-blue-900">Project Synopsis</th>
                                        <th className="p-4 font-semibold text-sm uppercase tracking-wider border-b border-blue-900">Client Name</th>
                                        <th className="p-4 font-semibold text-sm uppercase tracking-wider border-b border-blue-900">Type of Work</th>
                                        <th className="p-4 font-semibold text-sm uppercase tracking-wider border-b border-blue-900">Location</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {projectSchedule.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            className={`hover:bg-blue-50 transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                                        >
                                            <td className="p-4 text-gray-900 font-medium text-center">{item.id}</td>
                                            <td className="p-4 text-gray-700">{item.synopsis}</td>
                                            <td className="p-4 text-gray-900 font-medium">{item.client}</td>
                                            <td className="p-4 text-gray-700">{item.typeOfWork}</td>
                                            <td className="p-4 text-gray-700">{item.location}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectSchedule;
