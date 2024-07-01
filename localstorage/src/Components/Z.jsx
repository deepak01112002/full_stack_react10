import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
let initial = {
    id : 0,
    username : "",
    email : ""
}
function Z() {
  
    const [state,setState] = useState(initial)
    const [arr,setarr] = useState(JSON.parse(localStorage.getItem("data"))||[]) 


    const handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleClick = ()=>{
       setarr([...arr,state])
    }
     useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
     },[arr])
  return (
    <div>
        <input type="text" name='username' onChange={handleChange}/>
        <input type="text" name='email' onChange={handleChange}/>
        <input type="submit" onClick={handleClick} />
    </div>
  )
}

export default Z