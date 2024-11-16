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
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 100%;
`;

export const ProfileBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
`;

export const ProfileImgBox = styled.div`
  width: 50%;
  height: 100%;
  margin-bottom: 50px;
`;

export const ProfileImg = styled.div`
  margin-top: 20px;
  width: 80%;
  height: 80%;
  box-shadow: 0 1px 10px rgba(50, 118, 232, 0.3);
  border-radius: 10px;
  background-image: url(${(props) => props.$img});
  background-size: cover;
  overflow: hidden;
`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #3676e8;
  padding: 10px 15px;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #2b5db8;
  }
`;

export const BtnBox = styled.div`
  width: 86%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DeleteImgBtn = styled(Button)`
  margin-right: 20px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const SelectImg = styled.label`
  display: block;
  border-radius: 5px;
  border: none;
  line-height: 28px;
  padding: 10px 15px;
  font-size: 1.2rem;
  color: white;
  background-color: #3676e8;
  cursor: pointer;
  text-align: center;
  &:hover {
    transform: scale(1.1);
    background-color: #2b5db8;
  }
`;

export const SelectBtnBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SubmitBtnBox = styled.div``;

export const SubmitBtn = styled(Button)`
  width: 70px;
`;

export const NickNameBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  width: 30%;
  height: 50%;
`;

export const User = styled.span``;
export const UserNickName = styled.p`
  margin: 15px 0;
`;
export const NewNickInput = styled.input`
  margin: 15px 0;
  border: none;
  padding: 10px;
  width: 90%;
  box-shadow: 0 1px 10px rgba(50, 118, 232, 0.3);
`;
