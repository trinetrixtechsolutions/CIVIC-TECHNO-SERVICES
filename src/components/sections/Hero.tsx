// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
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

    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                        variants={itemVariants}
                    >
                        Powering Industries with
                        <span className="block text-blue-800">Precision Engineering</span>
                    </motion.h1>

                    <motion.h2
                        className="text-xl md:text-2xl lg:text-3xl text-blue-700 font-medium mb-6"
                        variants={itemVariants}
                    >
                        Complete Turnkey MEP & Electrical Infrastructure Solutions Since 2010
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        From initial concept and design to commissioning and long-term maintenance, Civic Techno Services ensures seamless execution and measurable performance outcomes.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        variants={itemVariants}
                    >
                        <Button
                            component={Link}
                            to="/contact"
                            variant="contained"
                            size="large"
                            className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                        >
                            Get In Touch
                        </Button>
                        <Button
                            component={Link}
                            to="/projects"
                            variant="outlined"
                            size="large"
                            className="border-blue-800 text-blue-800 hover:bg-blue-50 px-8 py-3 text-lg font-medium rounded-full transform transition-all duration-300 hover:scale-105"
                        >
                            View Projects
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Animated Elements */}
                <motion.div
                    className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
                    animate={{
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20"
                    animate={{
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;