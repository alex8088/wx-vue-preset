const Mock = require('mockjs')

module.exports = {
  plugins: Mock.mock({
    "array|1-4": [
      "vuex",
      "axios",
      "mock",
      "vconsole"
    ]
  })
}