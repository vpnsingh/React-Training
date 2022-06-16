import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

    const cartValue = useSelector(state => state.cart.length)
    // const [cartValue, setCartValue] = useState(0)

    // useEffect(() => {
    //     const cartItem = JSON.parse(localStorage.getItem('mobile-cart'))
    //     if(cartItem != undefined){
    //         setCartValue(cartItem.length)
    //     }
    // }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">React Training</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/basic" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/todos" className="nav-link">Todo</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/form" className="nav-link">Form</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/posts" className="nav-link">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contextapi" className="nav-link">Context API</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/mobiles" className="nav-link">
                                    Mobiles <span className='badge bg-success'>{cartValue}</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/reducer" className="nav-link">Reducer</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/redux" className="nav-link">Redux</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;