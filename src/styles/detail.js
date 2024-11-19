import ReactPlayer from 'react-player';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #3676e8;
`;

export const Container = styled.div`
  border-radius: 10px;
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: row;
  background-color: white;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #dcdcdc;
  width: 70%;
  height: 100%;
`;

export const VideoBox = styled.div`
  width: 80%;
  height: 50%;
  border: 1px none black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Player = styled(ReactPlayer)``;

export const ContentBox = styled.div`
  padding: 15px;
  margin-top: 20px;
  width: 75%;
  height: 30%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 10px rgba(50, 118, 232, 0.3);
  border-radius: 10px;
`;

export const MusicInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Singer = styled.p`
  font-size: 1.5rem;
  padding-bottom: 20px;
  font-weight: bold;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  padding-bottom: 20px;
`;

export const Content = styled.p``;

export const ContainerRight = styled.div`
  padding-left: 10px;
  width: 50%;
  height: 100%;
`;

export const CommentBox = styled.div`
  height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommentListBox = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 78%;
`;

export const CommentList = styled.div``;

export const CommentInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 30px 30px 30px;
`;

export const CommentInfo = styled.div`
  padding-right: 50px;
`;

export const ProfileImg = styled.img`
  width: 50px;
  padding-right: 15px;
`;

export const Writer = styled.span`
  color: #3676e8;
  line-height: 2;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Comment = styled.p`
  word-break: break-all;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CommentInputBox = styled.div`
  width: 100%;
`;

export const CommentInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-right: 40px;
  margin-top: 10px;
`;

export const TextArea = styled.textarea`
  padding: 10px 10px;
  width: 70%;
  box-shadow: 0 1px 10px rgba(50, 118, 232, 0.3);
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 1.2rem;
`;

export const SubmitBtn = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #3676e8;
  width: 15%;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #2b5db8;
  }
`;
