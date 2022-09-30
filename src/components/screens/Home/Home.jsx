import React, { useState } from 'react'
import TodoItem from './ToDoItem/TodoItem'
import AddToDoField from './AddToDoField'

const todosData = [
{
    _id: 'www',
    title: 'Do stuff',
    isCompleted: false
},
{
    _id: 'www2',
    title: 'Do other stuff',
    isCompleted: false
},
{
    _id: 'www1',
    title: 'Do different stuff',
    isCompleted: false
},
]



const Home = () => {
    const [todos, setTodos] = useState(todosData)
    const [filter, setFilter] = useState('')

    const changeToDo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const getRandomKey = () => {
        var uuid = require("uuid");
        var id = uuid.v4();
        return id
    }

    const removeToDo = (id) => {
        setTodos([...todos].filter(t => t._id !== id))
    }

    const addToDo = (title) => {
        if (title.length > 0){
            setTodos([{
                _id: getRandomKey(),
                title,
                isCompleted: false
            }, ...todos])
        }
    }

    window.addTD = addToDo

  return (
    <div className='w-4/5 mx-auto p-1 overflow-auto'>
        <h1 className="text-2xl w-full font-bold mb-4 text-center">To-Do List</h1>

        
        <AddToDoField addToDo={addToDo}/>
        <div className="grid grid-cols-3 gap-4 content-start">
                <div className='cursor-pointer text-center self-center  bg-slate-700 rounded-xl w-14 hover:bg-zinc-600 transition-colors ease-in-out duration-500'  onClick={() => setFilter('')}>All</div>
                <div className='cursor-pointer text-center bg-slate-700 rounded-xl w-24 hover:bg-zinc-600 transition-colors ease-in-out duration-500' onClick={() => setFilter(true)}>Not Done</div>
                <div className='cursor-pointer text-center self-center bg-slate-700 rounded-xl w-14 hover:bg-zinc-600 transition-colors ease-in-out duration-500' onClick={() => setFilter(false)}>Done</div>
        </div>
        {todos.map(todo => ( todo.isCompleted !== filter &&
            <TodoItem key={todo._id} todo={todo} changeToDo={changeToDo} removeToDo={removeToDo}/>
        ))}        
    </div>
  )
}

export default Home