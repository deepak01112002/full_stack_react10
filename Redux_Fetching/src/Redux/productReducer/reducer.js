
let intial = {
     isLoading : false,
     data : [],
     isError : false,
}


export const reducer = (state = intial,action)=>{
      switch(action.type){
           case "LOADING" :
              return {
                ...state,
                isLoading : true
              }
            case "SUCCESS" :
                return {
                    ...state,
                    isLoading : false,
                    data : action.payload
                }
            case "ERROR" :
                 return {
                    ...state,
                    isLoading : false,
                    isError : true,
                 }  
            default : return state;        
      }
}