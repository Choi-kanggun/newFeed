import React from 'react';
import { StyledForm, Container, Label, InputWrapper, Input, Button } from '../styles/signup';

const SignUp = () => {
  return (
  <Container>
    <StyledForm>
      <InputWrapper>
        <Label>아이디</Label>
        <Input type='text' placeholder='아이디를 입력하세요'/>
      </InputWrapper>
      <InputWrapper>
        <Label>비밀번호</Label>
        <Input type='password' placeholder='비밀번호를 입력하세요'/>
      </InputWrapper>
      <InputWrapper>
        <Label>비밀번호 확인</Label>
        <Input type='password' placeholder='비밀번호를 확인하세요'/>
      </InputWrapper>
      <InputWrapper>
        <Label>닉네임</Label>
        <Input type='text' placeholder='닉네임을 입력하세요'/>
      </InputWrapper>
      <Button>회원가입</Button>
    </StyledForm>
  </Container>
  )
};

export default SignUp;
