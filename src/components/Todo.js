import React from 'react';

export default function Todo({ id, name, done, toggleDone, deleteTodo }) {
    
    return (
        <div>
            <span>
                <input type="checkbox" checked={done} onChange={() => toggleDone(id)}/>
            </span>
            <span>{name}</span>
            <button onClick={() => deleteTodo(id)}>X</button>
        </div>
    )
}