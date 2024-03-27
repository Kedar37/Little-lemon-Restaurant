import './App.css';
import {Routes, Route, Link, useNavigate, Router} from 'react-router-dom'
import { useState, useEffect } from 'react';


import Home from './Pages/Home';
import About from './Pages/About';
import ConfirmedBooking from './Components/SubComponents/ConfirmedBooking';
import BookTable from './Components/SubComponents/BookTable';
import MenuOrder from './Pages/MenuOrder';

import { auth } from './firebase';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Header from './Pages/Header';
import SignLogin from './Pages/SignLogin';
import Order from './Pages/Order';

function App() {

  return (
        <div className='app'>
          <Header/>
            <Routes>
              <Route path='/' element={<SignLogin/>} />
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/menu' element={<MenuOrder/>} />
              <Route path='/order' element={<Order/>} />
              <Route path='/reserve' element={<BookTable/>} />
              <Route path='/confirmed-booking' element={<ConfirmedBooking />} />
            </Routes>
        </div>
  );
}

export default App;
