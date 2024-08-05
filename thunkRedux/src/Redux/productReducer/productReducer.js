import { ERROR, LOADING, SUCCESS } from "./actionType"

let initial = {
    isLoading : false,
    data : [],
    isError : false
}

export const productReducer = (state = initial,action)=>{
    switch(action.type){
        case LOADING : 
           return {
              ...state,
             isLoading : true
           }
        case SUCCESS : 
            return {
                ...state,
                isLoading : false,
                data : action.payload
            }   
        case ERROR : 
             return {
                ...state,
                isLoading : false,
                isError : true
             } 
         default : return state          
    }
}