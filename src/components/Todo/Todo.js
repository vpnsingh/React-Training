import React, { useState } from 'react'
import TodoList from './TodoList'

const Todo = () => {

    const [todos, setTodos] = useState([])   // entire todo array
    const [inputValue, setInputValue] = useState('') // new todo value

    const addTodo = (e) => {
        e.preventDefault()
        // validation to prevent empty todo addition
        if(inputValue == ''){
            alert('Todo can not be blank !!!')
            return
        }
        // adding todo to todo array
        setTodos([...todos, inputValue])
        // empty input value after successful addition
        setInputValue('')
    }

    // this function will receive index from child component (TodoList) and apply array.filter to update todo list.
    const handleDelete = (indexFromChild) => {
        console.log("Todo index position from child component : ", indexFromChild)
        let newTodoList = todos.filter((item, index) => index !== indexFromChild)
        setTodos(newTodoList)
    }

    return (
        <div className='container'>
            <h3 className='text-center mt-3'>Add Your Todo</h3>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='Enter your todo name...'
                    onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                <button className='btn btn-outline-success' onClick={addTodo}>Add Todo</button>
            </div>
            <hr/>
            <div>
                <TodoList callbackDelete={handleDelete} todos={todos} />
            </div>
        </div>
    )
}

export default Todo;
