import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addDocs, collection } from 'firebase/firestore';
import { db } from './Firebase/firebase';

function App() {
   const [email,setEmail] = useState("");
   const [pass,setPass] = useState("");

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

  return (
    <>
     <form onSubmit={handleSubmit}>
       <input type="text" onChange={(e)=>setEmail(e.target.value)} />
       <input type="text" onChange={(e)=>setPass(e.target.value)} />
       <input type="submit" />
     </form>
    </>
  )
}

export default App
