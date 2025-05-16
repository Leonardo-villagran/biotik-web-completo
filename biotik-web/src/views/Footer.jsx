/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import '../App.css';

export default function Footer() {
    const contactInfo = {
        email: 'contacto@biotik.cl',
        web: 'https://www.biotik.cl',
        linkedin: 'https://www.linkedin.com/in/ejemplo',
    };

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0.5 }}
            transition={{ duration: 1, type: 'tween' }}
            className=" bg-neutral-900 text-neutral-300 rounded-t-xl "
            id="footer-section" // Added ID for scrolling
        >
            <nav className="max-w-5xl mx-auto w-full flex flex-col items-center pt-8"> {/* Centering content, added pt-8 here */}
                <ul className="flex flex-col items-center gap-y-2 text-center text-sm"> {/* Added text-sm, reduced gap-y-3 to gap-y-2 */}
                    <li>
                        <span className="font-semibold">Email:</span> <a href={`mailto:${contactInfo.email}`} className="text-green-600 hover:text-green-400 transition-colors duration-200">{contactInfo.email}</a>
                    </li>
                    <li>
                        <span className="font-semibold">Web:</span> <a href={contactInfo.web} className="text-green-600 hover:text-green-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">{contactInfo.web}</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="font-semibold">LinkedIn:</span>
                        <a href={contactInfo.linkedin} className="text-green-600 hover:text-green-400 transition-colors duration-200 flex items-center" target="_blank" rel="noopener noreferrer">
                            <span className="mr-1">🔗</span> LinkedIn
                        </a>
                    </li>
                </ul>
                <div className="text-center mt-6 text-xs text-neutral-500"> {/* Reduced mt-8 to mt-6 */}
                    &copy; {new Date().getFullYear()} BiotiK. Todos los derechos reservados.
                </div>
            </nav>
        </motion.footer>
    );
}
