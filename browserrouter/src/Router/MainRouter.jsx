import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import SingleProduct from '../Pages/SingleProduct'
import ErrorPage from '../Pages/ErrorPage'
function MainRouter() {
  return (
    <div>
        <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/product' element={<Product/>}></Route>
             <Route path='/cart' element={<Cart/>}></Route>
             <Route path='/product/:id' element={<SingleProduct/>}></Route>
             <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRouter