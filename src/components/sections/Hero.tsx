// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HeroBgVideo from '../../assets/clintlogos/hero_bg_video_4.mp4';

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
            icon: <EngineeringIcon className="text-4xl text-[#c59d5f]" />,
            value: `${counters.years}+`,
            label: "Years of Excellence"
        },
        {
            icon: <BusinessIcon className="text-4xl text-[#c59d5f]" />,
            value: `${counters.projects}+`,
            label: "Major Projects Delivered"
        },
        {
            icon: <PublicIcon className="text-4xl text-[#c59d5f]" />,
            value: `${counters.countries}+`,
            label: "Countries Served"
        },
        {
            icon: <HandshakeIcon className="text-4xl text-[#c59d5f]" />,
            value: `${counters.clients}+`,
            label: "Trusted Clients"
        }
    ];

    return (
        <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">

            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={HeroBgVideo} type="video/mp4" />
                </video>

                {/* Strong Cinematic Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <motion.div
                        className="lg:w-3/5 text-center lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Script Heading */}
                        <motion.h2
                            className="text-[60px] md:text-[100px] lg:text-[120px] text-[#c59d5f] leading-none"
                            style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            variants={itemVariants}
                        >
                            Engineering
                        </motion.h2>

                        {/* Main Heading */}
                        <motion.h1
                            className="font-primary font-black uppercase text-white text-[28px] md:text-[42px] lg:text-[60px] leading-[0.9] -mt-4 mb-6 tracking-[0.05em]"
                            variants={itemVariants}
                        >
                            INDUSTRIAL INFRASTRUCTURE
                            <br />
                            WITH TURNKEY MEP SOLUTIONS
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl"
                            variants={itemVariants}
                        >
                            Precision-driven design, disciplined execution,
                            and accountable delivery across industrial sectors.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            <Link
                                to="/contact"
                                className="px-10 py-4 bg-[#c59d5f] text-black font-bold uppercase tracking-wider rounded-full shadow-xl hover:bg-[#b88c47] transition-all duration-300"
                            >
                                Contact Us
                            </Link>

                            <Link
                                to="/projects"
                                className="px-10 py-4 border border-[#c59d5f] text-[#c59d5f] font-semibold uppercase tracking-wider rounded-full hover:bg-[#c59d5f] hover:text-black transition-all duration-300"
                            >
                                View Projects
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Stats */}
                    <motion.div
                        className="lg:w-2/5 w-full"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <div className="grid grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -6 }}
                                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl text-center transition-all duration-300"
                                >
                                    <div className="mb-3 flex justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                                        {item.value}
                                    </h3>
                                    <p className="text-xs lg:text-sm text-gray-300 uppercase tracking-wide">
                                        {item.label}
                                    </p>
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
