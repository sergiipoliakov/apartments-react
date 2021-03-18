import React, { Component } from 'react';

import Layout from './Layout';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Shows from '../views/Shows';
import ShowDetails from '../views/ShowDetails';
import Blog from '../views/Blog';
import Profile from '../views/Profile';
import Patterns from '../views/Patterns';
import routes from '../routes';
import AuthContext from '../contexts/Auth';
import Clock from './Clock';
import Counter from './Counter';
import News from './News';
import Todos from './Todos';
import SignupForm from './SignupForm';
export default class App extends Component {
  render() {
    return (
      <AuthContext>
        <Layout>
          <Switch>
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.shows} exact component={Shows} />
            <Route path={routes.showDetails} component={ShowDetails} />
            <Route path={routes.signup} component={SignupForm} />

            <Route path={routes.blog} component={Blog} />
            <Route path={routes.counter} component={Counter} />
            <Route path={routes.clock} component={Clock} />
            <Route path={routes.news} component={News} />
            <Route path={routes.todos} component={Todos} />

            <Route path={routes.profile} component={Profile} />

            <Route path={routes.patterns} component={Patterns} />

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </AuthContext>
    );
  }
}
