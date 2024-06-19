import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Card from '../components/Card';
import './styles/Home.css';

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/productos')
      .then(response => {
        console.log('Datos recibidos:', response.data);
        const sortedProducts = response.data.sort((a, b) => b.id - a.id);
        console.log('Productos ordenados:', sortedProducts);
        setProductos(sortedProducts.slice(0, 3));
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <div>
      <Nav />
      <main>
        <div id='hero'>
          <div id='title'>¡Bienvenido!</div>
          <div id='p'>Ferretería Sanchez, Orden y Calidad en Cada Herramienta.</div>
          <div id='socials'>
            <a href="http://instagram.com"><i className="fa-brands fa-instagram"></i></a>
            <a href="http://facebook.com"><i className="fa-brands fa-square-facebook"></i></a>
            <a href="http://whatsapp.com"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div id='yellow-divisor'></div>
        <div id="title-main">Horario del día de hoy</div>
        <div id="horario">
          <div id="date"><i className="fa-regular fa-calendar"></i>25/06/2024</div>
          <div id="turno">07:00 AM - 16:00 PM</div>
        </div>
        <div id='yellow-divisor'></div>
        <div id='title-main'>Últimos 3 productos agregados</div>
        <div id='flex-cont-3'>
          {productos.length > 0 ? (
            productos.map((producto) => (
              <Card
                key={producto.id}
                nombre={producto.nombre}
                marca={producto.marca}
                descripcion={producto.descripcion}
                stock={producto.stock}
                ventas={producto.ventas}
              />
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>
        <div id='yellow-divisor'></div>
        <div id="title-main">Observaciones</div>
        <div id="tickets">
          <div id="ticket">
            <div id="ticket-date"><i className="fa-regular fa-calendar"></i>24/06/2024</div>
            <div id="ticket-title">No funciona el aire acondicionado</div>
            <div id="ticket-desc">No enfria correctamente</div>
            <div id="ticket-state"><i className="fa-solid fa-xmark"></i>Sin solucionar</div>
          </div>
          <div id="ticket">
            <div id="ticket-date"><i className="fa-regular fa-calendar"></i>24/06/2024</div>
            <div id="ticket-title">No funciona el aire acondicionado</div>
            <div id="ticket-desc">No enfria correctamente</div>
            <div id="ticket-state">Sin solucionar</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
