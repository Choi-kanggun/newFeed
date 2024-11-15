import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Form 스타일
export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F8F9FA;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  display: flex;
  flex-direction: column; // form 내부 항목들을 세로로 배치
  gap: 15px; // 항목들 간의 간격
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 5px;                // label과 input 간의 간격 설정
`;


export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;  // label과 input 간의 간격을 설정
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  width: 450px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;  // 버튼을 균등하게 배치
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #3676E8;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  width: 150px; 
  cursor: pointer;

  &:hover {
    background-color: #2E6BCC;
  }
`;