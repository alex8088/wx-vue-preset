const fs = require('fs')

module.exports = (api, options = {}) => {
  api.extendPackage({
    dependencies: {
      'wx-vue': '^2.0.0'
    }
  })

  if (options.import === 'partial') {
    api.extendPackage({
      devDependencies: {
        'babel-plugin-import': '^1.13.0'
      }
    })
  }

  const imports = [
    ...options.import === 'full' ?
      [`import 'wx-vue/lib/styles/index.css'`, `import Wx from 'wx-vue'`] :
      [`import { Button } from 'wx-vue'`],
    `import './styles/theme.${options.css}'`,
  ]

  api.injectImports(api.entryFile, imports)

  if (options.css === 'less') {
    api.render({ './src/styles/theme.less': './template/src/styles/theme.less' }, {})
  } else {
    api.render({ './src/styles/theme.sass': './template/src/styles/theme.sass' }, {})
  }

  api.onCreateComplete(() => {
    const mainPath = api.resolve('src/main.js')
    let content = fs.readFileSync(mainPath, { encoding: 'utf8' })
    let replace = `${options.import === 'full' ? 'Vue.use(Wx)' : 'Vue.use(Button)'}\n\nVue.config.productionTip = false`
    content = content.replace(/Vue\.config\.productionTip = false/, replace)
    fs.writeFileSync(mainPath, content, { encoding: 'utf8' })

    if (options.import === 'partial') {
      const babelPath = api.resolve('./babel.config.js')
      const config = fs.existsSync(babelPath) ? require(babelPath) : {}

      config.plugins = config.plugins || []

      const babelPluginConfig = ['import', {
        'libraryName': 'wx-vue',
        'style': true
      }]

      config.plugins.push(babelPluginConfig)

      fs.writeFileSync(babelPath, api.genJSConfig(config), { encoding: 'utf8' })
    }
  })
}
