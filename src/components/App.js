import React, { useState } from "react";

function App() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const [todosList, setTodosList] = useState([]);
  const [editable, setEditable] = useState(false);

  function handleChange(event) {
    setNewTodoValue(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    setTodosList((prevTodosList) => [...prevTodosList, newTodoValue]);
    setNewTodoValue("");
  }
  function handleRemove(del) {
    console.log(del);
    const newList = todosList.filter((item) => item !== del);

    setTodosList(newList);
    // remove item
  }
  function handleEdit(e) {
    setEditable(true);
  }

  const allTodos = todosList.map((todo, index) => (
    <div>
      <li key={todo}>{todo}</li>
      <button
        type="button"
        onClick={() => handleRemove(todo)}
        className="delete"
      >
        Remove
      </button>
      <button type="button" className="edit" onClick={handleEdit}>
        Edit
      </button>
      {editable ? (
        <div>
          <textarea className="editTask" name="todo1" />
          <button className="saveTask">Save</button>{" "}
        </div>
      ) : null}
    </div>
  ));

  return (
    <div>
      <form>
        <textarea
          type="text"
          name="todo"
          value={newTodoValue}
          onChange={handleChange}
          id="task"
        />
        <button id="btn" onClick={addTodo}>
          Add todo item
        </button>
      </form>
      <ul className="list">{allTodos}</ul>
    </div>
  );
}

export default App;
