import React, { useEffect, useState } from 'react';
import { Btn, Div, Div2, Form, Label } from '../../styles/post';
import { supabase } from '../../supabase/supabaseClient';
import { useNavigate, useParams } from 'react-router-dom';
import { Input } from '../../styles/login';

const Correction = () => {
  const [song_url, setSong_Url] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await supabase.from('posts').select('*').eq('id', id);

      setSong_Url(data[0].song_url);
      setContent(data[0].content);
      setTitle(data[0].title);
    };
    fetchData();
  }, []);

  const handelSaveEdit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('posts').update({ song_url, content, title }).eq('id', id);
    navigate('/mypost');
  };

  const handelSongUrlChange = (e) => {
    setSong_Url(e.target.value);
  };
  const handelTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handelContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Div>
        <Form>
          <Div2>
            <Label>영상링크</Label>
            <Input value={song_url} onChange={handelSongUrlChange} />
          </Div2>
          <Div2>
            <Label>제목</Label>
            <Input value={title} onChange={handelTitleChange} />
          </Div2>
          <Div2>
            <Label>추천 이유</Label>
            <Input value={content} onChange={handelContentChange} />
          </Div2>
          <Div2>
            <Label>태그</Label>
            <Input />
          </Div2>
          <Btn onClick={handelSaveEdit}>수정하기</Btn>
        </Form>
      </Div>
    </>
  );
};

export default Correction;
