import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import SingleProduct from '../Pages/SingleProduct'
import ErrorPage from '../Pages/ErrorPage'
import Login from '../Pages/Login'
import PrivateRoute from './PrivateRoute'
function MainRouter() {
  return (
    <div>
        <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/product' element={
              <PrivateRoute>
                <Product/>
              </PrivateRoute>
              }></Route>
             <Route path='/cart' element={
             <PrivateRoute>
              <Cart/>
             </PrivateRoute>  
              }></Route>
             <Route path='/login' element={<Login/>}></Route>
             <Route path='/product/:id' element={<SingleProduct/>}></Route>
             <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRouter