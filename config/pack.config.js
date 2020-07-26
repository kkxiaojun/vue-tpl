const { mergeBase } = require('@i61/common-webpack')
const path = require('path')
module.exports = mergeBase({
  sassVariateFile: [path.resolve(process.cwd(), 'src/styles/variate.scss')]
})({
  LOCAL: {
    host: 'localhost', // 域名
    port: 8080, // 端口
  },
  DEV: {
  }
})
