// src/pages/Projects.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import { projects } from '../data/projects';
import HeroBg from '../assets/clintlogos/hero_bg_img.png';
import DividerImg from '../assets/clintlogos/download.svg';

const Projects: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* HERO SECTION — SAME STYLE AS ABOUT */}
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
                                Projects
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 mt-5 max-w-2xl">
                            Delivering engineering excellence across industries with precision and integrity.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Divider — SAME AS ABOUT */}
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

                <ScrollToTopArrow />
            </section>


            {/* PROJECT INTRO — SAME HEADING STYLE */}
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
                                Portfolio
                            </h1>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            With <span className="font-bold text-[#c59d5f]">38+ major industrial</span> and institutional projects delivered, Civic Techno Services has established a strong track record across India and internationally.
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* PROJECT GRID */}
            <section ref={ref} className="pb-24 lg:pb-32 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -6 }}
                            >
                                <Link to={`/projects/${project.id}`} className="block relative overflow-hidden h-64">
                                    <motion.img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gold Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                    {/* Location Badge */}
                                    <div className="absolute top-4 left-4 bg-[#c59d5f] text-black text-xs font-bold px-3 py-1 rounded-full">
                                        {project.location}
                                    </div>
                                </Link>

                                <div className="p-6 flex flex-col">
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="hover:text-[#c59d5f] transition-colors duration-300"
                                        >
                                            {project.name}
                                        </Link>
                                    </h3>

                                    <div className="flex justify-between items-center text-sm mb-4 border-t border-gray-100 pt-4 mt-auto">
                                        <span className="text-gray-500">Project Value</span>
                                        <span className="font-bold text-[#c59d5f] text-lg">
                                            {project.value}
                                        </span>
                                    </div>

                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="inline-flex items-center text-[#c59d5f] font-semibold text-sm hover:text-black transition-colors"
                                    >
                                        View Details
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </Link>
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
