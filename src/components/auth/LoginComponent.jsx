import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonContainer, Container, Input, InputWrapper, Label, StyledForm } from '../../styles/login';
import { signIn } from '../../api/auth';
import { HeaderContainer, Logo } from '../../styles/header';


const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  return (
    <>
    <HeaderContainer>
    <Logo style={{margin:'0 auto'}}>Replay</Logo>
    </HeaderContainer>
    <Container>
      <StyledForm>
        <InputWrapper>
          <Label>아이디</Label>
          <Input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <ButtonContainer>
          <Link to="/signup">
            <Button type="button">회원가입</Button>
          </Link>
          <Button type="button" onClick={() => signIn({ email, password })}>
            로그인
          </Button>
        </ButtonContainer>
      </StyledForm>
    </Container>
    </>
  );
};

export default LoginComponent;
