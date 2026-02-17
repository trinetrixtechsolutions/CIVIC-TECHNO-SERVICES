// src/pages/Contact.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, TextField, Snackbar, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';

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
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("FORM DATA:", formData); // Debug log

        const serviceID = 'service_zfv1mqa';  // ✅ Your real service ID
        const templateID = 'template_o6shhmm'; // ✅ Your real template ID

        emailjs.send(serviceID, templateID, formData)
            .then((response) => {
                console.log('SUCCESS!', response);

                setFormStatus({
                    submitted: true,
                    error: false,
                    message: 'Your message has been sent successfully. We will get back to you soon!'
                });

                setSnackbarOpen(true);

                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    subject: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('FAILED...', error);

                setFormStatus({
                    submitted: true,
                    error: true,
                    message: 'Failed to send your message. Please try again later.'
                });

                setSnackbarOpen(true);
            });
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

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
                            Contact <span className="text-blue-800">Us</span>
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Get in touch with our engineering team for your next project
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section ref={ref} className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Info */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <motion.h2
                                className="text-3xl font-bold text-gray-900 mb-6"
                                variants={itemVariants}
                            >
                                Get in Touch
                            </motion.h2>

                            <div className="w-24 h-1 bg-blue-800 mb-8"></div>

                            <motion.div className="space-y-6" variants={containerVariants}>

                                <motion.div className="flex items-start" variants={itemVariants}>
                                    <LocationOnIcon className="text-blue-800 mr-4 text-2xl" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">Head Office</h3>
                                        <p className="text-gray-700">
                                            #512, Gokul Plots, 9th Phase, KPHP Colony, Hyderabad – 500072.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start" variants={itemVariants}>
                                    <PhoneIcon className="text-blue-800 mr-4 text-2xl" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-700">
                                            040-40213345 | 7893799699 | 9949699699
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start" variants={itemVariants}>
                                    <EmailIcon className="text-blue-800 mr-4 text-2xl" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-700">
                                            info@civictechno.com | vamsi@civictechno.com
                                        </p>
                                    </div>
                                </motion.div>

                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <motion.h2
                                className="text-3xl font-bold text-gray-900 mb-6"
                                variants={itemVariants}
                            >
                                Send Us a Message
                            </motion.h2>

                            <div className="w-24 h-1 bg-blue-800 mb-8"></div>

                            <motion.form
                                onSubmit={handleSubmit}
                                className="space-y-4"
                                variants={containerVariants}
                            >

                                <TextField fullWidth label="Your Name" name="name"
                                    value={formData.name} onChange={handleChange} required />

                                <TextField fullWidth label="Your Email" name="email" type="email"
                                    value={formData.email} onChange={handleChange} required />

                                <TextField fullWidth label="Phone Number" name="phone"
                                    value={formData.phone} onChange={handleChange} />

                                <TextField fullWidth label="Company Name" name="company"
                                    value={formData.company} onChange={handleChange} />

                                <TextField fullWidth label="Subject" name="subject"
                                    value={formData.subject} onChange={handleChange} required />

                                <TextField fullWidth label="Your Message" name="message"
                                    value={formData.message} onChange={handleChange}
                                    required multiline rows={4} />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 font-medium rounded-full shadow-lg"
                                >
                                    Send Message
                                </Button>

                            </motion.form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar}
                    severity={formStatus.error ? "error" : "success"}
                    sx={{ width: '100%' }}>
                    {formStatus.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Contact;
