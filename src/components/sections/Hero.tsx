import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Added image import for the About section
import HeroBg from '../../assets/clintlogos/hero_bg_img.png';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // 1. Check if the cinematic intro has already been played in this session
    const [hasPlayed, setHasPlayed] = useState(() => {
        return sessionStorage.getItem('heroAnimationComplete') === 'true';
    });

    const { scrollY, scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // When the user completes the visual transition (progress ~0.6 where About is centered)
    // Seamlessly swap the page to the normal fast layout without reverse-zooming
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!hasPlayed && latest >= 0.58) {
            setHasPlayed(true);
            sessionStorage.setItem('heroAnimationComplete', 'true');

            // Instantly fix the scroll position so it seamlessly lines up with the normal About section
            setTimeout(() => {
                const aboutEl = document.getElementById('normal-about');
                if (aboutEl) {
                    const navHeight = window.innerWidth >= 1024 ? 88 : 72; // Desktop vs Mobile navbar height
                    window.scrollTo({ top: aboutEl.offsetTop - navHeight, behavior: 'instant' });
                }
            }, 0);
        }
    });

    // 1. Initial fade out of Hero stats and title (0 to 0.15)
    const opacityOut = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const yOut = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

    // 2. The Fly-Through "Welcome" Effect (0 to 0.45)
    // Scales enormously so that the gap between the letters becomes the screen
    const scaleWelcome = useTransform(scrollYProgress, [0, 0.45], [1, 100]);
    const opacityWelcome = useTransform(scrollYProgress, [0.35, 0.5], [1, 0]);

    // 3. The About Section Slides Up from the bottom (0.25 to 0.6)
    // It rises through the white space of the scaling "Welcome"
    const yAboutSection = useTransform(scrollYProgress, [0.25, 0.6], ["100vh", "0vh"]);
    const opacityAboutSection = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

    // Auto-scroll mechanism
    const autoScrollTriggered = useRef(false);

    useEffect(() => {
        // Disable auto-scroll logic if the intro has already played
        if (hasPlayed) return;

        const unsubscribe = scrollY.on("change", (latest) => {
            if (hasPlayed) return;
            const viewportHeight = window.innerHeight;

            // Trigger auto-scroll when user starts scrolling down (past 50px)
            if (latest > 50 && latest < viewportHeight * 0.5 && !autoScrollTriggered.current) {
                autoScrollTriggered.current = true;

                // Target is 1.2x viewport height (the exact scroll point where About is perfectly centered)
                const targetY = (containerRef.current?.offsetTop || 0) + (viewportHeight * 1.2);

                // Allow a tiny delay for user's initial scroll inertia to finish, then smoothly glide
                setTimeout(() => {
                    window.scrollTo({ top: targetY, behavior: 'smooth' });
                }, 50);
            }

            // Reset the lock if the user deliberately scrolls back to the very top
            if (latest <= 10) {
                autoScrollTriggered.current = false;
            }
        });
        return () => unsubscribe();
    }, [scrollY, hasPlayed]);

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

    // =========================================================================
    // NORMAL VIEW (Plays once transition finishes or if user refreshes page)
    // =========================================================================
    if (hasPlayed) {
        return (
            <>
                <section ref={inViewRef} className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                        {watermarks.map((item, index) => (
                            <motion.div
                                key={index}
                                className="absolute text-[#c59d5f]/20"
                                style={{ top: item.top, left: item.left }}
                                animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], rotate: [0, 10, -10, 0], scale: [1, 1.1, 0.9, 1] }}
                                transition={{ duration: item.duration, repeat: Infinity, ease: "linear", delay: index * 2 }}
                            >
                                <item.Icon sx={{ fontSize: item.size }} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="container mx-auto px-6 py-6 relative z-10 w-full">
                        <div className="flex flex-col items-center text-center w-full mt-[10vh]">
                            <motion.h2
                                className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[160px] text-[#c59d5f] leading-none whitespace-nowrap tracking-wide"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            >
                                Welcome
                            </motion.h2>

                            <motion.h4
                                className="font-primary font-black uppercase text-gray-900 text-[20px] md:text-[32px] lg:text-[56px] xl:text-[64px] leading-[1] -mt-3 mb-6 tracking-[0.05em]"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            >
                                Civic Technologies
                            </motion.h4>

                            <motion.p
                                className="text-gray-600 text-base md:text-xl mb-12 max-w-2xl font-medium"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                            >
                                INDUSTRIAL INFRASTRUCTURE WITH TURNKEY MEP SOLUTIONS
                            </motion.p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mt-12 w-full px-6">
                                {highlights.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 + (index * 0.1) }}
                                        className="bg-white border border-gray-200 rounded-2xl p-4 text-center transition-all duration-300 shadow-sm w-full"
                                    >
                                        <div className="mb-2 flex justify-center">{item.icon}</div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.value}</h3>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="mt-20 z-20 cursor-pointer pointer-events-auto"
                                onClick={() => {
                                    const aboutEl = document.getElementById('normal-about');
                                    if (aboutEl) {
                                        const navHeight = window.innerWidth >= 1024 ? 88 : 72;
                                        window.scrollTo({ top: aboutEl.offsetTop - navHeight, behavior: 'smooth' });
                                    }
                                }}
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <KeyboardArrowDownIcon className="text-[#c59d5f]" sx={{ fontSize: 50 }} />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* The seamlessly attached "About" section below the Hero in normal flow */}
                <section id="normal-about" className="py-10 lg:py-16 bg-white relative">
                    <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                            <h2
                                className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-[#c59d5f] leading-none mb-2 md:mb-4"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                About
                            </h2>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-primary uppercase tracking-wide">
                                Civic Techno Services
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium mb-4 sm:mb-6">
                                Established with a vision to provide world-class industrial infrastructure and turnkey MEP solutions. With over a decade of excellence, we have proven our capabilities in delivering major projects across diverse sectors.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium hidden sm:block mb-6 md:mb-8">
                                Our commitment to quality, safety, and innovation makes us a trusted partner for clients globally, building state-of-the-art facilities that empower the future of industries.
                            </p>
                            <div>
                                <Link
                                    to="/about"
                                    className="inline-block bg-[#c59d5f] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide text-sm md:text-base hover:bg-gray-900 transition-colors duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Know More About Us
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                            <div className="relative rounded-2xl overflow-hidden w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
                                <div className="absolute inset-0 bg-[#c59d5f]/10 z-10 mix-blend-overlay pointer-events-none"></div>
                                <img
                                    src={HeroBg}
                                    alt="About Civic Techno Services"
                                    className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    // =========================================================================
    // CINEMATIC TRANSITION VIEW (Plays initially until scrolled past)
    // =========================================================================
    return (
        <section ref={containerRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                <div ref={inViewRef} className="absolute inset-0 z-0 pointer-events-none">
                    {/* MOVING WATERMARK BACKGROUND */}
                    {watermarks.map((item, index) => (
                        <motion.div
                            key={index}
                            className="absolute text-[#c59d5f]/20"
                            style={{ top: item.top, left: item.left }}
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

                {/* Hero Initial Content Wrapper */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-20 pointer-events-none">

                    {/* "Welcome" Text */}
                    {/* Added wide tracking to separate letters slightly for the fly-through gap */}
                    <motion.div
                        style={{
                            scale: scaleWelcome,
                            opacity: opacityWelcome,
                            transformOrigin: 'center',
                        }}
                        className="z-30 absolute top-[25vh]"
                    >
                        <motion.h2
                            className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[160px] text-[#c59d5f] leading-none whitespace-nowrap tracking-wide"
                            style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                        >
                            <span className="inline-block mx-2">W</span>
                            <span className="inline-block mx-2">e</span>
                            <span className="inline-block mx-2">l</span>
                            <span className="inline-block mx-2">c</span>
                            <span className="inline-block mx-2">o</span>
                            <span className="inline-block mx-2">m</span>
                            <span className="inline-block mx-2">e</span>
                        </motion.h2>
                    </motion.div>

                    {/* "Civic Technologies" & Cards */}
                    <motion.div style={{ opacity: opacityOut, y: yOut }} className="flex flex-col items-center z-10 w-full relative pointer-events-auto mt-[15vh]">
                        <motion.h4
                            className="font-primary font-black uppercase text-gray-900 text-[20px] md:text-[32px] lg:text-[56px] xl:text-[64px] leading-[1] -mt-3 mb-6 tracking-[0.05em]"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            Civic Technologies
                        </motion.h4>

                        <motion.p
                            className="text-gray-600 text-base md:text-xl mb-12 max-w-2xl font-medium"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
                        >
                            INDUSTRIAL INFRASTRUCTURE WITH TURNKEY MEP SOLUTIONS
                        </motion.p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mt-12 w-full px-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
                                    className="bg-white border border-gray-200 rounded-2xl p-4 text-center transition-all duration-300 shadow-sm w-full"
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
                        </div>
                    </motion.div>

                    {/* Bouncing Down Arrow */}
                    <motion.div
                        style={{ opacity: opacityOut }}
                        className="absolute bottom-10 z-20 cursor-pointer pointer-events-auto"
                        onClick={() => {
                            const aboutEl = document.getElementById('normal-about');
                            if (aboutEl) {
                                const navHeight = window.innerWidth >= 1024 ? 88 : 72;
                                window.scrollTo({ top: aboutEl.offsetTop - navHeight, behavior: 'smooth' });
                            }
                        }}
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <KeyboardArrowDownIcon className="text-[#c59d5f]" sx={{ fontSize: 50 }} />
                    </motion.div>
                </div>

                {/* "About" Content Wrapper Sliding Up */}
                <motion.div
                    style={{ y: yAboutSection, opacity: opacityAboutSection }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto z-20 pt-0"
                >
                    <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">

                        {/* Text Column */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                            <h2
                                className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-[#c59d5f] leading-none mb-2 md:mb-4"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                About
                            </h2>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-primary uppercase tracking-wide">
                                Civic Techno Services
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium mb-4 sm:mb-6">
                                Established with a vision to provide world-class industrial infrastructure and turnkey MEP solutions. With over a decade of excellence, we have proven our capabilities in delivering major projects across diverse sectors.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium hidden sm:block mb-6 md:mb-8">
                                Our commitment to quality, safety, and innovation makes us a trusted partner for clients globally, building state-of-the-art facilities that empower the future of industries.
                            </p>
                            <div className="pointer-events-auto">
                                <Link
                                    to="/about"
                                    className="inline-block bg-[#c59d5f] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide text-sm md:text-base hover:bg-gray-900 transition-colors duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Know More About Us
                                </Link>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                            <div className="relative rounded-2xl overflow-hidden w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
                                <div className="absolute inset-0 bg-[#c59d5f]/10 z-10 mix-blend-overlay pointer-events-none"></div>
                                <img
                                    src={HeroBg}
                                    alt="About Civic Techno Services"
                                    className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;