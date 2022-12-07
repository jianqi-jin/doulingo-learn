/**
 * @file webpack.config.js
 * @author jjq
 * @description webpack.config.js
*/

import webpack from 'webpack';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const isDev = process.env.NODE_ENV === 'development';
const config: webpack.Configuration = {
  mode: isDev ? 'development' : 'production',
  entry: {
    content: './src/content.ts',
    popover: './src/popover.ts'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              },
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            // options: {
            //   postcssOptions: {
            //     plugins: [
            //       [
            //         'postcss-preset-env',
            //         {
            //           // Options
            //         },
            //       ],
            //     ],
            //   },
            // }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              '@babel/preset-typescript',
              '@babel/preset-react'
            ]
          }
        },
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: 'https://localhost:4001/',
    clean: true,
    filename: (pathData) => ['content', 'popover'].includes(pathData?.chunk?.name || '') ? '[name].js' : '[name].[contenthash:8].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // ...(isDev ? {} : {
  //   optimization: {
  //     splitChunks: {
  //       chunks: 'all'
  //     }
  //   }
  // }),
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'content.html',
      chunks: ['content']
    }),
    new webpack.ProgressPlugin({
      activeModules: false,
      entries: true,
      handler(percentage, message, ...args) {
        // custom logic
      },
      modules: true,
      modulesCount: 5000,
      profile: false,
      dependencies: true,
      dependenciesCount: 10000,
      percentBy: null,
    })
  ],
  devServer: {
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        hostname: 'localhost',
      }
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    port: 4001,
    server: {
      type: 'https',
      options: {
        key: './key.pem',
        cert: './cert.pem'
      }
    }
    // https: {
    //   key: './key.pem',
    //   cert: './cert.pem',
    // }
  }
};

export default config;
