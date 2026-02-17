// src/components/layout/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/projects', label: 'Projects' },
        { path: '/industries', label: 'Industries' },
        { path: '/contact', label: 'Contact' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: 300 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 20
            }
        },
        exit: {
            opacity: 0,
            x: 300,
            transition: {
                ease: 'easeInOut'
            }
        }
    };

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-white py-2 shadow-md'
                        : 'bg-white py-4'
                    }`}
            >
                <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
                    <motion.div
                        initial={{ rotate: -5, scale: 0.9 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                        <Link to="/" className="text-2xl lg:text-3xl font-bold flex items-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-800">
                                Civic Techno
                            </span>
                            <span className="ml-2 text-orange-500">Services</span>
                        </Link>
                    </motion.div>

                    {/* Right side container for nav items and button */}
                    <div className="flex items-center">
                        {/* Desktop Navigation */}
                        <motion.ul
                            className="hidden md:flex space-x-1 lg:space-x-2 mr-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.path}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`relative px-3 lg:px-4 py-2 text-gray-700 font-medium transition-all duration-300 ${activeLink === link.path
                                                ? 'text-orange-500'
                                                : 'hover:text-blue-800'
                                            }`}
                                    >
                                        {link.label}
                                        <motion.span
                                            className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 ${activeLink === link.path ? 'w-full' : 'w-0'
                                                } transition-all duration-300`}
                                            whileHover={{ width: '100%' }}
                                        />
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="hidden md:block"
                        >
                            <Button
                                variant="contained"
                                component={Link}
                                to="/contact"
                                className="bg-gradient-to-r from-blue-800 to-indigo-800 hover:from-blue-900 hover:to-indigo-900 text-white font-bold py-2 px-6 rounded-full transform transition-all duration-300 hover:scale-105"
                            >
                                Get in Touch
                            </Button>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <IconButton
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-700"
                            >
                                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            className="absolute right-0 top-0 h-full w-64 bg-white shadow-2xl"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                                <h2 className="text-gray-800 text-xl font-bold">Menu</h2>
                                <IconButton onClick={() => setMobileMenuOpen(false)} className="text-gray-700">
                                    <CloseIcon />
                                </IconButton>
                            </div>
                            <ul className="p-4 space-y-3">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.path}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`block py-2 px-4 rounded-lg text-gray-700 font-medium transition-all duration-300 ${activeLink === link.path
                                                    ? 'bg-gray-100 text-orange-500'
                                                    : 'hover:bg-gray-100 hover:text-blue-800'
                                                }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="pt-4"
                                >
                                    <Button
                                        variant="contained"
                                        component={Link}
                                        to="/contact"
                                        className="w-full bg-gradient-to-r from-blue-800 to-indigo-800 hover:from-blue-900 hover:to-indigo-900 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Get in Touch
                                    </Button>
                                </motion.div>
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Add padding to account for fixed navbar */}
            <div className="h-16 md:h-20"></div>
        </>
    );
};

export default Navbar;