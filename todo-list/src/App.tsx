import { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [toDoList, setToDoList] = useState<string[]>([])
  const [inputValue, setInputValue] = useState("")

  const handleInput = (e: any) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    console.log(toDoList, inputValue)
    setToDoList((prev) => [...prev, inputValue])
  }
  return (
    <div>
      <ul>
        {toDoList.map(toDo => (<ToDoItem key={toDo} toDo={toDo} />)) }
      </ul>
      <label htmlFor="toDoInput">Add Todo</label>
      <input id="toDoInput" name="toDoInput" type="text" onChange={handleInput}></input>
      <button onClick={handleClick}>Add ToDo</button>
    </div>
  );
}

export default App;
