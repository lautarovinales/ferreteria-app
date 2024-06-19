import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './styles/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/productos/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los detalles del producto", error);
      });
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Nav />
      <main>
        <div id="producDetail-card">
          <img
            src={product.img || '/images/martillo.png'}
            alt={product.nombre}
            style={{ width: '200px', height: '200px' }}
          />
          <div id="productDetail-detail">
            <div id="div-detail">
              <p id='productDetail-title'>{product.nombre}</p>
              <p id='productDetail-brand'>{product.marca}</p>
              <p id='productDetail-desc'>{product.descripcion}</p>
              <p id='productDetail-price'>${product.price}</p>
            </div>
            <div id="div-detail-bot">
              <p id='productDetail-code-p'>Código:</p>
              <p id='productDetail-code'>{product.codigo}</p>
              <p id='productDetail-stock-p'>Stock disponible:</p>
              <p id='productDetail-stock'>{product.stock}</p>
              <p id='productDetail-ventas-p'>Ventas totales:</p>
              <p id='productDetail-ventas'>{product.ventas}</p>
            </div>
            <div id="buttons">
            <button id='button-editar'>Editar</button>
            <button id='button-eliminar'>Eliminar</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetail;
