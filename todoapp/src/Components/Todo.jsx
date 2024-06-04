import { useState } from "react"

import TodoList from "./TodoList"

function Todo(){

    let [arr,setArr] = useState([])
    const [work,setWork] = useState("")

    const handleChange = (el)=>{
       setWork(el.target.value)
    }
    
    const handleClick = ()=>{
        let obj = {
            task : work,
            isComp : false
        }
        setArr([...arr,obj])
    }

    return (
        <div>
           <h1>Tooodo</h1>
           <input type="text" onChange={(el)=>setWork(el.target.value)} placeholder="Enter your work" />
           <button onClick={handleClick}>Submit</button>
           <TodoList data={arr}/>
        </div>
    )
}

export default Todo