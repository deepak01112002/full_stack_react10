import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Singup() {
    const [state,setState] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate()
    const handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
          e.preventDefault()
          fetch(`http://localhost:8989/insert`,{
              method : 'POST',
              headers : {
                 'Content-type' : "application/json"
              },
              body : JSON.stringify(state)
          })
          .then((res)=>res.json())
          .then((res)=>{
             navigate("/login")
          })
          .catch((err)=>{
            console.log(err)
          })

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
             <input type="text" name='email' placeholder='Email' onChange={handleChange}/>
             <input type="text" name='password' placeholder='Password' onChange={handleChange}/>
             <input type="submit" />
        </form>
    </div>
  )
}

export default Singup