import React from 'react'
import TodoItem from './ToDoItem/TodoItem'
import AddToDoField from './AddToDoField'
import { observer } from 'mobx-react-lite'
import Store from '../../../store/store'

const store = new Store()

const Home = () => {

  return (
    <div className='w-4/5 mx-auto p-1 overflow-auto'>
        <h1 className="text-2xl w-full font-bold mb-4 text-center">To-Do List</h1>

        
        <AddToDoField store={store}/>
        <div className="grid grid-cols-3 gap-4 content-start my-5">
                <div className='cursor-pointer text-center self-center  bg-slate-700 rounded-xl w-14 hover:bg-zinc-600 transition-colors ease-in-out duration-500'  onClick={() => store.changeFilter('All')}>All</div>
                <div className='cursor-pointer text-center bg-slate-700 rounded-xl w-24 hover:bg-zinc-600 transition-colors ease-in-out duration-500' onClick={() => store.changeFilter('Not done')}>Not Done</div>
                <div className='cursor-pointer text-center self-center bg-slate-700 rounded-xl w-14 hover:bg-zinc-600 transition-colors ease-in-out duration-500' onClick={() => store.changeFilter('Done')}>Done</div>
        </div>
        {store.getFilteredToDos().map(todo => (
            <TodoItem key={todo._id} todo={todo} store={store}/>
        ))}        
    </div>
  )
}

export default observer(Home)