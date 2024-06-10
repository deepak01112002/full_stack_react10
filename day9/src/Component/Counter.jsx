

import React, { useState } from 'react'

function Counter() {
  
    const [state,setState] = useState({
        count : 0,
        c : 10,
    })

    const handleIncrease   = ()=>{
        setState({...state,count : state.count + 1})
    }
    const handleDecrease = ()=>{
        setState({...state,count : state.count - 1})
    }

  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
    </div>
  )
}

export default Counter