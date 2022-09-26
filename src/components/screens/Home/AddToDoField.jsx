import React, {useState} from 'react'

const AddToDoField = ({addToDo}) => {
  const [title, setTitle] = useState('')

  return (
    <div>
      <input  type="text" placeholder='Add new task' 
        className='mb-6 bg-slate-800 rounded-xl p-2 w-full'
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyDown={e => e.key === 'Enter' && [addToDo(title), setTitle('')]}
      />
    </div>
  )
}

export default AddToDoField