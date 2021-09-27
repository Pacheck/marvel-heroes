import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import DetailsPage from '../pages/details';

const routes = [
  {
    component: HomePage,
    configs: {
      key: 1,
      path: '/',
      exact: true,
    },
  },
  {
    component: DetailsPage,
    configs: {
      key: 2,
      path: '/details/:id',
    },
  },
];

const Routes = () => (
  <Switch>
    {routes.map((route) => (
      <Route {...route.configs} component={route.component} />
    ))}
  </Switch>
);

export default Routes;
