module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
<%_ if (options.vconsole) { _%>
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') {
      const vConsolePlugin = require('vconsole-webpack-plugin')
      let _vConsolePlugin = new vConsolePlugin({
        filter: [],
        enable: true
      })
      config.plugins = [...config.plugins, ...[_vConsolePlugin]]
    }
  },
<%_ } _%>
  devServer: {
<%_ if (options.axios) { _%>
    // proxy: {
    //   // api proxy example
    //   '/api': {
    //     target: 'http://wxvue.xyz/api',
    //     changeOrigin: true
    //   }
    // },
<%_ } _%>
<%_ if (options.mock !== 'none') { _%>
    before: (app) => {
      require('./src/api/mock')(app)
    }
<%_ } _%>
  }
}