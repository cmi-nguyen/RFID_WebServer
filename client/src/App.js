import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


import AddProductIntance from './component/addProductIntance';
import AddProductLine from './component/addProductLine';
import AddTag from './component/addTag';

import Menu_header from './component/menu_header';
import AboutUs from './pages/AboutUs';
import Bill from './pages/Bill';
import Home from './pages/Home';
import ProductIntance from './pages/ProductIntance';
import Productline from './pages/Productline';
import TagRead from './pages/TagRead';


function App() {
  return (
    <BrowserRouter>
      <div className='main'>
          <a href="/">
            <h2 className='main-header'>RFID - Retail</h2>
          </a>
          <Menu_header/>
      </div>
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/bill' element={<Bill/>}></Route>
        <Route path='/productline' element={<Productline/>}></Route>
        <Route path='/productintance' element={<ProductIntance/>}></Route>
        <Route path='/tagread' element={<TagRead/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/addproductline' element={<AddProductLine/>}></Route>
        <Route path='/addproductintance' element={<AddProductIntance/>}></Route>
        <Route path='/addtag' element={<AddTag/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

