//create a new fuctional component with adding Todo MUI design
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const AddTodoItem = ({ addTodo }) => {
    const [todo, setTodo] = useState({ title: '', description: '', completed: false });
    const handleChange = e => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(todo);
        setTodo({
            title: '',
            description: '',
            completed: false
        });
    }

    
    return (
        <form style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',margin:'20px',gap:"10px"}} onSubmit={handleSubmit}>
        <TextField
            name="title"
            label="Title"
            value={todo.title}
            onChange={handleChange}
        />
        <TextField
            name="description"
            label="Description"
            value={todo.description}
            onChange={handleChange}
        />

        <Button
            variant="contained"
            color="primary"
            type="submit"
        >
            Add
        </Button>
        </form>
    );
    }
    export default AddTodoItem;
