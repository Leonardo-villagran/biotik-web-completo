/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from 'framer-motion';
import { Card, CardContent, CardMedia, Box, Typography, Stack } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import '../App.css'; // Asegúrate de importar el archivo CSS

// eslint-disable-next-line react/prop-types
export default function Items({ data }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {
                // eslint-disable-next-line react/prop-types
                data.map((item) => {
                    const { ref, inView } = useInView({
                        triggerOnce: false,
                        threshold: 0.1,
                    });

                    return (
                        <Box key={item.id_web} sx={{ width: '100%', boxSizing: 'border-box', display: 'flex' }}>
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: inView ? 1 : 0.5 }}
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
                                                    id={item.id_css} 
                                                    sx={{ color: 'white', marginBottom: '16px' }} // Agrega margen inferior
                                                >
                                                    {item.titulo}
                                                </Typography>
                                                <Typography 
                                                    variant="body1" 
                                                    sx={{ 
                                                        color: 'white', 
                                                        fontSize: '1.25rem', 
                                                        lineHeight: '1.6', 
                                                        margin: '26px 0', 
                                                        whiteSpace: 'pre-line', // Para respetar los saltos de línea
                                                        textAlign: 'justify' // Justificar el texto
                                                    }}
                                                >
                                                    {item.contenido}
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                        <Box sx={{ flex: 1, height: '100%', backgroundColor: 'black', overflow: 'hidden' }}>
                                            <motion.div
                                                initial={{ scale: 1 }}
                                                animate={{ scale: inView ? 1.1 : 1 }}
                                                transition={{ duration: 0.5 }}
                                                style={{ height: '100%' }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    image={item.imagen}
                                                    alt="Imagen de BiotiK"
                                                    className="custom-card-media"
                                                    sx={{ backgroundColor: 'black', height: '100%' }}
                                                />
                                            </motion.div>
                                        </Box>
                                    </Stack>
                                </Card>
                            </motion.div>
                        </Box>
                    );
                })
            }
        </Box>
    );
}