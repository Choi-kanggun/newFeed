import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 100px);
  align-items: center;
  background-color: #f8f9fa;
`;

export const Div2 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 20px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 0px;
`;

export const Btn = styled.button`
  margin-top: 10px;
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

export const Input = styled.input`
  border-radius: 10px;
  width: 403px;
  height: 50px;

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
