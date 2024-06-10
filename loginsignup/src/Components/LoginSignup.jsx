import { useState } from "react"
import Swal from 'sweetalert2'

function LoginSignup(){

   const [state,setState] = useState("Signup")
   const [name,setName] = useState("")
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   const [loginEmail,setLEmail] = useState("")
   const [loginpass,setLoginpass] = useState("")
   const [arr,setArr] = useState([])
   
    const handleClick= ()=>{
        let obj = {
            username : name,
            email : email,
            pass : password
        }
        setArr([...arr,obj])

    }
    

    const handleLoginClick =()=>{
        let data = arr.filter((el)=>{
            return el.email == loginEmail && el.pass == loginpass
        })
        if(data.length>0){
            Swal.fire("Login Successfull");
        }else{
            alert("Login Unsuccessfull")
        }
    }

    return (
        <div>
          { state=="Signup" ?  <div>
            <h1>Signup</h1>
             <input type="text" placeholder="User Name" onChange={(d)=>setName(d.target.value)} /><br /> <br />
             <input type="email" placeholder="Email" onChange={(d)=>setEmail(d.target.value)}/><br /> <br />
             <input type="text" placeholder="Password" onChange={(d)=>setPassword(d.target.value)}/><br /> <br />
             <button onClick={handleClick}>Singup</button>
             <p onClick={()=>setState("Login")}>Already an account ? Login</p>
          </div> : <div>
            <h1>Login</h1>
            <input type="text" placeholder="email" onChange={(e)=>setLEmail(e.target.value)} /> <br /><br />
            <input type="text" placeholder="password" onChange={(e)=>setLoginpass(e.target.value)} /> <br /><br />
            <button onClick={handleLoginClick}>Login</button>
            <p onClick={()=>setState("Signup")}>Create an account</p>
            
            
            
            </div>}
        </div>
    )
}


export default LoginSignup