import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Stack, Link, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Menu() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:777px)');

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: '¿Qué es BiotiK?', href: '#about-biotik' },
        { text: '¿Cómo funciona?', href: '#how-it-works' },
        { text: 'Ventajas', href: '#advantages' },
        { text: 'Seguridad', href: '#data-security' },
        { text: 'Descarga de datos', href: '#data-processing' },
        { text: '¿Por qué BiotiK?', href: '#why-choose-biotik' },
        { text: 'Contacto', href: '#contact-title' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, type: 'tween' }}
            className="card bg-gradient"
            style={{ marginBottom: '20px' }}  // Añadido margen inferior
        >
            <Box className="card-body">
                <nav className="hero-nav">
                    {isMobile ? (
                        <>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={toggleDrawer(true)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                            <Drawer
                                anchor="top"
                                open={drawerOpen}
                                onClose={toggleDrawer(false)}
                                PaperProps={{
                                    sx: { backgroundColor: 'black', color: 'white' }
                                }}
                            >
                                <List>
                                    {menuItems.map((item) => (
                                        <ListItem button key={item.text} component="a" href={item.href} onClick={toggleDrawer(false)}>
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', flexWrap: 'nowrap', width: '100%' }}>
                            {menuItems.map((item) => (
                                <Link key={item.text} href={item.href} color="inherit" underline="none" sx={{ textAlign: 'center', flex: 1 }}>
                                    {item.text}
                                </Link>
                            ))}
                        </Stack>
                    )}
                </nav>
            </Box>
        </motion.div>
    );
}
