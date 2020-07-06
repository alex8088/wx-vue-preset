module.exports = (api, options = {}) => {
  api.extendPackage({
    dependencies: {
      axios: "^0.19.2"
    }
  })

  api.injectImports(api.entryFile, `import './api'`)

  api.render('./template', {})
}
