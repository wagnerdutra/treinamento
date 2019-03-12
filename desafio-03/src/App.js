import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import Routes from './pages/Map';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Routes />
  </Fragment>
);

export default App;
