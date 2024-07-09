import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Product() {
   
  const [state,setState] = useState([])

   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
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
       {
        state.map((el)=>(
             <Link to={`/product/${el.id}`}><div>
                 <img src={el.image} alt={el.title} width="150px" height="150px" />
                 <h2>{el.title} - ₹{el.price}</h2>
             </div></Link>
        ))
       }
    </div>
  )
}

export default Product