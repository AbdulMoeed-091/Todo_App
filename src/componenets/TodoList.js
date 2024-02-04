import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { firestore } from './firebase';
import { onSnapshot, collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const todoRef = collection(firestore, 'todos');

    useEffect(() => {
        const unsub = onSnapshot(todoRef, (snapshot) => {
            const loadedTodos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setTodos(loadedTodos);
        });
        return () => unsub();
    }, [todoRef]);


    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const docRef = addDoc(todoRef, { text: todo.text });
        const newTodo = { id: docRef.id, text: todo.text };
        setTodos((prev) => [newTodo, ...prev]);


    };

    const completeTodo = (id) => {
        const todoDoc = doc(todoRef, id);
        const todo = todos.find((todo) => todo.id === id);

        if (todo) {
            const updatedIsComplete = todo.isComplete === undefined ? true : !todo.isComplete;
            updateDoc(todoDoc, { isComplete: updatedIsComplete });

            setTodos((prev) =>
                prev.map((t) => (t.id === id ? { ...t, isComplete: updatedIsComplete } : t))
            );
        }


    };

    const updateTodo = (todoId, newValue) => {

        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        const todoDoc = doc(todoRef, todoId);
        updateDoc(todoDoc, { text: newValue.text });

        setTodos((prev) =>
            prev.map((t) => (t.id === todoId ? { ...t, text: newValue.text } : t))
        );

    };

    const removeTodo = (id) => {

        const todoDocRef = doc(todoRef, id);
        deleteDoc(todoDocRef);

        setTodos((prev) => prev.filter((todo) => todo.id !== id));

    };



    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
