import React, { useState } from 'react';
import {
  Dropdown,
  DropdownButton,
  HeaderContainer,
  HomeButton,
  Logo,
  NavActionsBox,
  NewPostButton,
  ProfileMenuBox
} from '../../styles/header';
import supabase from '../../supabase/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    const {error} = await supabase.auth.signOut();

    if (error) {
      alert("로그아웃 실패!" + error.message);
    } else {
      alert("로그아웃 성공!");
      navigate('/login')
    }
  }

  return (
    <HeaderContainer>
      <HomeButton to="/">Home</HomeButton>
      <Logo>Replay</Logo>
      <NavActionsBox>
        <NewPostButton>새 글 작성</NewPostButton>
        <ProfileMenuBox>
          <button onClick={toggleDropdown}>
            <img src="user-avatar.png" alt="user-profile" />
            <span>▼</span>
          </button>
          {isDropdownOpen && (
            <Dropdown>
              <DropdownButton to="/mypost">
                <li>내 리플레이</li>
              </DropdownButton>
              <DropdownButton to="">
                <li>설정</li>
              </DropdownButton>
              <DropdownButton type='button' onClick={handleLogout}>
                <li>로그아웃</li>
              </DropdownButton>
            </Dropdown>
          )}
        </ProfileMenuBox>
      </NavActionsBox>
    </HeaderContainer>
  );
};

export default Header;