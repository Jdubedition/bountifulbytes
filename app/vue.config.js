module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'JustinK8s'
        return args
      })
    config.module
      .rule('markdown-loader')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .options({ esModule: false })
      .end()
    // .use('html-loader')
    // .loader('html-loader')
    // .end()
    // .use('markdown-loader')
    // .loader('markdown-loader')
    // .end()
  }
}
