// src/components/layout/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import Logo from '../../assets/clintlogos/Logo.png';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

    const isHome = location.pathname === '/';

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

    const getNavbarBg = () => {
        if (isHome) {
            return isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4';
        }
        return 'bg-white shadow-md py-2';
    };

    const getLinkColor = (path: string) => {
        if (activeLink === path) return 'text-orange-500';
        if (isHome && !isScrolled) return 'text-white hover:text-orange-400';
        return 'text-gray-700 hover:text-blue-800';
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBg()}`}
            >
                <div className="container mx-auto px-4 lg:px-8 relative flex justify-between items-center">
                    <div>
                        <Link to="/" className="flex items-center">
                            <img
                                src={Logo}
                                alt="Civic Techno Services"
                                className="h-12 lg:h-16 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Centered Desktop Navigation */}
                    <ul className="hidden md:flex space-x-1 lg:space-x-6 absolute left-1/2 transform -translate-x-1/2">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`relative px-2 py-2 font-medium transition-all duration-300 whitespace-nowrap ${getLinkColor(link.path)}`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 ${activeLink === link.path ? 'w-full' : 'w-0'
                                            } transition-all duration-300`}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right side: Button and Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:block">
                            <Button
                                variant="contained"
                                component={Link}
                                to="/contact"
                                className="bg-gradient-to-r from-blue-800 to-indigo-800 hover:from-blue-900 hover:to-indigo-900 text-white font-bold py-2 px-6 rounded-full transform transition-all duration-300 hover:scale-105"
                            >
                                Get in Touch
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <IconButton
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`transition-colors duration-300 ${isHome && !isScrolled ? 'text-white' : 'text-gray-700'}`}
                            >
                                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        </div>
                    </div>
                </div>
            </nav>

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
                                {navLinks.map((link) => (
                                    <li key={link.path}>
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
                                    </li>
                                ))}
                                <div className="pt-4">
                                    <Button
                                        variant="contained"
                                        component={Link}
                                        to="/contact"
                                        className="w-full bg-gradient-to-r from-blue-800 to-indigo-800 hover:from-blue-900 hover:to-indigo-900 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Get in Touch
                                    </Button>
                                </div>
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Add padding to account for fixed navbar only when NOT on home page */}
            {!isHome && <div className="h-16 md:h-20"></div>}
        </>
    );
};

export default Navbar;