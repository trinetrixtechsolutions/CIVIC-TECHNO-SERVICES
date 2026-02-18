// src/pages/Career.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import HeroBg from '../assets/clintlogos/hero_bg_img.png';
import { Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Career: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Dummy Data for Job Openings
    const openings = [
        {
            id: 1,
            title: "Senior Electrical Engineer",
            location: "Hyderabad, India",
            type: "Full-time",
            experience: "5-8 Years",
            description: "Lead electrical design and execution for industrial projects. Must have experience with HT/LT panels and single-line diagrams.",
            requirements: ["B.Tech/B.E in Electrical", "AutoCAD & ETAPS proficiency", "Site execution experience"]
        },
        {
            id: 2,
            title: "HVAC Project Manager",
            location: "Bhubaneswar, Odisha",
            type: "Full-time",
            experience: "8-12 Years",
            description: "Manage end-to-end HVAC projects for pharmaceutical and industrial clients. PMP certification preferred.",
            requirements: ["Mechanical Engineering Degree", "Cleanroom project experience", "Team leadership skills"]
        },
        {
            id: 3,
            title: "BMS Engineer",
            location: "Remote / Site Based",
            type: "Contract",
            experience: "3-5 Years",
            description: "Configure and commission Building Management Systems (BMS). Knowledge of Honeywell/Schneider systems required.",
            requirements: ["Diploma/Degree in Electronics", "PLC/SCADA knowledge", "Networking basics"]
        },
        {
            id: 4,
            title: "Site Supervisor - Electrical",
            location: "Gujarat",
            type: "Full-time",
            experience: "2-4 Years",
            description: "Supervise electrical installation activities at the Maruti Suzuki project site. Ensure safety and quality compliance.",
            requirements: ["ITI/Diploma in Electrical", "Good communication skills", "Willingness to travel"]
        }
    ];

    const benefits = [
        {
            icon: <TrendingUpIcon className="text-3xl" />,
            title: "Professional Growth",
            description: "Work on high-impact projects that challenge your skills and accelerate your career trajectory."
        },
        {
            icon: <GroupsIcon className="text-3xl" />,
            title: "Collaborative Culture",
            description: "Join a team of experts who value knowledge sharing, innovation, and mutual respect."
        },
        {
            icon: <CurrencyRupeeIcon className="text-3xl" />,
            title: "Competitive Benefits",
            description: "Enjoy industry-standard compensation, health benefits, and performance-based incentives."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="bg-white min-h-screen">

            {/* Hero Section with Background Image */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={HeroBg}
                        alt="Engineering Background"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50" />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-left py-20">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-200 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        >
                            Join Our Team
                        </motion.span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Future</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                            Join a team dedicated to engineering excellence and innovation.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Shape at Bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Culture & Benefits Section */}
            <section className="py-20 lg:py-2 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Why Civic Techno?
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We believe in empowering our employees with the tools, trust, and environment they need to succeed.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-8 bg-slate-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-blue-600 rounded-xl shadow-md mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Current Openings Section */}
            <section ref={ref} className="py-20 lg:py-28 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-600 font-semibold uppercase tracking-widest mb-4 block">Opportunities</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Current Openings
                        </h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div
                        className="max-w-5xl mx-auto space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {openings.map((job) => (
                            <motion.div
                                key={job.id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                                variants={itemVariants}
                                whileHover={{ y: -3 }}
                            >
                                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    {/* Job Info */}
                                    <div className="flex items-start gap-5 flex-grow">
                                        <div className="hidden sm:flex w-14 h-14 bg-blue-50 rounded-xl items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            <WorkIcon className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <LocationOnIcon fontSize="small" className="text-blue-500" /> {job.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <SchoolIcon fontSize="small" className="text-blue-500" /> {job.experience}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.description}</p>

                                            {/* Tags for requirements */}
                                            <div className="flex flex-wrap gap-2">
                                                {job.requirements.map((req, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                                        {req}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Apply Button */}
                                    <div className="flex-shrink-0 self-start md:self-center">
                                        <Button
                                            variant="contained"
                                            startIcon={<EmailIcon />}
                                            className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full shadow-md normal-case"
                                            href={`mailto:careers@civictechnoservices.com?subject=Application for ${job.title}`}
                                        >
                                            Apply Now
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* General Application CTA */}
                    <motion.div
                        className="max-w-3xl mx-auto mt-16 text-center p-10 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl shadow-2xl relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        {/* Abstract Shapes */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                            Don't see the right fit?
                        </h3>
                        <p className="text-blue-100 mb-8 relative z-10">
                            We are always looking for talented individuals. Send us your resume for future considerations.
                        </p>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<EmailIcon />}
                            className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 font-bold rounded-full shadow-xl relative z-10 normal-case"
                            href="mailto:careers@civictechnoservices.com?subject=General Application"
                        >
                            Send General Application
                        </Button>
                    </motion.div>
                </div>
            </section>

            <ScrollToTopArrow />
        </div>
    );
};

export default Career;