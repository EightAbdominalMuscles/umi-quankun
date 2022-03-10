import { defineConfig } from 'umi';
import routes from './config/routes.js';
import proxy from './config/proxy';
import theme from './config/theme'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash'
  },
  proxy,
  routes,
  theme,
  qiankun: {
    slave: {}
  },
  dva: {
    immer: true,
  },
  extraPostCSSPlugins: [
    // https://github.com/evrone/postcss-px-to-viewport
    require('postcss-px-to-viewport')({
      unitToConvert: 'px',
      viewportWidth: 1728,
      unitPrecision: 3,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['.ignore-', '.hairlines', 'am-', 'px-', '.css'],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 1728,
      exclude: [/\/Stores\/.*.less/, /global.css/, /node_modules/],
    }),
  ],
  // mfsu: {},
  fastRefresh: {},
  // https://github.com/umijs/umi-webpack-bundle-analyzer#options-for-plugin
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
});
