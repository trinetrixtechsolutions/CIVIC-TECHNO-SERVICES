// src/components/sections/Clients.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Clients: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const clients = [
        "Mylan Labs",
        "GVK Biosciences",
        "Chemo India",
        "National Dairy Development Board",
        "IIT Institutions",
        "Rainbow Hospitals",
        "Lodha Group",
        "Granules India",
        "Maruti Suzuki Battery Plant"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section ref={ref} className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Valued Clients
                    </h2>
                    <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Organizations that trust our engineering expertise and execution strength
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="h-16 flex items-center justify-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-800 font-bold text-xl">
                                        {client.charAt(0)}
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-gray-800 font-medium mt-3">{client}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;