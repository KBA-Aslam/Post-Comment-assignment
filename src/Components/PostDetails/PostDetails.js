import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment'

const PostDetails = () => {

    const { postId } = useParams();

    const  [post, setPost] = useState([]);

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>  setPost(data))
    }, [])

    const [comment, setComment] = useState([]);

    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>  setComment(data))
    }, [])

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h5 className="display-4">{post.title}</h5>
                    <p className="lead">Bistarito Protobedon: <br/> {post.body}</p>
                </div>
            </div>
            <div>
            {
                comment.map(cmnt => <Comment comment={cmnt}></Comment>)
            }
            </div>
        </div>
    );
};

export default PostDetails;