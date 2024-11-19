import React from 'react';
import { PostListContainer } from '../../styles/postList';
import PostCard from './PostCard';
import { supabase } from '../../supabase/supabaseClient';

const PostList = ({ posts, type, handleDeleteCard }) => {
  return (
    <PostListContainer>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} type={type} handleDeleteCard={handleDeleteCard} />;
      })}
    </PostListContainer>
  );
};

export default PostList;
