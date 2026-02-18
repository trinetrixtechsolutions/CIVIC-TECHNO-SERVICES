// src/pages/Services.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EngineeringIcon from '@mui/icons-material/Engineering';

const Services: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const services = [
        {
            icon: <ElectricalServicesIcon className="text-4xl text-blue-800" />,
            title: "Electrical Infrastructure",
            description: "HT & LT Panels, Transformers, Cable Laying (up to 220 Kms+), Distribution Boards, Industrial Internal & External Wiring, DG & UPS Installations.",
            features: [
                "High Tension & Low Tension Panels",
                "Power Transformers Installation",
                "Extensive Cable Laying Solutions",
                "Distribution Board Design & Installation",
                "DG & UPS Power Systems"
            ]
        },
        {
            icon: <AcUnitIcon className="text-4xl text-blue-800" />,
            title: "HVAC & High-Side Engineering",
            description: "Clean Room Installations, Chiller Yards, Humidification Systems, Air Handling Units (AHU), Industrial Ventilation Systems.",
            features: [
                "Clean Room HVAC Solutions",
                "Chiller Plant Installation",
                "Humidification & Dehumidification",
                "Air Handling Units (AHU)",
                "Industrial Ventilation Systems"
            ]
        },
        {
            icon: <SettingsRemoteIcon className="text-4xl text-blue-800" />,
            title: "Automation & Smart Systems",
            description: "Building Management Systems (BMS), Energy Monitoring & Optimization.",
            features: [
                "Building Management Systems",
                "Energy Monitoring Solutions",
                "Smart Building Automation",
                "Control System Integration",
                "Energy Optimization Strategies"
            ]
        },
        {
            icon: <LocalFireDepartmentIcon className="text-4xl text-blue-800" />,
            title: "Fire & Safety Systems",
            description: "Fire Alarm Systems (FASS), Access Control Systems (ACS), CCTV Surveillance.",
            features: [
                "Fire Alarm Systems (FASS)",
                "Access Control Systems (ACS)",
                "CCTV Surveillance",
                "Emergency Response Systems",
                "Safety Compliance Solutions"
            ]
        },
        {
            icon: <EngineeringIcon className="text-4xl text-blue-800" />,
            title: "Consulting & Project Engineering",
            description: "Electrical Design, Single Line Diagrams, BOQ Preparation, Cost Estimation, Testing & Commissioning, and O&M Contracts.",
            features: [
                "Electrical System Design",
                "Single Line Diagrams",
                "Bill of Quantities (BOQ)",
                "Cost Estimation & Budgeting",
                "Testing, Commissioning & O&M"
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
                            Our <span className="text-blue-800">Services</span>
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Engineering Depth & Technical Scope
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Introduction */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Fully Integrated MEP Solutions</h2>
                        <div className="w-24 h-1 bg-blue-800 mb-6"></div>
                        <p className="text-lg text-gray-700 mb-6">
                            Civic Techno Services provides fully integrated MEP and electrical turnkey solutions. The company operates under a single-point accountability model ensuring reduced cost, improved coordination, faster execution, and minimized risk exposure for clients.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section ref={ref} className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="p-6">
                                    <div className="flex justify-center mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4 text-center">
                                        {service.description}
                                    </p>
                                    <div className="border-t border-gray-100 pt-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                                        <ul className="space-y-1">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-blue-800 mr-2">•</span>
                                                    <span className="text-gray-700 text-sm">{feature}</span>
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

export default Services;