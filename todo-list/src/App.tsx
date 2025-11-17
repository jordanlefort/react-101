import { useState } from "react"
function TodoItem({ item }) {
  return <li>{item}</li>
}

function App() {
  const [todolist, setTodolist] = useState<string[]>([])
  const [value, setValue] = useState("")

  const handleClick = () => {
    setTodolist(prevTodo => {
      return [...prevTodo, value]
    })
  }

  return (
    <div>
      <h1>Add a new item on list</h1>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={handleClick}> Ajouter</button>
      <ul>
        {todolist.map((item: any) => (
          <TodoItem item={item} />
        ))}
      </ul>
    </div>
  )
}

export default App
