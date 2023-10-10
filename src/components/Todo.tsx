import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { TodoType} from '../models'

type TodoPorps = {
  task: TodoType,
  toggleComplete: (id: string) => void, 
  deleteTodo: (id: string) => void, 
  editTodo: (id: string) => void 
}

export default function Todo({task, toggleComplete, deleteTodo, editTodo}: TodoPorps) {
  return (
    <div className="Todo">
      <p onClick={() =>{toggleComplete(task.id)}} className={`${task.completed ? 'completed' : ""} cursor-pointer`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => {editTodo(task.id)}} />
        <FontAwesomeIcon icon={faTrash} onClick={() => {deleteTodo(task.id)}} />
      </div>
    </div>
  )
}
