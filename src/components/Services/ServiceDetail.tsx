// src/components/Services/ServiceDetail.tsx
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SettingsRemoteIcon from "@mui/icons-material/SettingsRemote";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ConstructionIcon from "@mui/icons-material/Construction";
import VerifiedIcon from "@mui/icons-material/Verified";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

// FIXED IMPORTS: Adjusted path for components folder and removed missing image
import DividerImg from '../../assets/clintlogos/download.svg';
import HeroBg from '../../assets/clintlogos/hero_bg_img.png';

const services = [
  {
    id: 1,
    icon: <ElectricalServicesIcon className="text-5xl text-[#c59d5f]" />,
    title: "Electrical Infrastructure",
    heroImage: HeroBg, 
    galleryImages: [HeroBg, HeroBg, HeroBg], 
    description:
      "HT & LT Panels, Transformers, Cable Laying (220+ Kms), Distribution Boards, Industrial Wiring, DG & UPS Installations.",
    detailedInfo: "We provide end-to-end electrical infrastructure solutions designed for safety, efficiency, and scalability. From high-tension panels to intricate internal wiring, our team ensures every connection meets the highest industry standards. Our expertise spans industrial, commercial, and residential sectors, delivering reliable power distribution systems that stand the test of time.",
    features: [
      "High Tension & Low Tension Panels",
      "Power Transformers Installation",
      "Cable Laying Solutions",
      "Distribution Board Systems",
      "DG & UPS Installations",
    ],
  },
  {
    id: 2,
    icon: <AcUnitIcon className="text-5xl text-[#c59d5f]" />,
    title: "HVAC",
    heroImage: HeroBg,
    galleryImages: [HeroBg, HeroBg, HeroBg],
    description:
      "Comprehensive HVAC solutions for optimal climate control and air quality.",
    detailedInfo: "Our HVAC services ensure optimal indoor air quality and thermal comfort. We specialize in the design, installation, and maintenance of heating, ventilation, and air conditioning systems. Whether it's a commercial complex or an industrial facility, we provide energy-efficient solutions tailored to your specific environmental needs.",
    features: [
      "Clean Room HVAC",
      "Chiller Plant Installation",
      "Air Handling Units",
      "Industrial Ventilation",
      "Humidity Control Systems",
    ],
  },
  {
    id: 3,
    icon: <SettingsRemoteIcon className="text-5xl text-[#c59d5f]" />,
    title: "BMS & Automation",
    heroImage: HeroBg,
    galleryImages: [HeroBg, HeroBg, HeroBg],
    description:
      "Intelligent Building Management Systems for smart operations.",
    detailedInfo: "Implementing state-of-the-art Building Management Systems (BMS) to centralize control of your building's mechanical and electrical equipment. Our automation solutions enhance operational efficiency, reduce energy consumption, and provide real-time monitoring capabilities for modern smart buildings.",
    features: [
      "Centralized Control Systems",
      "Energy Monitoring",
      "Automation Integration",
      "Smart Controls",
      "Predictive Maintenance",
    ],
  },
  {
    id: 4,
    icon: <LocalFireDepartmentIcon className="text-5xl text-[#c59d5f]" />,
    title: "Fire & Safety (FASS)",
    heroImage: HeroBg,
    galleryImages: [HeroBg, HeroBg, HeroBg],
    description:
      "Advanced fire alarm and safety systems to protect assets and lives.",
    detailedInfo: "Safety is paramount. We design and install comprehensive fire fighting and detection systems that comply with strict safety regulations. From fire alarms to sprinkler systems and hydrants, we ensure your premises are equipped to handle emergencies effectively.",
    features: [
      "Fire Alarm Systems",
      "Sprinkler Systems",
      "Fire Hydrants",
      "Safety Compliance Audits",
      "Emergency Lighting",
    ],
  },
  {
    id: 5,
    icon: <EngineeringIcon className="text-5xl text-[#c59d5f]" />,
    title: "Consulting & Engineering",
    heroImage: HeroBg,
    galleryImages: [HeroBg, HeroBg, HeroBg],
    description:
      "Expert consulting, design, and project management services.",
    detailedInfo: "Our engineering consultants provide strategic guidance from concept to completion. We offer detailed project reports, electrical designs, BOQ preparation, and cost estimation to ensure your project is feasible, budget-friendly, and technically sound.",
    features: [
      "Electrical Design",
      "BOQ Preparation",
      "Cost Estimation",
      "Project Management",
      "Testing & Commissioning",
    ],
  },
];

// Static Services Offered List
const servicesOfferedList = [
  { icon: <DesignServicesIcon />, title: "Design/Engineering" },
  { icon: <ManageAccountsIcon />, title: "Project Management" },
  { icon: <ConstructionIcon />, title: "Construction" },
  { icon: <VerifiedIcon />, title: "Testing & Commissioning" },
  { icon: <SettingsSuggestIcon />, title: "Operation & Maintenance" },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === Number(id));

  if (!service)
    return (
      <div className="text-center py-20 text-xl">
        Service not found.
      </div>
    );

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center py-20">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center relative">
              <h2
                className="text-[110px] md:text-[130px] text-[#c59d5f] leading-none"
                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
              >
                Service
              </h2>

              <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[40px] md:text-[55px] leading-tight -mt-6">
                {service.title}
              </h1>
            </div>
          </motion.div>
        </div>

        {/* Divider Strip */}
        <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 pointer-events-none overflow-hidden">
          <div className="flex w-max">
            {Array.from({ length: 120 }).map((_, i) => (
              <img key={i} src={DividerImg} className="h-6 shrink-0" alt="" />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OFFERED SECTION */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg font-semibold text-[#c59d5f] tracking-widest uppercase mb-4">
              What We Provide
            </h2>
            <h3 className="text-3xl font-bold text-gray-900">
              Services Offered
            </h3>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {servicesOfferedList.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:bg-[#c59d5f]/10 transition-colors">
                <div className="text-[#c59d5f] mb-2 text-3xl">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{item.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DETAILED INFO & FEATURES */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Inspiration Heading & Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mb-8">
                <h2
                  className="text-[100px] text-[#c59d5f] leading-none"
                  style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                >
                  Expert
                </h2>
                <h3 className="font-primary font-black tracking-[0.08em] uppercase text-[#111111] text-[37px] leading-[0.9] -mt-6">
                  Solutions
                </h3>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {service.detailedInfo}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircleOutlineIcon className="text-[#c59d5f] text-xl" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Main Feature Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={service.heroImage} 
                  alt={service.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative background element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#c59d5f] rounded-2xl z-0"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[90px] text-[#c59d5f] leading-none"
              style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
            >
              Gallery
            </h2>
            <h3 className="font-primary font-black tracking-[0.08em] uppercase text-[#111111] text-[35px] -mt-4">
              Our Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-xl shadow-lg group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK BUTTON SECTION */}
      <section className="py-12 bg-white">
        <div className="text-center">
          <button
            onClick={() => navigate(-1)}
            className="border-2 border-[#c59d5f] text-[#c59d5f] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#c59d5f] hover:text-white shadow-md"
          >
            &larr; Back to Services
          </button>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;