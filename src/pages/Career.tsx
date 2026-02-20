// src/pages/Career.tsx
import React, { useState, useEffect } from 'react';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { Button, TextField, Snackbar, Alert } from '@mui/material';
import { MapPin, Phone, Mail, Briefcase, FileUp } from 'lucide-react';
import SendIcon from '@mui/icons-material/Send';
import HeroBg from '../assets/clintlogos/hero_bg_img.png';
import DividerImg from '../assets/clintlogos/download.svg';

const Career: React.FC = () => {

    useEffect(() => {
        // Initialize EmailJS (Make sure to use your actual Public Key)
        emailjs.init("1QZhqTlnvbDzLoARv");
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [formData, setFormData] = useState({
        name: '', 
        email: '', 
        phone: '', 
        position: '', 
        message: '',
        resumeName: '',
        resumeBase64: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false, error: false, message: ''
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle File Upload (Convert to Base64 for EmailJS)
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Limit file size to 500KB for email stability
            if (file.size > 500000) {
                setFormStatus({
                    submitted: true, error: true, message: 'File size too large (max 500KB).'
                });
                setSnackbarOpen(true);
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    resumeName: file.name,
                    resumeBase64: reader.result as string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if(!formData.resumeBase64) {
            setFormStatus({
                submitted: true, error: true, message: 'Please attach your resume.'
            });
            setSnackbarOpen(true);
            return;
        }

        // Note: Ensure your EmailJS template handles the 'resumeBase64' and 'resumeName' fields.
        // For large files, emailjs might truncate base64 strings. A link to cloud storage is often better for production.
        emailjs.send('service_zfv1mqa', 'template_o6shhmm', formData)
            .then(() => {
                setFormStatus({
                    submitted: true,
                    error: false,
                    message: 'Your application has been submitted successfully!'
                });
                setSnackbarOpen(true);
                setFormData({ 
                    name: '', 
                    email: '', 
                    phone: '', 
                    position: '', 
                    message: '', 
                    resumeName: '', 
                    resumeBase64: '' 
                });
            })
            .catch(() => {
                setFormStatus({
                    submitted: true,
                    error: true,
                    message: 'Failed to submit application. Please try again.'
                });
                setSnackbarOpen(true);
            });
    };

    const handleCloseSnackbar = () => setSnackbarOpen(false);

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="relative min-h-[60vh] flex items-center justify-center">

                {/* Background Image with Grayscale Filter */}
                <div
                    className="absolute inset-0 bg-fixed bg-center bg-cover grayscale"
                    style={{ backgroundImage: `url(${HeroBg})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-left py-20">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <h2
                                className="text-[60px] md:text-[110px] lg:text-[130px] text-[#c59d5f] leading-none"
                                style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}
                            >
                                Join
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[28px] md:text-[47px] lg:text-[65px] leading-[0.5] -mt-2 md:-mt-4 lg:-mt-6">
                                Our Team
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-2xl">
                            Build your future with a team committed to engineering excellence.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 pointer-events-none overflow-hidden">
                    <div className="flex w-max">
                        {Array.from({ length: 120 }).map((_, i) => (
                            <img key={i} src={DividerImg} className="h-6 shrink-0" alt="" />
                        ))}
                    </div>
                </div>
            </section>

            {/* INFO + FORM */}
            <section ref={ref} className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

                        {/* LEFT SIDE */}
                        <motion.div
                            className="flex flex-col h-full"
                            initial={{ opacity: 0, x: -40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="text-left mb-12">
                                <h2 className="text-[60px] md:text-[80px] lg:text-[100px] text-[#c59d5f] leading-none"
                                    style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}>
                                    Apply
                                </h2>
                                <h1 className="font-primary font-black uppercase text-[#111111] text-[28px] md:text-[35px] lg:text-[45px] leading-[0.7] -mt-2 md:-mt-4 lg:-mt-6">
                                    Now
                                </h1>
                            </div>

                            <div className="space-y-10 text-gray-600 flex-1">

                                <div className="flex gap-5">
                                    <Briefcase size={40} className="text-[#c59d5f]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Current Openings</h3>
                                        <p>
                                            We are always looking for talented individuals.<br />
                                            Send us your resume for future opportunities.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <Mail size={40} className="text-[#c59d5f]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Careers Email</h3>
                                        <p>
                                            <span className="font-bold text-[#c59d5f]">careers@civictechno.com</span><br />
                                            Expect a response within 48 hours.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <Phone size={40} className="text-[#c59d5f]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">HR Contact</h3>
                                        <p>
                                            7893799699<br />
                                            Mon - Sat, 9:00 AM - 6:00 PM
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <MapPin size={40} className="text-[#c59d5f]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Head Office</h3>
                                        <p>
                                            Main Road, near JNTU Metro Station<br />
                                            Kukatpally, Hyderabad, Telangana, India
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                        {/* RIGHT SIDE FORM */}
                        <motion.div
                            className="flex flex-col h-full"
                            initial={{ opacity: 0, x: 40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="text-left mb-12">
                                <h2 className="text-[60px] md:text-[80px] lg:text-[100px] text-[#c59d5f] leading-none"
                                    style={{ fontFamily: 'Herr Von Muellerhoff, serif' }}>
                                    Career
                                </h2>
                                <h1 className="font-primary font-black uppercase text-[#111111] text-[28px] md:text-[35px] lg:text-[45px] leading-[0.7] -mt-2 md:-mt-4 lg:-mt-6">
                                    Application
                                </h1>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col flex-1 justify-between">

                                <div className="space-y-6">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <TextField fullWidth label="Full Name" name="name"
                                            value={formData.name} onChange={handleChange}
                                            required variant="outlined"
                                            InputProps={{ sx: { borderRadius: "12px", height: 56 } }} />

                                        <TextField fullWidth label="Email" name="email"
                                            type="email" value={formData.email}
                                            onChange={handleChange} required variant="outlined"
                                            InputProps={{ sx: { borderRadius: "12px", height: 56 } }} />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <TextField fullWidth label="Phone" name="phone"
                                            value={formData.phone} onChange={handleChange}
                                            required variant="outlined"
                                            InputProps={{ sx: { borderRadius: "12px", height: 56 } }} />

                                        <TextField fullWidth label="Position Applied For" name="position"
                                            value={formData.position} onChange={handleChange}
                                            variant="outlined"
                                            InputProps={{ sx: { borderRadius: "12px", height: 56 } }} />
                                    </div>

                                    {/* Resume Upload Field */}
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-[#c59d5f] transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <FileUp className="text-[#c59d5f]" />
                                                <div>
                                                    <p className="font-semibold text-gray-800 text-sm">
                                                        {formData.resumeName ? formData.resumeName : "Upload Resume (PDF/DOC)"}
                                                    </p>
                                                    <p className="text-xs text-gray-500">Max file size: 500KB</p>
                                                </div>
                                            </div>
                                            <Button variant="outlined" component="label" sx={{ borderRadius: "8px", textTransform: 'none' }}>
                                                Choose File
                                                <input type="file" hidden accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                                            </Button>
                                        </div>
                                    </div>

                                    <TextField fullWidth label="Message / Cover Letter" name="message"
                                        value={formData.message} onChange={handleChange}
                                        multiline rows={4}
                                        variant="outlined"
                                        InputProps={{ sx: { borderRadius: "12px" } }} />
                                </div>

                                <div className="flex justify-end pt-6">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                        sx={{
                                            borderRadius: "50px",
                                            padding: "12px 32px",
                                            backgroundColor: "#252525",
                                            "&:hover": { backgroundColor: "#c59d5f" }
                                        }}
                                    >
                                        Submit Application
                                    </Button>
                                </div>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar}
                    severity={formStatus.error ? "error" : "success"}
                    variant="filled">
                    {formStatus.message}
                </Alert>
            </Snackbar>

            <ScrollToTopArrow />
        </div>
    );
};

export default Career;