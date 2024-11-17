import React from 'react';
import { HomeContainer } from '../../styles/home';

import PostList from './PostList';

const HomeComponent = () => {
  const homePosts = [
    {
      id: 1,
      profileImage: 'https:',
      nickname: '유저 1',
      title: '제목 1',
      thumbnail: 'https:',
      tags: ['#어쩌구', '#저쩌구']
    },
    {
      id: 2,
      profileImage: 'https:',
      nickname: '유저 2',
      title: '제목 2',
      thumbnail: 'https:',
      tags: ['#어쩌구', '#저쩌구']
    },
    {
      id: 3,
      profileImage: 'https:',
      nickname: '유저 3',
      title: '제목 3',
      thumbnail: 'https:',
      tags: ['#어쩌구', '#저쩌구']
    },
    {
      id: 4,
      profileImage: 'https:',
      nickname: '유저 4',
      title: '제목 4',
      thumbnail: 'https:',
      tags: ['#어쩌구', '#저쩌구']
    },
    {
      id: 5,
      profileImage: 'https:',
      nickname: '유저 5',
      title: '제목 5',
      thumbnail: 'https:',
      tags: ['#어쩌구', '#저쩌구']
    },
    {
      id: 6,
      profileImage: 'https:',
      nickname: '유저 6',
      title: '제목 6',
      thumbnail: 'https:',
      tags: ['#어쩌구', '#저쩌구']
    },
    {
      id: 7,
      profileImage: 'https:',
      nickname: '유저 7',
      title: '제목 7',
      thumbnail: 'https:',
      tags: ['#어쩌구', '#저쩌구']
    }
  ];
  return (
    <HomeContainer>
      <PostList posts={homePosts} />
    </HomeContainer>
  );
};

export default HomeComponent;
