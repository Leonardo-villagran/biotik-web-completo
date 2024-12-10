import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Header() {
    const logo = './images/logo3.png';
    const logoTexto = './images/logo_texto.png';

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <motion.div className="header-banner row"
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: 'tween' }}
        >
            <motion.div className="logo-container col-12 col-md-4 d-flex"
                initial={{ }}
                animate={{ }}
            >
                <div className="logo-left" ref={ref}>
                    <motion.img
                        src={logo}
                        alt="Logo Izquierdo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0.5, scale: inView ? 1.1 : 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </motion.div>
            <div className="logo-text-container col-12 col-md-4 d-flex">
                <motion.img
                    src={logoTexto}
                    alt="Logo Derecho"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0.5, scale: inView ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <div className="admin-gestion-buttons col-12 col-md-4 d-flex">
                <motion.button animate={{}} className="custom-button">
                    <a href="https://odk.biotico.cl/" target="_blank" rel="noopener noreferrer" className="button-link">
                        Administración
                    </a>
                </motion.button>
                <motion.button animate={{}} className="custom-button">
                    <a href="https://gestion.biotik.cl" target="_blank" rel="noopener noreferrer" className="button-link">
                        Gestión
                    </a>
                </motion.button>
            </div>
        </motion.div>
    );
}
