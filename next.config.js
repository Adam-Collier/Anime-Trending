const withOffline = require('next-offline')

const nextConfig = {
  experimental: { amp: true },
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "cacheFirst",
      }
    ]
  }
}

module.exports = withOffline(nextConfig)