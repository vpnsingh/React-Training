import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from '../common/Header'
import Basic from '../components/Basic'
import Parent from '../components/contextapi/Parent'
import Form from '../components/Form'
import AddMobile from '../components/mobiles/AddMobile'
import Mobiles from '../components/mobiles/Mobiles'
import Pagenotfound from '../components/Pagenotfound'
import Posts from '../components/Posts'
import Products from '../components/Products'
import ReducerDemo from '../components/ReducerDemo'
import ReduxDemo from '../components/ReduxDemo'
import Todo from '../components/Todo/Todo'
import Memo from '../components/Memo'
import Callback from '../components/Callback'

const Base = () => {
    return (
        <main>
            <BrowserRouter>
                <header>
                    <Header />
                </header>
                <section className='container'>
                    <Routes>
                        <Route path="/" element={<Basic year="2022" />} />
                        <Route path="/basic" element={<Basic year="2022" />} />
                        <Route path="/todos" element={<Todo />} />
                        <Route path="/form" element={<Form />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/contextapi" element={<Parent />} />
                        <Route path="/mobiles" element={<Mobiles />} />
                        <Route path="/addmobile" element={<AddMobile />} />
                        <Route path="/reducer" element={<ReducerDemo />} />
                        <Route path="/redux" element={<ReduxDemo />} />
                        <Route path="/memo" element={<Memo />} />
                        <Route path="/callback" element={<Callback />} />
                        <Route path="*" element={<Pagenotfound/>} />
                    </Routes>
                </section>
            </BrowserRouter>
        </main>  
    )
}

export default Base;