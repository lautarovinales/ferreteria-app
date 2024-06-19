import React from 'react';
import Style from './styles/Footer.css';

function Footer() {
  return (
    <div>
      <footer>
        <div id='footer-flex'>
          <div id='footer-top'>
            <div id="img-p">
              <img src="./images/logo.png" alt="" />
              <p>Ferretería Sanchez, Orden y Calidad en Cada Herramienta.</p>
            </div>
            <div id='footer-items'>
              <div id="services">
                <h1 id='footer-title'>Compañia</h1>
                <p>Acerca de</p>
                <p>Contacto</p>
                <p>Marketing</p>
                <p>Premios</p>
              </div>
              <div id="services">
                <h1 id='footer-title'>Servicios</h1>
                <p>Productos</p>
                <p>Negocios</p>
                <p>Desarrollador</p>
                <p>Reseñas</p>
              </div>
              <div id="services">
                <h1 id='footer-title'>Ayuda y soporte</h1>
                <p><i class="fa-solid fa-map-pin"></i>Calle 123, San Nicolás de los Arroyos, Buenos Aires, Argentina.</p>
                <p><i class="fa-solid fa-phone"></i>+54 9 336 4123123</p>
                <p><i class="fa-regular fa-envelope"></i>support@ferreteria.com</p>
              </div>
            </div>
          </div>
          <div id='footer-bot'>
            <div id='copy'>Copyright © 2024 Ferretería Sanchez.</div>
            <div id='footer-socials'>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
