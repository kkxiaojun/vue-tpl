const conf = {
  LOCAL: {
    BASE_API: '/api'
  }
}

module.exports = (conf => {
  const systemEnvs = ['LOCAL', 'DEV', 'PROD', 'TEST', 'GREY', 'PRE']

  systemEnvs.forEach(env => {
    conf[env] = Object.assign(
      {
        BASE_API: '/',
        PROCESS_ENV: env.toLocaleLowerCase(),
        NODE_ENV: 'production'
      },
      conf[env] || {}
    )
  })

  conf.LOCAL.PROCESS_ENV = 'dev'
  return conf
})(conf)
