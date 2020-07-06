module.exports = (api, options = {}) => {
  api.extendPackage({
    devDependencies: {
      'vconsole-webpack-plugin': '^1.5.1'
    }
  })
}