import {React,memo} from 'react'

function Component({handleClick}) {
    console.log("Children Component")
  return (
    <div>Component
    <button onClick={handleClick} >Click</button>
    </div>
  )
}

export default memo(Component)