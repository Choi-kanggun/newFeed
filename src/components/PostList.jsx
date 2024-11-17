import React from 'react';
import { PostListContainer } from '../styles/PostList';
import PostCard from './PostCard';

const PostList = ({ posts }) => {
  return (
    <PostListContainer>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </PostListContainer>
  );
};

export default PostList;
