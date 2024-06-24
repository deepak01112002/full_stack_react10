import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
let obj = [{
  type : "text",
  plc : "Enter your Name",
  name : "Username"
},{
  type : "email",
  plc : "Enter your EmailID",
  name : "Email"
}]
function App() {
  
   const [arr,setArr] = useState(obj)
   const handleClick = ()=>{
     setArr([...arr,{type : "text",plc : "Enter your text",name : "deepak"}])
   }
   
  // let a = /[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z]{2,}/
  // let b = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  // let emai = "deepak@gmail.com"
  // let password = "Deepak@123"
  // a.test(email)
  // b.test(password)



  return (
    <div className="App">
        <form action="">
           {
             arr.map((el)=>{
              return (
                 <input type={el.type} placeholder={el.plc} name={el.name} />
              )
             })
           }
        </form>
        <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default App;
