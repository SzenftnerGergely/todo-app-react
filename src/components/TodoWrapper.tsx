import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid"
import Todo from "./Todo";

type Todo = {
  id: string,
  task: Todo,
  completed: boolean,
  isEditing: boolean
}


export default function TodoWrapper() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todo: Todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    
  }

  const toggleComplete = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} toggleComplete={toggleComplete}/>
      ))}
    </div>
  )
}
