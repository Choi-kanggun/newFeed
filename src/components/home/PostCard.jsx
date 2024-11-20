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
} from '../../styles/postCard';
import { getYoutubeThumbnailUrl } from '../../utils/youtubeThumbnail';
import { Link } from 'react-router-dom';

const PostCard = ({ post, type, handleDeleteCard }) => {
  const thumbnailUrl = getYoutubeThumbnailUrl(post.song_url);

  return (
    <PostCardContainer>
      <Link to={`/detail/${post.id}`}>
        <PostCardHeader>
          <ProfileImage src={post.users.profile_img_url} alt={post.users.nickname} />
          <span>{post.users.nickname}</span>
        </PostCardHeader>
        <Title>
          <p>{post.title}</p>
        </Title>
        <Thumbnail src={thumbnailUrl} alt={post.title} />
      </Link>
      {/* <div>
        {post.tags.map((tag, index) => {
          return <Tag key={index}>{tag}</Tag>;
        })}
      </div> */}
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
