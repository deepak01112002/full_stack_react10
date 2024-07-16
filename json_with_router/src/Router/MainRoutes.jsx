import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Singup from '../Components/Singup'
import Login from '../Components/Login'

function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path ="/singup" element={<Singup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes