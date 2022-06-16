import React, {useReducer} from 'react';

const initialState = { count : 0 }

function reducer (state, action) {
    switch(action.type) {
        case 'increment' : 
            return {count: state.count + 1}
        case 'decrement' : 
            return {count: state.count - 1}
        default : 
            throw new Error('Invalid action type')
    }
}

export default function ReducerDemo() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const increment = () => {
        dispatch({type: 'increment'})
    }

    const decrement = () => {
        dispatch({type: 'decrement'})
    }
     
    return (
        <div className='container my-3'>
            <h3 className='text-center'>Redcuer Works !!!</h3>
            <br/>
            <div className='bg-secondary p-4'>
                <p className='text-light fw-bold'>Count : {state.count}</p>
                <div className='btn-group'>
                    <button className='btn btn-danger' onClick={increment}>Increment +</button>
                    <button className='btn btn-success' onClick={decrement}>Decrement -</button>
                </div>
            </div>
        </div>
    )
}
