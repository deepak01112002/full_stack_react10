import React, { useReducer } from 'react'
import { createContext } from 'react'

export const MyContext = createContext()
const initial = {
    count : 0,
    count1 : 0, 
}
const red = (state,action)=>{
    switch(action.type){
        case "INC" :
          return state + 1
        default : return state  
    }
}





function ContextAPI({children}) {
    const [state,dispatch] = useReducer(red,initial)
  return (
    <MyContext.Provider value={{state,dispatch}}>
        {children}
    </MyContext.Provider>
  )
}

export default ContextAPI