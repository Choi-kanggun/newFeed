import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
  background: #f8f9fa;
`;

export const StyledForm = styled.form`
  background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1px;
  width: 450px;
  outline: none;

  &:focus {
    border-color: #3676e8;
    box-shadow: 0 0 3px rgba(76, 175, 80, 0.2);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const Button = styled.button`
  padding: 0.3rem 0.8rem;
  font-size: 16px;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 120px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const Span = styled.span`
  color: red;
  font-size: 10px;
`;
