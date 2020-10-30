import React from 'react';

export default function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div onClick={() => completeTodo(index)}
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}

            <div>
                <button className="btn delete-btn" onClick={(event) => { event.stopPropagation(); removeTodo(index) }}>x</button>
            </div>
        </div>
    );
}