// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Logo from '../../assets/clintlogos/Logo_02.svg';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Curve + Arrow */}
            <div className="relative flex justify-center">
                <div
                    onClick={scrollToTop}
                    className="absolute -top-11 cursor-pointer group"
                >
                    <svg
                        viewBox="0 0 160.7 61.5"
                        className="w-30 h-14 text-[#252525]"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="currentColor"
                            d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
                        />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <KeyboardArrowUpIcon className="text-white text-base animate-bounce" />
                        <KeyboardArrowUpIcon className="text-white text-base -mt-4 opacity-80 animate-bounce delay-150" />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="relative bg-[#252525] text-white pt-1">
                <div className="container mx-auto px-4 py-10">

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        {/* Company Info */}
                        <motion.div variants={itemVariants}>
                            <div className="mb-4">
                                <img
                                    src={Logo}
                                    alt="Civic Techno Services"
                                    className="h-14 w-auto object-contain"
                                />
                            </div>

                            <p className="text-gray-300 mb-4">
                                Powering Industries with Precision Engineering.
                                Complete Turnkey MEP & Electrical Infrastructure
                                Solutions Since 2010.
                            </p>

                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-[#c59d5f] transition-colors">
                                    <FacebookIcon />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#c59d5f] transition-colors">
                                    <TwitterIcon />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#c59d5f] transition-colors">
                                    <LinkedInIcon />
                                </a>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-gray-300 hover:text-[#c59d5f] transition-colors">Home</Link></li>
                                <li><Link to="/about" className="text-gray-300 hover:text-[#c59d5f] transition-colors">About Us</Link></li>
                                <li><Link to="/services" className="text-gray-300 hover:text-[#c59d5f] transition-colors">Services</Link></li>
                                <li><Link to="/projects" className="text-gray-300 hover:text-[#c59d5f] transition-colors">Projects</Link></li>
                                <li><Link to="/industries" className="text-gray-300 hover:text-[#c59d5f] transition-colors">Industries</Link></li>
                                <li><Link to="/contact" className="text-gray-300 hover:text-[#c59d5f] transition-colors">Contact</Link></li>
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>Electrical Infrastructure</li>
                                <li>HVAC & High-Side Engineering</li>
                                <li>Automation & Smart Systems</li>
                                <li>Fire & Safety Systems</li>
                                <li>Consulting & Project Engineering</li>
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <LocationOnIcon className="text-[#c59d5f] mr-2 mt-1" />
                                    <p className="text-gray-300">
                                        #512, Gokul Plots, 9th Phase,
                                        KPHP Colony, Hyderabad – 500072.
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <PhoneIcon className="text-[#c59d5f] mr-2" />
                                    <p className="text-gray-300">
                                        040-40213345 | 7893799699 | 9949699699
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <EmailIcon className="text-[#c59d5f] mr-2" />
                                    <p className="text-gray-300">
                                        info@civictechno.com
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* Bottom Bar */}
                    <motion.div
                        className="border-t border-gray-800 mt-8 pt-8 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-gray-400 mb-2">
                            &copy; {currentYear} Civic Techno Services. All Rights Reserved.
                        </p>

                        <p className="text-gray-500 text-sm">
                            Developed by <span className="text-[#c59d5f] font-semibold">Trinetrix Tech Solutions</span>
                        </p>
                    </motion.div>

                </div>
            </footer>
        </>
    );
};

export default Footer;
