import React from 'react'
import { useRef } from 'react';
function Image() {
    let a = useRef('');
    let b = useRef('')
    const handleClick = ()=>{
        a.current.focus()
    }
  return (
    <>
        <input type="text" id='input' ref={a} />
        <input type="text" ref={b} />
        <h1 onClick={handleClick}>dasgas</h1>
    </>
  )
}

export default Image