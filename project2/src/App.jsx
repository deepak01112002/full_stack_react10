import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import FetchingData from './Components/FetchingData';

function App() {

   const [state,setState] = useState(null)
   useEffect(()=>{
    async function d(){
      let d = await fetch("https://randomuser.me/api")
      let data = await d.json()
      setState(data)
    }
    d() 
   },[])
  return (
    <div className="App">
       {state == null ? "Loading......" : <FetchingData data={state.results}/>}
    </div>
  );
}

export default App;
