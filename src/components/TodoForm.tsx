import { useState } from "react"

type Todo = {
  id: string,
  task: Todo,
  complated: boolean,
  isEditing: boolean
}

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}


export default function TodoForm({addTodo}) {
  const [value, setValue] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(value)
    setValue("")
  } 
  

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input 
        type="text" 
        value={value}
        className="todo-input" 
        placeholder="What is the task today?" 
        onChange={(event) => setValue(event.target.value)}
      />
      <button 
        type="submit" 
        className="bg-[#8758ff] text-white p-[0.55rem] ml-2 
        border-none cursor-pointer active:scale-95"
      >Add Task
      </button>
    </form>
  )
}
