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

import { useNavigate } from 'react-router-dom';
import { logOut } from '../../api/auth';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

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
              <DropdownButton type="button" onClick={logOut}>
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
