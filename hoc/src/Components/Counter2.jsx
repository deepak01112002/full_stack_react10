import React, { useState } from 'react'
import HOC from './HOC'

function Counter2(props) {
  return (
    <div>
         
         <button onClick={props.h}>Click</button>
    </div>
  )
}

export default HOC(Counter2)