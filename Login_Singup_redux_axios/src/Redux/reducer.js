

let initial = {
    isLogin : false,
    user : ""
}

export const reducer = (state = initial, action)=>{
    switch(action.type){
        case "SUCCESS" : 
            return {
                ...state,
                isLogin : true,
                user : action.payload
            }
        default : return state
    }
}