import React, {useState} from 'react'
import Products from '../components/Products'
import MyFragment from './MyFragment'
import { useSelector } from 'react-redux'

const Basic = ({year}) => {

    // creating state with property
    const [name, setName] = useState('Vipin Singh')
    const [todos, setTodos] = useState([])   // entire todo array
    const [newtodo, setNewTodo] = useState('') // new todo value
    const alertMe = () => {
        alert('New alert created !!!')
    }
    
    // fetching store data from redux
    const countValue = useSelector(state => state.count)

    const saveTodo = (e) => {
        e.preventDefault()
        if(newtodo == ''){
            alert('Todo can not be blank !!!')
            return
        }
        setTodos([...todos, newtodo])
        setNewTodo('')
    }

    const handleCallback = (childData) => {
        console.log(childData)
        let newArr = todos.filter((item, index) => index !== childData)
        console.log(newArr)
        setTodos(newArr)
    }

    return (
        <div className='container'>
            <p>Value from props {year}</p>
            <p>Name is {name}</p>
            <button onClick={() => setName('Deepika')} className='btn btn-primary'>
                Update Name
            </button> 
            <br/><br/>
            <button className='btn btn-secondary' onClick={alertMe}>
                Create Alert
            </button>
            <br/><br/>

            <form>
                <input type="text" onChange={(e) => setNewTodo(e.target.value)} value={newtodo} />
                <button onClick={saveTodo}>create todo</button>
            </form>
            <ul>
                {
                    todos.map((todo, index) => {
                        return <li key={index}>{todo}</li>
                    })
                }
            </ul>

            <hr/>

            <p className='fw-bold'>Fragment Example : </p>
            <ul>
                <MyFragment></MyFragment>
            </ul>
            <h3 className='text-success mt-3'>Redux Store Count is : {countValue}</h3>
        </div>
    )
}

export default Basic;