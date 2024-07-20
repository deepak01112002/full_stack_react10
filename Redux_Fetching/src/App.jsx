import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchingData } from './Redux/productReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { LoginData } from './Redux/LoginReducer/action'

function App() {
  const [state,setState] = useState({
    email : "",
    username : ""
  })
  const data = useSelector((s)=>s.loginReducer)
  console.log(data)
  const dispatch = useDispatch()
  const handleClick = ()=>{
     fetchingData(dispatch)
  }
  const handleLogin = ()=>{
     LoginData(dispatch,state)
  }

  const handleChange = (e)=>{
    setState({...state,[e.target.name] : e.target.value})
  }
 
  return (
    <>
      <input type="text" name='email' onChange={handleChange}/>
      <input type="text" name='username'  onChange={handleChange}/>
      <button onClick={handleLogin} >Login</button>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App
