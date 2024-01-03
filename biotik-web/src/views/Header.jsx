import { motion } from 'framer-motion';
export default function Header() {

    const logo = './images/logo.png';
    const logoTexto = './images/logo_texto.png';

    return (
        <motion.div className="header-banner row"
            initial={{ y: -250, opacity:0}}
            animate={{ y: 0,    opacity:1}}
            transition={{ duration: 0.5, type: 'tween'}}
        >
            <motion.div className="logo-container col-12 col-md-4 d-flex "
                initial={{ }}
                animate={{ }}
            >
                <div className="logo-left">
                    <img src={logo} alt="Logo Izquierdo" />
                </div>
            </motion.div>
            <div className="logo-text-container col-12 col-md-4 d-flex ">
                <img src={logoTexto} alt="Logo Derecho" />
            </div>
            <div className="admin-gestion-buttons col-12 col-md-4 d-flex ">
                <motion.button animate={{}} className="custom-button">  <a href="https://odk.biotico.cl/" target="_blank" rel="noopener noreferrer" className="button-link">
                    Administración
                </a></motion.button>
                <button className="custom-button">
                    {/* <a href="https://web.biotico.cl/odk-web/" target="_blank" rel="noopener noreferrer" className="button-link"> */}
                    <a href="https://gestion.biotik.cl/" target="_blank" rel="noopener noreferrer" className="button-link"> 
                        Gestión
                    </a>
                </button>
            </div>
        </motion.div>
    );
}

