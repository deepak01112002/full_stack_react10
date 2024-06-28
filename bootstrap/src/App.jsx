import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import B from './Components/B'
import Spi from './Components/Spinner'
import { useEffect } from 'react'

function App() {
  const [state,setState] = useState("")
  useEffect(()=>{
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((res)=>res.json())
    .then((res)=>{
       setState(res)
    })
  },[])
  
  return (
    <>
      <B/>
      {state == "" ? <Spi/> : <img src={state.message} />}
    </>
  )
}

export default App
