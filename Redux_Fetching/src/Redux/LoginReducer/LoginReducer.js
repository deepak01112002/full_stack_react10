
let intial = {
    isLogin : false,
    user : [],
    isError : false,
    isPassword : false
}


export const loginReducer = (state = intial,action)=>{
     
    switch(action.type){
        case "LOGIN" : 
           return {
              ...state,
              isLogin : true,
              isPassword : false,
              user : action.payload
           }
        case "LOGINERROR" : 
            return {
                ...state,
                isLogin : false,
                isError : true
            }
        case "PASSWORD" : 
             return {
                ...state,
                isPassword : true
             }    
        default : return state       
    } 
}