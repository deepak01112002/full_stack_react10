import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  axios  from 'axios'
import './App.css'

function App() {
    
  useEffect(()=>{
    
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })



  },[])
  const handleClick = ()=>{
   
    axios.post("URL",obj)
    .then((Res)=>{
      console.log(Res)
    })
    axios.patch("URL/id",obj)
    axios.put("URL/id",obj)
    axios.delete("URL/id")

    axios({
      method :"Post",
      url : "URL",
      data : obj
    })



  }


  return (
    <>
       <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App
