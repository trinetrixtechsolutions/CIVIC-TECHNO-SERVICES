// src/pages/Services.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Outlet, Link } from 'react-router-dom'; // Added Link
import React from 'react';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import VideocamIcon from '@mui/icons-material/Videocam';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Added ArrowForwardIcon
import HeroBg from '../assets/clintlogos/hero_bg_img.png';
import DividerImg from '../assets/clintlogos/download.svg';
import IndustrialDemoBg from '../assets/industry_images/industrial_deno_img.png';
import GvkBiosciencesImg from '../assets/projects_images/GVK_Biosciences_Research_Facility.png';
import NimsHospitalImg from '../assets/projects_images/Nizams_Institute_of_Medical_Sciences.png';
import NiabBiotechImg from '../assets/projects_images/National_Institute_of_Animal_Biotechnology.png';
import NddbFoodImg from '../assets/projects_images/National_Dairy_Development_Board.png';
import MarutiSuzukiImg from '../assets/projects_images/Maruti_Suzuki_Battery_Plant.png';
import IitGuwahatiImg from '../assets/projects_images/IIT_Guwahati_Testing_Lab.png';
import LodhaTowersImg from '../assets/projects_images/Lodha_Bellezza_Towers.png';

const Services: React.FC = () => {
    const { ref } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Added 'id' field to each service for routing
    const services = [
        {
            id: 'electrical-power',
            icon: <ElectricalServicesIcon sx={{ fontSize: 85 }} />,
            image: LodhaTowersImg,
            title: "Electrical & Power",
            description: "Comprehensive electrical infrastructure solutions ranging from high-tension panels to low-voltage distribution, ensuring safety, reliability, and energy efficiency for diverse sectors.",
            requirements: [
                "HT & LT Panel Installation",
                "Transformer & Substations",
                "Cable Laying & Trenching",
                "DG Sets & UPS Systems",
                "Earthing & Lightning Protection"
            ],
        },
        {
            id: 'hvac-ventilation',
            icon: <AcUnitIcon sx={{ fontSize: 85 }} />,
            image: MarutiSuzukiImg,
            title: "HVAC & Ventilation",
            description: "Design and installation of advanced climate control systems tailored for industrial, commercial, and cleanroom environments with a focus on energy optimization.",
            requirements: [
                "Central Air Conditioning",
                "Ventilation & Exhaust Systems",
                "DX & VRF Units",
                "Ducting & Insulation",
                "Annual Maintenance Contracts"
            ],
        },
        {
            id: 'bms-automation',
            icon: <SettingsRemoteIcon sx={{ fontSize: 85 }} />,
            image: IitGuwahatiImg,
            title: "BMS & Automation",
            description: "Smart Building Management Systems (BMS) enabling centralized monitoring and control of MEP services to enhance operational efficiency and reduce costs.",
            requirements: [
                "Centralized Control Systems",
                "HVAC & Lighting Automation",
                "Energy Monitoring Dashboards",
                "Fault Detection & Alarms",
                "SCADA Integration"
            ],
        },
        {
            id: 'fire-alarm-safety',
            icon: <LocalFireDepartmentIcon sx={{ fontSize: 85 }} />,
            image: NimsHospitalImg,
            title: "Fire Alarm & Safety",
            description: "End-to-end fire protection solutions including detection, suppression, and hydrant systems designed to meet the strictest safety codes and NBC norms.",
            requirements: [
                "Fire Detection Systems",
                "Hydrant & Sprinkler Systems",
                "Gas Suppression Systems",
                "Public Address Systems",
                "Safety Audits & Compliance"
            ],
        },
        {
            id: 'surveillance-security',
            icon: <VideocamIcon sx={{ fontSize: 85 }} />,
            image: IndustrialDemoBg,
            title: "Surveillance & Security",
            description: "State-of-the-art security infrastructure featuring IP-based surveillance, video analytics, and command centers for round-the-clock monitoring.",
            requirements: [
                "IP CCTV Networks",
                "Video Analytics Software",
                "Perimeter Intrusion Detection",
                "Command Center Setup",
                "Remote Monitoring Solutions"
            ],
        },
        {
            id: 'unified-communications',
            icon: <SettingsPhoneIcon sx={{ fontSize: 85 }} />,
            image: NiabBiotechImg,
            title: "Unified Communications",
            description: "Structured cabling and communication infrastructure ensuring seamless connectivity and data transfer across complex facility landscapes.",
            requirements: [
                "Structured Cabling (Copper/Fiber)",
                "EPABX & Intercom Systems",
                "Public Address Systems",
                "Networking Infrastructure",
                "Data Center Connectivity"
            ],
        },
        {
            id: 'access-control-entry',
            icon: <VpnKeyIcon sx={{ fontSize: 85 }} />,
            image: GvkBiosciencesImg,
            title: "Access Control & Entry",
            description: "Advanced access management systems providing secure, trackable entry solutions for personnel and vehicles, integrated with HR and security databases.",
            requirements: [
                "Biometric & RFID Readers",
                "Boom Barriers & Turnstiles",
                "Visitor Management Systems",
                "Flap Barrier Gates",
                "Integration with BMS"
            ],
        },
        {
            id: 'industrial-high-side',
            icon: <PrecisionManufacturingIcon sx={{ fontSize: 85 }} />,
            image: NddbFoodImg,
            title: "Industrial & High-Side",
            description: "Specialized high-side engineering for heavy industries, including chiller plants, cooling towers, and process-specific mechanical systems.",
            requirements: [
                "Chiller Plants (Air/Water)",
                "Cooling Towers & AHUs",
                "Pumping Stations",
                "Industrial Ventilation",
                "Process Piping Systems"
            ],
        }
    ];

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* HERO SECTION */}
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
                        <div>
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

                        <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-2xl">
                            Comprehensive turnkey MEP solutions with precision, accountability, and technical excellence.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 pointer-events-none overflow-hidden">
                    <div className="flex w-max">
                        {Array.from({ length: 120 }).map((_, i) => (
                            <img key={i} src={DividerImg} className="h-6 shrink-0" alt="" />
                        ))}
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <h2
                                className="text-[120px] text-[#c59d5f] leading-none"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                Technical
                            </h2>

                            <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#111111] text-[47px] leading-[0.81] -mt-8">
                                Excellence
                            </h1>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            We deliver fully integrated MEP and electrical turnkey solutions under a single-point accountability model ensuring reduced cost, improved coordination, and minimized project risk.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section ref={ref} className="pb-24 lg:pb-32 bg-white overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 flex flex-col gap-16 lg:gap-20">

                    {services.map((service, index) => {
                        return (
                            <React.Fragment key={index}>
                                <motion.div
                                    className="flex flex-col gap-10"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >

                                    {/* ICON & LINE */}
                                    <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start">
                                        <div className="text-[#c59d5f] flex items-center">
                                            {service.icon}
                                        </div>
                                        <div className="h-1 flex-1 bg-gradient-to-r from-[#c59d5f] to-[#e6c88e]"></div>
                                    </div>

                                    {/* TEXT SECTION: Heading and Data in same row */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                                        {/* Heading Side (Left) */}
                                        <motion.div
                                            className="text-center lg:text-left"
                                            initial={{ opacity: 0, x: -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <h2
                                                className="text-[80px] md:text-[100px] text-[#c59d5f] leading-none"
                                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                                            >
                                                {service.title.split('&')[0]}
                                            </h2>
                                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#111111] text-[28px] md:text-[36px] leading-[0.9] -mt-4">
                                                {service.title.split('&')[1] || ''}
                                            </h1>
                                        </motion.div>

                                        {/* Data Side (Right) */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.1 }}
                                        >
                                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                                                {service.description}
                                            </p>

                                            <div>
                                                <h4 className="font-primary font-black uppercase tracking-wider text-[#111111] mb-4 text-sm">
                                                    Key Offerings
                                                </h4>

                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                                    {service.requirements.map((req, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <CheckCircleOutlineIcon className="text-[#c59d5f] mt-0.5 text-sm" />
                                                            <span className="text-gray-600 text-sm">
                                                                {req}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* VIEW MORE BUTTON */}
                                            <div className="mt-8">
                                                <Link
                                                    to={`/services/${service.id}`}
                                                    className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#c59d5f] text-[#c59d5f] font-bold uppercase text-xs tracking-widest hover:bg-[#c59d5f] hover:text-white transition-all duration-300 group"
                                                >
                                                    View More
                                                    <ArrowForwardIcon sx={{ fontSize: 16 }} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* IMAGE SECTION */}
                                    <motion.div
                                        className="w-full h-[220px] md:h-[280px] lg:h-[320px] relative overflow-hidden"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    >
                                        <div
                                            className="absolute inset-0 bg-cover bg-center bg-fixed"
                                            style={{
                                                backgroundImage: `url(${service.image})`
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                                    </motion.div>

                                </motion.div>

                            </React.Fragment>
                        );
                    })}

                </div>
            </section>

            <ScrollToTopArrow />
            <Outlet />
        </div>
    );
};

export default Services;