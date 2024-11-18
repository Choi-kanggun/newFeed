import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, ButtonContainer, Container, Input, InputWrapper, Label, StyledForm } from '../../styles/login';
import supabase from '../../supabase/supabaseClient';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSession = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      setSession(sessionData);

      const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        setSession(session);
        if (event === 'SIGNED_IN') {
          navigate('/'); 
        }
      });

      return () => {
        authListener?.off();
      };
    };

    fetchSession();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { user, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert('로그인 실패: ' + error.message);
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
        </ButtonContainer>
      </StyledForm>
    </Container>
  );
};

export default LoginComponent;