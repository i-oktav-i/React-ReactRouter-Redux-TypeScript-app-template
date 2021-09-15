import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { routes } from 'routes';

export const App: React.FC<{}> = () => (
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
);
