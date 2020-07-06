const data = require('./data.js')

module.exports = (app) => {
  // mock example
  app.get('/mock/getPlugins', (req, res) => {
    res.json(data.plugins)
  })
  // ... more mock api
}