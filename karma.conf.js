
require('babel-register')

const webpackConfig = Object.assign({}, require('./demo/webpack.config.babel'), {
  entry: null,
  devtool: 'inline-source-map'
})

module.exports = function (config) {
  config.set({
    singleRun: true,

    basePath: './',

    files: [
      './src/**/*_test.js'
    ],

    autoWatch: true,

    frameworks: ['mocha'],

    preprocessors: {
      './src/**/*_test.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: 'dots',

    browsers: [process.env.CI ? 'PhantomJS' : 'Chrome']
  })
}
