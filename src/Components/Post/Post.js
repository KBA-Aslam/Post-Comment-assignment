import React from 'react';
import { Button } from '@material-ui/core';
import {useHistory } from 'react-router-dom';
const Post = (props) => {
    const { title, id } = props.post;

    const history = useHistory();

    const handlePostDetail = (postId) => {
        const url = `/post/${postId}`
        history.push(url)
    }
    const postStyle = {
        width: "70%",
        margin: "auto",
        padding: "10px"
    }
    return (
                <div style={postStyle} className="text-light bg-dark card text-center">
                    <div className="card-header">
                        Hot News
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-uppercase"> {title} </h5>
                        <Button onClick={() => handlePostDetail(id)} variant="contained" color="primary">Purata Por Beta</Button>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
    );
};

export default Post;