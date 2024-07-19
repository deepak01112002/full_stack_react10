import { INCREASE } from "./actionType";

let initial = {
    count : 0,
    count1 : 0,
}

export const reducer = (state = initial,action)=>{

    switch(action.type){
        case "Deposit" : 
            return {
                ...state,
                count : state.count + 1
            }
        case "Withdraw" : 
            return {
                ...state,
                count : state.count - 1
            };
        case INCREASE : 
            return {
                ...state,
                count1 : state.count1 + action.payload
            };    
        default : 
            return state;        
    }

}