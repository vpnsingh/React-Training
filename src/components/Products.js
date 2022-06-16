import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Products() {
    // Initializing ref 
    const productNameRef = useRef(null)
    const productPriceRef = useRef(null)
    const productQtyRef = useRef(null)
    const navigate = useNavigate()

    const saveProduct = (e) => {
        e.preventDefault()
        let formData = {
            productName : productNameRef.current.value,
            productPrice : productPriceRef.current.value,
            productQty : productQtyRef.current.value
        }
        console.log(formData)
        localStorage.setItem('formdata', JSON.stringify(formData))
        setTimeout(() => {
            navigate('/posts')
        }, 3000)
    }

    return (
        <div>
            <h3 className='text-center'>Products using useRef</h3>
            <form onSubmit={saveProduct}>
                <div className='form-group'>
                    <label>Product Name</label>
                    <input type="text" className='form-control' ref={productNameRef} />
                </div>
                <div className='form-group'>
                    <label>Product Price</label>
                    <input type="text" className='form-control' ref={productPriceRef} />
                </div>
                <div className='form-group'>
                    <label>Product Qty</label>
                    <input type="text" className='form-control' ref={productQtyRef} />
                </div>
                <br/>
                <button className='btn btn-primary' type='submit'>Proceed</button>
            </form>
        </div>
    )
}
