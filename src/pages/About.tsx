// src/pages/About.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import HeroBg from '../assets/clintlogos/hero_bg_img.png'; // Imported the Hero Image

const About: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

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
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const timeline = [
        {
            year: "2010",
            title: "Foundation & Specialization",
            description: "Civic Techno Services began as a specialized turnkey electrical solution provider for cleanroom environments, setting the stage for engineering excellence."
        },
        {
            year: "2012-2015",
            title: "Expansion into Core Infrastructure",
            description: "Expanded service offerings to include high-side HVAC and industrial infrastructure solutions, broadening our impact across sectors."
        },
        {
            year: "2016-2018",
            title: "Integrated Systems & Technology",
            description: "Integrated advanced Building Management Systems (BMS), surveillance, access control, and fire alarm systems (FASS) into our portfolio."
        },
        {
            year: "2019-Present",
            title: "Global Footprint",
            description: "Expanded operations internationally with successful project execution in Lusaka, Zambia, marking our entry into the global market."
        }
    ];

    return (
        <div className="bg-white min-h-screen">

            {/* Hero Section with Background Image */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
                            Corporate Identity
                        </motion.span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Civic Techno</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                            A Legacy of Engineering Excellence & Turnkey Innovation.
                        </p>
                    </motion.div>
                </div>
                
                {/* Decorative Shape at Bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
                    </svg>
                </div>
            </section>

            {/* Company Introduction */}
            <section className="py-20 lg:py-28 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our Story
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Established in <span className="font-bold text-blue-700">2010</span>, Civic Techno Services began as a specialized turnkey electrical solution provider for cleanroom environments. Over time, the organization expanded into a full-scale MEP turnkey engineering partner serving pharmaceuticals, healthcare, industrial manufacturing, commercial complexes, research facilities, and infrastructure projects.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Today, we stand as a trusted engineering partner delivering turnkey MEP excellence with accountability, technical depth, and corporate integrity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section ref={ref} className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-600 font-semibold uppercase tracking-widest mb-4 block">History</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Corporate Evolution
                        </h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div
                        className="max-w-5xl mx-auto relative"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {/* Vertical Line for Timeline */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent hidden md:block rounded-full"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    variants={itemVariants}
                                >
                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                        <motion.div 
                                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
                                            whileHover={{ y: -5 }}
                                        >
                                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-4 group-hover:bg-blue-100 transition-colors">
                                                {item.year}
                                            </span>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                        </motion.div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="relative flex items-center justify-center order-first md:order-none mb-4 md:mb-0">
                                        <motion.div 
                                            className="w-5 h-5 bg-white border-4 border-blue-600 rounded-full z-10"
                                            initial={{ scale: 0 }}
                                            animate={inView ? { scale: 1 } : {}}
                                            transition={{ delay: 0.2 * index, type: "spring", stiffness: 300 }}
                                        ></motion.div>
                                    </div>

                                    {/* Empty Space for alignment */}
                                    <div className="hidden md:block md:w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission, Vision & Values */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            What Drives Us
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {/* Mission */}
                        <motion.div 
                            className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden"
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                            <div className="p-4 bg-blue-50 rounded-xl inline-block mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To execute technically sound, ethically driven, high-quality turnkey MEP solutions delivered on time and within budget.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div 
                            className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden"
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
                            <div className="p-4 bg-indigo-50 rounded-xl inline-block mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To become a nationally recognized leader in integrated MEP engineering with innovation-driven execution standards.
                            </p>
                        </motion.div>

                        {/* Quality */}
                        <motion.div 
                            className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden"
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-teal-600"></div>
                            <div className="p-4 bg-green-50 rounded-xl inline-block mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Commitment</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Adhering to national and international engineering standards, ensuring reliability, safety, and performance excellence.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <ScrollToTopArrow />
        </div>
    );
};

export default About;