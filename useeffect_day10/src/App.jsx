import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Product from './Components/Product';
function App() {
    
  const [arr,setrArr] = useState([])
    useEffect(()=>{
      
      axios('https://jsonplaceholder.typicode.com/todos')
      .then((res)=>{
        setrArr(res.data)
      })
      
     

      
    },[])
   
   console.log(arr)

  return (
    <div className="App">
        <Product dee={arr}/>
    </div>
  );
}

export default App;
