import React, { useState } from 'react'
import {Button} from 'react-bootstrap';
import HOC from './HOC'

function Counter1(props) {
    
  return (
    <div>
         <Button variant="primary" onClick={props.h}>Click</Button>
    </div>
  )
}

export default HOC(Counter1)