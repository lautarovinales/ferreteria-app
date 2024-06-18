import React from 'react';
import Nav from '../components/Nav';
import Style from './styles/Home.css';
import Footer from '../components/Footer'
import Card from '../components/Card'

function Home() {
  return (
    <div>
      <Nav />
      <main>
        <div id='hero'>
          <div id='title'>¡Bienvenido!</div>
          <div id='p'>Ferretería Sanchez, Orden y Calidad en Cada Herramienta.</div>
          <div id='socials'>
            <a href="http://instagram.com"><i class="fa-brands fa-instagram"></i></a>
            <a href="http://facebook.com"><i class="fa-brands fa-square-facebook"></i></a>
            <a href="http://whatsapp.com"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div id='yellow-divisor'></div>
        <div id="title-main">Horario del día de hoy</div>
        <div id="horario">
          <div id="date"><i class="fa-regular fa-calendar"></i>25/06/2024</div>
          <div id="turno">07:00 AM - 16:00 PM</div>
        </div>
        <div id='yellow-divisor'></div>
        <div id='title-main'>Últimos 3 productos vendidos</div>
        <div id='flex-cont-3'>
          <div id='card'>
            <img src="./images/martillo.png" alt="" srcset="" />
            <div id='data'>
              <div id='item-title'>Martillo Stanley mango de madera</div>
              <div id="item-desc">Martillo mango de madera de 30cm. 1kg.</div>
              <div id='detail-price'>
                <div id="item-detail">Ver detalle</div>
                <div id="item-price">$2.000</div>
              </div>
            </div>
          </div>
          <div id='card'>
            <img src="./images/martillo.png" alt="" srcset="" />
            <div id='data'>
              <div id='item-title'>Martillo Stanley mango de madera</div>
              <div id="item-desc">Martillo mango de madera de 30cm. 1kg.</div>
              <div id='detail-price'>
                <div id="item-detail">Ver detalle</div>
                <div id="item-price">$2.000</div>
              </div>
            </div>
          </div>
          <div id='card'>
            <img src="./images/martillo.png" alt="" srcset="" />
            <div id='data'>
              <div id='item-title'>Martillo Stanley mango de madera</div>
              <div id="item-desc">Martillo mango de madera de 30cm. 1kg.</div>
              <div id='detail-price'>
                <div id="item-detail">Ver detalle</div>
                <div id="item-price">$2.000</div>
              </div>
            </div>
          </div>
        </div>
        <div id='yellow-divisor'></div>
        <div id="title-main">Observaciones</div>
        <div id="tickets">
        <div id="ticket">
        <div id="ticket-date"><i class="fa-regular fa-calendar"></i>24/06/2024</div>
        <div id="ticket-title">No funciona el aire acondicionado</div>
        <div id="ticket-desc">No enfria correctamente</div>
        <div id="ticket-state"><i class="fa-solid fa-xmark"></i>Sin solucionar</div>
        </div>
        <div id="ticket">
        <div id="ticket-date"><i class="fa-regular fa-calendar"></i>24/06/2024</div>
        <div id="ticket-title">No funciona el aire acondicionado</div>
        <div id="ticket-desc">No enfria correctamente</div>
        <div id="ticket-state">Sin solucionar</div>
        </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Home;
