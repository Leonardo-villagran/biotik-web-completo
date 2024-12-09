import { motion } from 'framer-motion';
import { Card, CardContent, CardMedia, Box, Typography, Stack } from '@mui/material';
import '../App.css'; // Asegúrate de importar el archivo CSS

export default function Contacto() {
    const contactInfo = {
        email: 'contacto@biotik.cl',
        web: 'www.biotik.cl',
        linkedin: 'https://www.linkedin.com/in/ejemplo'
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: '16px' }}>
            <Box sx={{ width: '100%', boxSizing: 'border-box', display: 'flex', marginBottom: '16px' }}>
                <motion.div
                    initial={{ y: '100vw', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'tween' }}
                    style={{ flex: 1, display: 'flex' }}
                >
                    <Card className="custom-card">
                        <Stack direction="row" sx={{ height: '100%', backgroundColor: 'black' }}>
                            <Box sx={{ flex: 2, backgroundColor: 'black' }}>
                                <CardContent className="custom-card-content">
                                    <Typography 
                                        variant="h5" 
                                        component="div" 
                                        id="contact-title" // Agrega el id aquí
                                        sx={{ color: 'white', marginBottom: '16px' }} // Agrega margen inferior
                                    >
                                        Contacto
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            color: 'white', 
                                            fontSize: '1.25rem', 
                                            lineHeight: '1.6', 
                                            margin: '16px 0', 
                                            whiteSpace: 'pre-line', // Para respetar los saltos de línea
                                            textAlign: 'justify' // Justificar el texto
                                        }}
                                    >
                                        Email: {contactInfo.email}
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            color: 'white', 
                                            fontSize: '1.25rem', 
                                            lineHeight: '1.6', 
                                            margin: '16px 0', 
                                            whiteSpace: 'pre-line', // Para respetar los saltos de línea
                                            textAlign: 'justify' // Justificar el texto
                                        }}
                                    >
                                        Web: {contactInfo.web}
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            color: 'white', 
                                            fontSize: '1.25rem', 
                                            lineHeight: '1.6', 
                                            margin: '16px 0', 
                                            whiteSpace: 'pre-line', // Para respetar los saltos de línea
                                            textAlign: 'justify' // Justificar el texto
                                        }}
                                    >
                                        LinkedIn: <a href={contactInfo.linkedin} style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a>
                                    </Typography>
                                </CardContent>
                            </Box>
                            <Box sx={{ flex: 1, height: '100%', backgroundColor: 'black' }}>
                                <CardMedia
                                    component="img"
                                    image="./images/7.jpg" // Asegúrate de que la ruta sea correcta
                                    alt="Imagen de Contacto"
                                    className="custom-card-media"
                                    sx={{ backgroundColor: 'black' }}
                                />
                            </Box>
                        </Stack>
                    </Card>
                </motion.div>
            </Box>
        </Box>
    );
}