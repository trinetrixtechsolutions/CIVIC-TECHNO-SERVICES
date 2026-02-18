// src/pages/Contact.tsx
import React, { useState, useEffect } from 'react';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { Button, TextField, Snackbar, Alert } from '@mui/material';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import SendIcon from '@mui/icons-material/Send';

// Assets
import HeroBg from '../assets/clintlogos/hero_bg_img.png';

const Contact: React.FC = () => {
    // ✅ Initialize EmailJS ONCE
    useEffect(() => {
        emailjs.init("1QZhqTlnvbDzLoARv"); // 🔥 Replace with your EmailJS Public Key
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', company: '', subject: '', message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false, error: false, message: ''
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const serviceID = 'service_zfv1mqa';
        const templateID = 'template_o6shhmm';

        emailjs.send(serviceID, templateID, formData)
            .then((response) => {
                setFormStatus({
                    submitted: true,
                    error: false,
                    message: 'Your message has been sent successfully!'
                });
                setSnackbarOpen(true);
                setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
            })
            .catch((error) => {
                setFormStatus({
                    submitted: true,
                    error: true,
                    message: 'Failed to send message. Please try again.'
                });
                setSnackbarOpen(true);
            });
    };

    const handleCloseSnackbar = () => setSnackbarOpen(false);

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* 1. HERO SECTION - Updated Style */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={HeroBg}
                        alt="Contact Background"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50" />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-left py-20">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-200 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        >
                            Get In Touch
                        </motion.span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Us</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                            Have a project in mind? Let's discuss how we can help you achieve your goals.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Shape at Bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* INFO STRIP SECTION */}
            <section className="bg-white py-2 border-b border-gray-100">
                <div className="container mx-auto px-4 lg:px-8">

                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Get In Touch With Us
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Please contact us using the information below. To locate contacts in the business office closest to you, visit our office websites.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
                        <div className="flex flex-col items-center">
                            <div className="text-blue-600 flex-shrink-0 mb-2"><MapPin size={48} strokeWidth={1.2} /></div>
                            <h3 className="text-base font-bold text-gray-900 mb-1 whitespace-nowrap">Branch Office</h3>
                            <p className="text-gray-600 leading-relaxed text-center text-sm">
                                Gokul Plots, 9th Phase <br />KPHB Colony, <br />Hyderabad – 500072.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-blue-600 flex-shrink-0 mb-2"><Phone size={48} strokeWidth={1.2} /></div>
                            <h3 className="text-base font-bold text-gray-900 mb-1 whitespace-nowrap">Call Us</h3>
                            <p className="text-gray-600 leading-relaxed text-center text-sm">
                                040-40213345 <br />7893799699 <br />9949699699
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-blue-600 flex-shrink-0 mb-2"><Mail size={48} strokeWidth={1.2} /></div>
                            <h3 className="text-base font-bold text-gray-900 mb-1 whitespace-nowrap">Send Us</h3>
                            <p className="text-gray-600 leading-relaxed text-center text-sm">
                                info@civictechno.com <br />vamsi@civictechno.com
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-blue-600 flex-shrink-0 mb-2"><Building2 size={48} strokeWidth={1.2} /></div>
                            <h3 className="text-base font-bold text-gray-900 mb-1 whitespace-nowrap">Registered Office</h3>
                            <p className="text-gray-600 leading-relaxed text-center text-sm">
                                At, Baluara, Post, Ninga, <br />Ps, Barauni, Dist, <br />Begusarai Bihar – 851112 India
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* 3. FORM & MAP SECTION */}
            <section ref={ref} className="py-10 bg-white">
                <div className="container mx-auto px-4 lg:px-16">

                    {/* SECTION HEADING */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Contact Our Team
                        </h2>
                        <div className="w-20 h-[2px] bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Have a question or project in mind? Reach out and our team will get back to you within 24 hours.
                        </p>
                    </div>

                    {/* FORM + DIVIDER + MAP */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-stretch">

                        {/* FORM SIDE */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7 }}
                            className="flex flex-col justify-center md:ml-8 lg:ml-16 xl:ml-24 w-full md:w-[420px] lg:w-[480px]"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                Send a Message
                            </h3>
                            <p className="text-gray-500 mb-10 text-sm">
                                We respond to all inquiries within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <TextField
                                        fullWidth
                                        label="Full Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        variant="standard"
                                        size="small"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        variant="standard"
                                        size="small"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <TextField
                                        fullWidth
                                        label="Phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        variant="standard"
                                        size="small"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        variant="standard"
                                        size="small"
                                    />
                                </div>

                                <TextField
                                    fullWidth
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    variant="standard"
                                    size="small"
                                />

                                <TextField
                                    fullWidth
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    multiline
                                    rows={4}
                                    variant="standard"
                                />

                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                        sx={{
                                            px: 4,
                                            py: 1.3,
                                            borderRadius: '6px',
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            backgroundColor: '#2563eb',
                                            boxShadow: 'none',
                                            '&:hover': { backgroundColor: '#1d4ed8' }
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </motion.div>

                            </form>
                        </motion.div>

                        {/* THIN DIVIDER */}
                        <div className="hidden lg:block w-[1px] bg-gray-200"></div>

                        {/* MAP SIDE */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex items-center"
                        >
                            <div className="w-full h-[450px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.301820419266!2d78.388839!3d17.493108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f3f169607d%3A0x6e2f183c5006b5e0!2sK%20P%20H%20B%20Phase%209%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500085!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Office Location"
                                ></iframe>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={formStatus.error ? "error" : "success"} variant="filled" sx={{ width: '100%', borderRadius: '12px' }}>
                    {formStatus.message}
                </Alert>
            </Snackbar>

            <ScrollToTopArrow />
        </div>
    );
};

export default Contact;