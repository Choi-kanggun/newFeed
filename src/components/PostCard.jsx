import React from 'react';
import { PostCardContainer, PostCardHeader, ProfileImage, Tag, Thumbnail, Title } from '../styles/PostCard';

const PostCard = ({ post }) => {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <ProfileImage src={post.profileImage} alt={post.nickname} />
        <span>{post.nickname}</span>
      </PostCardHeader>
      <Title>
        <p>{post.title}</p>
      </Title>
      <Thumbnail src={post.thumbnail} alt={post.title} />
      <div>
        {post.tags.map((tag, index) => {
          return <Tag key={index}>{tag}</Tag>;
        })}
      </div>
    </PostCardContainer>
  );
};

export default PostCard;
