// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
// Imported icons for electronic watermarks
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import PowerIcon from '@mui/icons-material/Power';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

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

    // Configuration for moving watermarks
    const watermarks = [
        { Icon: ElectricalServicesIcon, top: '10%', left: '5%', size: 80, duration: 20 },
        { Icon: SettingsInputComponentIcon, top: '60%', left: '85%', size: 60, duration: 25 },
        { Icon: AcUnitIcon, top: '80%', left: '15%', size: 70, duration: 22 },
        { Icon: SettingsRemoteIcon, top: '30%', left: '90%', size: 50, duration: 18 },
        { Icon: PowerIcon, top: '50%', left: '50%', size: 90, duration: 30 },
        { Icon: LightbulbIcon, top: '15%', left: '60%', size: 40, duration: 15 },
        { Icon: ElectricalServicesIcon, top: '70%', left: '40%', size: 55, duration: 28 },
        { Icon: SettingsInputComponentIcon, top: '40%', left: '10%', size: 65, duration: 24 },
    ];

    return (
        <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white">

            {/* MOVING WATERMARK BACKGROUND - Changed to Gold Color */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {watermarks.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute text-[#c59d5f]/20" // Gold color with 20% opacity
                        style={{ 
                            top: item.top, 
                            left: item.left,
                        }}
                        animate={{
                            x: [0, 30, -20, 0],
                            y: [0, -40, 20, 0],
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 0.9, 1],
                        }}
                        transition={{
                            duration: item.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 2,
                        }}
                    >
                        <item.Icon sx={{ fontSize: item.size }} />
                    </motion.div>
                ))}
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-6 py-6 relative z-1">

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
                        className="font-primary font-black uppercase text-gray-900 text-[16px] md:text-[24px] lg:text-[42px] leading-[1] -mt-3 mb-4 tracking-[0.05em]"
                        variants={itemVariants}
                    >
                        Civic Technologies
                    </motion.h4>

                    {/* Tagline */}
                    <motion.p
                        className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl font-medium"
                        variants={itemVariants}
                    >
                        INDUSTRIAL INFRASTRUCTURE WITH TURNKEY MEP SOLUTIONS
                    </motion.p>                   

                    {/* Stats Cards */}
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
                                whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                                className="bg-white border border-gray-200 rounded-2xl p-4 text-center transition-all duration-300 w-40 md:w-44 shadow-sm"
                            >
                                <div className="mb-2 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    {item.value}
                                </h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">
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