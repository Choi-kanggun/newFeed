import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 56px);
  background: #f8f9fa;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

  &:focus {
    border-color: #3676e8;
    box-shadow: 0 0 3px rgba(76, 175, 80, 0.2);
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.3rem 0.8rem;
  background-color: white;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 10px;
  width: 120px;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
  }
`;
