import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { FetchData } from './Redux/productReducer/action'

function App() {
   const data = useSelector((d) => d)
   console.log(data)
   const dispatch = useDispatch()
  const handleClick = ()=>{
      // FetchData(dispatch)
      dispatch(FetchData(obj))
     
  }

  return (
    <>
      <button onClick={handleClick}>Fetch</button>
    </>
  )
}

export default App


function add(a,b){

}

const add = (a) => (b) =>{
  
}