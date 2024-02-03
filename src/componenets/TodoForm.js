import React, { useState } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('');

    const handleInput = text =>{
        setInput(text.target.value);
    }
    const handleSubmit = e => {e.preventDefault();
    props.onSubmit({
        text: input
    });
    setInput('');
    };
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Add Todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleInput}
            />
            <button className='todo-button'> Add todo</button>
        </form>
    )
}

export default TodoForm;