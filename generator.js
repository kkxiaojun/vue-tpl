module.exports = function (api, meta) {
  api.conditionFiles(meta.microFE, ['src\\index-qiankun.tsx', 'src\\index-normal.tsx'], 'src/index.tsx')

  let dependencies = {}
  meta.microFE && Object.assign(dependencies, {
    "@i61/micro-app": "^1.0.1"
  })
  meta.mobile && Object.assign(dependencies, {
    "postcss-pxtorem": "^4.0.1",
    "lib-flexible": "^0.3.2"
  })
  meta.weixin && Object.assign(dependencies, {
    "weixin-js-sdk": "^1.4.0-test"
  })

  api.extendPackage({
    dependencies
  })

  meta.mobile && api.removeFiles('src\\plugins\\element.js')
  !meta.weixin && api.removeFiles('src\\modules\\wxconfig.js')

}
