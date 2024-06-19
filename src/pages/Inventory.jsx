import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import './styles/Inventory.css'; // Importar el archivo CSS

function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Reemplaza la URL con la de tu API backend
    axios.get('http://localhost:5000/api/productos')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los datos", error);
      });
  }, []);

  useEffect(() => {
    const results = data.filter(item =>
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm, data]);

  return (
    <div>
      <Nav />
      <main>
        <div className="inventory-container">
          <input
            type="text"
            placeholder="Buscar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <table className="inventory-table">
            <thead>
              <tr>
                <th>NOMBRE DE PRODUCTO</th>
                <th>MARCA</th>
                <th>CÓDIGO</th>
                <th>DESCRIPCIÓN</th>
                <th>STOCK</th>
                <th>VENTAS</th>
                <th>VER MÁS</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td id='product-name'>{item.nombre}</td>
                  <td>{item.marca}</td>
                  <td>{item.codigo}</td>
                  <td id='product-desc'>{item.descripcion}</td>
                  <td>{item.stock}</td>
                  <td>{item.ventas}</td>
                  <td id='detail'><a href="http://"><i class="fa-regular fa-eye"></i></a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Inventory;
