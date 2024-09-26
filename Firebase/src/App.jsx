import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db, googleAuth, Logout } from './Firebase/firebase';

function App() {
   const [email,setEmail] = useState("");
   const [pass,setPass] = useState("");
   const [data,setData] = useState([])
   const [submit ,setSubmit] = useState(null)
   const UserCollection = collection(db , "users")  

   const handleSubmit = async (e)=>{
    e.preventDefault();
    let obj = {
        email : email,
        password : pass
    }
    if(submit != null){
      
      let userDoc = doc(db,"users",submit)
      await updateDoc(userDoc,obj)
      setSubmit(null)
      alert("User Updated Successfully")

    }else{
      let a = await addDoc(UserCollection, obj)
      alert(`Data added Successfully with id ${a.id}`)
    }
    
    setEmail("")
    setPass("")
    getData()
    
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

   const handleEdit = async (id)=>{
      console.log(id)
      setSubmit(id)
      data.forEach((el)=>{
          if(el.id == id){
              setEmail(el.email);
              setPass(el.password)
          }
      })
   }

   const handleClick = ()=>{
      googleAuth()
      .then((res)=>{
        console.log(res)
      })
   }

   const handleLogout = ()=>{
      Logout()
   }

  return (
    <>
     {/* <form onSubmit={handleSubmit}>
       <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
       <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)} />
       <input type="submit" value={submit!=null ? "Update" : "Submit"} />
       
     </form>
     {
         data.map((el)=>{
            return (
                <div key={el.id}>
                    <h1>{el.email} - {el.password}</h1>
                    <button onClick={()=>handleDelete(el.id)}>Delete</button>
                    <button onClick={()=>handleEdit(el.id)}>Edit</button>
                </div>
            )
         })
       }
       <Login/> */}
       <button onClick={handleClick}>Signup</button>
       <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default App
