import React from 'react'
import Checkbox from './Checkbox'
import cn from 'classnames'
import {BsTrash} from 'react-icons/bs'

const TodoItem = ({todo, changeToDo, removeToDo}) => {
  return (
    <div className='flex items-center mb-4 justify-between
     bg-slate-800 rounded-xl p-2 cursor-pointer'>
     <span className='flex items-center'>
        <Checkbox isCompleted={todo.isCompleted} changeToDo={changeToDo} todo={todo}/>
        <span className={cn({
          'line-through': todo.isCompleted
        })}>{todo.title}</span>
      </span>

        <BsTrash size={24} className='text-gray-600 hover:text-red-900
        transition-colors ease-in-out duration-500' onClick={() => removeToDo(todo._id)}/>
    </div>
  )
}

export default TodoItem