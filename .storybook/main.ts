import { StorybookConfig } from '@storybook/core-common/types';
import merge from 'webpack-merge';

import webpackConfigGen from '../webpack.config';

const webpackConfig = webpackConfigGen({ NODE_ENV: 'storybook' });

const storybookConfig: StorybookConfig = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  core: {
    builder: 'webpack5',
  },
  logLevel:     'error',
  webpackFinal: config => {
    const newConfig = merge(webpackConfig, config);
    newConfig.module!.rules = webpackConfig.module!.rules;

    return newConfig;
  },
};

export default storybookConfig;
