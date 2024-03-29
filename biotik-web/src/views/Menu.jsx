import { motion } from 'framer-motion';

export default function Menu() {
    return (
        <motion.div className="card bg-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}  
            transition={{delay: 0.3, duration: 1, type: 'tween'}}

        >
            <div className="card-body">
                <nav className="hero-nav">
                    <div className="d-flex flex-wrap">
                        <a className="nav-link col-12 col-sm-4 col-md-4 col-lg-2" href="#about-biotik">¿Qué es BiotiK?</a>
                        <a className="nav-link col-12 col-sm-4 col-md-4 col-lg-2" href="#how-it-works">¿Cómo funciona?</a>
                        <a className="nav-link col-12 col-sm-4 col-md-4 col-lg-2" href="#advantages">Ventajas</a>
                        <a className="nav-link col-12 col-sm-4 col-md-4 col-lg-2" href="#data-security">Seguridad</a>
                        <a className="nav-link col-12 col-sm-4 col-md-4 col-lg-2" href="#data-processing">Descarga de datos</a>
                        <a className="nav-link col-12 col-sm-4 col-md-4 col-lg-2" href="#why-choose-biotik">¿Por qué BiotiK?</a>
                    </div>
                </nav>
            </div>
        </motion.div>



    )
}
