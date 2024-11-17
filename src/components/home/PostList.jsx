import React from 'react';
import { PostListContainer } from '../../styles/postList';
import PostCard from './PostCard';

const PostList = ({ posts, type }) => {
  return (
    <PostListContainer>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} type={type} />;
      })}
    </PostListContainer>
  );
};

export default PostList;
