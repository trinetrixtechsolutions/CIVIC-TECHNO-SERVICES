// src/pages/Services.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HeroBg from '../assets/clintlogos/hero_bg_img.png';
import ServiceCard from '../components/Services/ServiceCard';
import { Outlet } from 'react-router-dom';

const Services: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const services = [
        {
            id: 1,
            icon: <ElectricalServicesIcon className="text-4xl" />,
            title: "Electrical Infrastructure",
            description: "HT & LT Panels, Transformers, Cable Laying (up to 220 Kms+), Distribution Boards, Industrial Internal & External Wiring, DG & UPS Installations."
        },
        {
            id: 2,
            icon: <AcUnitIcon className="text-4xl" />,
            title: "HVAC & High-Side Engineering",
            description: "Clean Room Installations, Chiller Yards, Humidification Systems, Air Handling Units (AHU), Industrial Ventilation Systems."
        },
        {
            id: 3,
            icon: <SettingsRemoteIcon className="text-4xl" />,
            title: "Automation & Smart Systems",
            description: "Building Management Systems (BMS), Energy Monitoring & Optimization."
        },
        {
            id: 4,
            icon: <LocalFireDepartmentIcon className="text-4xl" />,
            title: "Fire & Safety Systems",
            description: "Fire Alarm Systems (FASS), Access Control Systems (ACS), CCTV Surveillance."
        },
        {
            id: 5,
            icon: <EngineeringIcon className="text-4xl" />,
            title: "Consulting & Project Engineering",
            description: "Electrical Design, Single Line Diagrams, BOQ Preparation, Cost Estimation, Testing & Commissioning, and O&M Contracts."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    return (
        <div className="bg-white min-h-screen">

            {/* Hero Section with Background Image - Updated */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={HeroBg}
                        alt="Services Background"
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
                            Professional Excellence
                        </motion.span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                            Comprehensive Solutions for Modern Infrastructure.
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

            {/* Services Introduction */}
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
                            Fully Integrated MEP Solutions
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We provide fully integrated MEP and electrical turnkey solutions under a single-point accountability model ensuring <span className="font-bold text-blue-700">reduced cost</span>, improved coordination, faster execution, and minimized risk exposure for clients.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section ref={ref} className="pb-24 lg:pb-32 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                id={service.id}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            <ScrollToTopArrow />
            <Outlet />
        </div>
    );
};

export default Services;