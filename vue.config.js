
module.exports = {
  devServer: {
      open: true,  // npm run serve后自动打开页面
      host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
      port: 8080, // 开发服务器运行端口号
      // https: true,
      // hotOnly: false, 
      // proxy: {
      //     '/api': {
      //         target: 'http://150.158.153.134:8082',
      //         secure: true,  // 如果是https接口，需要配置这个参数
      //         changeOrigin: true,
      //         pathRewrite: {
      //             '^/api/': ''
      //         }
      //     }
      // }
  }
}
