// src/pages/Services.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import VideocamIcon from '@mui/icons-material/Videocam';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
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
            icon: <ElectricalServicesIcon className="text-4xl" />,
            title: "Electrical",
            description:
                "HT & LT Panels, Transformers, Cable Laying (up to 220 Kms+), Distribution Boards, Industrial Wiring, DG Sets, UPS Systems, and comprehensive Earthing Solutions."
        },
        {
            id: 2,
            icon: <AcUnitIcon className="text-4xl" />,
            title: "HVAC",
            description:
                "Design, supply, and installation of Air Conditioning systems, Ventilation, Exhaust Systems, DX & VRF Units, Ducting, and planned maintenance for commercial spaces."
        },
        {
            id: 3,
            icon: <SettingsRemoteIcon className="text-4xl" />,
            title: "BMS",
            description:
                "Centralized Building Management Systems for real-time monitoring, HVAC control, energy optimization, and intelligent automation of building services."
        },
        {
            id: 4,
            icon: <LocalFireDepartmentIcon className="text-4xl" />,
            title: "FASS",
            description:
                "Fire Alarm & Safety Systems including Fire Detection, Hydrant Systems, Automatic Sprinklers, Gas Suppression Systems, and Safety Audits compliant with NBC norms."
        },
        {
            id: 5,
            icon: <VideocamIcon className="text-4xl" />,
            title: "Surveillance",
            description:
                "Advanced IP CCTV solutions, Video Analytics, Perimeter Protection, and Command Center setups for round-the-clock security monitoring and threat detection."
        },
        {
            id: 6,
            icon: <SettingsPhoneIcon className="text-4xl" />,
            title: "Unified Communications",
            description:
                "Structured Cabling (Copper & Fiber), EPABX Systems, Public Address Systems (PA), Intercoms, Networking Infrastructure, and Data Center connectivity."
        },
        {
            id: 7,
            icon: <VpnKeyIcon className="text-4xl" />,
            title: "Access Control",
            description:
                "Biometric Systems, RFID Card Access, Smart Card Readers, Boom Barriers, Turnstiles, and Visitor Management Systems for secure facility management."
        },
        {
            id: 8,
            icon: <PrecisionManufacturingIcon className="text-4xl" />,
            title: "HVAC - High Side",
            description:
                "Specialized High-Side Engineering including Chiller Plants (Air & Water Cooled), Cooling Towers, AHUs, Pumping Stations, and Industrial Ventilation Systems."
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

            {/* HERO SECTION */}
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


            {/* INTRO SECTION */}
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