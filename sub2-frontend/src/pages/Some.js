import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then(response => setPosts(response.data));
    }, []);

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {posts.map(post => (
                    <li key={posts.id}>{post}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostsPage;
