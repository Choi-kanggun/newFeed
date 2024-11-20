import React, { useState } from 'react';
import { PostListContainer, SearchIcon, SearchInput, SearchInputContainer } from '../../styles/postList';
import PostCard from './PostCard';
import { supabase } from '../../supabase/supabaseClient';
import searchIconImg from '../../assets/images/search.png';

const PostList = ({ posts, type, handleDeleteCard, setPosts }) => {
  //
  const [searchSong, setSearchSong] = useState('');
  const searchHandel = async (e) => {
    e.preventDefault();
    setSearchSong(e.target.value);
    const { data } = await supabase
      .from('posts')
      .select(
        `id, title, content, song_url, user_id,created_at, users (
      id, nickname, profile_img_url)`
      )
      .ilike('title', `%${e.target.value}%`);
    setPosts(data);
  };
  //
  return (
    <>
      <SearchInputContainer>
        <SearchInput value={searchSong} placeholder="노래를 검색하세요" onChange={searchHandel} />
        <SearchIcon src={searchIconImg} ale="돋보기 이미지" />
      </SearchInputContainer>
      <PostListContainer>
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} type={type} handleDeleteCard={handleDeleteCard} />;
        })}
      </PostListContainer>
    </>
  );
};

export default PostList;
