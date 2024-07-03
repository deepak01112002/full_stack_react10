import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductInput from './Component/ProductInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductInput/>
    </>
  )
}

export default App
