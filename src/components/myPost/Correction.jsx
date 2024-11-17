import React from 'react';
import { Btn, Div, Div2, Form } from '../../styles/post';

const Correction = () => {
  return (
    <Div>
      <Form>
        <Div2>
          <label>영상링크</label>
          <input />
        </Div2>
        <Div2>
          <label>제목</label>
          <input />
        </Div2>
        <Div2>
          <label>추천 이유</label>
          <input />
        </Div2>
        <Div2>
          <label>태그</label>
          <input />
        </Div2>
        <Btn>수정</Btn>
      </Form>
    </Div>
  );
};

export default Correction;
