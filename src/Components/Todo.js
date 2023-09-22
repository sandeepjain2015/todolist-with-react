import React, { useState } from "react";
import ShowTodo from "./ShowTodo";
function Todo() {
  const [todo, setTodo] = useState("Add a todo");
  const [data, setData] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setData([...data, todo]);
    setTodo("");
  };
  const removeTodo = (id) => {
    const newData = data.filter((current, index) => {
      return index !== id;
    });
    setData(newData);
  };
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">Add todo</button>
        </form>
      </div>
      {data.map((value, index) => {
        return (
          <ShowTodo
            key={index}
            id={index}
            todo={value}
            removeTodo={removeTodo}
          />
        );
      })}
    </div>
  );
}

export default Todo;
