import React from 'react';
<<<<<<< HEAD
import LoginComponent from '../components/auth/LoginComponent';

const Login = () => {
  return <LoginComponent />;
=======
import { Button, ButtonContainer, Container, Input, InputWrapper, Label, StyledForm } from '../styles/login';

const Login = () => {

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
>>>>>>> 47ca81ef5b419d75e35e3e374358dd87fd478808
};
export default Login;
