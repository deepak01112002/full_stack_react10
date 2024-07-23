import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyContext } from './Components/ContextAPI'

function App() {
   
   const data = useContext(MyContext)
   console.log(data)

  return (
    <>
      <h1>{data.state}</h1>
      <button onClick={()=>data.dispatch({type : "INC"})}>Click</button>
    </>
  )
}

export default App
