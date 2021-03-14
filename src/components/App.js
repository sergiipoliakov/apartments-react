import React, { Component, lazy, Suspense } from 'react';

import Layout from './Layout';
import { Switch, Route } from 'react-router-dom';

import NotFound from '../views/NotFound';
import Shows from '../views/Shows';
import ShowDetails from '../views/ShowDetails';
import Blog from '../views/Blog';
import Profile from '../views/Profile';
import Patterns from '../views/Patterns';
// import Counter from './Counter';
import routes from '../routes';
import AuthContext from '../contexts/Auth';
import { authOperations } from '../redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Home = lazy(() => import('../views/Home'));
const LoginView = lazy(() => import('../views/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const TodosViews = lazy(() => import('../views/TodosViews'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <AuthContext>
        <Layout>
          <Suspense fallback={<p>Загружаю...</p>}>
            <Switch>
              <PublicRoute path={routes.home} exact component={Home} />
              <Route path={routes.shows} exact component={Shows} />
              <Route path={routes.showDetails} component={ShowDetails} />
              <Route path={routes.blog} component={Blog} />

              <Route path={routes.profile} component={Profile} />
              <PublicRoute
                path={routes.login}
                component={LoginView}
                redirectTo={routes.todos}
                restricted
              />
              <PublicRoute
                path={routes.register}
                component={RegisterView}
                redirectTo={routes.todos}
                restricted
              />

              <Route path={routes.patterns} component={Patterns} />
              {/* <Route path={routes.counter} component={Counter} /> */}
              <PrivateRoute
                path={routes.todos}
                component={TodosViews}
                redirectTo={routes.login}
              />

              <Route component={NotFound} />
            </Switch>
          </Suspense>
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
