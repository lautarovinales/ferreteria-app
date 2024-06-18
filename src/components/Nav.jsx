import React from 'react';
import Style from './styles/Nav.css';

function Nav() {
  return (
    <div>
      <nav>
        <img src="/images/logo.png" alt="" srcset="" />
        <ul>
          <a href="/"><li>Inicio</li></a>
          <a href="/inventory"><li>Inventario</li></a>
          <a href="/archives"><li>Archivos</li></a>
          <a href="/providers"><li>Proveedores</li></a>
        </ul>
        <ul>
        <a href="/login"><li id='yellow-button'><i class="fa-solid fa-arrow-right-to-bracket"></i> Iniciar sesion</li></a>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
