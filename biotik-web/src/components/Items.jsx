/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from 'framer-motion';
import { Card, CardContent, CardMedia, Box, Typography, Stack, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import '../App.css';

// Individual Item component
function Item({ item, isSmallScreen }) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

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
                        border-2 border-[#000000] hover:border-[3px] hover:border-gradient-to-r from-green-400 via-blue-500 to-purple-500 
                        transition-transform duration-500 hover:shadow-2xl hover:scale-105 relative`}
                    sx={{
                        // Añadir una sombra adicional para crear el efecto de elevación
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                        zIndex: 10,  // Mantiene la caja por encima de los otros elementos
                    }}
                >
                    <Stack
                        direction={isSmallScreen ? 'column' : 'row'}
                        className="h-full"
                    >
                        {/* Contenedor del texto */}
                        <Box
                            className={`flex-1 bg-black h-full p-4 ${isSmallScreen ? 'w-full' : 'w-1/2'}`}
                        >
                            <CardContent className="custom-card-content h-full">
                                <Typography
                                    variant="h5"
                                    component="div"
                                    id={item.id_css}
                                    className="text-white mb-4"
                                >
                                    {item.titulo}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="text-white text-lg leading-7 my-6 whitespace-pre-line"
                                    sx={{ textAlign: 'justify' }}
                                >
                                    {item.contenido}
                                </Typography>
                            </CardContent>
                        </Box>

                        {/* Contenedor de la imagen */}
                        <Box
                            className={`flex-1 bg-black h-full overflow-hidden ${isSmallScreen ? 'w-full' : 'w-1/2'}`}
                        >
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: inView ? 1.1 : 1 }}
                                transition={{ duration: 0.5 }}
                                className="h-full w-full"
                            >
                                <CardMedia
                                    component="img"
                                    image={item.imagen}
                                    alt="Imagen de BiotiK"
                                    className="custom-card-media h-full w-full object-cover"
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
        <Box className="flex flex-col gap-4">
            {data.map((item) => (
                <Item key={item.id_web} item={item} isSmallScreen={isSmallScreen} />
            ))}
        </Box>
    );
}