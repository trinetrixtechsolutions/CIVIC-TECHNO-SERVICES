// src/pages/Contact.tsx
import React, { useState, useEffect } from 'react';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { Button, TextField, Snackbar, Alert } from '@mui/material';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import SendIcon from '@mui/icons-material/Send';
import HeroBg from '../assets/clintlogos/hero_bg_img.png';
import DividerImg from '../assets/clintlogos/download.svg';

const Contact: React.FC = () => {

    useEffect(() => {
        emailjs.init("1QZhqTlnvbDzLoARv");
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

        emailjs.send('service_zfv1mqa', 'template_o6shhmm', formData)
            .then(() => {
                setFormStatus({
                    submitted: true,
                    error: false,
                    message: 'Your message has been sent successfully!'
                });
                setSnackbarOpen(true);
                setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
            })
            .catch(() => {
                setFormStatus({
                    submitted: true,
                    error: true,
                    message: 'Failed to send message. Please try again.'
                });
                setSnackbarOpen(true);
            });
    };

    const handleCloseSnackbar = () => setSnackbarOpen(false);

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* HERO SECTION — BRAND CONSISTENT */}
            <section
                className="relative min-h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
                style={{ backgroundImage: `url(${HeroBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-left py-20">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-center lg:text-left relative">
                            <h2
                                className="text-[110px] md:text-[130px] text-[#c59d5f] leading-none"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                Contact
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[47px] md:text-[65px] leading-[0.5] -mt-6">
                                Us
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-2xl">
                            Let’s discuss your next project and how we can deliver engineered excellence.
                        </p>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 pointer-events-none overflow-hidden">
                    <div className="flex w-max">
                        {Array.from({ length: 120 }).map((_, i) => (
                            <img key={i} src={DividerImg} className="h-6 shrink-0" alt="" />
                        ))}
                    </div>
                </div>
            </section>


            {/* INFO + FORM SAME ROW */}
            <section ref={ref} className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* LEFT SIDE — CONTACT DETAILS */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="text-left mb-12">
                                <h2
                                    className="text-[100px] text-[#c59d5f] leading-none"
                                    style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                                >
                                    Get In
                                </h2>

                                <h1 className="font-primary font-black uppercase text-[#111111] text-[45px] leading-[0.7] -mt-6">
                                    Touch With Us
                                </h1>
                            </div>

                            <div className="space-y-10 text-gray-600">

                                <div className="flex gap-5">
                                    <MapPin size={40} className="text-[#c59d5f]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Branch Office</h3>
                                        <p>
                                            Gokul Plots, 9th Phase<br />
                                            KPHB Colony,<br />
                                            Hyderabad – 500072.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <Phone size={40} className="text-[#c59d5f]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                        <p>
                                            040-40213345<br />
                                            7893799699<br />
                                            9949699699
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <Mail size={40} className="text-[#c59d5f]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Send Us</h3>
                                        <p>
                                            info@civictechno.com<br />
                                            vamsi@civictechno.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <Building2 size={40} className="text-[#c59d5f]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Registered Office</h3>
                                        <p>
                                            At, Baluara, Post, Ninga,<br />
                                            Ps, Barauni, Dist,<br />
                                            Begusarai Bihar – 851112 India
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>


                        {/* RIGHT SIDE — FORM */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                Send a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} required variant="standard" />
                                    <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required variant="standard" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleChange} variant="standard" />
                                    <TextField fullWidth label="Company" name="company" value={formData.company} onChange={handleChange} variant="standard" />
                                </div>

                                <TextField fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleChange} required variant="standard" />

                                <TextField fullWidth label="Message" name="message" value={formData.message} onChange={handleChange} required multiline rows={4} variant="standard" />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    className="bg-[#c59d5f] hover:bg-black text-white px-6 py-2 rounded-md normal-case"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>


            {/* MAP FULL WIDTH */}
            <section className="relative w-full">

                {/* TOP Divider (like hero bottom) */}
                <div className="absolute top-0 left-0 w-full z-20 -translate-y-1/2 pointer-events-none overflow-hidden">
                    <div className="flex w-max">
                        {Array.from({ length: 120 }).map((_, i) => (
                            <img key={i} src={DividerImg} className="h-6 shrink-0" alt="" />
                        ))}
                    </div>
                </div>

                <div className="w-full h-[500px]">
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
            </section>

            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={formStatus.error ? "error" : "success"} variant="filled">
                    {formStatus.message}
                </Alert>
            </Snackbar>

            <ScrollToTopArrow />
        </div>
    );
};

export default Contact;
