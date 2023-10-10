import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
export default function Items({ data }) {
    return (
        <>
            {
                // eslint-disable-next-line react/prop-types
                data.map((item) => (
                    <motion.div key={item.id_web} className="row"
                        initial={{ y:'100vw',opacity: 0 }}
                        animate={{ y:0, opacity: 1 }}
                        transition={{ duration: 1, type: 'tween' }}
                    >
                        <div className="col-md-8">
                            <div className="card h-100">
                                <div id={item.id_css}>
                                    <h1>{item.titulo}</h1>
                                    <p>{item.contenido}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <img src={item.imagen} className="card-img-top" alt="Imagen de BiotiK" />
                            </div>
                        </div>
                    </motion.div>
                ))}
        </>
    );
}