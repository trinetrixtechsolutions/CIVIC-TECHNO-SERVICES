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
        <div className="bg-slate-50 min-h-screen">
            <Navbar />

            <div className="pt-28 pb-20 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                        <div>
                            <motion.span 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2 block"
                            >
                                Timeline & History
                            </motion.span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                                Project Schedule
                            </h1>
                            <div className="w-24 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
                        </div>
                        <Button
                            component={Link}
                            to="/projects"
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                            className="border-gray-300 text-gray-700 hover:bg-white hover:border-blue-600 hover:text-blue-600 transition-all rounded-full px-6"
                        >
                            Back to Projects
                        </Button>
                    </div>

                    <motion.div 
                        className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                                        <th className="p-5 font-semibold text-sm uppercase tracking-wider w-20 text-center rounded-tl-xl">SL No</th>
                                        <th className="p-5 font-semibold text-sm uppercase tracking-wider">Project Synopsis</th>
                                        <th className="p-5 font-semibold text-sm uppercase tracking-wider">Client Name</th>
                                        <th className="p-5 font-semibold text-sm uppercase tracking-wider">Type of Work</th>
                                        <th className="p-5 font-semibold text-sm uppercase tracking-wider rounded-tr-xl">Location</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {projectSchedule.map((item, index) => (
                                        <motion.tr
                                            key={item.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.05 * index, duration: 0.3 }}
                                            className={`hover:bg-blue-50 transition-colors duration-200 group cursor-pointer`}
                                        >
                                            <td className="p-5 text-gray-500 font-mono text-center group-hover:text-blue-800 transition-colors">{item.id}</td>
                                            <td className="p-4 text-gray-800 font-medium group-hover:text-blue-900 transition-colors">{item.synopsis}</td>
                                            <td className="p-4 text-gray-700">{item.client}</td>
                                            <td className="p-4">
                                                <span className="px-3 py-1 bg-gray-100 group-hover:bg-blue-100 text-gray-700 group-hover:text-blue-800 rounded-full text-sm transition-colors duration-200">
                                                    {item.typeOfWork}
                                                </span>
                                            </td>
                                            <td className="p-4 text-gray-700">{item.location}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectSchedule;