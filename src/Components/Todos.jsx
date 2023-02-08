import React, { useState } from 'react'
import Todo from './Todo';

const Todos = () => {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);

    // console.log(input);

    const addTodo = () => {
        setTodo((prevTodo)=>[
            ...prevTodo, {
                task : input,
                id: todo.length+1
            }
        ])
        setInput('')
    }
    
  return (
    <div className='todos'>
        <h1>My Tasks</h1>
        <div className='input-div'>
            <input  value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
            <button onClick={addTodo}>Add</button>
        </div>
        {
            todo.map((t)=> {
                return (
                    <Todo 
                        key={t.id}
                        task={t.task}
                    />
                )
            })
        }
        
    </div>
  )
}

export default Todos