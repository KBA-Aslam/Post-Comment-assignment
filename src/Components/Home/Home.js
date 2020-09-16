import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './Home.css'

const Home = () => {

    const [post, setPost] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>  setPost(data))
    }, [])

    return (
        <div className="bg-color">
            {
                post.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;