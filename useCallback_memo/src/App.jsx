import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './Component'

function App() {
  const [count, setCount] = useState(0)
  const [fetch ,setFetch] = useState(0)
  const handleClick = useCallback(() =>{

  },[fetch])
  
  return (
    <>
      <Component handleClick={handleClick}/>
      <h1>{count} - {fetch}</h1>
      <button onClick={()=>setCount(count + 1)}>Click</button>
      <button onClick={()=>setFetch(fetch + 1)}>Fetch</button>
    </>
  )
}

export default App
