import { useState } from "react"
import { TodoType } from "../models"

type EditTodoFormPorps = {
  editTodo: (value: string, taskId: string) => void 
  task: TodoType
}


export default function EditTodoForm({editTodo, task}: EditTodoFormPorps) {
  const [value, setValue] = useState(task.task)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    editTodo(value, task.id)
    setValue("")
  } 
  

  return (
    <form onSubmit={handleSubmit} className="flex justify-between items-center bg-[#1d232a] border border-[#3abff8] rounded-lg p-2 gap-2 mb-3">
      <input 
        type="text" 
        value={value}
        className="input input-bordered w-full max-w-xs" 
        placeholder="Update Task?" 
        onChange={(event) => setValue(event.target.value)}
      />
      <button 
        type="submit" 
        className="btn btn-info"
      >Update Task
      </button>
    </form>
  )
}