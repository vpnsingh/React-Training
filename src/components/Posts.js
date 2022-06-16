import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Posts = () => {

    const [count, setCount] = useState(0)
    const [postData, setPostData] = useState([])

    // component did mount example
    useEffect(() => {
        console.log('component mounted')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setPostData(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })        
    }, [])

    // component did update example
    useEffect(() => {
        // be default first time it will load as useEffect didmount
        // then execute every time state update
        console.log('Count updated')
    }, [count])

    // component will unmount example
    useEffect(() => {
        // when component destroyed/removed from DOM
        return () => {
            console.log('cleanup or component unmount')
        }
    }, [])

    return (
        <div>
            <h3 className='text-center'>Posts Data using useEffect</h3>
            <p>Count value is {count}</p>
            <button className='btn btn-secondary' onClick={() => setCount(count+1)}>Update Count</button>
            <hr/>
            <h3 className='text-primary fw-bold'>Recent Posts : </h3>
            {
                postData.map((post, index) => {
                    return(
                        <article key={index}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default Posts