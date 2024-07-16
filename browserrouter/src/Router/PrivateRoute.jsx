
import { Navigate } from 'react-router-dom';

import React from 'react'
import Home from '../Pages/Home';

function PrivateRoute({children}) {
    let isLogin = localStorage.getItem("isLogin")
  return (
       
    isLogin ? children : <Navigate to={"/login"}/>
       
  )
}




export default PrivateRoute