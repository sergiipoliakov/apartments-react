import Layout from './Layout';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Shows from '../views/Shows';
import ShowDetails from '../views/ShowDetails';
import routes from '../routes';

const App = () => (
  <Layout>
    <Switch>
      <Route path={routes.home} exact component={Home} />
      <Route path={routes.shows} exact component={Shows} />
      <Route path={routes.showDetails} component={ShowDetails} />

      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
