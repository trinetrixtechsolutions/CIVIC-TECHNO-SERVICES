// src/pages/Career.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import HeroBg from '../assets/clintlogos/hero_bg_img.png';
import DividerImg from '../assets/clintlogos/download.svg';
import { Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Career: React.FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

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
            icon: <TrendingUpIcon className="text-3xl text-[#c59d5f]" />,
            title: "Professional Growth",
            description: "Work on high-impact projects that challenge your skills and accelerate your career trajectory."
        },
        {
            icon: <GroupsIcon className="text-3xl text-[#c59d5f]" />,
            title: "Collaborative Culture",
            description: "Join a team of experts who value knowledge sharing, innovation, and mutual respect."
        },
        {
            icon: <CurrencyRupeeIcon className="text-3xl text-[#c59d5f]" />,
            title: "Competitive Benefits",
            description: "Enjoy industry-standard compensation, health benefits, and performance-based incentives."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* HERO — MATCHING BRAND SYSTEM */}
            <section className="relative min-h-[60vh] flex items-center justify-center">

                {/* Background Image with Grayscale Filter */}
                <div
                    className="absolute inset-0 bg-fixed bg-center bg-cover grayscale"
                    style={{ backgroundImage: `url(${HeroBg})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-left py-20">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-center lg:text-left relative">
                            <h2
                                className="text-[110px] md:text-[130px] text-[#c59d5f] leading-none"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                Join
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[47px] md:text-[65px] leading-[0.5] -mt-6">
                                Our Team
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-2xl">
                            Build your future with a team committed to engineering excellence.
                        </p>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 pointer-events-none overflow-hidden">
                    <div className="flex w-max">
                        {Array.from({ length: 120 }).map((_, i) => (
                            <img key={i} src={DividerImg} className="h-6 shrink-0" alt="" />
                        ))}
                    </div>
                </div>
            </section>


            {/* WHY US SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">

                    <motion.div
                        className="max-w-4xl mx-auto text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-center relative">
                            <h2
                                className="text-[120px] text-[#c59d5f] leading-none"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                Why
                            </h2>

                            <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#111111] text-[47px] leading-[0.81] -mt-8">
                                Civic Techno
                            </h1>
                        </div>

                        <p className="text-lg text-gray-600">
                            We empower our people with the environment, tools, and trust needed to grow.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -6 }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c59d5f]/10 text-[#c59d5f] rounded-xl mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* OPENINGS SECTION */}
            <section ref={ref} className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">

                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center relative">
                            <h2
                                className="text-[120px] text-[#c59d5f] leading-none"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                Current
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#111111] text-[47px] leading-[0.81] -mt-8">
                                Openings
                            </h1>
                        </div>
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
                                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all"
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {job.title}
                                </h3>

                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <LocationOnIcon fontSize="small" /> {job.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <SchoolIcon fontSize="small" /> {job.experience}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4">
                                    {job.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {job.requirements.map((req, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                                            {req}
                                        </span>
                                    ))}
                                </div>

                                <Button
                                    variant="contained"
                                    startIcon={<EmailIcon />}
                                    className="bg-[#c59d5f] hover:bg-black text-white px-6 py-2 rounded-full normal-case"
                                    href={`mailto:careers@civictechnoservices.com?subject=Application for ${job.title}`}
                                >
                                    Apply Now
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* General CTA */}
                    <motion.div
                        className="max-w-3xl mx-auto mt-20 text-center p-12 bg-[#c59d5f] rounded-3xl shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Don’t see the right fit?
                        </h3>
                        <p className="text-white/90 mb-8">
                            Send us your resume for future opportunities.
                        </p>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<EmailIcon />}
                            className="bg-white text-black hover:bg-gray-100 px-8 py-3 font-bold rounded-full normal-case"
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
