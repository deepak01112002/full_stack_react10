import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { a } from '../Redux/action'
import { INCREASE } from '../Redux/actionType'

function Counter() {
   
  const count = useSelector((s)=>s)
  console.log(count)
  const dispatch = useDispatch()

  return (
    <div>
       <h1>{count.count1}</h1>
       <button onClick={()=>dispatch(a(50))}>+10</button>
    </div>
  )
}

export default Counter