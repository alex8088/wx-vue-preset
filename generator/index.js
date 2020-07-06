const fs = require('fs')

module.exports = (api, options = {}) => {
  const opts = {
    css: 'less',
    vuex: true,
    axios: true,
    mock: 'none',
    vconsole: false,
    import: 'full'
  }

  if (options.preset === 'custom') {
    opts.css = options.css
    opts.vuex = options.vuex
    opts.axios = options.axios
    opts.mock = options.mock
    opts.vconsole = options.vconsole
    opts.import = options.import
  }

  const cssDeps = {
    sass: {
      'node-sass': '^4.12.0',
      'sass-loader': '^8.0.2'
    },
    less: {
      'less': '^3.0.4',
      'less-loader': '^5.0.0'
    }
  }

  api.extendPackage({
    devDependencies: cssDeps[opts.css]
  })

  api.render('./template', { options: opts })

  if (opts.vuex) require('../plugins/vuex/generator')(api)

  if (opts.axios) require('../plugins/axios/generator')(api)

  if (opts.mock !== 'none') require('../plugins/mock/generator')(api, { mock: opts.mock })

  if (opts.vconsole) require('../plugins/vconsole/generator')(api)

  require('../plugins/wx-vue/generator')(api, opts)

  api.onCreateComplete(() => {
    const pkgPath = api.resolve('./package.json')

    const config = fs.existsSync(pkgPath) ? require(pkgPath) : {}
    config.browserslist = [
      "Android >= 4.0",
      "iOS >= 8"
    ]

    fs.writeFileSync(pkgPath, JSON.stringify(config, null, 2), { encoding: 'utf8' })
  })
}
