import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Provider } from 'react-redux';

import store from 'store';

import { HelloWorld } from '.';

export default {
  title:     'Hello',
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

const Template: ComponentStory<typeof HelloWorld> = () => (
  <Provider store={store}>
    <HelloWorld />
  </Provider>
);

export const Primary = Template.bind({});
