// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

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

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Company Info */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-blue-400">Civic Techno</span>
                            <span className="text-orange-400"> Services</span>
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Powering Industries with Precision Engineering. Complete Turnkey MEP & Electrical Infrastructure Solutions Since 2010.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FacebookIcon />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <TwitterIcon />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <LinkedInIcon />
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</Link>
                            </li>
                            <li>
                                <Link to="/industries" className="text-gray-300 hover:text-blue-400 transition-colors">Industries</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-xl font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-300">Electrical Infrastructure</li>
                            <li className="text-gray-300">HVAC & High-Side Engineering</li>
                            <li className="text-gray-300">Automation & Smart Systems</li>
                            <li className="text-gray-300">Fire & Safety Systems</li>
                            <li className="text-gray-300">Consulting & Project Engineering</li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <LocationOnIcon className="text-blue-400 mr-2 mt-1" />
                                <p className="text-gray-300">
                                    #512, Gokul Plots, 9th Phase, KPHP Colony, Hyderabad – 500072.
                                </p>
                            </div>
                            <div className="flex items-center">
                                <PhoneIcon className="text-blue-400 mr-2" />
                                <p className="text-gray-300">
                                    040-40213345 | 7893799699 | 9949699699
                                </p>
                            </div>
                            <div className="flex items-center">
                                <EmailIcon className="text-blue-400 mr-2" />
                                <p className="text-gray-300">
                                    info@civictechno.com
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="border-t border-gray-800 mt-8 pt-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-gray-400">
                        &copy; {currentYear} Civic Techno Services. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;