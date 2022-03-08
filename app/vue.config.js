const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service')


module.exports = {
  transpileDependencies: true,
  configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer']
            })
        ],
        resolve: {
            fallback: {
                crypto: false,
                fs: false,
                assert: false,
                process: false,
                util: false,
                path: false,
            }
        }
    },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/AceSocial/'
      : '/'
  }

// const webpack = require('webpack');
// const { defineConfig } = require('@vue/cli-service')

// module.exports = defineConfig({
//     transpileDependencies: true,
//     configureWebpack: {
//         plugins: [
//             new webpack.ProvidePlugin({
//                 Buffer: ['buffer', 'Buffer']
//             })
//         ],
//         resolve: {
//             fallback: {
//                 crypto: false,
//                 fs: false,
//                 assert: false,
//                 process: false,
//                 util: false,
//                 path: false,
//             }
//         }
//     }
// })