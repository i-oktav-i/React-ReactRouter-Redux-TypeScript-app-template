import { DecoratorFn } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from 'store';

import 'styles/base.css';

export const parameters = {
  actions:  { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date:  /Date$/,
    },
  },
};

export const decorators: DecoratorFn[] = [
  Story => (<Provider store={store}><Router><Story /></Router></Provider>),
];
