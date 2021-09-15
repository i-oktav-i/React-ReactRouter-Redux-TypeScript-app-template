import path from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import EslintWebpackPlugin from 'eslint-webpack-plugin';

// Should resolve problem with devServer,
// but 'Configuration' extension didn't work
import { Configuration as DevServer } from 'webpack-dev-server';

export default (env: Record<string, any>): Configuration & {
  devServer: DevServer | null
} => {
  const isProd = env.NODE_ENV === 'prod';

  return {
    mode:   isProd ? 'production' : 'development',
    entry:  './src/index.tsx',
    target: 'browserslist',
    output: {
      path:     path.resolve(__dirname, 'build'),
      filename: isProd
        ? 'static/[name].[contenthash:8].js'
        : 'static/[name].js',
      clean:         true,
      publicPath:    '/',
      chunkFilename: isProd
        ? 'static/[name].[contenthash:8].chunk.js'
        : 'static/[name].chunk.js',
    },
    devtool:   isProd ? false : 'source-map',
    devServer: {
      port:               3000,
      open:               true,
      hot:                !isProd,
      historyApiFallback: true,
      client:             {
        overlay: false,
      },
    },
    resolve: {
      extensions: ['.json', '.ts', '.tsx', '.js', '.jsx'],
      modules:    [
        path.resolve(__dirname, 'src'),
        'node_modules',
      ],
    },
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          use:  [
            {
              loader:  'babel-loader',
              options: { presets: ['@babel/preset-react'] },
            },
            'ts-loader',
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.css/,
          use:  [
            MiniCssExtractPlugin.loader,
            {
              loader:  'css-loader',
              options: { modules: true, importLoaders: 1 },
            },
            {
              loader:  'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    'postcss-import',
                    'postcss-mixins',
                    'postcss-nested',
                    'postcss-custom-media',
                  ],
                },
              },
            },
          ],
        },
        {
          test:  /\.(svg|png|jpg|gif)$/,
          oneOf: [
            {
              test:   /.svg$/,
              issuer: /\.tsx$/,
              use:    {
                loader:  '@svgr/webpack',
                options: {
                  svgo: true,
                  icon: true,
                },
              },
            },
            {
              use: {
                loader:  'url-loader',
                options: {
                  limit: 8192,
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProd
          ? 'static/[name].[contenthash:8].css'
          : 'static/[name].css',
      }),
      new HtmlWebpackPlugin({
        template:   'public/index.html',
        favicon:    'public/favicon.ico',
        minify:     isProd,
        publicPath: '/',
      }),
      new EslintWebpackPlugin({
        files: 'src/**/*{ts,tsx,js}',
      }),
      new StylelintPlugin(),
      new DefinePlugin({
        // Defines here
      }),
    ],
    optimization: {
      minimize:  isProd,
      minimizer: [
        '...',
        new CssMinimizerPlugin(),
      ],
    },
  };
};
