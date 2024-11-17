import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import MyPost from '../pages/MyPost';
import CreatePostPage from '../pages/CreatePostPage';
import CorrectionPage from '../pages/CorrectionPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/mypost" element={<MyPost />}></Route>
        <Route path="/CreatePost" element={<CreatePostPage />}></Route>
        <Route path="/Correction" element={<CorrectionPage />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
