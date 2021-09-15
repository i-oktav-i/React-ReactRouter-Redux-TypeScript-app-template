import { HelloWorld } from 'components/HelloWorld';
import { AppRoute } from 'typings/AppRoute';

export const routes: AppRoute[] = [
  {
    name:      'Hello',
    path:      '/',
    exact:     true,
    component: HelloWorld,
  },
];
