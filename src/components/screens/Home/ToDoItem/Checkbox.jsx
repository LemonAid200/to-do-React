import React from 'react'
import {BsCheck} from 'react-icons/bs'
import cn from 'classnames'

const Checkbox = ({isCompleted, todo, store}) => {
  return (
    <div className={cn(`border-2 rounded-lg border-pink-800 h-7 w-7 mr-3 ml-3
    flex items-center justify-center`, {
      'bg-pink-800' : isCompleted
    })}
    onClick={() => store.changeToDo(todo._id)}
    >      
      {
        isCompleted && <BsCheck size={24} className="text-black"/>
      }
    </div>
  )
}

export default Checkbox