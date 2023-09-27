import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './views/Header';
import Menu from './views/Menu';
import Items from './components/Items';// Updated import statement to match correct casing
import ScrollButton from './components/ScrollButton';


import { useState, useEffect } from 'react';

import axios from 'axios';

function App() {

  // const apiUrl = import.meta.env.VITE_API_URL || 'https://back.biotik.cl/datos';
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

  console.log('API:', apiUrl);
  //console.log('Data', data);
  return (
    <div className="container">
      <Header />
      <Menu />
      <Items data={data} />
      <ScrollButton /> 
    </div>
  );
}

export default App;


  