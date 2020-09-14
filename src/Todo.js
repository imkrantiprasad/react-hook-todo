import React from 'react';

export default function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}

            <div>
                <button className="btn mark-btn" onClick={() => completeTodo(index)}>{todo.isCompleted ? `Unmark` : `Mark`}</button>
                <button className="btn delete-btn" onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    );
}