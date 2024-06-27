import { useState } from "react"

const HOC = (OriginalComponent)=>{

   const add = ()=>{
    const [state,setState] = useState(0)
    const handleClick = ()=>{
        setState(state + 1)
    } 
    const handleC = ()=>{
        setState(state - 1)
    }
    return (
        <>
        <h1>{state}</h1>
        <OriginalComponent  state={state} h={handleClick} hm={handleC} cl={"red"} />
        </>
    )
   }

 return add

}

export default HOC