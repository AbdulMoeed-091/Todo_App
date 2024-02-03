import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    });

    const handleInput = text => {
        setInput(text.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type='text'
                        placeholder='Edit Todo'
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={handleInput}
                        ref={inputRef}
                    />
                    <button
                        onClick={handleSubmit} className='todo-button edit'> Edit todo</button>
                </>) : (

                <>

                    <input
                        type='text'
                        placeholder='Add Todo'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleInput}
                        ref={inputRef}
                    />
                    <button
                        onClick={handleSubmit} className='todo-button'> Add todo</button>
                </>
            )}
        </form>
    );
}

export default TodoForm;