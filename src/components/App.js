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
// import Counter from './Counter';
import TodosViews from '../views/TodosViews';
import routes from '../routes';
import AuthContext from '../contexts/Auth';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import { authOperations } from '../redux/auth';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <AuthContext>
        <Layout>
          <Switch>
            <Route path={routes.home} exact component={Home} />
            <Route path={routes.shows} exact component={Shows} />
            <Route path={routes.showDetails} component={ShowDetails} />
            <Route path={routes.blog} component={Blog} />

            <Route path={routes.profile} component={Profile} />
            <Route path={routes.login} component={LoginView} />
            <Route path={routes.register} component={RegisterView} />

            <Route path={routes.patterns} component={Patterns} />
            {/* <Route path={routes.counter} component={Counter} /> */}
            <Route path={routes.todos} component={TodosViews} />

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </AuthContext>
    );
  }
}
// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
