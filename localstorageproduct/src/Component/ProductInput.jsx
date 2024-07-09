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
    const [editId, setEdit] = useState(null)
    const [arr,setarr] = useState(JSON.parse(localStorage.getItem("data"))||[])
    const handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
       e.preventDefault()
       if(editId == null){
            setarr([...arr,state])
       }else{
           let d = arr.map((el)=>{
              if(el.id == editId){
                return {...state}
              }else{
                return el;
              }
           })

          //  let arr1 = []
          //  for(let x=0; x<arr.length; x++){
          //     if(arr[x].id == editId){
          //        arr1.push({...state})
          //     }else{
          //       arr1.push(arr[x])
          //     }
          //  }
           console.log(d)
           setarr(d)
       }
       setEdit(null)
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
    const handleEdit = (id)=>{
        setEdit(id)
        arr.forEach((el)=>{
          if(el.id == id){
            setState(el)
          }

        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
             <input type="text" name='title' value={state.title} onChange={handleChange} placeholder='Title'/>
             <input type="text" name='des' value={state.des} onChange={handleChange} placeholder='Description'/>
             <input type="text" name='price' value={state.price} onChange={handleChange} placeholder='Price'/>
             <input type="text" name='img' value={state.img} onChange={handleChange} placeholder='Image URL'/>
             <input type="submit" value={editId == null ? "Submit" : "Edit"}/>
        </form>
        <ProductListing arr={arr} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  )
}

export default ProductInput