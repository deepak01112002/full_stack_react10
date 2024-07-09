import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'

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



            

     const [count,setCount] = useState(0)
     useEffect(()=>{
         setCount(count + 1)
     },[count])



  return (
    <div>
        <form onSubmit={handleSubmit} >
             <input type="text" placeholder='Task' onChange={(e)=>setTask(e.target.value)} />
             <input type="submit" />
        </form>
        <TodoList arr={arr}/>
    </div>
  )
}

export default TodoInput