/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from 'framer-motion';
import { Card, CardContent, CardMedia, Box, Typography, Stack, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import '../App.css'; // Asegúrate de importar el archivo CSS

// Individual Item component
function Item({ item, isSmallScreen }) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <Box sx={{ width: '100%', boxSizing: 'border-box', display: 'flex', position: 'relative' }}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0.5 }}
                transition={{ duration: 1, type: 'tween' }}
                style={{ flex: 1, display: 'flex' }}
            >
                <Card className="custom-card">
                    <Stack
                        direction={isSmallScreen ? 'column' : 'row'}
                        sx={{ height: '100%', backgroundColor: 'black' }}
                    >
                        <Box sx={{ flex: 2, backgroundColor: 'black', width: isSmallScreen ? '100%' : 'auto' }}>
                            <CardContent className="custom-card-content">
                                <Typography 
                                    variant="h5" 
                                    component="div" 
                                    id={item.id_css} 
                                    sx={{ color: 'white', marginBottom: '16px' }}
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
                                        whiteSpace: 'pre-line',
                                        textAlign: 'justify'
                                    }}
                                >
                                    {item.contenido}
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ flex: 1, height: '100%', backgroundColor: 'black', overflow: 'hidden', width: isSmallScreen ? '100%' : 'auto' }}>
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
                                    sx={{ backgroundColor: 'black', height: '100%', width: '100%' }}
                                />
                            </motion.div>
                        </Box>
                    </Stack>
                </Card>
            </motion.div>
        </Box>
    );
}

// Main Items component
export default function Items({ data }) {
    const isSmallScreen = useMediaQuery('(max-width:500px)');

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {data.map((item) => (
                <Item key={item.id_web} item={item} isSmallScreen={isSmallScreen} />
            ))}
        </Box>
    );
}