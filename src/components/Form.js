import React, { useState } from 'react'

const Form = () => {

    // state object creation for user form
    const [users, setUsers] = useState({
        name : '',
        age : '',
        email : '',
        mobile : ''
    })
    const [count, setCount] = useState(0);

    // destructing
    const { name, age, email, mobile } = users

    // handling value of each element and updating the state
    const handleChange = key => event => {
        console.log(key, event.target.value)
        setUsers({...users, [key] : event.target.value})
    }

    // on submit handling
    const onSubmit = () => {
        if(name == ''){
            alert("name should not be blank")
        }else if(age == ''){
            alert("age should not be blank")
        }else if(email == ''){
            alert("email should not be blank")
        }else if(mobile ==''){
            alert("Mobile no should not be blank")
        }

        console.log(users)
    }

    return (
        <div>
            <h3 className='text-center my-3'>Form Example</h3>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">User Name</label>
                    <input type="text" className="form-control" onChange={handleChange('name')} value={name} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Age</label>
                    <input type="number" className="form-control" onChange={handleChange('age')} value={age} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={handleChange('email')} value={email}  />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Mobile No</label>
                    <input type="text" className="form-control" onChange={handleChange('mobile')} value={mobile}  />
                </div>
            </form>
            <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default Form