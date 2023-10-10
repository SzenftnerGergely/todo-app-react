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
    <div className="flex justify-between items-center bg-[#1d232a] border border-[#3abff8] rounded-lg p-2 mb-2">
      <p onClick={() =>{toggleComplete(task.id)}} className={`${task.completed ? 'text-red-400 line-through' : ""} cursor-pointer`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => {editTodo(task.id)}} className='hover:scale-110 cursor-pointer active:scale-105' />
        <FontAwesomeIcon icon={faTrash} onClick={() => {deleteTodo(task.id)}} className='ml-3 hover:scale-110 cursor-pointer active:scale-105' />
      </div>
    </div>
  )
}
