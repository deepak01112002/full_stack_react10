import React, { useState } from 'react'

function TodoList() {
    const [arr,setARR] = useState(JSON.parse(sessionStorage.getItem("data")) || [])
  return (
    <div>
        {
            arr.map((el)=>{
                return (
                    <div key={el.id}>
                        <h1>{el.task} - {el.isCompleted ? "True" : "False"}</h1>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TodoList