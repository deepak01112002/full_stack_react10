import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Visible from './Visible';
function App() {

   const [state,setstate] = useState(0)
   const [deepak,setdeepak] = useState(10)

   function increase(){
    setstate(state + 1)
   }
  return (
    <div className="App">
       <Visible deepak={state} d={deepak} />
       <button onClick={increase} >Click</button>
    </div>
  );
}

export default App;
