// src/components/layout/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import Logo from '../../assets/clintlogos/Logo_6.svg';

const Navbar: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
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
        { path: '/career', label: 'Career' },
        { path: '/contact', label: 'Contact' }
    ];

    const navbarBackground = () => {
        if (isHome) {
            return isScrolled
                ? 'bg-white shadow-md py-3'
                : 'bg-transparent py-6';
        }
        return 'bg-white shadow-sm py-3';
    };

    const linkColor = (path: string) => {
        if (isHome && !isScrolled) {
            return activeLink === path
                ? 'text-[#c59d5f]'
                : 'text-white hover:text-[#c59d5f]';
        }

        return activeLink === path
            ? 'text-[#c59d5f]'
            : 'text-black hover:text-[#c59d5f]';
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navbarBackground()}`}
            >
                <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center relative">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={Logo}
                            alt="Civic Techno Services"
                            className="h-12 lg:h-16 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`relative px-2 py-2 font-medium transition-all duration-300 ${linkColor(link.path)}`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-[#c59d5f] transition-all duration-300 ${
                                            activeLink === link.path ? 'w-full' : 'w-0'
                                        }`}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side */}
                    <div className="flex items-center space-x-4">

                        {/* Desktop Button */}
                        <div className="hidden md:block">
                            <Link
                                to="/contact"
                                className={`
                                    px-8 py-3
                                    rounded-full
                                    font-semibold uppercase tracking-wide
                                    border border-[#e5c78a]
                                    transition-all duration-300
                                    ${
                                        isHome && !isScrolled
                                            ? 'bg-transparent text-white hover:bg-[#c59d5f] hover:text-black'
                                            : 'bg-white text-black hover:bg-[#c59d5f] hover:text-black'
                                    }
                                `}
                            >
                                Get in Touch
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <IconButton
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`${
                                    isHome && !isScrolled
                                        ? 'text-white'
                                        : 'text-[#c59d5f]'
                                }`}
                            >
                                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        </div>

                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-black text-white shadow-xl"
                        >
                            <ul className="flex flex-col p-6 space-y-4">
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block text-lg hover:text-[#c59d5f] transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}

                                <Link
                                    to="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mt-4 inline-block text-center px-6 py-3 bg-[#c59d5f] text-black rounded-full font-semibold"
                                >
                                    Get in Touch
                                </Link>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Spacer only for non-home pages */}
            {!isHome && <div className="h-20"></div>}
        </>
    );
};

export default Navbar;
