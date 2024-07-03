import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {v4 } from 'uuid'
import ProductListing from './ProductListing'
function ProductInput() {
    const [state,setState] = useState({
        id : v4(),
        title : "",
        price : "",
        des : "",
        img : ""
    })
    const [arr,setarr] = useState(JSON.parse(localStorage.getItem("data"))||[])
    const handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
       e.preventDefault()
      setarr([...arr,state])
      setState({
        id : v4(),
        title : "",
        price : "",
        des : "",
        img : ""
      })
    }
    console.log(arr)
    useEffect(()=>{
      localStorage.setItem("data",JSON.stringify(arr))
    },[arr])
    const handleDelete = (id)=>{
       let d = arr.filter(el => el.id != id)
         setarr(d)
        // arr.filter((el)=>{
        //   if(el.id != id){
        //     return el
        //   }
        // })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
             <input type="text" name='title' value={state.title} onChange={handleChange} placeholder='Title'/>
             <input type="text" name='des' value={state.des} onChange={handleChange} placeholder='Description'/>
             <input type="text" name='price' value={state.price} onChange={handleChange} placeholder='Price'/>
             <input type="text" name='img' value={state.img} onChange={handleChange} placeholder='Image URL'/>
             <input type="submit" />
        </form>
        <ProductListing arr={arr} handleDelete={handleDelete}/>
    </div>
  )
}

export default ProductInput