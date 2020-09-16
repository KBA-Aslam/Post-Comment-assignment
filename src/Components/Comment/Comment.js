import React from 'react';

const Comment = (props) => {
    console.log(props)
    const { name, email, body } = props.comment;
    return (
                        <div style={{marginLeft: "25%", width: "70%", marginBottom: "10px"}}>
                <div  style={{borderRadius: "16px 0px 16px 0px"}} class="card text-white bg-info">
                <div class="card-header">
                    Comment
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p> {body} </p>
                    <footer class="blockquote-footer"> {name} <br/> <cite title="Source Title">Email: {email}</cite></footer>
                    </blockquote>
                </div>
                </div>
                        </div>
    );
};

export default Comment;