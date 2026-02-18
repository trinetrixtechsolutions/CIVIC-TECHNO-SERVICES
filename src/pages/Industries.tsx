// src/pages/Industries.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import ScienceIcon from '@mui/icons-material/Science';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BiotechIcon from '@mui/icons-material/Biotech';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import FactoryIcon from '@mui/icons-material/Factory';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MemoryIcon from '@mui/icons-material/Memory';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HeroBg from '../assets/clintlogos/hero_bg_img.png'; // Imported Hero Image

const Industries: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const industries = [
        {
            icon: <ScienceIcon className="text-3xl" />,
            title: "Pharmaceuticals & Cleanroom",
            description: "Specialized MEP solutions for pharmaceutical facilities with strict regulatory compliance, cleanroom environments, and precision environmental control systems.",
            requirements: [
                "Cleanroom Classification & Validation",
                "Contamination Control Systems",
                "Precision Temperature & Humidity",
                "Specialized Electrical Infrastructure",
                "Regulatory Compliance (GMP, WHO)"
            ],
            color: "blue"
        },
        {
            icon: <LocalHospitalIcon className="text-3xl" />,
            title: "Healthcare & Hospitals",
            description: "Critical infrastructure solutions for healthcare facilities including operation theatres, ICU areas, and specialized medical equipment power systems.",
            requirements: [
                "Operation Theatre MEP Systems",
                "Medical Gas Pipeline Systems",
                "Critical Power Backup Solutions",
                "Hospital Information Systems",
                "Patient Safety Systems"
            ],
            color: "red"
        },
        {
            icon: <BiotechIcon className="text-3xl" />,
            title: "Biotechnology & Research",
            description: "Advanced MEP solutions for research facilities with specialized laboratory environments, precision equipment support, and safety systems.",
            requirements: [
                "Laboratory Fume Hood Systems",
                "Specialized Gas Distribution",
                "Precision Environmental Control",
                "Research Equipment Power",
                "Safety & Emergency Response"
            ],
            color: "green"
        },
        {
            icon: <RestaurantIcon className="text-3xl" />,
            title: "Food & Beverage Processing",
            description: "Hygienic and compliant MEP solutions for food processing facilities with specialized requirements for safety, sanitation, and production efficiency.",
            requirements: [
                "Food-Grade Electrical Installations",
                "Process Cooling & Refrigeration",
                "Steam & Hot Water Systems",
                "Waste Management Systems",
                "HACCP Compliance Infrastructure"
            ],
            color: "orange"
        },
        {
            icon: <ElectricCarIcon className="text-3xl" />,
            title: "Automotive & Battery Production",
            description: "Specialized infrastructure for automotive and battery manufacturing facilities with high-power requirements and precision environmental control.",
            requirements: [
                "High-Power Electrical Infrastructure",
                "Battery Production Environment",
                "Automated Manufacturing Support",
                "Testing & Quality Control Systems",
                "Fire Suppression Systems"
            ],
            color: "slate"
        },
        {
            icon: <FactoryIcon className="text-3xl" />,
            title: "Electronics & Industrial",
            description: "Comprehensive MEP solutions for electronics and industrial manufacturing with emphasis on precision, reliability, and operational efficiency.",
            requirements: [
                "Clean Manufacturing Environments",
                "ESD Protection Systems",
                "Power Quality Management",
                "Industrial Automation Support",
                "Process-Specific Environmental"
            ],
            color: "purple"
        },
        {
            icon: <ApartmentIcon className="text-3xl" />,
            title: "Commercial & High-Rise",
            description: "Integrated MEP solutions for commercial and residential high-rise projects focusing on energy efficiency, comfort, and safety.",
            requirements: [
                "High-Rise Electrical Distribution",
                "HVAC System Optimization",
                "Building Management Systems",
                "Fire Safety & Evacuation",
                "Energy Efficiency Solutions"
            ],
            color: "indigo"
        },
        {
            icon: <MemoryIcon className="text-3xl" />,
            title: "Data Centers & IT Infrastructure",
            description: "Critical infrastructure solutions for data centers and IT facilities with emphasis on reliability, redundancy, and precision environmental control.",
            requirements: [
                "Redundant Power Systems",
                "Precision Cooling Solutions",
                "Raised Floor Systems",
                "Fire Detection & Suppression",
                "Monitoring & Management"
            ],
            color: "cyan"
        }
    ];

    // Color mapping for dynamic styling
    const colorMap: { [key: string]: { bg: string, text: string, gradient: string } } = {
        blue: { bg: "bg-blue-50", text: "text-blue-600", gradient: "from-blue-500 to-blue-600" },
        red: { bg: "bg-red-50", text: "text-red-500", gradient: "from-red-500 to-rose-600" },
        green: { bg: "bg-green-50", text: "text-green-600", gradient: "from-green-500 to-emerald-600" },
        orange: { bg: "bg-orange-50", text: "text-orange-500", gradient: "from-orange-500 to-amber-500" },
        slate: { bg: "bg-slate-100", text: "text-slate-600", gradient: "from-slate-500 to-gray-700" },
        purple: { bg: "bg-purple-50", text: "text-purple-600", gradient: "from-purple-500 to-indigo-600" },
        indigo: { bg: "bg-indigo-50", text: "text-indigo-600", gradient: "from-indigo-500 to-blue-600" },
        cyan: { bg: "bg-cyan-50", text: "text-cyan-600", gradient: "from-cyan-500 to-teal-500" }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
                        alt="Industrial Background"
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
                            Sector Expertise
                        </motion.span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Served</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                            Tailored Engineering Solutions for Every Sector.
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

            {/* Industries Introduction */}
            <section className="py-20 lg:py-2 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Industry-Specific Expertise
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Civic Techno Services delivers tailored engineering infrastructure solutions across diverse sectors. Each industry demands specific regulatory compliance, environmental control, and precision engineering.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We integrate domain expertise with technical execution excellence to ensure industry-aligned infrastructure solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section ref={ref} className="pb-24 lg:pb-32 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {industries.map((industry, index) => {
                            const colors = colorMap[industry.color] || colorMap.blue;

                            return (
                                <motion.div
                                    key={index}
                                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Top Gradient Line */}
                                    <div className={`h-2 w-full bg-gradient-to-r ${colors.gradient}`}></div>

                                    <div className="p-8">
                                        <div className="flex items-start gap-5 mb-5">
                                            <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                                                {industry.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                                                    {industry.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {industry.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-5 border-t border-gray-100">
                                            <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}></span>
                                                Key Requirements
                                            </h4>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                                {industry.requirements.map((requirement, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <CheckCircleOutlineIcon className={`${colors.text} text-base mt-0.5 flex-shrink-0`} />
                                                        <span className="text-gray-600 text-sm">{requirement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <ScrollToTopArrow />
        </div>
    );
};

export default Industries;