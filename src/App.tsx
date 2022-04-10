import { VFC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import { routes } from 'routes';
import { store } from 'store';

const Page: VFC = () => useRoutes(routes);

export const App: VFC = () => (
  <Provider store={store}>
    <Router>
      <Page />
    </Router>
  </Provider>
);
