import { useState } from "react"

type TodoFormPorps = {
  addTodo: (value: string) => void 
}


export default function TodoForm({addTodo}: TodoFormPorps) {
  const [value, setValue] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(value)
    setValue("")
  } 
  

  return (
    <form onSubmit={handleSubmit} className=" w-full mb-4 flex gap-2 transition-all">
      <input 
        type="text" 
        placeholder="Write a Todo here" 
        className="input input-bordered input-info w-full max-w-xs" 
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button 
        type="submit"
        className="btn btn-outline btn-info"
      >Add Task
      </button>
    </form>
  )
}
