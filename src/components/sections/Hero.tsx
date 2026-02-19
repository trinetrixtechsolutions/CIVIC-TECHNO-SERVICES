// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Heroimg from '../../assets/industry_images/hero_home_img.webp';

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
            const interval = setInterval(() => {
                setCounters(prev => ({
                    years: prev.years < 14 ? prev.years + 1 : 14,
                    projects: prev.projects < 38 ? prev.projects + 1 : 38,
                    countries: prev.countries < 2 ? prev.countries + 1 : 2,
                    clients: prev.clients < 50 ? prev.clients + 1 : 50
                }));
            }, 80);

            return () => clearInterval(interval);
        }
    }, [inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    const highlights = [
        {
            icon: <EngineeringIcon className="text-3xl text-[#c59d5f]" />,
            value: `${counters.years}+`,
            label: "Years of Excellence"
        },
        {
            icon: <BusinessIcon className="text-3xl text-[#c59d5f]" />,
            value: `${counters.projects}+`,
            label: "Major Projects Delivered"
        },
        {
            icon: <PublicIcon className="text-3xl text-[#c59d5f]" />,
            value: `${counters.countries}+`,
            label: "Countries Served"
        },
        {
            icon: <HandshakeIcon className="text-3xl text-[#c59d5f]" />,
            value: `${counters.clients}+`,
            label: "Trusted Clients"
        }
    ];

    return (
        <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={Heroimg}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">

                <motion.div
                    className="flex flex-col items-center text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    {/* Script Heading */}
                    <motion.h2
                        className="text-[45px] md:text-[70px] lg:text-[85px] text-[#c59d5f] leading-none"
                        style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                        variants={itemVariants}
                    >
                        Welcome
                    </motion.h2>

                    {/* Main Heading */}
                    <motion.h4
                        className="font-primary font-black uppercase text-white text-[16px] md:text-[24px] lg:text-[42px] leading-[1] -mt-3 mb-4 tracking-[0.05em]"
                        variants={itemVariants}
                    >
                        Civic Technologies
                    </motion.h4>

                    {/* Tagline */}
                    <motion.p
                        className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl"
                        variants={itemVariants}
                    >
                        INDUSTRIAL INFRASTRUCTURE WITH TURNKEY MEP SOLUTIONS
                    </motion.p>                   

                    {/* Stats Cards BELOW Text */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="border border-[#c59d5f] rounded-2xl p-4 text-center transition-all duration-300 w-40 md:w-44"
                            >
                                <div className="mb-2 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">
                                    {item.value}
                                </h3>
                                <p className="text-xs text-gray-300 uppercase tracking-wide">
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
