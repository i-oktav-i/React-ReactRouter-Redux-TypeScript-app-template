import { FC } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { routes } from 'routes';
import store from 'store';

export const App: FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        {routes.map(route => {
          if (route.redirect) {
            return <Redirect {...route} from={route.path} to={route.redirect} key={route.name} />;
          }

          return <Route {...route} key={route.name} />;
        })}
      </Switch>
    </Router>
  </Provider>
);
