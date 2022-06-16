import React from 'react'

const TodoList = ({callbackDelete, todos}) => {

    const onTrigger = index => {
        callbackDelete(index);
    }

    return (
        <div className='mt-3'>
            <h5>Your Todo List : </h5>
            <ul className='list-group'>
                {
                    todos.map((value, i) => {
                        return <li key={i} className='list-group-item d-flex justify-content-between'>
                                    <p className='text-primary fw-bold mb-0'> {value} </p> 
                                    <button className='btn btn-danger btn-sm' onClick={() => onTrigger(i)}>
                                        Delete
                                    </button>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;