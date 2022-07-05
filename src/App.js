import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Projectpage from './Pages/Projectpage';
import Contactpage from './Pages/Contactpage';
import { MainStyle } from './Components/Main/MainStyle';

const App = () => {
  return (
    <>
      <Navbar />
      <MainStyle>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/about' element={<Aboutpage />} />
          <Route exact path='/project' element={<Projectpage />} />
          <Route exact path='/contact' element={<Contactpage />} />
        </Routes>
      </MainStyle>
    </>
  )
}

export default App