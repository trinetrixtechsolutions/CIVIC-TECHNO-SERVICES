// src/pages/Projects.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Projects: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const projects = [
        {
            name: "Maruti Suzuki Battery Plant",
            client: "Maruti Suzuki",
            location: "Gujarat",
            value: "446 Lakhs",
            description: "Complete turnkey MEP solution for the battery manufacturing facility including electrical infrastructure, HVAC systems, and automation."
        },
        {
            name: "National Dairy Development Board",
            client: "NDDB",
            location: "Odisha",
            value: "465 Lakhs",
            description: "Comprehensive electrical and HVAC infrastructure for the dairy development board facility with specialized equipment installation."
        },
        {
            name: "IIT Guwahati Testing Lab",
            client: "IIT Guwahati",
            location: "Assam",
            value: "145 Lakhs",
            description: "Specialized electrical infrastructure for advanced testing laboratory with precision power requirements and safety systems."
        },
        {
            name: "Nizams Institute of Medical Sciences",
            client: "NIMS",
            location: "Hyderabad",
            value: "35 Lakhs",
            description: "Critical electrical infrastructure for medical facility with UPS systems, specialized medical equipment power solutions, and safety systems."
        },
        {
            name: "Lodha Bellezza Towers",
            client: "Lodha Group",
            location: "Hyderabad",
            value: "90 Lakhs",
            description: "Complete MEP solution for residential towers including electrical infrastructure, HVAC systems, fire safety, and building management systems."
        },
        {
            name: "Mylan Labs Expansion",
            client: "Mylan",
            location: "Zambia",
            value: "135 Lakhs",
            description: "International project for pharmaceutical facility expansion with cleanroom electrical solutions and specialized HVAC systems."
        },
        {
            name: "National Institute of Animal Biotechnology",
            client: "NIAB",
            location: "Hyderabad",
            value: "215 Lakhs",
            description: "Specialized MEP solution for biotechnology research facility with precision environmental control and laboratory electrical systems."
        },
        {
            name: "GVK Biosciences Research Facility",
            client: "GVK Biosciences",
            location: "Hyderabad",
            value: "180 Lakhs",
            description: "Turnkey MEP solution for research facility with specialized laboratory infrastructure and cleanroom environments."
        },
        {
            name: "Rainbow Hospitals Expansion",
            client: "Rainbow Hospitals",
            location: "Hyderabad",
            value: "125 Lakhs",
            description: "Critical infrastructure for healthcare facility with specialized medical power systems and safety equipment."
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
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Our <span className="text-blue-800">Projects</span>
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Major Executions Across Diverse Industries
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Introduction */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Project Portfolio</h2>
                        <div className="w-24 h-1 bg-blue-800 mb-6"></div>
                        <p className="text-lg text-gray-700 mb-6">
                            With 38+ major industrial and institutional projects delivered, Civic Techno Services has established a strong track record of successful project execution across India and internationally.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section ref={ref} className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="h-48 bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center">
                                    <div className="text-white text-center px-4">
                                        <h3 className="text-xl font-bold">{project.name}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-600 mb-1">Client: <span className="font-medium text-gray-900">{project.client}</span></p>
                                        <p className="text-sm text-gray-600 mb-1">Location: <span className="font-medium text-gray-900">{project.location}</span></p>
                                        <p className="text-lg font-bold text-blue-800">Value: {project.value}</p>
                                    </div>
                                    <p className="text-gray-700 text-sm">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


        </div>
    );
};

export default Projects;