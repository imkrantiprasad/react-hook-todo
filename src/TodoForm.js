import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value){ 
            setError("Please enter a Todo")  
            return;}
        addTodo(value);
        setValue("");
    };

    const handleChange = e => {
      if(error) setError("")
      setValue(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    placeholder="Enter a Todo"
                    value={value}
                    onChange={handleChange}
                />
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
}