const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: '/',
  outputDir: 'build',
  assetsDir: 'static',
  filenameHashing: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('mixins', resolve('src/mixins'))
      .set('utils', resolve('src/utils'))
      .set('service', resolve('src/service'))
      .set('filters', resolve('src/filters'))
  },
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    //  proxy: {
    //      '/api/':{
    //         target: 'https://test_iq.haizol.com/',
    //         changeOrigin: true,
    //         pathRewrite: {
    //           '^/api': ''
    //         }
    //      }
    //  }, // 设置代理
    before: app => { }
  },
}