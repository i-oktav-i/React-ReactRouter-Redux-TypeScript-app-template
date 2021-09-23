import path from 'path';

import { Configuration, DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import EslintWebpackPlugin from 'eslint-webpack-plugin';

// Should resolve problem with devServer,
// but 'Configuration' extension didn't work
// import 'webpack-dev-server';
import { Configuration as DevServer } from 'webpack-dev-server';

export default ({ NODE_ENV }: Record<string, any>): Configuration & {
  devServer: DevServer | undefined
} => {
  const isProd = NODE_ENV === 'prod';

  return {
    mode:   isProd ? 'production' : 'development',
    entry:  './src/index.tsx',
    target: 'browserslist',
    output: {
      path:     path.resolve(__dirname, 'build'),
      filename: isProd
        ? 'static/[contenthash:8].js'
        : 'static/[name].js',
      clean:         true,
      publicPath:    '/',
      chunkFilename: isProd
        ? 'static/[contenthash:8].chunk.js'
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
              options: {
                presets: [
                // Presets here
                ],
              },
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
                    'postcss-nested',
                    'postcss-simple-vars',
                    'postcss-mixins',
                    'postcss-custom-media',
                  ],
                },
              },
            },
          ],
        },
        {
          test:  /\.(png|svg|jpg|jpeg|gif|webp)$/,
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
              type:      'asset',
              generator: {
                filename: 'static/img/[hash].[ext]',
              },
            },
          ],
        },
        {
          test:      /\.(ttf|otf|woff2)/,
          type:      'asset/resource',
          generator: {
            filename: 'static/fonts/[hash].[ext]',
          },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProd
          ? 'static/[contenthash:8].css'
          : 'static/[name].css',
      }),
      new HtmlWebpackPlugin({
        template:   'public/index.html',
        favicon:    'public/favicon.ico',
        minify:     isProd,
        publicPath: '/',
      }),
      new EslintWebpackPlugin({
        extensions:              ['ts', 'tsx', 'js', 'jsx'],
        failOnError:             false,
        errorOnUnmatchedPattern: false,
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
