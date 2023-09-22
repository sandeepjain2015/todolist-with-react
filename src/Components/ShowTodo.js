import React from 'react'

function ShowTodo({todo,id,removeTodo}) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-6">
                {todo}
            </div>
            <div className="col-6">
                <button onClick={()=>{
                    removeTodo(id)
                }}>X</button>
            </div>
        </div>
    </div>
  )
}

export default ShowTodo