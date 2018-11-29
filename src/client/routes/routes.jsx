import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { PAGES } from './pages';
import HomePage from '../components/home-page/home-page';
import LoginPage from '../components/info-page/login';
import Page404 from '../components/page404/page404';


export default (user, setUser) => (
  <Switch>
    <Route
      exact path={ PAGES.home.path }
      render={ props => <HomePage {...{...props, user, setUser}}/> }
    />
    <Route
      exact path={ PAGES.login.path }
      render={ props => <LoginPage {...{...props, user, setUser}}/> }
    />
    <Route
      exact path={ PAGES.page404.path }
      render={ props => <Page404 {...{...props, user, setUser}}/> }
    />
    <Route
      path = '/'
      render={ () => (
        <Redirect to={ PAGES.page404.path } />
      ) }
    />
  </Switch>
);
