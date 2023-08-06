module.exports = {
  configureWebpack: {
    externals: {
      './cptable': 'var cptable'
    },
    resolve: {
      fallback: {
        'fs': false,
        'crypto': false
      }
    }
  },
}