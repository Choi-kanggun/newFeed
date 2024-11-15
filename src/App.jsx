import React from 'react';
import Router from './shared/Router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}  
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />;
    </>
  );
};

export default App;
