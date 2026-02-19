// src/pages/Industries.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

const Industries: React.FC = () => {

    const { ref } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const industries = [
        {
            icon: <ScienceIcon sx={{ fontSize: 85 }} />,
            image: GvkBiosciencesImg,
            title: "Pharmaceuticals & Cleanroom",
            description: "Specialized MEP solutions for pharmaceutical facilities with strict regulatory compliance, cleanroom environments, and precision environmental control systems.",
            requirements: [
                "Cleanroom Classification & Validation",
                "Contamination Control Systems",
                "Precision Temperature & Humidity",
                "Specialized Electrical Infrastructure",
                "Regulatory Compliance (GMP, WHO)"
            ],
        },
        {
            icon: <LocalHospitalIcon sx={{ fontSize: 85 }} />,
            image: NimsHospitalImg,
            title: "Healthcare & Hospitals",
            description: "Critical infrastructure solutions for healthcare facilities including operation theatres, ICU areas, and specialized medical equipment power systems.",
            requirements: [
                "Operation Theatre MEP Systems",
                "Medical Gas Pipeline Systems",
                "Critical Power Backup Solutions",
                "Hospital Information Systems",
                "Patient Safety Systems"
            ],
        },
        {
            icon: <BiotechIcon sx={{ fontSize: 85 }} />,
            image: NiabBiotechImg,
            title: "Biotechnology & Research",
            description: "Advanced MEP solutions for research facilities with specialized laboratory environments, precision equipment support, and safety systems.",
            requirements: [
                "Laboratory Fume Hood Systems",
                "Specialized Gas Distribution",
                "Precision Environmental Control",
                "Research Equipment Power",
                "Safety & Emergency Response"
            ],
        },
        {
            icon: <RestaurantIcon sx={{ fontSize: 85 }} />,
            image: NddbFoodImg,
            title: "Food & Beverage Processing",
            description: "Hygienic and compliant MEP solutions for food processing facilities with specialized requirements for safety, sanitation, and production efficiency.",
            requirements: [
                "Food-Grade Electrical Installations",
                "Process Cooling & Refrigeration",
                "Steam & Hot Water Systems",
                "Waste Management Systems",
                "HACCP Compliance Infrastructure"
            ],
        },
        {
            icon: <ElectricCarIcon sx={{ fontSize: 85 }} />,
            image: MarutiSuzukiImg,
            title: "Automotive & Battery Production",
            description: "Specialized infrastructure for automotive and battery manufacturing facilities with high-power requirements and precision environmental control.",
            requirements: [
                "High-Power Electrical Infrastructure",
                "Battery Production Environment",
                "Automated Manufacturing Support",
                "Testing & Quality Control Systems",
                "Fire Suppression Systems"
            ],
        },
        {
            icon: <FactoryIcon sx={{ fontSize: 85 }} />,
            image: IitGuwahatiImg,
            title: "Electronics & Industrial",
            description: "Comprehensive MEP solutions for electronics and industrial manufacturing with emphasis on precision, reliability, and operational efficiency.",
            requirements: [
                "Clean Manufacturing Environments",
                "ESD Protection Systems",
                "Power Quality Management",
                "Industrial Automation Support",
                "Process-Specific Environmental"
            ],
        },
        {
            icon: <ApartmentIcon sx={{ fontSize: 85 }} />,
            image: LodhaTowersImg,
            title: "Commercial & High-Rise",
            description: "Integrated MEP solutions for commercial and residential high-rise projects focusing on energy efficiency, comfort, and safety.",
            requirements: [
                "High-Rise Electrical Distribution",
                "HVAC System Optimization",
                "Building Management Systems",
                "Fire Safety & Evacuation",
                "Energy Efficiency Solutions"
            ],
        },
        {
            icon: <MemoryIcon sx={{ fontSize: 85 }} />,
            image: IndustrialDemoBg,
            title: "Data Centers & IT Infrastructure",
            description: "Critical infrastructure solutions for data centers and IT facilities with emphasis on reliability, redundancy, and precision environmental control.",
            requirements: [
                "Redundant Power Systems",
                "Precision Cooling Solutions",
                "Raised Floor Systems",
                "Fire Detection & Suppression",
                "Monitoring & Management"
            ],
        }
    ];

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* HERO — UNCHANGED */}
            <section
                className="relative min-h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
                style={{ backgroundImage: `url(${HeroBg})` }}
            >
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
                                Industries
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[47px] md:text-[65px] leading-[0.5] -mt-6">
                                We Serve
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-2xl">
                            Sector-specific turnkey engineering solutions tailored for precision-driven industries.
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

            {/* INTRO — UNCHANGED */}
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
                                Our
                            </h2>

                            <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#111111] text-[47px] leading-[0.81] -mt-8">
                                Expertise
                            </h1>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Civic Techno Services delivers tailored engineering infrastructure solutions across diverse sectors with regulatory precision and execution excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* INDUSTRY SECTION */}
            <section ref={ref} className="pb-24 lg:pb-32 bg-white overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 space-y-32">

                    {industries.map((industry, index) => {

                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >

                                {/* IMAGE SIDE */}
                                <div className={`${isEven ? 'order-1' : 'order-2'} relative h-[500px] overflow-hidden`}>
                                    <div className="sticky top-24 h-full w-full">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center bg-fixed rounded-xl"
                                            style={{
                                                backgroundImage: `url(${industry.image})`
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/60 rounded-xl" />

                                        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                                            <div>
                                                <h2
                                                    className="text-[110px] text-[#c59d5f] leading-none"
                                                    style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                                                >
                                                    {industry.title.split('&')[0]}
                                                </h2>

                                                <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[45px] -mt-6">
                                                    {industry.title.split('&')[1] || ''}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CONTENT SIDE */}
                                <div className={`${isEven ? 'order-2' : 'order-1'}`}>

                                    {/* ICON — LARGE, NO BACKGROUND */}
                                    <div className="mb-8 flex items-center gap-6">
                                        <div className="text-[#c59d5f] text-10xl flex items-center">
                                            {industry.icon}
                                        </div>
                                        <div className="h-1 flex-1 bg-gradient-to-r from-[#c59d5f] to-[#e6c88e]"></div>
                                    </div>

                                    <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                        {industry.description}
                                    </p>

                                    <div>
                                        <h4 className="font-primary font-black uppercase tracking-wider text-[#111111] mb-6 text-sm">
                                            Key Requirements
                                        </h4>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                            {industry.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircleOutlineIcon className="text-[#c59d5f] mt-1" />
                                                    <span className="text-gray-600 text-sm">
                                                        {req}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </motion.div>
                        );
                    })}

                </div>
            </section>

            <ScrollToTopArrow />
        </div>
    );
};

export default Industries;