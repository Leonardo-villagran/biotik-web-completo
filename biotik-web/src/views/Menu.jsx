import { motion } from 'framer-motion';
import { AppBar, Toolbar, Button, Box, Stack } from '@mui/material';

export default function Menu() {
    return (
        <motion.div
            initial={{ y: '-100vw', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'tween' }}
        >
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <Stack direction="row" spacing={2}>
                            <Button color="inherit" href="#advantages">Ventajas</Button>
                            <Button color="inherit" href="#data-security">Seguridad</Button>
                            <Button color="inherit" href="#data-processing">Descarga de datos</Button>
                            <Button color="inherit" href="#why-choose-biotik">¿Por qué BiotiK?</Button>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
        </motion.div>
    );
}
