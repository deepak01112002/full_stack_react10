import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from './Firebase/firebase';

function App() {
   const [email,setEmail] = useState("");
   const [pass,setPass] = useState("");
   const [data,setData] = useState([])
   const UserCollection = collection(db , "users")  

   const handleSubmit = async (e)=>{
    e.preventDefault();
    let obj = {
        email : email,
        password : pass
    }
    let a = await addDoc(UserCollection, obj)
    alert(`Data added Successfully with id ${a.id}`)
   }
   
   const getData = async ()=>{
     let data = await getDocs(UserCollection)
     let arr = data.docs.map((el)=>{
        // console.log(el.id)
        // console.log(el.data())
        return {id : el.id, ...el.data()}
     })
     setData(arr)
   }

   useEffect(()=>{
       getData()
   },[])

   const handleDelete = async (id)=>{
     const data = doc(db,"users",id)
     await deleteDoc(data)
     alert("User Deleted Successfully")
     getData()
   }

  return (
    <>
     <form onSubmit={handleSubmit}>
       <input type="text" onChange={(e)=>setEmail(e.target.value)} />
       <input type="text" onChange={(e)=>setPass(e.target.value)} />
       <input type="submit" />
       
     </form>
     {
         data.map((el)=>{
            return (
                <div key={el.id}>
                    <h1>{el.email} - {el.password}</h1>
                    <button onClick={()=>handleDelete(el.id)}>Delete</button>
                </div>
            )
         })
       }
    </>
  )
}

export default App
