import { observer } from 'mobx-react-lite'
import React, {useState} from 'react'



const AddToDoField = ({store}) => {
  const [title, setTitle] = useState('')


  return (
    <div>
      <input  type="text" placeholder='Add new task' 
        className='mb-2 bg-slate-800 rounded-xl p-2 w-full'
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyDown={e => e.key === 'Enter' && [store.addToDo(title), setTitle('')]}
      />
    </div>
  )
}

export default observer(AddToDoField)