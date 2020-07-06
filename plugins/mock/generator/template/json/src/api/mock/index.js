const data = require('./data.json')

module.exports = (app) => {
  // mock example
  app.get('/mock/getPlugins', (req, res) => {
    res.json(data.plugins)
  })
  // ... more mock api
}