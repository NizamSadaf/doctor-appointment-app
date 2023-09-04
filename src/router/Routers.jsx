import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Doctors from '../pages/Doctors'
import SingleDoctorDetails from '../pages/Doctors/SingleDoctorDetails'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/register' element={ <SignUp/> } />
      <Route path='/login' element={ <Login/> } />
      <Route path='/contact' element={ <Contact/> } />
      <Route path='/services' element={ <Services/> } />
      <Route path='/doctors' element={ <Doctors/> } />
      <Route path='/doctors/:id' element={ <SingleDoctorDetails/> } />
    </Routes>
  )
}

export default Router