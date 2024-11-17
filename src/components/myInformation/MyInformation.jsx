import React, { useState } from 'react';
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
  User,
  UserNickName,
  Wrapper
} from '../../styles/myInformation';

const MyInformation = () => {
  //const [profileImgFile, setProfileImgFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleImageChange = (event) => {
    console.log('event.target:', event.target);
    console.log('handleImageChange-Files:', event.target.files);
    const fileObj = event.target.files[0];
    //setProfileImgFile(fileObj);
    const objectUrl = URL.createObjectURL(fileObj);
    setPreviewUrl(objectUrl);
  };
  return (
    <Wrapper>
      <Container>
        <Form>
          <ProfileBox>
            <ProfileImgBox>
              {previewUrl ? (
                <ProfileImg $img={previewUrl}></ProfileImg>
              ) : (
                <ProfileImg>
                  <p>이미지 없음</p>
                </ProfileImg>
              )}
            </ProfileImgBox>
            <NickNameBox>
              <User>현재 닉네임</User>
              <UserNickName>최강건</UserNickName>
              <NewNickInput type="text" placeholder="새로운 닉네임을 입력해주세요." />
            </NickNameBox>
          </ProfileBox>

          <BtnBox>
            <SelectBtnBox>
              <DeleteImgBtn>이미지 제거</DeleteImgBtn>
              <FileInput type="file" id="postImage" accept="image/*" onChange={handleImageChange} />
              <SelectImg htmlFor="postImage">파일 선택</SelectImg>
            </SelectBtnBox>

            <SubmitBtnBox>
              <SubmitBtn>완료</SubmitBtn>
            </SubmitBtnBox>
          </BtnBox>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default MyInformation;
