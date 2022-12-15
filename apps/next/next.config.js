/** @type {import('next').NextConfig} */
const { withNativebase } = require('@native-base/next-adapter')
const withImages = require('next-images')
const path = require('path')
const webpack = require('webpack')

module.exports = withNativebase(
  withImages({
    dependencies: [
      '@expo/next-adapter',
      'react-native-vector-icons',
      'react-native-web',
      'react-native-vector-icons-for-web',
      'solito',
      'expo-modules-core',
      'expo-image-picker',
      'expo-linear-gradient',
      'timeago.js',
      'app',
    ],
    nextConfig: {
      typescript: {
        ignoreBuildErrors: true,
      },
      projectRoot: __dirname,
      reactStrictMode: true,
      webpack5: true,
      webpack: (config, options) => {
        config.resolve.alias = {
          ...(config.resolve.alias || {}),
          'react-native$': 'react-native-web',
          '@expo/vector-icons': 'react-native-vector-icons',
          'react-native-web/src/modules/normalizeColor': path.resolve(
            './lib/normalizeColor.js'
          ),
        }
        config.resolve.extensions = [
          '.web.js',
          '.web.ts',
          '.web.tsx',
          ...config.resolve.extensions,
        ]
        config.plugins.push(
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(
              process.env.NODE_ENV || 'development'
            ),
            __DEV__: process.env.NODE_ENV !== 'production' || true,
          })
        )
        return config
      },
      images: {
        domains: ['ps-docs-content.s3-website.ap-south-1.amazonaws.com'],
      },
    },
  })
)
