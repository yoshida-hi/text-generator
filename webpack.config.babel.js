// node pash module
import _path from 'path'

// BrowserSync
import BrowserSync from 'browser-sync'

// BrowserSyncWebpackPlugin
import BrowserSyncWebpackPlugin from 'browser-sync-webpack-plugin'

// HtmlWebpackPlugin
import HtmlWebpackPlugin from 'html-webpack-plugin'

// mode flag
const modeType = 'development'
const enabledSourceMap = modeType === 'development'

export default {
  mode  : modeType,
  entry : [_path.resolve(__dirname, 'application.js'), '@babel/polyfill'],
  output: {
    path: _path.resolve(__dirname, 'public/'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.styl$|\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: enabledSourceMap
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)/,
        use:[
          'url-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pug/pages/index.pug'
    }),
    new BrowserSyncWebpackPlugin({
      host: 'localhost',
      port: 3010,
      server: { baseDir: ['public'] },
      files: [
        'public/*'
      ]
    })
  ]
}
