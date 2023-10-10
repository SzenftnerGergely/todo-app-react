import React, { useState } from "react"

export default function TodoForm() {
  const [value, setValue] = useState("")

  return (
    <form action="" className="TodoForm">
      <input 
        type="text" 
        className="todo-input" 
        placeholder="What is the task today?" 
        onChange={(e) => console.log(e.target.value)}
      />
      <button type="submit" className="bg-[#8758ff] text-white p-[0.55rem] ml-2 border-none cursor-pointer active:scale-95">Add Task</button>
    </form>
  )
}
