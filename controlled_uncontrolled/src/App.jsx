import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
let initial = {
  email : "",
  password : ""
}
function App() {
  const [state,setState] = useState(initial)
    const [arr,setarr] = useState([])
    const [isValid,setIsvalid] = useState(true)
   const handleChange = (e)=>{
      let {name,value} = e.target
      setState({...state,[name] : value})
   }
   const handleSubmit = (e)=>{
      e.preventDefault()
     setarr([...arr,state])
     setState(initial)
   }
   const handleBlur = ()=>{
      if(state.password.length > 8){
         setIsvalid(true)
      }else{
         setIsvalid(false)
      }
   }
  return (
    <div className="App">
       <form style={{backgroundColor : "red"}} onSubmit={handleSubmit}>
           <input type="text" value={state.email} name='email' required placeholder='Email' onChange={handleChange} /><br /><br />
           <input type="text" value={state.password} required name='password' placeholder='Password' className={isValid ? "a" : "b"} onChange={handleChange} onBlur={handleBlur} /><br /><br />
           {isValid ? "" :<p>Password</p>}
           <input type="submit" />
       </form>
    </div>
  );
}

export default App;
