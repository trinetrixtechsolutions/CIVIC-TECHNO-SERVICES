// src/components/sections/Clients.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Clients: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Load all client logos from the assets folder
    const logoModules = import.meta.glob('../../assets/clintlogos/clint*.png', { eager: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const clientLogos = Object.values(logoModules).map((mod: any) => mod.default);

    // Split logos into two rows for variety, or just use all in both
    const midPoint = Math.ceil(clientLogos.length / 2);
    const row1Logos = clientLogos.slice(0, midPoint);
    const row2Logos = clientLogos.slice(midPoint);

    // Ensure enough duplication for smooth looping
    // Duplicate 4 times to overlap screen width easily
    const marqueeRow1 = [...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos];
    const marqueeRow2 = [...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos];

    return (
        <section ref={ref} className="py-16 lg:py-24 bg-white overflow-hidden">
            <style>{`
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .marquee-scroll-left {
                    animation: scrollLeft 60s linear infinite;
                }
                .marquee-scroll-right {
                    animation: scrollRight 60s linear infinite;
                }
                .marquee-container:hover .marquee-content {
                    animation-play-state: paused;
                }
            `}</style>
            <div className="container mx-auto px-4 mb-12">
                <motion.div
                    className="text-center"
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
            </div>

            {/* Marquee Section */}
            <div className="relative w-full overflow-hidden flex flex-col gap-12">
                {/* Gradient Masks to fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Row 1: Left to Right */}
                <div className="marquee-container w-full overflow-hidden hover:cursor-pointer">
                    <div className="marquee-content marquee-scroll-right flex gap-12 w-max pl-12">
                        {marqueeRow1.map((logo, index) => (
                            <div
                                key={`row1-${index}`}
                                className="flex-shrink-0 w-32 h-24 md:w-40 md:h-32 bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <img
                                    src={logo}
                                    alt={`Client Logo ${index}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="marquee-container w-full overflow-hidden hover:cursor-pointer">
                    <div className="marquee-content marquee-scroll-left flex gap-12 w-max pr-12">
                        {marqueeRow2.map((logo, index) => (
                            <div
                                key={`row2-${index}`}
                                className="flex-shrink-0 w-32 h-24 md:w-40 md:h-32 bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300"
                            >
                                <img
                                    src={logo}
                                    alt={`Client Logo ${index}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;