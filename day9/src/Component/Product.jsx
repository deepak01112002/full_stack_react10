import React, { useState } from 'react'

function Product() {

  const [state,setState] = useState({
     title : "",
     img : "",
     price : ""
  })
  const [arr,setArr] = useState([])
  const [hide,Sethide] = useState(false)
  
  const handleChange = (e)=>{
      let {name,value} = e.target
      setState({
        ...state,
        [name] : value
      })
  }
   
  const handleClick = ()=>{
     setArr([...arr,state])
  }
  console.log(arr)
  return (
    <div>
        <input type="text" name='title' placeholder='Title' onChange={handleChange} />
        <input type="text" name='img' placeholder='ImageURL' onChange={handleChange} />
        <input type="text" name='price' placeholder='Price' onChange={handleChange} />
        <button onClick={handleClick}>Submit</button>
        <button onClick={()=>Sethide(!hide)}>Show</button>
        <div>
            {
              hide ? arr.map((el)=>{
                return (<div>
                    <img src={el.img} alt={el.title}/>
                    <h1>{el.title} - {el.price}</h1>
                </div>)
              }) : <h1>Click the button for Products</h1>
            }
        </div>
    </div>
  )
}

export default Product