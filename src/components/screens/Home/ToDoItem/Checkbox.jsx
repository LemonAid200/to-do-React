import React from 'react'
import {BsCheck} from 'react-icons/bs'
import cn from 'classnames'

const Checkbox = ({status, todo, store}) => {
  return (
    <div className={cn(`border-2 rounded-lg border-pink-800 h-7 w-7 mr-3 ml-3
    flex items-center justify-center`, {
      'bg-pink-800' : status === 'Done'
    })}
    onClick={() => store.changeToDoStatus(todo._id, status)}
    >      
      {
        status === 'Done' && <BsCheck size={24} className="text-black"/>
      }
    </div>
  )
}

export default Checkbox