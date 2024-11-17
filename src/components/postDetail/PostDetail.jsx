import React, { useState } from 'react';
import {
  Comment,
  CommentBox,
  CommentInfo,
  CommentInfoBox,
  CommentInput,
  CommentInputBox,
  CommentListBox,
  Container,
  ContainerLeft,
  ContainerRight,
  Content,
  ContentBox,
  Form,
  MusicInfoBox,
  Player,
  ProfileImg,
  Singer,
  SubmitBtn,
  TextArea,
  Title,
  VideoBox,
  Wrapper,
  Writer
} from '../../styles/detail';

const PostDetail = () => {
  const [url, setUrl] = useState('');
  return (
    <Wrapper>
      <Container>
        <ContainerLeft>
          <VideoBox>
            <Player
              url="https://www.youtube.com/watch?v=QxlcV3h2NPs&ab_channel=Younha-Topic"
              width={'100%'}
              height={'100%'}
              controls={true}
            />
          </VideoBox>
          <ContentBox>
            <MusicInfoBox>
              <Singer>윤하</Singer>
              <Title>소나기</Title>
            </MusicInfoBox>
            <Content>윤하의 소나기입니다.</Content>
          </ContentBox>
        </ContainerLeft>

        <ContainerRight>
          <CommentBox>
            <CommentListBox>
              <CommentInfoBox>
                <ProfileImg src="https://news-feed-eight-smoky.vercel.app/assets/logo-CDFT3Blf.png" />
                <CommentInfo>
                  <Writer>최강건</Writer>
                  <Comment>너무 좋아요~~~너무 좋아요~~~너무 좋아요~~좋아요~~~</Comment>
                </CommentInfo>
              </CommentInfoBox>
              <CommentInfoBox>
                <ProfileImg src="https://news-feed-eight-smoky.vercel.app/assets/logo-CDFT3Blf.png" />
                <CommentInfo>
                  <Writer>우지영</Writer>
                  <Comment>너무 좋아요~~~너무 좋아요~~~너무 좋아요~~좋아요~~~</Comment>
                </CommentInfo>
              </CommentInfoBox>
              <CommentInfoBox>
                <ProfileImg src="https://news-feed-eight-smoky.vercel.app/assets/logo-CDFT3Blf.png" />
                <CommentInfo>
                  <Writer>한다영</Writer>
                  <Comment>너무 좋아요~~~너무 좋아요~~~너무 좋아요~~좋아요~~~</Comment>
                </CommentInfo>
              </CommentInfoBox>
              <CommentInfoBox>
                <ProfileImg src="https://news-feed-eight-smoky.vercel.app/assets/logo-CDFT3Blf.png" />
                <CommentInfo>
                  <Writer>주호빈</Writer>
                  <Comment>너무 좋아요~~~너무 좋아요~~~너무 좋아요~~좋아요~~~</Comment>
                </CommentInfo>
              </CommentInfoBox>
              <CommentInfoBox>
                <ProfileImg src="https://news-feed-eight-smoky.vercel.app/assets/logo-CDFT3Blf.png" />
                <CommentInfo>
                  <Writer>철수</Writer>
                  <Comment>너무 좋아요~~~sadsadsasadsadsadaddsadsad너무 좋아요~~~너무 좋아요~~좋아요~~~</Comment>
                </CommentInfo>
              </CommentInfoBox>
              <CommentInfoBox>
                <ProfileImg src="https://news-feed-eight-smoky.vercel.app/assets/logo-CDFT3Blf.png" />
                <CommentInfo>
                  <Writer>영희</Writer>
                  <Comment>너무 좋아요~~~너무 좋아요~~~너무 좋아요~~좋아요~~~</Comment>
                </CommentInfo>
              </CommentInfoBox>
              <CommentInfoBox>
                <ProfileImg src="https://news-feed-eight-smoky.vercel.app/assets/logo-CDFT3Blf.png" />
                <CommentInfo>
                  <Writer>둘리</Writer>
                  <Comment>너무 좋아요~~~너무 좋아요~~~너무 좋아요~~좋아요~~~</Comment>
                </CommentInfo>
              </CommentInfoBox>
            </CommentListBox>

            <CommentInputBox>
              <Form>
                <CommentInput>
                  <TextArea placeholder="댓글을 입력해주세요." rows={2} />
                  <SubmitBtn type="submit">등록</SubmitBtn>
                </CommentInput>
              </Form>
            </CommentInputBox>
          </CommentBox>
        </ContainerRight>
      </Container>
    </Wrapper>
  );
};

export default PostDetail;
