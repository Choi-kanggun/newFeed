import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MyPost from '../pages/MyPost';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mypost" element={<MyPost />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
