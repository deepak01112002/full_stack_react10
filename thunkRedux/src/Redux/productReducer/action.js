import { ERROR, LOADING, SUCCESS } from "./actionType"



export const FetchData = (dispatch)=> (obj)=>{
    dispatch({type : LOADING})
    fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json())
    .then((res)=>{
        dispatch({type : SUCCESS, payload : res})
    })
    .catch((err)=>{
        dispatch({type : ERROR})
    })
}