import React, { useState, useEffect } from 'react'
import { addMobile, updateMobile } from '../../config/mobilesConfig'
import { useLocation, useNavigate }  from 'react-router-dom'
import swal from 'sweetalert';

export default function AddMobile() {

    const location = useLocation()
    const navigate = useNavigate()
    const [mobileData, setMobileData] = useState({
        name : '',
        price : '',
        quantity : '',
        image : '',
        id : ''
    })
    const [action, setAction] = useState('Add Mobile')

    // destructring state
    const { name, price, quantity, image, id } = mobileData

    useEffect(() => {
        const { state } = location    
        if(state != undefined){
            setAction('Update Mobile')
            setMobileData({
                ...mobileData,
                name : state.name,
                price : state.price,
                quantity : state.quantity,
                image : state.image,
                id : state.id
            })
        }
    }, [])

    const onChangeHandler = keyname => event => {
        setMobileData({...mobileData, [keyname] : event.target.value })
    }

    const saveMobileData = (event) => {
        event.preventDefault()
        if(name === '' || price === '', quantity === '' || image === ''){
            alert('Please fill all the data')
            return
        }
        if(action == 'Add Mobile'){
            addMobile(mobileData)
            .then((res) => {
                console.log(res)
                swal('Product Added Successfully !!!', '', 'success')
                setMobileData({
                    name: '', price: '', quantity: '', image: ''
                })
            })
        }else{
            updateMobile(id, mobileData)
            .then((res) => {
                console.log(res)
                navigate('/mobiles')
            })
        }

    }

    return (
        <div>
            <h3 className='text-center my-3'>{action}</h3>
            <form onSubmit={saveMobileData}>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Example input placeholder" 
                        onChange={onChangeHandler('name')} value={name}/>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Price</label>
                    <input type="text" className="form-control" placeholder="Another input placeholder" 
                        onChange={onChangeHandler('price')} value={price}/>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Quantity</label>
                    <input type="text" className="form-control" placeholder="Example input placeholder" 
                        onChange={onChangeHandler('quantity')} value={quantity}/>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Image URL</label>
                    <input type="text" className="form-control" placeholder="Another input placeholder" 
                        onChange={onChangeHandler('image')} value={image}/>
                </div>
                <br/>
                <button className='btn btn-success' type='submit'>{action}</button>
            </form>
        </div>
    )
}
