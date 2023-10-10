import { useState } from "react"
import { Todo } from "../models"

type EditTodoFormPorps = {
  editTodo: (value: string, taskId: string) => void 
  task: Todo
}


export default function EditTodoForm({editTodo, task}: EditTodoFormPorps) {
  const [value, setValue] = useState(task.task)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    editTodo(value, task.id)
    setValue("")
  } 
  

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input 
        type="text" 
        value={value}
        className="todo-input" 
        placeholder="Update Task?" 
        onChange={(event) => setValue(event.target.value)}
      />
      <button 
        type="submit" 
        className="bg-[#8758ff] text-white p-[0.55rem] ml-2 
        border-none cursor-pointer active:scale-95"
      >Update Task
      </button>
    </form>
  )
}