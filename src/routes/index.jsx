import React from 'react';
import { Routes, Route  } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={Dashboard} />
    </Routes>
  );
}

export default RoutesComponent  ;
