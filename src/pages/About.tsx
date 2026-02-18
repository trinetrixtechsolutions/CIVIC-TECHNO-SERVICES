// src/pages/About.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';

const About: React.FC = () => {
    const [ref, inView] = useInView({
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

    const timeline = [
        {
            year: "2010",
            title: "Founded as Cleanroom Electrical Specialist",
            description: "Civic Techno Services began as a specialized turnkey electrical solution provider for cleanroom environments."
        },
        {
            year: "2012-2015",
            title: "Expansion into High-Side HVAC & Industrial Infrastructure",
            description: "Expanded service offerings to include high-side HVAC and industrial infrastructure solutions."
        },
        {
            year: "2016-2018",
            title: "Integration of BMS, Surveillance, Access Control & FASS Systems",
            description: "Added building management systems, surveillance, access control, and fire alarm systems to our portfolio."
        },
        {
            year: "2019-Present",
            title: "International Execution (Lusaka, Zambia)",
            description: "Expanded operations internationally with successful project execution in Lusaka, Zambia."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
           <section className="bg-gradient-to-br from-blue-50 to-indigo-100">

                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            About <span className="text-blue-800">Civic Techno</span> Services
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Corporate Identity & Legacy of Engineering Excellence
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Introduction */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <div className="w-24 h-1 bg-blue-800 mb-6"></div>
                        <p className="text-lg text-gray-700 mb-6">
                            Established in 2010, Civic Techno Services began as a specialized turnkey electrical solution provider for cleanroom environments. Over time, the organization expanded into a full-scale MEP turnkey engineering partner serving pharmaceuticals, healthcare, industrial manufacturing, commercial complexes, research facilities, and infrastructure projects.
                        </p>
                        <p className="text-lg text-gray-700">
                            Today, we stand as a trusted engineering partner delivering turnkey MEP excellence with accountability, technical depth, and corporate integrity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section ref={ref} className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Corporate Evolution
                        </h2>
                        <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
                    </motion.div>

                    <motion.div
                        className="max-w-4xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                variants={itemVariants}
                            >
                                <div className="md:w-1/3 mb-4 md:mb-0 text-center md:text-right md:pr-8">
                                    <h3 className="text-2xl font-bold text-blue-800">{item.year}</h3>
                                </div>
                                <div className="md:w-1/6 flex justify-center">
                                    <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="md:w-1/2 md:pl-8">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mission, Vision & Values */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">Mission</h3>
                            <p className="text-gray-700">
                                To execute technically sound, ethically driven, high-quality turnkey MEP solutions delivered on time and within budget.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">Vision</h3>
                            <p className="text-gray-700">
                                To become a nationally recognized leader in integrated MEP engineering with innovation-driven execution standards.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">Quality Commitment</h3>
                            <p className="text-gray-700">
                                Civic Techno Services adheres to national and international engineering standards, ensuring reliability, safety, and performance excellence.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>


            <ScrollToTopArrow />
        </div>
    );
};

export default About;