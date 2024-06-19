import React from 'react';
import './styles/Card.css';

function Card({ nombre, marca, descripcion, stock, ventas }) {
  return (
    <div id="card">
      <img src="./images/martillo.png" alt={nombre} />
      <div id="card-data">
        <h3 id="card-title">{nombre}</h3>
        <p id="card-brand">{marca}</p>
        <p id="card-desc">{descripcion}</p>
      </div>
    </div>
  );
}

export default Card;
