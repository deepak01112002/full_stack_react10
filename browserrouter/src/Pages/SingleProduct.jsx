import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
  
    const {id} = useParams()
    const [state,setState]  = useState({})


  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then((res)=>{
        setState(res)
    })
    .catch((er)=>{
      console.log(er)
    })
  },[])
  return (
    <div>
        <img src={state.image} alt={state.title}  width="150px" height="150px" />
        <h2>{state.title} - ₹{state.price}</h2>
    </div>
  )
}

export default SingleProduct