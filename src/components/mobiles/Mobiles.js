import React, { useState, useEffect } from 'react'
import { deleteMobile, getMobiles } from '../../config/mobilesConfig'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';

export default function Mobiles() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [mobiles, setMobiles] = useState([])

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = () => {
        getMobiles()
        .then(res => setMobiles(res.data))
    }

    const editProduct = (data) => {
        navigate('/addmobile', { state : data})
    }

    const deleteProduct = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this product?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
                deleteMobile(id).then(() => {
                    swal("Deleted!", "Your mobile file has been deleted!", "success");
                    getAllProducts()
                })
                .catch(err => console.log(err.response))
            }
          });
    }

    const addToCart = (id) => {
        if(localStorage.getItem('mobile-cart') != undefined){
            let isAlreadyAdded = false
            let cartArray = JSON.parse(localStorage.getItem('mobile-cart'))
            for(let p of cartArray){
                if(p.id == id){
                    isAlreadyAdded = true
                }
            }
            if(isAlreadyAdded){
                swal('Mobile Already Added !!!', '', 'error')
            }else{
                let obj = { id:id, quantity: 1}
                cartArray.push(obj)
                localStorage.setItem('mobile-cart', JSON.stringify(cartArray))
                dispatch({type:'ADDTOCART',payload:cartArray})
                swal('Added to cart successfully !!', '', 'success')
            }

        }else{
            let cartArray = [];
            let obj = { id: id, quantity: 1}
            cartArray.push(obj)
            localStorage.setItem('mobile-cart', JSON.stringify(cartArray))
            dispatch({type:'ADDTOCART',payload:cartArray})
            swal('Added to cart successfully !!', '', 'success')
        }
    }

    return (
        <div>
            <h3 className='text-center my-3'>Trending Mobiles</h3>
            <Link to="/addmobile">
                <button className='btn btn-primary my-3'>Add Mobile Product</button>
            </Link>
            <div className='row'>
                {
                    mobiles.map((val, index) => {
                        return <div className='col-md-4' key={index}>
                                <div className="card">
                                    <img className="card-img-top" src={val.image} alt={val.name} 
                                        height="300px" />
                                    <div className="card-body">
                                        <h4 className="card-title">{val.name}</h4>
                                        <p className="card-text">Price: Rs. {val.price} | Qty. {val.quantity}</p>
                                        <div className='btn-group'>
                                            <button className='btn btn-outline-primary'
                                                onClick={() => addToCart(val.id)}>Add to cart
                                            </button>
                                            <button className='btn btn-outline-success'
                                                onClick={() => editProduct(val)}>Edit Product
                                            </button>
                                            <button className='btn btn-outline-danger'
                                                onClick={() => deleteProduct(val.id)}>Delete Product
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    })
                }
            </div>
        </div>
    )
}
