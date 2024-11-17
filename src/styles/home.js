import styled from 'styled-components';

export const Div = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const Div2 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  input {
    outline: none;
    border: none;
    border-radius: 10px;
    width: 403px;
    height: 50px;
  }
  label {
    font-size: 30px;
  }
`;

export const Form = styled.form`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d9d9d9;
  width: 555px;
  height: 774px;
  justify-content: space-evenly;
  border-radius: 10px;
`;

export const Btn = styled.button`
  background-color: #3676e8;
  color: white;
  border: none;
  padding: 10px 70px;
  border-radius: 5px;
  font-size: 20px;
`;
