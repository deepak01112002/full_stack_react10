



function TodoList({data}){
    return(
        <div>
            {
            data.map((el)=>{
                return (<div>
                     <h1>{el.task} - {el.isComp ? "Completed" : "Not completed"}</h1>
                     <button>Edit</button>
                     <button>Delete</button>
                </div>)
            })
           }
        </div>
    )
}

export default TodoList