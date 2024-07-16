import React, { useState } from 'react'

function Login() {
    const [state,setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
      e.preventDefault()
      if(state.email){
         fetch(`http://localhost:3001/users?email=${state.email}`)
         .then(res =>res.json())
         .then((res)=>{
           if(res[0].password == state.password){
             alert("Login Successfull")
             localStorage.setItem("isLogin" , true)
           }else{
            alert("Password Incorrect")
           }
         })
         .catch((err)=>{
            console.log(err)
         })
      }
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

export default Login