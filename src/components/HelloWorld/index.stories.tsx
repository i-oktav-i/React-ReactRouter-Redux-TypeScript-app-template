import { Meta } from '@storybook/react';
import { getStoryCreator } from 'storybook-react-utils';

import { HelloWorld } from '.';

const componentMeta: Meta = {
  component: HelloWorld,
  title:     'Components / HelloWorld',
};

export default componentMeta;

const getStory = getStoryCreator(HelloWorld);

export const Default = getStory({ storyName: 'HelloWorld' });
