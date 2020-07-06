module.exports = (api, options = {}) => {
  if (options.mock === 'mockjs') {
    api.extendPackage({
      devDependencies: {
        mockjs: '^1.1.0'
      }
    })
  }

  api.render(`./template/${options.mock}`, {
  })
}