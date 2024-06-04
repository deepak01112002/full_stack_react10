

let obj ={
    name :  "deepak",
    city : "rajkot"
}

let {name,city} = obj

function Visible({deepak,d}){
    return (
      <div>
          <h1>{deepak}</h1>
          <h1>{d}</h1>
      </div>
    )
}


export default Visible