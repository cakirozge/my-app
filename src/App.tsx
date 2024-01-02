import React, { ReactElement } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Homepage from './pages/Homepage/Homepage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Navbar from './components/Navbar/Navbar';
import ProductAdd from './pages/ProductAdd/ProductAdd';

function App(): ReactElement {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Homepage />} ></Route>
      <Route path='/product-detail/:id' element={<ProductDetail />} ></Route>
      <Route path='/product-add' element={<ProductAdd />} ></Route>
    </Routes>
    
    </>
  );
}

export default App;

//Link çalışmıyordu. Linkler react-router-dom özelliği bu nedenle BrowserRoute'u index.tsx içine alarak tüm uygulamayı sarmallayacak şekilde kullanabiliriz.
//BrowserRoute index.tsx içine alındıktan sonra Routes içindeki tüm sayfalar browserroute altında çalışmaya devam eder.
