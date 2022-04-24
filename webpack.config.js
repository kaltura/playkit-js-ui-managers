const path = require('path');

const config = {
  target: 'web',
  entry: './src/index.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'ui-manager.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  externals: {
    'kaltura-player-js': 'root KalturaPlayer',
    preact: 'root KalturaPlayer.ui.preact',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'demo'),
    },
    client: {
      progress: true,
    },
  },
};

module.exports = (env, {mode}) => {
  if (mode === 'development') {
    config.devtool = 'source-map';
  }
  return config;
};
