import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
`;

export const Container = styled.div`
  border-radius: 10px;
  width: 50%;
  height: 70%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const ContainerRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ProfileImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  box-shadow: 1px 1px 7px rgba(1, 1, 1, 0.3);
  border-radius: 50%;
  object-fit: cover;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid black;
  background-color: white;
  padding: 10px 15px;
  font-size: 1.2rem;
  color: black;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    color: white;
    background-color: black;
    font-weight: bold;
  }
`;

export const SelectBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
`;

export const FileInput = styled.input`
  display: none;
`;

export const ImgBtnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  gap: 10px;
`;

export const DeleteImgBtn = styled(Button)`
  width: 150px;
  text-align: center;
`;

export const SelectImg = styled.label`
  width: 100px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  transition: all 0.3s;
  font-size: 1.2rem;
  &:hover {
    background-color: black;
    color: white;
    font-weight: bold;
  }
`;

export const NickNameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CurrentNickName = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const UserNickName = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const NewNickInput = styled.input`
  font-size: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

export const SubmitBtnBox = styled.div`
  width: 68%;
  display: flex;
  justify-content: flex-end;
`;

export const SubmitBtn = styled(Button)`
  width: 80px;
  font-size: 20px;
  padding: 10px;
`;
