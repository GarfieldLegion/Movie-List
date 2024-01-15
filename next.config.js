/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname:'/profile_images/**'
      }
    ]
  }
}

module.exports = nextConfig

// const path = require('path')
// module.exports = {
//   trailingSlash: true,
//   webpackDevMiddleware: config => {
//     config.watchOptions = {
//       poll: 1000,
//       aggregateTimeout: 300
//     }
//     return config
//   },
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')]
//   }
// }