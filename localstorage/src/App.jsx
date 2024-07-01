import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Z from './Components/Z'

function App() {
  const [count, setCount] = useState(localStorage.getItem("count")||0)
  const handleClick = ()=>{
    setCount(Number(count) + 1)
    
  }
  useEffect(()=>{
    localStorage.setItem("count", count)
  },[count])

  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button><br /><br /><hr />
      <Z/>
    </>
  )
}

export default App
