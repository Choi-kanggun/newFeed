import React from 'react';
import { Button, ButtonContainer, Container, Input, InputWrapper, Label, StyledForm } from '../styles/login';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/signup')
  }

  return (
  <Container>
    <StyledForm>
      <InputWrapper>
        <Label>아이디</Label>
        <Input type='text' placeholder='아이디를 입력해주세요'/>
      </InputWrapper>
      <InputWrapper>
        <Label>비밀번호</Label>
        <Input type='password' placeholder='비밀번호를 입력해주세요'/>
      </InputWrapper>
      <ButtonContainer>
        <Button type="submit" onClick={handleButton}>회원가입</Button>
        <Button type="button" >로그인</Button>
      </ButtonContainer>
    </StyledForm>
  </Container>
  )
};

export default Login;
