import React from 'react'

function RenderingData({data}) {
    console.log(data)
  return (
    <div>{
         
        data.map((el)=>{
            return( <img key={el.login.uuid} src={el.picture.large} />)
        })
        
        
        }</div>
  )
}

export default RenderingData