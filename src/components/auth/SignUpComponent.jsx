import React, { useRef } from 'react';
import { StyledForm, Container, Label, InputWrapper, Input, Button } from '../../styles/signup';
import { useNavigate } from 'react-router-dom';
import supabase from '../../supabase/supabaseClient';

const SignUpComponent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nicknameRef = useRef();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const { data, error } = await supabase.auth.signUp(
      {
        email: emailRef.current.value,
        password: passwordRef.current.value
      },
      {
        data: { nickname: nicknameRef.current.value }
      }
    );

    const userData = await supabase.from('users').insert({
      id: data.user?.id, // 회원가입 성공 시 받아온 data중 id(uid) 값을 가져온다.
      email: data.user?.email,
      created_at: data.user?.created_at,
      nickname: nicknameRef.current.value
    });

    if (error) {
      alert('회원가입 실패: ' + error.message);
      return;
    }

    alert('회원가입 성공!');
    navigate('/login');
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSignup}>
        <InputWrapper>
          <Label>아이디</Label>
          <Input type="email" placeholder="아이디를 입력하세요" ref={emailRef} />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Input type="password" placeholder="비밀번호를 입력하세요" ref={passwordRef} />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호 확인</Label>
          <Input type="password" placeholder="비밀번호를 확인하세요" ref={confirmPasswordRef} />
        </InputWrapper>
        <InputWrapper>
          <Label>닉네임</Label>
          <Input type="text" placeholder="닉네임을 입력하세요" ref={nicknameRef} />
        </InputWrapper>
        <Button type="submit">회원가입</Button>
      </StyledForm>
    </Container>
  );
};

export default SignUpComponent;
