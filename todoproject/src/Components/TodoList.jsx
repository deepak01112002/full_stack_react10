import React from 'react'

function TodoList({data,hdlt,hupd}) {
    
  return (
    <div>
        <h1>{data.work} - {data.isCompleted ? "Completed" : "Not Completed"}</h1>
        <button onClick={()=>hupd(data.id)}>Edit</button>
        <button onClick={()=>hdlt(data.id)}>Delete</button>
    </div>
  )
}

export default TodoList