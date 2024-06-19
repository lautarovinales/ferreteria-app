import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Archives from './pages/Archives';
import Inventory from './pages/Inventory';
import ProductDetail from './pages/ProductDetail';
import Providers from './pages/Providers';
import Faq from './pages/Faq';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/Archives' element={<Archives />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path='/providers' element={<Providers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
