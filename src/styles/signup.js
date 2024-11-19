import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
  background: #F8F9FA;
`;

export const StyledForm = styled.form`
  background: #FFFFFF;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  outline: none;

  &:focus {
    border-color: #3676E8;
    box-shadow: 0 0 3px rgba(76, 175, 80, 0.2);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  background-color: #3676E8;
  border: none;
  border-radius: 20px;
  width: 150px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3272dc;
  }
`;