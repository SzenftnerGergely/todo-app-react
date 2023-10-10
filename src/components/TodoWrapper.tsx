import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid"
import Todo from "./Todo";
import EditTodoForm from "./EditTodo";

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

  const deleteTodo = (id: string) =>{
    setTodos(todos.filter(todo => todo.id !== id))
  } 

  const editTodo = (id: string) => {
    setTodos(todos.map(todo =>todo.id === id ? {
      ...todo, isEditing: !todo.isEditing
    } : todo ))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, isEditing: !todo.isEditing
    } : todo))
  }

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo 
            task={todo} 
            key={index} 
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      ))}
    </div>
  )
}
