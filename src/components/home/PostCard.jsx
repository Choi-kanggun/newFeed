import React from 'react';
import {
  BottomArea,
  ButtonBox,
  CreatedAt,
  DeleteButton,
  EditButton,
  PostCardContainer,
  PostCardHeader,
  ProfileImage,
  StLink,
  Thumbnail,
  Title
} from '../../styles/postCard';
import { getYoutubeThumbnailUrl } from '../../utils/youtubeThumbnail';
import { formatDate } from '../../utils/formattedDate';

const PostCard = ({ post, type, handleDeleteCard }) => {
  const thumbnailUrl = getYoutubeThumbnailUrl(post.song_url);
  const formattedDate = formatDate(post.created_at);

  return (
    <PostCardContainer>
      <StLink to={`/detail/${post.id}`}>
        <PostCardHeader>
          <ProfileImage src={post.users.profile_img_url} alt={post.users.nickname} />
          <span>{post.users.nickname}</span>
        </PostCardHeader>
        <Title>
          <p>{post.title}</p>
        </Title>
        <Thumbnail src={thumbnailUrl} alt={post.title} />
      </StLink>
      <BottomArea>
        <CreatedAt>{formattedDate}</CreatedAt>
      </BottomArea>
      {type === 'mypost' && (
        <ButtonBox>
          <EditButton to={`/Correction/${post.id}`}>수정</EditButton>
          <DeleteButton
            onClick={() => {
              handleDeleteCard(post.id);
            }}
          >
            삭제
          </DeleteButton>
        </ButtonBox>
      )}
    </PostCardContainer>
  );
};

export default PostCard;
