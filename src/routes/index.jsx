import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';

import Dashboard from '../pages/Dashboard';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/detail" element={<ProductDetail/>} />
    </Routes>
  );
}

export default RoutesComponent  ;
