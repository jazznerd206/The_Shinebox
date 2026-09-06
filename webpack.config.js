const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = (_env, argv) => {
  const isDevelopment = argv.mode === 'development'

  return {
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash].js',
      clean: true,
      publicPath: '/',
    },
    devtool: isDevelopment ? 'eval-cheap-module-source-map' : 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: isDevelopment ? [require.resolve('react-refresh/babel')] : [],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
      client: {
        overlay: true,
      },
    },
  }
}
