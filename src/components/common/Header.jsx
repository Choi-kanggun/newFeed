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
              <li>
                <DropdownButton to="">내 리플레이</DropdownButton>
              </li>
              <li>
                <DropdownButton to="">설정</DropdownButton>
              </li>
              <li>
                <DropdownButton to="">로그아웃</DropdownButton>
              </li>
            </Dropdown>
          )}
        </ProfileMenuBox>
      </NavActionsBox>
    </HeaderContainer>
  );
};

export default Header;
