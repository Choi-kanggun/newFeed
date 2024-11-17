import React, { useState } from 'react';
import { Btn, Div, Div2, Form } from '../../styles/post';

const CreatePost = () => {
  // const [linkValue, setLinkValue] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  // const [tagValue, setTagValue] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelReview = (e) => {
    setReview(e.target.value);
  };

  return (
    <Div>
      <Form>
        <Div2>
          <label>영상링크</label>
          <input src="" alt="" />
        </Div2>
        <Div2>
          <label>제목</label>
          <input type="text" value={title} onChange={handleTitle} />
        </Div2>
        <Div2>
          <label>추천 이유</label>
          <input type="text" value={review} onChange={handelReview} />
        </Div2>
        <Div2>
          <label>태그</label>
          <input type="text" />
        </Div2>
        <Btn>등록</Btn>
      </Form>
    </Div>
  );
};

export default CreatePost;
