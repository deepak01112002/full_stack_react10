import React, { useEffect, useState } from 'react'

function TodoInput() {
    const [task,setTask] = useState("")
    const [arr,setarr] = useState(JSON.parse(sessionStorage.getItem("data")) || [])

    const handleSubmit = (e)=>{
        e.preventDefault()
       let obj = {
         id : Math.random()+Date.now(),
         task : task,
         isCompleted : false
       }
       setarr([...arr,obj])
    }
     useEffect(()=>{
        sessionStorage.setItem("data",JSON.stringify(arr))
     },[arr])
  return (
    <div>
        <form onSubmit={handleSubmit} >
             <input type="text" placeholder='Task' onChange={(e)=>setTask(e.target.value)} />
             <input type="submit" />
        </form>
    </div>
  )
}

export default TodoInput