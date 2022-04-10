import { RouteObject } from 'react-router-dom';

import { HelloWorld } from 'components/HelloWorld';

export const routes: RouteObject[] = [
  {
    path:     '/',
    children: [
      {
        index:   true,
        element: <HelloWorld />,
      },
    ],
  },
];
