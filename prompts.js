module.exports = [
  {
    type: 'list',
    name: 'preset',
    message: 'Please pick a preset: (Use arrow keys)',
    choices: [
      {
        name: "default(less, vuex, axios, wx-vue)",
        value: "default"
      },
      {
        name: "custom",
        value: "custom"
      }
    ],
    default: "default"
  },
  {
    type: 'list',
    name: 'css',
    message: 'Choice a CSS pre-processor',
    choices: [
      {
        name: "less",
        value: "less"
      },
      {
        name: "sass",
        value: "node-sass"
      }
    ],
    default: "less",
    when: answer => answer.preset === "custom"
  },
  {
    type: 'confirm',
    name: 'vuex',
    message: 'Do you want to use vuex',
    default: false,
    when: answer => answer.preset === "custom"
  },
  {
    type: 'confirm',
    name: 'axios',
    message: 'Do you want to use axios',
    default: false,
    when: answer => answer.preset === "custom"
  },
  {
    type: 'list',
    name: 'mock',
    message: 'Choice a api data mock tool: (Use arrow keys)',
    choices: [
      {
        name: "None",
        value: "none"
      },
      {
        name: "Json",
        value: "json"
      },
      {
        name: "Mock.js",
        value: "mockjs"
      }
    ],
    default: "none",
    when: answer => answer.preset === "custom"
  },
  {
    type: 'confirm',
    name: 'vconsole',
    message: 'Do you want to use vConsole',
    default: false,
    when: answer => answer.preset === "custom"
  },
  {
    type: 'list',
    name: 'import',
    message: 'How do you want to import wx-vue: (Use arrow keys)',
    choices: [
      {
        name: "Fully import",
        value: "full"
      },
      {
        name: "Import on demand",
        value: "partial"
      }
    ],
    default: "full",
    when: answer => answer.preset === "custom"
  }
]