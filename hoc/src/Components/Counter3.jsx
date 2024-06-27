import React from 'react'
import HOC from './HOC'
import { Button } from 'react-bootstrap'

function Counter3(props) {
  return (
    <div style={{backgroundColor : props.cl}}>
        <h1>{props.state}</h1>
        <button onClick={props.h}>add</button>
        <button onClick={props.hm}>Minus</button>
        <Button variant="primary">Click</Button>
    </div>
  )
}

export default HOC(Counter3)