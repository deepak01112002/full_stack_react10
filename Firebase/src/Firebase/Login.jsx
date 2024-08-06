import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from './firebase'

function Login() {
    const UserCollection  = collection(db,"users")
    
    const getData = async ()=>{
        let data = await getDocs(UserCollection)
        let arr = data.docs.map((el)=>{
            return {id : el.id, ...el.data()}
        })
        console.log(arr)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>Login</div>
  )
}

export default Login