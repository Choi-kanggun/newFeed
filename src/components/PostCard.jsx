import React from 'react';
import {
  ButtonBox,
  DeleteButton,
  EditButton,
  PostCardContainer,
  PostCardHeader,
  ProfileImage,
  Tag,
  Thumbnail,
  Title
} from '../styles/postCard';

const PostCard = ({ post, type }) => {
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
      {type === 'mypost' && (
        <ButtonBox>
          <EditButton to="">수정</EditButton>
          <DeleteButton>삭제</DeleteButton>
        </ButtonBox>
      )}
    </PostCardContainer>
  );
};

export default PostCard;
