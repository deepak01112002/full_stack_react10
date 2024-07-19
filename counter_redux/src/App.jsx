import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
function App() {
  
    const data = useSelector((deepak)=>deepak)
    console.log(data)
    const dispatch = useDispatch()

  return (
    <>
      <h1>Balance :- {data.count} </h1>
      <button onClick={()=>dispatch({type : "Withdrawa"})}>Withdraw</button>
      <button onClick={()=>dispatch({type : "Deposit"})}>Deposit</button>
    </>
  )
}

export default App
