import React, { useEffect, useRef, useState } from 'react';
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
  ContentBox,
  Form,
  Player,
  ProfileImg,
  SubmitBtn,
  TextArea,
  VideoBox,
  Wrapper,
  Writer
} from '../../styles/detail';
import { supabase } from '../../supabase/supabaseClient';
import { useParams } from 'react-router-dom';
import Header from '../common/Header';

const PostDetail = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [updateCommentId, setUpdateCommentId] = useState(null);
  const [importComment, setImportComment] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 게시글 가져오기
    const getPost = async () => {
      try {
        let { data, error } = await supabase.from('posts').select('*').eq('id', id);
        console.log('postdata', data);
        if (error) {
          console.log('게시글 불러오기 오류:', error);
          throw error;
        }
        setData(data[0]);
      } catch (error) {
        console.error('오류:', error);
      }
    };

    const getUserData = async () => {
      try {
        const {
          data: { user },
          error
        } = await supabase.auth.getUser();

        if (error) throw error;
        if (!user) return;

        setUser(user);
      } catch (error) {
        console.error(error);
      }
    };

    getPost();
    getUserData();
    fetchComments();
  }, [id]);

  // 댓글 추가
  const addComment = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([{ post_id: id, user_id: user.id, comment: newComment }]);

      if (error) throw error;

      setNewComment('');
      fetchComments();
    } catch (error) {
      console.error('댓글 추가 오류:', error);
    }
  };

  // 댓글 추가시 화면에 반영
  const fetchComments = async () => {
    try {
      let { data, error } = await supabase
        .from('comments')
        .select('id, comment, created_at, user_id, users(nickname, profile_url)')
        .eq('post_id', id);
      if (error) throw error;

      setComments(data);
      return data;
    } catch (error) {
      console.error('댓글 패치 오류:', error);
    }
  };

  // 댓글 수정
  const updateComment = async (commentId, comment) => {
    try {
      const { data, error } = await supabase.from('comments').update({ comment }).eq('id', commentId).select();
      if (error) throw error;

      return data;
    } catch (error) {
      console.error('댓글 수정 오류:', error);
    }
  };

  // 댓글 삭제
  const deleteComment = async (commentId) => {
    try {
      const { data, error } = await supabase.from('comments').delete().eq('id', commentId);
      if (error) throw error;

      fetchComments();
    } catch (error) {
      console.error('댓글 삭제 오류 :', error);
    }
  };

  // 댓글 등록 처리
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert('로그인 해주세요!');
      return;
    }

    await addComment(newComment);
    setNewComment('');
    await fetchComments();
  };

  // 댓글 수정 처리
  const handleCommentEdit = async (commentId) => {
    if (importComment.trim()) {
      console.log(importComment);
      await updateComment(commentId, importComment);
      setUpdateCommentId(null);
      setImportComment('');
      const updatedComments = await fetchComments(id);
      setComments(updatedComments);
    }
  };

  // 댓글 삭제 처리
  const handleCommentDelete = async (commentId) => {
    await deleteComment(commentId);
    const updatedComments = await fetchComments(id);
    setComments(updatedComments);
  };

  return (
    <Wrapper>
      <Container>
        <ContainerLeft>
          <VideoBox>
            <Player
              url="https://www.youtube.com/watch?v=gdjR2lvIfJ4&ab_channel=AtlanticRecords"
              width={'100%'}
              height={'100%'}
              controls={true}
            />
          </VideoBox>
          <ContentBox></ContentBox>
        </ContainerLeft>

        <ContainerRight>
          <CommentBox>
            <CommentListBox>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment.post_id}>
                    {updateCommentId === comment.post_id ? (
                      <CommentInfoBox>
                        <ProfileImg src="https://news-feed-eight-smoky.vercel.app/assets/logo-CDFT3Blf.png" />
                        <CommentInfo>
                          <TextArea value={importComment} onChange={(e) => setImportComment(e.target.value)} />
                          <button onClick={() => handleCommentEdit(comment.id)}>수정 완료</button>
                        </CommentInfo>
                      </CommentInfoBox>
                    ) : (
                      <CommentInfoBox>
                        <ProfileImg src="https://news-feed-eight-smoky.vercel.app/assets/logo-CDFT3Blf.png" />
                        <CommentInfo>
                          <Writer>최강건</Writer>
                          <Comment>너무 좋아요~~~너무 좋아요~~~너무 좋아요~~좋아요~~~</Comment>
                        </CommentInfo>
                        <button>수정</button>
                        <button>삭제</button>
                      </CommentInfoBox>
                    )}
                  </div>
                ))
              ) : (
                <p>댓글이 없습니다.</p>
              )}
            </CommentListBox>
            <CommentInputBox>
              <Form onSubmit={handleCommentSubmit}>
                <CommentInput>
                  <TextArea
                    placeholder="댓글을 입력해주세요."
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={2}
                  />
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
