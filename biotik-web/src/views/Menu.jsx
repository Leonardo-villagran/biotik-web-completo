import { motion } from 'framer-motion';

export default function Menu() {
    const menuItems = [
        { text: '¿Qué es BiotiK?', href: '#about-biotik' },
        { text: '¿Cómo funciona?', href: '#how-it-works' },
        { text: 'Ventajas', href: '#advantages' },
        { text: 'Seguridad', href: '#data-security' },
        { text: 'Descarga de datos', href: '#data-processing' },
        { text: '¿Por qué BiotiK?', href: '#why-choose-biotik' },
        { text: 'Contacto', href: '#footer-section' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, type: 'tween' }}
            className="w-full flex justify-center "
        >
            <nav className="w-full max-w-6xl">
                <ul className="flex flex-col items-center bg-zinc-900 px-4 py-4 min-h-[80px] md:flex-row md:justify-between md:items-center md:px-6 md:py-3">
                    {menuItems.map((item) => (
                        <li key={item.text} className="text-center py-2 md:flex-1 md:py-0">
                            <a href={item.href} className="text-white text-sm font-bold transition hover:text-green-400 whitespace-nowrap">
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.div>
    );
}
