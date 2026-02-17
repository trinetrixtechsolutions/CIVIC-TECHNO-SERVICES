// src/components/sections/CTASection.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-r from-blue-800 to-indigo-900">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Engineer Your Next Milestone?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Let's discuss how our turnkey MEP solutions can power your infrastructure needs
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            component={Link}
                            to="/contact"
                            variant="contained"
                            size="large"
                            className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 text-lg font-medium rounded-full shadow-xl"
                        >
                            Get In Touch
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;