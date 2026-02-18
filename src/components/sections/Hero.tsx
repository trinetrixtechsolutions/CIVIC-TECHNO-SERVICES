// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
// Import the background image
import HeroBg from '../../assets/clintlogos/Hero_bg_image.png';

const Hero: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [counters, setCounters] = useState({
        years: 0,
        projects: 0,
        countries: 0,
        clients: 0
    });

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => {
                const interval = setInterval(() => {
                    setCounters(prev => ({
                        years: prev.years < 14 ? prev.years + 1 : 14,
                        projects: prev.projects < 38 ? prev.projects + 1 : 38,
                        countries: prev.countries < 2 ? prev.countries + 1 : 2,
                        clients: prev.clients < 50 ? prev.clients + 1 : 50
                    }));
                }, 100);

                return () => clearInterval(interval);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
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

    const highlights = [
        {
            icon: <EngineeringIcon className="text-4xl text-blue-300" />,
            value: `${counters.years}+`,
            label: "Years of Engineering Excellence"
        },
        {
            icon: <BusinessIcon className="text-4xl text-blue-300" />,
            value: `${counters.projects}+`,
            label: "Major Projects Delivered"
        },
        {
            icon: <PublicIcon className="text-4xl text-blue-300" />,
            value: `${counters.countries}+`,
            label: "Countries (India & Zambia)"
        },
        {
            icon: <HandshakeIcon className="text-4xl text-blue-300" />,
            value: `${counters.clients}+`,
            label: "Trusted by Leading Organizations"
        }
    ];

    return (
        <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HeroBg}
                    alt="Industrial Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Text Content - Left Side */}
                    <motion.div
                        className="lg:w-3/5 text-center lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                            variants={itemVariants}
                        >
                            Powering Industries with
                            <span className="block text-blue-300 mt-2">Precision Engineering</span>
                        </motion.h1>

                        <motion.h2
                            className="text-xl md:text-2xl text-gray-100 font-medium mb-8 drop-shadow-md"
                            variants={itemVariants}
                        >
                            Complete Turnkey MEP & Electrical Infrastructure Solutions Since 2010
                        </motion.h2>

                        <motion.p
                            className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto lg:mx-0 drop-shadow-sm"
                            variants={itemVariants}
                        >
                            From initial concept and design to commissioning and long-term maintenance, Civic Techno Services ensures seamless execution and measurable performance outcomes.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16 lg:mb-0"
                            variants={itemVariants}
                        >
                            <Button
                                component={Link}
                                to="/contact"
                                variant="contained"
                                size="large"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                            >
                                Get In Touch
                            </Button>
                            <Button
                                component={Link}
                                to="/projects"
                                variant="outlined"
                                size="large"
                                className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-medium rounded-full transform transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                            >
                                View Projects
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Highlights / Stats Section - Right Side - Separate Cards */}
                    <motion.div
                        className="lg:w-2/5 w-full"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {/* Grid Container for 2x2 Cards */}
                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    // Individual Glassmorphism Card Styling
                                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-xl relative overflow-hidden group cursor-default"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {/* Subtle gradient overlay for each card */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                                    <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                                        <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                                            {highlight.icon}
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1 drop-shadow-lg">
                                            {highlight.value}
                                        </h3>
                                        <p className="text-xs lg:text-sm font-medium text-blue-100 uppercase tracking-wider drop-shadow-md leading-snug">
                                            {highlight.label}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;