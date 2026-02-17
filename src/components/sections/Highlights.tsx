// src/components/sections/Highlights.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Highlights: React.FC = () => {
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

    const highlights = [
        {
            icon: <EngineeringIcon className="text-4xl text-blue-800" />,
            value: `${counters.years}+`,
            label: "Years of Engineering Excellence"
        },
        {
            icon: <BusinessIcon className="text-4xl text-blue-800" />,
            value: `${counters.projects}+`,
            label: "Major Industrial & Institutional Projects Delivered"
        },
        {
            icon: <PublicIcon className="text-4xl text-blue-800" />,
            value: `${counters.countries}+`,
            label: "Countries (India & Zambia)"
        },
        {
            icon: <HandshakeIcon className="text-4xl text-blue-800" />,
            value: `${counters.clients}+`,
            label: "Trusted by Leading Organizations"
        }
    ];

    return (
        <section ref={ref} className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Strategic Highlights
                    </h2>
                    <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex justify-center mb-4">
                                {highlight.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-blue-800 mb-2">
                                {highlight.value}
                            </h3>
                            <p className="text-gray-700">
                                {highlight.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Highlights;