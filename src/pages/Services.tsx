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
import DividerImg from '../assets/clintlogos/download.svg';
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
            icon: <ElectricalServicesIcon className="text-4xl text-[#c59d5f]" />,
            title: "Electrical Infrastructure",
            description:
                "HT & LT Panels, Transformers, Cable Laying (up to 220 Kms+), Distribution Boards, Industrial Internal & External Wiring, DG & UPS Installations."
        },
        {
            id: 2,
            icon: <AcUnitIcon className="text-4xl text-[#c59d5f]" />,
            title: "HVAC & High-Side Engineering",
            description:
                "Clean Room Installations, Chiller Yards, Humidification Systems, Air Handling Units (AHU), Industrial Ventilation Systems."
        },
        {
            id: 3,
            icon: <SettingsRemoteIcon className="text-4xl text-[#c59d5f]" />,
            title: "Automation & Smart Systems",
            description:
                "Building Management Systems (BMS), Energy Monitoring & Optimization."
        },
        {
            id: 4,
            icon: <LocalFireDepartmentIcon className="text-4xl text-[#c59d5f]" />,
            title: "Fire & Safety Systems",
            description:
                "Fire Alarm Systems (FASS), Access Control Systems (ACS), CCTV Surveillance."
        },
        {
            id: 5,
            icon: <EngineeringIcon className="text-4xl text-[#c59d5f]" />,
            title: "Consulting & Project Engineering",
            description:
                "Electrical Design, Single Line Diagrams, BOQ Preparation, Cost Estimation, Testing & Commissioning, and O&M Contracts."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* HERO SECTION — MATCHING ABOUT */}
            <section
                className="relative min-h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
                style={{ backgroundImage: `url(${HeroBg})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

                {/* Content */}
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-left py-20">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >

                        <div className="text-center lg:text-left relative">
                            <h2
                                className="text-[110px] md:text-[130px] text-[#c59d5f] leading-none"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                Our
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[47px] md:text-[65px] leading-[0.5] -mt-6">
                                Services
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 mt-5 max-w-2xl">
                            Comprehensive turnkey MEP solutions with precision, accountability, and technical excellence.
                        </p>
                    </motion.div>
                </div>

                {/* Divider Strip */}
                <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 pointer-events-none overflow-hidden">
                    <div className="flex w-max">
                        {Array.from({ length: 120 }).map((_, i) => (
                            <img
                                key={i}
                                src={DividerImg}
                                className="h-6 shrink-0"
                                alt=""
                            />
                        ))}
                    </div>
                </div>
            </section>


            {/* INTRO SECTION — MATCHING HEADING STYLE */}
            <section className="py-20 lg:py-10 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
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
                                Our
                            </h2>

                            <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#111111] text-[47px] leading-[0.81] -mt-8">
                                Expertise
                            </h1>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            We deliver fully integrated MEP and electrical turnkey solutions under a single-point accountability model ensuring
                            <span className="font-bold text-[#c59d5f]"> reduced cost</span>, improved coordination, faster execution, and minimized project risk.
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* SERVICES GRID */}
            <section ref={ref} className="pb-24 lg:pb-32 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={{
                                    hidden: { y: 40, opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: { duration: 0.6 }
                                    }
                                }}
                                whileHover={{ y: -6 }}
                            >
                                <ServiceCard
                                    id={service.id}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                />
                            </motion.div>
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
