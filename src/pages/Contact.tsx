// src/pages/Contact.tsx
import React, { useState, useEffect } from 'react';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { Button, TextField, Snackbar, Alert, Box } from '@mui/material';
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

            {/* 1. HERO SECTION */}
            <section
                className="relative h-[60vh] flex items-center justify-center bg-cover bg-fixed bg-center"
                style={{ backgroundImage: `url(${HeroBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter">
                            Contact <span className="text-blue-500">US</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto">
                            Transforming ideas into digital reality. Let's talk.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* INFO STRIP SECTION */}
            <section className="bg-white py-16 border-b border-gray-100">
                <div className="container mx-auto px-4 lg:px-8">

                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Get In Touch With Us
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Please contact us using the information below. To locate contacts in the business office closest to you, visit our office websites.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                        {/* Branch Office */}
                        <motion.div
                            className="flex items-center space-x-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="text-blue-600 flex-shrink-0 mt-2">
                                <MapPin size={64} strokeWidth={1.2} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Branch Office</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Gokul Plots, 9th Phase <br />
                                    KPHB Colony, <br />
                                    Hyderabad – 500072.
                                </p>
                            </div>
                        </motion.div>

                        {/* Call Us */}
                        <motion.div
                            className="flex items-center space-x-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="text-blue-600 flex-shrink-0 mt-2">
                                <Phone size={64} strokeWidth={1.2} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    040-40213345 <br />
                                    7893799699 <br />
                                    9949699699
                                </p>
                            </div>
                        </motion.div>

                        {/* Send Us */}
                        <motion.div
                            className="flex items-center space-x-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="text-blue-600 flex-shrink-0 mt-2">
                                <Mail size={64} strokeWidth={1.2} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Send Us</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    info@civictechno.com <br />
                                    vamsi@civictechno.com
                                </p>
                            </div>
                        </motion.div>

                        {/* Registered Office */}
                        <motion.div
                            className="flex items-center space-x-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="text-blue-600 flex-shrink-0 mt-2">
                                <Building2 size={64} strokeWidth={1.2} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Registered Office</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    At, Baluara, Post, Ninga, <br />
                                    Ps, Barauni, Dist, <br />
                                    Begusarai Bihar – 851112 India
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>


            {/* 3. FORM & MAP SECTION */}
            <section ref={ref} className="py-24 bg-white">
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
                            className="flex flex-col justify-center"
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