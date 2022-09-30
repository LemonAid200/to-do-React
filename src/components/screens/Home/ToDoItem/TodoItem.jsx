import React from 'react'
import Checkbox from './Checkbox'
import cn from 'classnames'
import {BsTrash} from 'react-icons/bs'

const TodoItem = ({todo, store}) => {
  return (
    <div className='flex items-center mb-4 justify-between
     bg-slate-800 rounded-xl p-2 cursor-pointer'>
     <span className='flex items-center'>
        <Checkbox status={todo.status} store={store} todo={todo}/>
        <span className={cn({
          'line-through': todo.status ==='Done'
        })}>{todo.title}</span>
      </span>

        <BsTrash size={24} className='text-gray-600 hover:text-red-900
        transition-colors ease-in-out duration-500' onClick={() => store.removeToDo(todo._id)}/>
    </div>
  )
}

export default TodoItem