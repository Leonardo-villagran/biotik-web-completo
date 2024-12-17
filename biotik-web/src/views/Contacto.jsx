/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from 'framer-motion';
import { Card, CardContent, Box, Typography, Stack, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import '../App.css';

export default function Contacto() {
    const contactInfo = {
        email: 'contacto@biotik.cl',
        web: 'https://www.biotik.cl',
        linkedin: 'https://www.linkedin.com/in/ejemplo',
    };

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const isSmallScreen = useMediaQuery('(max-width:500px)');

    return (
        <Box className="w-full box-border flex relative h-auto">
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0.5 }}
                transition={{ duration: 1, type: 'tween' }}
                className="flex w-full h-full"
            >
                <Card
                    className={`custom-card bg-black text-white shadow-lg rounded-lg overflow-hidden w-full 
            border-2 border-[#d3d3d3] hover:border-[3px] hover:border-gradient-to-r from-green-400 via-blue-500 to-purple-500 
            transition-transform duration-500 hover:shadow-2xl hover:scale-105`}
                >
                    <Stack
                        direction={isSmallScreen ? 'column' : 'row'}
                        className="h-full"
                    >
                        {/* Caja de contenido */}
                        <Box className="w-full bg-black h-full">
                            <CardContent className="custom-card-content p-4 h-full">
                                <Typography
                                    variant="h5"
                                    component="div"
                                    id="contact-title"
                                    className="text-white mb-4"
                                >
                                    Contacto
                                </Typography>

                                {/* Email con enlace mailto */}
                                <Typography
                                    variant="body1"
                                    className="text-white text-lg leading-7 my-6 whitespace-pre-line text-justify"
                                >
                                    Email:{' '}
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-white hover:text-gray-300"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </Typography>

                                {/* Web con enlace activo */}
                                <Typography
                                    variant="body1"
                                    className="text-white text-lg leading-7 my-6 whitespace-pre-line text-justify"
                                >
                                    Web:{' '}
                                    <a
                                        href={contactInfo.web}
                                        className="text-white hover:text-gray-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {contactInfo.web}
                                    </a>
                                </Typography>

                                {/* LinkedIn */}
                                <Typography
                                    variant="body1"
                                    className="text-white text-lg leading-7 my-6 whitespace-pre-line text-justify"
                                >
                                    LinkedIn:{' '}
                                    <a
                                        href={contactInfo.linkedin}
                                        className="text-white hover:text-gray-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {contactInfo.linkedin}
                                    </a>
                                </Typography>
                            </CardContent>
                        </Box>
                    </Stack>
                </Card>
            </motion.div>
        </Box>

    );
}
