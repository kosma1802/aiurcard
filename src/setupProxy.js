const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    proxy('/back', {
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  )
  app.use(
    proxy('/common', {
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  )
}