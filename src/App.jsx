import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Components/About'
import OurMenu from './Components/OurMenu'
import Contact from './Components/Contact'
import './Styles/ContactStyle.css'
import LoginRegister from './Pages/Home/LoginRegister'
import Scroll from './Components/Scroll'

function App() {


  return (
    <>
      <BrowserRouter basename="/Burger_deliveryApp_UI/">

        <Scroll />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<OurMenu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Login' element={<LoginRegister />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
