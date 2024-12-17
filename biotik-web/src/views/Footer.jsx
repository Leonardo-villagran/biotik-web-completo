/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography, Card, CardContent, Stack } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import '../App.css';

export default function Footer() {
    const contactInfo = {
        email: 'contacto@biotik.cl',
        web: 'https://www.biotik.cl',
        linkedin: 'https://www.linkedin.com/in/ejemplo',
    };

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0.5 }}
            transition={{ duration: 1, type: 'tween' }}
            className="flex justify-center items-center bg-black text-white py-8"
        >
            <Card
                className={`custom-card bg-black text-white shadow-lg rounded-lg overflow-hidden w-full 
                border-2 border-[#d3d3d3] hover:border-[3px] hover:bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 
                transition-transform duration-500 hover:shadow-2xl hover:scale-105`}
            >
                <CardContent className="p-4">
                    <Typography
                        variant="h5"
                        component="div"
                        id="contact-title" // Agregado el id para la conexión con el menú
                        className="text-center mb-4"
                    >
                        Contacto
                    </Typography>
                    <Stack
                        direction="column"
                        spacing={2}
                        alignItems="center"
                    >
                        <Typography variant="body1" className="text-center">
                            Email: <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-gray-300">{contactInfo.email}</a>
                        </Typography>
                        <Typography variant="body1" className="text-center">
                            Web: <a href={contactInfo.web} className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">{contactInfo.web}</a>
                        </Typography>
                        <Typography variant="body1" className="text-center flex items-center justify-center">
                            LinkedIn: 
                            <a href={contactInfo.linkedin} className="text-white hover:text-gray-300 flex items-center ml-2" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className="mr-2" /> LinkedIn
                            </a>
                        </Typography>
                        <Typography variant="body2" className="text-center mt-4">
                            &copy; {new Date().getFullYear()} BiotiK. Todos los derechos reservados.
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </motion.div>
    );
}
