import demoImage from '../assets/clintlogos/demo_image.webp';

export interface Project {
    id: string;
    name: string;
    client: string;
    location: string;
    value: string;
    description: string;
    image: string;
    detailedDescription: string;
    gallery?: string[];
}

export const projects: Project[] = [
    {
        id: "maruti-suzuki-battery",
        name: "Maruti Suzuki Battery Plant",
        client: "Maruti Suzuki",
        location: "Gujarat",
        value: "446 Lakhs",
        description: "Complete turnkey MEP solution for the battery manufacturing facility including electrical infrastructure, HVAC systems, and automation.",
        image: demoImage,
        detailedDescription: "This project involved the complete design and execution of the Mechanical, Electrical, and Plumbing (MEP) infrastructure for Maruti Suzuki's state-of-the-art battery manufacturing plant in Gujarat. The scope included high-tension power distribution, precision HVAC systems for cleanroom environments, and advanced building automation systems to ensure optimal operational efficiency and safety.",
        gallery: [demoImage, demoImage, demoImage]
    },
    {
        id: "nddb-odisha",
        name: "National Dairy Development Board",
        client: "NDDB",
        location: "Odisha",
        value: "465 Lakhs",
        description: "Comprehensive electrical and HVAC infrastructure for the dairy development board facility with specialized equipment installation.",
        image: demoImage,
        detailedDescription: "Civic Techno Services delivered a robust electrical and HVAC infrastructure for the National Dairy Development Board in Odisha. The project required strict adherence to hygiene and temperature control standards essential for dairy processing. Our solution included redundant power systems, energy-efficient cooling, and specialized electrical installations for processing equipment.",
        gallery: [demoImage, demoImage, demoImage]
    },
    {
        id: "iit-guwahati-lab",
        name: "IIT Guwahati Testing Lab",
        client: "IIT Guwahati",
        location: "Assam",
        value: "145 Lakhs",
        description: "Specialized electrical infrastructure for advanced testing laboratory with precision power requirements and safety systems.",
        image: demoImage,
        detailedDescription: "For IIT Guwahati, we executed the electrical infrastructure for a high-precision testing laboratory. The project demanded ultra-stable power supply systems with minimal harmonic distortion to ensure the accuracy of sensitive testing equipment. Safety protocols were paramount, incorporating advanced earthing and lightning protection systems.",
        gallery: [demoImage, demoImage, demoImage]
    },
    {
        id: "nims-hyderabad",
        name: "Nizams Institute of Medical Sciences",
        client: "NIMS",
        location: "Hyderabad",
        value: "35 Lakhs",
        description: "Critical electrical infrastructure for medical facility with UPS systems, specialized medical equipment power solutions, and safety systems.",
        image: demoImage,
        detailedDescription: "We provided critical electrical infrastructure support for NIMS in Hyderabad. This included the installation of medical-grade UPS systems, isolated power supply systems for operation theaters, and emergency backup generators. The focus was on ensuring 24/7 uninterrupted power for life-saving medical equipment.",
        gallery: [demoImage, demoImage, demoImage]
    },
    {
        id: "lodha-bellezza",
        name: "Lodha Bellezza Towers",
        client: "Lodha Group",
        location: "Hyderabad",
        value: "90 Lakhs",
        description: "Complete MEP solution for residential towers including electrical infrastructure, HVAC systems, fire safety, and building management systems.",
        image: demoImage,
        detailedDescription: "The Lodha Bellezza Towers project involved a comprehensive MEP solution for high-rise residential towers. We designed and installed energy-efficient lighting, centralized HVAC systems, fire detection and suppression systems, and an integrated Building Management System (BMS) for enhanced resident comfort and safety.",
        gallery: [demoImage, demoImage, demoImage]
    },
    {
        id: "mylan-labs-zambia",
        name: "Mylan Labs Expansion",
        client: "Mylan",
        location: "Zambia",
        value: "135 Lakhs",
        description: "International project for pharmaceutical facility expansion with cleanroom electrical solutions and specialized HVAC systems.",
        image: demoImage,
        detailedDescription: "This international project in Zambia for Mylan Labs focused on expanding their pharmaceutical manufacturing capabilities. We provided specialized cleanroom electrical solutions and HVAC systems designed to meet stringent international regulatory standards for pharmaceutical production.",
        gallery: [demoImage, demoImage, demoImage]
    },
    {
        id: "niab-hyderabad",
        name: "National Institute of Animal Biotechnology",
        client: "NIAB",
        location: "Hyderabad",
        value: "215 Lakhs",
        description: "Specialized MEP solution for biotechnology research facility with precision environmental control and laboratory electrical systems.",
        image: demoImage,
        detailedDescription: "For NIAB, a premier biotechnology research institute, we delivered a specialized MEP solution. The project included precision environmental control systems to maintain specific temperature and humidity levels required for research, along with a reliable laboratory electrical distribution network.",
        gallery: [demoImage, demoImage, demoImage]
    },
    {
        id: "gvk-bio-research",
        name: "GVK Biosciences Research Facility",
        client: "GVK Biosciences",
        location: "Hyderabad",
        value: "180 Lakhs",
        description: "Turnkey MEP solution for research facility with specialized laboratory infrastructure and cleanroom environments.",
        image: demoImage,
        detailedDescription: "We executed a turnkey MEP solution for GVK Biosciences' research facility. This complex project involved setting up specialized laboratory infrastructure, including fume hood exhaust systems, gas distribution networks, and cleanroom environments, all supported by a robust electrical backbone.",
        gallery: [demoImage, demoImage, demoImage]
    },
    {
        id: "rainbow-hospitals",
        name: "Rainbow Hospitals Expansion",
        client: "Rainbow Hospitals",
        location: "Hyderabad",
        value: "125 Lakhs",
        description: "Critical infrastructure for healthcare facility with specialized medical power systems and safety equipment.",
        image: demoImage,
        detailedDescription: "The expansion of Rainbow Hospitals required upgrading their critical infrastructure. We installed advanced medical power systems, nurse call systems, and patient safety equipment, ensuring a safe and reliable environment for patient care.",
        gallery: [demoImage, demoImage, demoImage]
    }
];
