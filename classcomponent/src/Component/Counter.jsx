
import { Component } from "react"

// function Counter(){

//     return (
//       <div>
//           <h1>counter</h1>
//        </div>
//     )
// }



class Counter extends Component{
  
 constructor(props){
    super(props)
    this.state = {count : 0,work : ""}
 }
  
 increament = ()=>{
    this.setState({count : this.state.count + 1})
 }

  
  
 render(){
     return (
        <div>
            <h1>Counter</h1>
            <h1>Count : {this.state.work}</h1>
            <input type="text" onChange={(e)=>this.setState({work : e.target.value })} />
            <button onClick={this.increament}>ADD</button>
        </div>
     )
  }






}




export default Counter