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

const Industries: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const industries = [
        {
            icon: <ScienceIcon className="text-4xl text-blue-800" />,
            title: "Pharmaceuticals & Cleanroom Manufacturing",
            description: "Specialized MEP solutions for pharmaceutical facilities with strict regulatory compliance, cleanroom environments, and precision environmental control systems.",
            requirements: [
                "Cleanroom Classification & Validation",
                "Contamination Control Systems",
                "Precision Temperature & Humidity Control",
                "Specialized Electrical Infrastructure",
                "Regulatory Compliance (GMP, WHO)"
            ]
        },
        {
            icon: <LocalHospitalIcon className="text-4xl text-blue-800" />,
            title: "Healthcare & Hospitals",
            description: "Critical infrastructure solutions for healthcare facilities including operation theatres, ICU areas, and specialized medical equipment power systems.",
            requirements: [
                "Operation Theatre MEP Systems",
                "Medical Gas Pipeline Systems",
                "Critical Power Backup Solutions",
                "Hospital Information Systems Integration",
                "Patient Safety & Emergency Systems"
            ]
        },
        {
            icon: <BiotechIcon className="text-4xl text-blue-800" />,
            title: "Biotechnology & Research Institutions",
            description: "Advanced MEP solutions for research facilities with specialized laboratory environments, precision equipment support, and safety systems.",
            requirements: [
                "Laboratory Fume Hood Systems",
                "Specialized Gas Distribution",
                "Precision Environmental Control",
                "Research Equipment Power Solutions",
                "Safety & Emergency Response Systems"
            ]
        },
        {
            icon: <RestaurantIcon className="text-4xl text-blue-800" />,
            title: "Food & Beverage Processing",
            description: "Hygienic and compliant MEP solutions for food processing facilities with specialized requirements for safety, sanitation, and production efficiency.",
            requirements: [
                "Food-Grade Electrical Installations",
                "Process Cooling & Refrigeration",
                "Steam & Hot Water Systems",
                "Waste Management Systems",
                "HACCP Compliance Infrastructure"
            ]
        },
        {
            icon: <ElectricCarIcon className="text-4xl text-blue-800" />,
            title: "Automotive & Battery Production",
            description: "Specialized infrastructure for automotive and battery manufacturing facilities with high-power requirements and precision environmental control.",
            requirements: [
                "High-Power Electrical Infrastructure",
                "Battery Production Environment Control",
                "Automated Manufacturing Support",
                "Testing & Quality Control Systems",
                "Safety & Fire Suppression Systems"
            ]
        },
        {
            icon: <FactoryIcon className="text-4xl text-blue-800" />,
            title: "Electronics & Industrial Manufacturing",
            description: "Comprehensive MEP solutions for electronics and industrial manufacturing with emphasis on precision, reliability, and operational efficiency.",
            requirements: [
                "Clean Manufacturing Environments",
                "ESD Protection Systems",
                "Precision Power Quality Management",
                "Industrial Automation Support",
                "Process-Specific Environmental Control"
            ]
        },
        {
            icon: <ApartmentIcon className="text-4xl text-blue-800" />,
            title: "Commercial & Residential High-Rise",
            description: "Integrated MEP solutions for commercial and residential high-rise projects focusing on energy efficiency, comfort, and safety.",
            requirements: [
                "High-Rise Electrical Distribution",
                "HVAC System Optimization",
                "Building Management Systems",
                "Fire Safety & Evacuation Systems",
                "Energy Efficiency Solutions"
            ]
        },
        {
            icon: <MemoryIcon className="text-4xl text-blue-800" />,
            title: "Data Centers & IT Infrastructure",
            description: "Critical infrastructure solutions for data centers and IT facilities with emphasis on reliability, redundancy, and precision environmental control.",
            requirements: [
                "Redundant Power Systems",
                "Precision Cooling Solutions",
                "Raised Floor Systems",
                "Fire Detection & Suppression",
                "Monitoring & Management Systems"
            ]
        }
    ];

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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="bg-white min-h-screen">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-4 lg:pt-8">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Industries <span className="text-blue-800">Served</span>
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Sector Expertise & Tailored Engineering Solutions
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Introduction */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industry-Specific Expertise</h2>
                        <div className="w-24 h-1 bg-blue-800 mb-6"></div>
                        <p className="text-lg text-gray-700 mb-6">
                            Civic Techno Services delivers tailored engineering infrastructure solutions across diverse sectors. Each industry demands specific regulatory compliance, environmental control, and precision engineering.
                        </p>
                        <p className="text-lg text-gray-700">
                            We integrate domain expertise with technical execution excellence to ensure industry-aligned infrastructure solutions that meet the unique challenges and requirements of each sector.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section ref={ref} className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        {industry.icon}
                                        <h3 className="text-xl font-bold text-gray-900 ml-3">
                                            {industry.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        {industry.description}
                                    </p>
                                    <div className="border-t border-gray-100 pt-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                                        <ul className="space-y-1">
                                            {industry.requirements.map((requirement, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-blue-800 mr-2">•</span>
                                                    <span className="text-gray-700 text-sm">{requirement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            <ScrollToTopArrow />
        </div>
    );
};

export default Industries;