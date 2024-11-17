import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import CreatePostPage from '../pages/CreatePostPage';
import CorrectionPage from '../pages/CorrectionPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/CreatePost" element={<CreatePostPage />}></Route>
        <Route path="/Correction" element={<CorrectionPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
