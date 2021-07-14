import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from './App';

const Router = () => (
  <>
    <Route path="/" component={MainPage} exact />
  </>
);

export default Router;
