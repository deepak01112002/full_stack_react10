

export const fetchingData = (dispatch)=>{
    dispatch({type : "LOADING"})
   fetch(`https://fakestoreapi.com/products`)
   .then((res)=>res.json())
   .then((res)=>{
       dispatch({type : "SUCCESS", payload : res})
   })
   .catch((err)=>{
    dispatch({type : "ERROR"})
   })
}