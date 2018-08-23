const withOffline = require('next-offline')

module.exports = withOffline({
  webpack(config, options) {
    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
})
