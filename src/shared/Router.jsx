import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import MyPage from '../pages/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
