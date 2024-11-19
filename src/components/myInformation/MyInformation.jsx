import React, { useEffect, useRef, useState } from 'react';
import {
  BtnBox,
  Container,
  DeleteImgBtn,
  FileInput,
  Form,
  NewNickInput,
  NickNameBox,
  ProfileBox,
  ProfileImg,
  ProfileImgBox,
  SelectBtnBox,
  SelectImg,
  SubmitBtn,
  SubmitBtnBox,
  UserNickName,
  Wrapper
} from '../../styles/myInformation';
import { supabase } from '../../supabase/supabaseClient';
import Header from '../common/Header';

const DEFAULT_IMAGE_URL = 'https://ufvtkvcvhdpfbwmpvmnu.supabase.co/storage/v1/object/public/avatars/default.jpg';
const MyInformation = () => {
  const [profileImg, setProfileImg] = useState(null);
  const [newProfileImg, setNewProfileImg] = useState(null);
  const [nickname, setNickname] = useState('');
  const fileInputRef = useRef(null);
  const nickNameRef = useRef();
  const [user, setUser] = useState(null);

  //유저 데이터 불러오기
  useEffect(() => {
    const getUserData = async () => {
      try {
        const {
          data: { user },
          error
        } = await supabase.auth.getUser();

        if (error) throw error;
        if (!user) return;

        setUser(user);

        const { data, error: userError } = await supabase
          .from('users')
          .select('nickname, profile_url')
          .eq('id', user.id)
          .single();

        if (userError) throw userError;

        setNickname(data.nickname);
        setProfileImg(data.profile_url);

        if (nickNameRef.current) {
          nickNameRef.current.value = data.nickname;
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, []);

  // 유저 이미지, 닉네임 변경
  const updateUserInfo = async (id, newProfileImg, newNickname) => {
    const { data, error } = await supabase
      .from('users')
      .update({ profile_url: newProfileImg, nickname: newNickname })
      .eq('id', id);

    if (error) {
      console.error(error);
      return;
    }
  };

  // 이미지 선택
  const handleFileInputChange = async (files) => {
    const [file] = files;

    if (!file) {
      return;
    }

    const { data, error } = await supabase.storage.from('avatars').upload(`avatar_${Date.now()}.png`, file);

    if (error) {
      console.error(error);
      return;
    }

    if (data.path) {
      const newProfileImg = `https://ufvtkvcvhdpfbwmpvmnu.supabase.co/storage/v1/object/public/avatars/${data.path}`;
      setNewProfileImg(newProfileImg);
    }
  };

  // 이미지 삭제
  const handleDeleteImage = async () => {
    if (profileImg && profileImg !== DEFAULT_IMAGE_URL) {
      // 스토리지에서 기존 프로필 이미지 삭제
      // 파일명 추출
      const fileName = profileImg.split('/').pop();
      const { error: deleteError } = await supabase.storage.from('avatars').remove([fileName]);

      if (deleteError) {
        console.error(deleteError);
      }

      // 데이터베이스 업데이트
      if (user?.id) {
        const { error } = await supabase.from('users').update({ profile_url: DEFAULT_IMAGE_URL }).eq('id', user.id);

        if (error) {
          console.error(error);
        }

        setNewProfileImg(DEFAULT_IMAGE_URL);
        setProfileImg(DEFAULT_IMAGE_URL);
      }
    }
  };
  // 수정 완료
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNickname = nickNameRef.current.value || user.user_metadata.nickname;
    const newImg = newProfileImg || profileImg;

    if (user.id) {
      await updateUserInfo(user.id, newImg, newNickname);

      setNickname(newNickname);
      setProfileImg(newImg);
      setNewProfileImg(null);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmit}>
          <ProfileBox>
            <ProfileImgBox>
              <ProfileImg src={newProfileImg || profileImg || DEFAULT_IMAGE_URL} alt="profile"></ProfileImg>
            </ProfileImgBox>
            <NickNameBox>
              <UserNickName>{nickname}</UserNickName>
              <NewNickInput type="text" ref={nickNameRef} placeholder="새로운 닉네임을 입력해주세요." />
            </NickNameBox>
          </ProfileBox>

          <BtnBox>
            <SelectBtnBox>
              <DeleteImgBtn onClick={handleDeleteImage}>이미지 제거</DeleteImgBtn>
              <FileInput
                type="file"
                id="postImage"
                accept="image/*"
                ref={fileInputRef}
                onChange={(e) => handleFileInputChange(e.target.files)}
              />
              <SelectImg htmlFor="postImage">파일 선택</SelectImg>
            </SelectBtnBox>

            <SubmitBtnBox>
              <SubmitBtn type="submit">완료</SubmitBtn>
            </SubmitBtnBox>
          </BtnBox>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default MyInformation;
