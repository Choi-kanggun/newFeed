import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, ButtonContainer, Container, Input, InputWrapper, Label, StyledForm } from '../../styles/login';
import supabase from '../../supabase/supabaseClient';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGitHubLogin = async () => {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    });

    if (error) {
      console.error('GitHub login error:', error.message);
      alert('로그인 실패: ' + error.message);
    } else {
      console.log('Logged in as:', user);
      navigate('/home');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { user, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert('로그인 실패: ' + error.message);
    } else {
      alert('로그인 성공!');
      navigate('/');
    }
  };

  return (
    <Container>
      <StyledForm onSubmit={handleLogin}>
        <InputWrapper>
          <Label>아이디</Label>
          <Input
            type="email"
            placeholder="아이디를 입력해주세요"
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
          <Link to='/signup'>
          <Button type="button">회원가입</Button>
          </Link>
          <Button type="submit">로그인</Button>
          <div>
            <button onClick={handleGitHubLogin}>GitHub로 로그인</button>
          </div>
        </ButtonContainer>
      </StyledForm>
    </Container>
  );
};

export default LoginComponent;