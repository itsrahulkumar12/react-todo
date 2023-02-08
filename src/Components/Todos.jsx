import React, { useState } from 'react'

const Todos = () => {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([
        {
            task : input,
            id : 0
        }
    ]);

    // console.log(input);

    const addTodo = () => {
        setTodo((prevTodo)=>[
            ...prevTodo, {
                task : input,
                id: todo.length+1
            }
        ])
    }
    
  return (
    <div className='todos'>
        <h1>My Tasks</h1>
        <div>
            <input  value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
            <button onClick={addTodo}>Add</button>
        </div>
        {
            todo.map((t)=> {
                return (
                    <p key={t.id}>{t.task}</p>
                )
            })
        }
        
    </div>
  )
}

export default Todos