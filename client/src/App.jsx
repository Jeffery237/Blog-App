import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App