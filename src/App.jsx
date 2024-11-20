import React from 'react';
import Router from './shared/Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Pretendard-Regular';
  }
  html, body {
  height: 100%;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
