import './App.css'
import Header from './views/Header';
import Menu from './views/Menu';
import Items from './components/Items';
import ScrollButton from './components/ScrollButton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './views/Footer';
import { motion } from 'framer-motion'; // Importar motion

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, [apiUrl]);

  const variantesContenedor = { // Changed from варіантКонтейнера
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: i * 0.1 },
    }),
  };

  const variantesHeader = { // Changed from варіантHeader
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1,
      y: 0, 
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const variantesMenu = { // Changed from варіантMenu
    hidden: { opacity: 0 }, 
    visible: {
      opacity: 1, 
      transition: {
        duration: 0.5, 
      },
    },
  };

  const variantesItems = { // Changed from варіантItems
    hidden: { opacity: 0, y: -60 }, 
    visible: {
      opacity: 1,
      y: 0, 
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div 
      className="flex flex-col min-h-screen bg-black text-white"
      initial="hidden"
      animate="visible"
      variants={variantesContenedor} // Changed from варіантКонтейнера
    >
      <div className="flex-grow w-full" style={{paddingLeft: '6vw', paddingRight: '6vw'}}>
        <motion.div 
          className="card w-full h-full" 
          style={{ backgroundColor: '#18181b', borderRadius: '1rem', border: '2px solid transparent', boxShadow: '0 8px 24px 0 rgba(0,0,0,0.15)' }}
          variants={variantesContenedor} // Changed from варіантКонтейнера
        >
          <motion.div variants={variantesHeader} className="container mx-auto px-4"> {/* Changed from варіантHeader */}
            <Header />
          </motion.div>
          <motion.div variants={variantesMenu}> {/* Changed from варіантMenu */}
            <Menu />
          </motion.div>
          <motion.main variants={variantesItems} className="flex-grow container mx-auto px-4 "> {/* Changed from варіантItems */}
            <Items data={data} />
          </motion.main>
          <motion.div variants={variantesItems}> {/* Changed from варіантItems */}
            <Footer />
          </motion.div>
        </motion.div>
      </div>
      {/* ScrollButton no se animará con el resto para que esté disponible de inmediato si es necesario */}
      <ScrollButton /> 
    </motion.div>
  );
}

export default App;
