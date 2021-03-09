import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[id])
    return (
        <div>
            <h2>this is post detail : {id}</h2>
            <p>user posted : {post.id} </p>
            <p>title: {post.title} </p>
            <p>body: {post.body} </p>
            <h2>number of comments : {comments.length}</h2>
            {
                comments.map(comment => <Comment comment={comment}> </Comment>)
            }
        </div>
    );
};

export default PostDetail;