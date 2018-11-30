import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { PAGES } from './pages';
import HomePage from '../components/home-page/home-page';
import LoginPage from '../components/info-page/login';
import Page404 from '../components/app/add';
import Profile from '../components/user-info/user-info'


export default (filter, setFilter) => (
  <Switch>
    <Route
      exact path={ PAGES.home.path }
      render={ props => <HomePage {...{...props, filter, setFilter}}/> }
    />
    <Route
      exact path={ PAGES.login.path }
      render={ props => <LoginPage {...{...props, filter, setFilter}}/> }
    />
    <Route
      exact path={ PAGES.page404.path }
      render={ props => <Page404 {...{...props, filter, setFilter}}/> }
    />
    <Route
      exact path={ PAGES.profile.path }
      render={ props => <Profile {...{...props, filter, setFilter}}/> }
    />
    <Route
      path = '/'
      render={ () => (
        <Redirect to={ PAGES.page404.path } />
      ) }
    />

  </Switch>
);
