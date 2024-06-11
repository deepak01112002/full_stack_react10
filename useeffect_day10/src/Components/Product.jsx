import React from 'react'

function Product({dee}) {
  return (
    <div>{
        dee.map((el)=>{
            return (
                <div>
                    <h1>{el.title} - {el.completed ? "Completed" : "Not Completed"}</h1>
                </div>
            )
        })
        
        
        }</div>
  )
}

export default Product