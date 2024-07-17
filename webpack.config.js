const webpack = require('webpack');
const path = require('path');
const packageData = require('./package.json');
const CSS_MODULE_PREFIX = 'playkit';

module.exports = (env, { mode }) => {
  return {
    target: 'web',
    entry: './src/index.ts',
    optimization: {
      minimize: mode !== 'development'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: { configFile: mode === 'development' ? 'tsconfig.dev.json' : 'tsconfig.json' },
          exclude: /node_modules/
        },
        {
          test: /\.scss/,
          use: [
            {
              loader: 'style-loader',
              options: {
                attributes: {id: `${packageData.name}`},
                injectType: "singletonStyleTag"
              }
            },
            {
              loader: 'css-loader',
              options: {
                esModule: true,
                modules: {
                  localIdentName: `${CSS_MODULE_PREFIX}-[local]_[hash:base64:2]`,
                  namedExport: true
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: mode === 'development'
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      filename: 'playkit-ui-managers.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    externals: {
      '@playkit-js/kaltura-player-js': 'root KalturaPlayer',
      preact: 'root KalturaPlayer.ui.preact',
      'preact/hooks': 'root KalturaPlayer.ui.preactHooks',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'demo')
      },
      client: {
        progress: true
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(packageData.version),
        __NAME__: JSON.stringify(packageData.name)
      })
    ]
  };
};
