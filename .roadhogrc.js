const mock = process.env.NODE_ENV || '';
const pxtorem = require('postcss-pxtorem');

export default {
  "entry": "src/index.js",
  "disableCSSModules": false,
  "cssModulesExclude": ["./src/global.less"],
  "publicPath": "/antd-mobile-roadhog/",
  "hash": true,
  "theme": "./theme.config.js",
  "autoprefixer": {
    "browsers": [
      "iOS >= 8", "Android >= 4"
    ]
  },
  "proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  "extraBabelPlugins": [
    "transform-runtime",
    ['import', { 'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true }]
  ],
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  },
  "xdllPlugin": {
    "exclude": [
      "babel-runtime"
    ],
    "include": [
      "dva/router",
      "dva/saga",
      "dva/fetch"
    ]
  }
}
