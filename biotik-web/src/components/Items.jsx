/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../App.css';

// Individual Item component
function Item({ item, className = "" }) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0.5 }}
            transition={{ duration: 1, type: 'tween' }}
            className={`w-full max-w-6xl mx-auto border border-neutral-600 rounded-lg bg-neutral-800 flex flex-col md:flex-row overflow-hidden min-h-[300px] ${className}`}
            style={{ backgroundClip: 'padding-box' }}
        >
            {/* Contenedor del texto */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-10 bg-black"> {/* Added bg-black */}
                <h3 id={item.id_css} className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white text-justify">
                    {item.titulo}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-white whitespace-pre-line text-justify">
                    {item.contenido}
                </p>
            </div>
            {/* Contenedor de la imagen */}
            <div className="h-[232px] flex items-center justify-center bg-black p-4 md:flex-1 md:h-auto md:p-4"> {/* Changed md:p-0 to md:p-4 */}
                <figure className="w-full h-full flex items-center justify-center">
                    <img
                        src={item.imagen}
                        alt="Imagen de BiotiK"
                        className="object-contain rounded-2xl h-auto w-full max-h-[200px] md:object-cover lg:max-h-[230px] xl:max-h-[260px]"
                    />
                </figure>
            </div>
        </motion.div>
    );
}

// Main Items component
export default function Items({ data }) {
    return (
        <div className="flex flex-col items-center gap-0 pt-4 pb-0 bg-zinc-900">
            {data.map((item, idx) => (
                <React.Fragment key={item.id_web}>
                    {idx !== 0 && (
                        <div className="w-full max-w-6xl mx-auto flex justify-center items-center" style={{height: '32px'}}>
                            <div className="w-full h-full bg-zinc-900"></div>
                        </div>
                    )}
                    <Item item={item} />
                </React.Fragment>
            ))}
        </div>
    );
}