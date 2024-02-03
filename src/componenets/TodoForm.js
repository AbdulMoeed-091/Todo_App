import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('');
    const ref = useRef(null);
    useEffect(()=>{
    ref.current.focus()})

    const handleInput = text =>{
        setInput(text.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random()*10000),
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
                ref={ref}
            />
            <button className='todo-button'> Add todo</button>
        </form>
    )
}

export default TodoForm;