// src/pages/About.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import HeroBg from '../assets/clintlogos/hero_bg_img.png'; // Imported the Hero Image
import DividerImg from '../assets/clintlogos/download.svg';
import BannerImg from '../assets/clintlogos/baner_bg_image_1.png';

const About: React.FC = () => {
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

    const timeline = [
        {
            year: "2010",
            title: "Foundation & Specialization",
            description: "Civic Techno Services began as a specialized turnkey electrical solution provider for cleanroom environments, setting the stage for engineering excellence."
        },
        {
            year: "2012-2015",
            title: "Expansion into Core Infrastructure",
            description: "Expanded service offerings to include high-side HVAC and industrial infrastructure solutions, broadening our impact across sectors."
        },
        {
            year: "2016-2018",
            title: "Integrated Systems & Technology",
            description: "Integrated advanced Building Management Systems (BMS), surveillance, access control, and fire alarm systems (FASS) into our portfolio."
        },
        {
            year: "2019-Present",
            title: "Global Footprint",
            description: "Expanded operations internationally with successful project execution in Lusaka, Zambia, marking our entry into the global market."
        }
    ];

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* Hero Section with Parallax Background */}
            <section
                className="relative min-h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
                style={{ backgroundImage: `url(${HeroBg})` }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-left py-20">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >

                        <div className="text-center lg:text-left relative">
                            <h2
                                className="text-[60px] md:text-[110px] lg:text-[130px] text-[#c59d5f] leading-none"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                About
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[28px] md:text-[47px] lg:text-[65px] leading-[0.5] -mt-2 md:-mt-4 lg:-mt-6">
                                Civic Techno
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 mt-5 max-w-2xl">
                            A Legacy of Engineering Excellence & Turnkey Innovation.
                        </p>

                    </motion.div>
                </div>

                {/* Decorative Shape at Bottom */}
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


            {/* Company Introduction */}
            <section className="py-20 lg:py-10 bg-white relative">
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
                                className="text-[60px] md:text-[100px] lg:text-[120px] text-[#c59d5f] leading-none"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                Our
                            </h2>

                            <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#111111] text-[28px] md:text-[40px] lg:text-[47px] leading-[0.81] -mt-2 md:-mt-6 lg:-mt-8">
                                Story
                            </h1>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Established in <span className="font-bold text-[#c59d5f]">2010</span>, Civic Techno Services began as a specialized turnkey electrical solution provider for cleanroom environments. Over time, the organization expanded into a full-scale MEP turnkey engineering partner serving pharmaceuticals, healthcare, industrial manufacturing, commercial complexes, research facilities, and infrastructure projects.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Today, we stand as a trusted engineering partner delivering turnkey MEP excellence with accountability, technical depth, and corporate integrity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center relative">
                            <h2
                                className="text-[60px] md:text-[100px] lg:text-[120px] text-[#c59d5f] leading-none"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                Our
                            </h2>

                            <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#111111] text-[28px] md:text-[40px] lg:text-[47px] leading-[0.81] -mt-2 md:-mt-6 lg:-mt-8">
                                History
                            </h1>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-5xl mx-auto relative"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {/* Vertical Line for Timeline */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#c59d5f]/50 via-[#c59d5f]/100 to-[#c59d5f]/50 hidden md:block rounded-full"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    variants={itemVariants}
                                >
                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                        <motion.div
                                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
                                            whileHover={{ y: -5 }}
                                        >
                                            <span className="inline-block px-3 py-1 bg-[#c59d5f]/50 text-black rounded-full text-sm font-bold mb-4 group-hover:bg-[#C49D5F] transition-colors">
                                                {item.year}
                                            </span>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                        </motion.div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="relative flex items-center justify-center order-first md:order-none mb-4 md:mb-0">
                                        <motion.div
                                            className="w-5 h-5 bg-black border-4 border-[#c59d5f] rounded-full z-10"
                                            initial={{ scale: 0 }}
                                            animate={inView ? { scale: 1 } : {}}
                                            transition={{ delay: 0.2 * index, type: "spring", stiffness: 300 }}
                                        ></motion.div>
                                    </div>

                                    {/* Empty Space for alignment */}
                                    <div className="hidden md:block md:w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Professional Overview */}
            <motion.div
                className="text-center max-w-4xl mx-auto mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >

                <h2
                    className="text-[60px] md:text-[100px] lg:text-[120px] text-[#c59d5f] leading-none"
                    style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                >
                    Our
                </h2>

                <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#111111] text-[28px] md:text-[40px] lg:text-[47px] leading-[0.51] -mt-2 md:-mt-4 lg:-mt-6">
                    Profile
                </h1>

                <p className="text-gray-600 leading-relaxed text-lg">
                    Civic Techno has built for itself an enviable reputation of being a one-stop turnkey provider
                    for all industrial verticals. Its potent blend of technical and talented workforce, design
                    expertise, exceptional project execution capabilities and global footprint makes it the most
                    preferred choice for MEP projects.
                </p>

                <p className="text-gray-600 leading-relaxed text-lg mt-6">
                    Civic Techno Services also undertakes operation and maintenance (MEP) services for all
                    industrial verticals, ensuring long-term performance and reliability.
                </p>

            </motion.div>


            {/* Our Team */}
            <motion.div
                className="text-center max-w-4xl mx-auto mt-28"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >

                <h2
                    className="text-[60px] md:text-[100px] lg:text-[120px] text-[#c59d5f] leading-none"
                    style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                >
                    Our
                </h2>

                <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#111111] text-[28px] md:text-[40px] lg:text-[47px] leading-[0.51] -mt-2 md:-mt-4 lg:-mt-6">
                    Team
                </h1>

                <p className="text-gray-600 leading-relaxed text-lg">
                    Our team believes in first understanding your goals and then providing customized solutions
                    tailored to industry needs. We follow a human-centered engineering approach that delivers
                    measurable business value.
                </p>

                <p className="text-gray-600 leading-relaxed text-lg mt-6">
                    We understand that business success cannot be achieved through technology alone.
                    It begins with people and experts working together to identify your core objectives
                    and develop the most adapted solutions to meet those requirements.
                </p>

            </motion.div>


            {/* Mission, Vision & Values */}
            <section className="relative">

                {/* Sticky Background Banner */}
                <div
                    className="relative h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
                    style={{ backgroundImage: `url(${BannerImg})` }}
                >

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/40 to-black/30"></div>

                    {/* Centered Heading */}
                    <motion.div
                        className="relative text-center text-white px-4 z-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2
                            className="text-[50px] md:text-[90px] lg:text-[120px] text-[#c59d5f] leading-none"
                            style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                        >
                            Epitome of
                        </h2>

                        <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[24px] md:text-[40px] lg:text-[50px] leading-[0.9] -mt-2 md:-mt-4 lg:-mt-6">
                            SUCCESS
                        </h1>
                    </motion.div>

                    {/* Decorative Divider */}
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

                </div>



                {/* Content Below Banner */}
                <div className="py-20 lg:py-28 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">

                        {/* Vision & Mission Side by Side */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >

                            {/* Vision */}
                            <div className="text-center">
                                <motion.div
                                    className="mb-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2
                                        className="text-[60px] md:text-[100px] lg:text-[120px] text-[#c59d5f] leading-none"
                                        style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                                    >
                                        Our
                                    </h2>

                                    <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#111111] text-[28px] md:text-[40px] lg:text-[47px] leading-[0.51] -mt-2 md:-mt-4 lg:-mt-6">
                                        Vision
                                    </h1>
                                </motion.div>

                                <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                                    We aspire to be a leading organization with unique attributes characterized by quality products and services.
                                </p>
                            </div>


                            {/* Mission */}
                            <div className="text-center">
                                <motion.div
                                    className="mb-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2
                                        className="text-[60px] md:text-[100px] lg:text-[120px] text-[#c59d5f] leading-none"
                                        style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                                    >
                                        Our
                                    </h2>

                                    <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#111111] text-[28px] md:text-[40px] lg:text-[47px] leading-[0.51] -mt-2 md:-mt-4 lg:-mt-6">
                                        mission
                                    </h1>
                                </motion.div>

                                <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                                    We will always be responsible to keep the ethics of business with our esteemed customers and remain aligned with our core company policy.
                                </p>
                            </div>


                        </motion.div>

                        {/* Quality Commitment */}
                        <motion.div
                            className="text-center max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2
                                className="text-[60px] md:text-[100px] lg:text-[120px] text-[#c59d5f] leading-none"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                Our
                            </h2>

                            <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#111111] text-[28px] md:text-[40px] lg:text-[47px] leading-[0.51] -mt-2 md:-mt-4 lg:-mt-6">
                                Quality
                            </h1>

                            <p className="text-gray-600 leading-relaxed mt-6">
                                We are committed to achieve and sustain a leading position of consistent quality in all activities as per national and international standards, meeting customer expectations with continual improvements on time and within budget.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section >

            <ScrollToTopArrow />
        </div >
    );
};

export default About;