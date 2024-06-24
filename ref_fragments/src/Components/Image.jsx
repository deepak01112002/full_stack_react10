import React, { useState } from 'react'
import { useRef } from 'react';
function Image() {
   const [arr,setArr] = useState([])
   const [task,setTask] = useState("")
   const inputref = useRef("")
    const handleClick = ()=>{
      inputref.current.style.backgroundColor = "red"
      //  let obj = {
      //   task : task,
      //   isCompleted : false
      //  }
      //  setArr([...arr,obj])
    }
    console.log(arr)
  return (
    <>
        <input type="text"  ref={inputref} />
        <h1 onClick={handleClick}>dasgas</h1>
    </>
  )
}

export default Image