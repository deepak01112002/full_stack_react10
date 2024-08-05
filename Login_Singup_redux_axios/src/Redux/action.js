

export const LoginData = (dispatch)=>({email,password})=>{
    axios.post("URL?email={email}&password={password}",obj)
    .then((res)=>{
       if(res.data){
         dispatch({type : "SUCCESS", payload : res.data})
       }
    })
}