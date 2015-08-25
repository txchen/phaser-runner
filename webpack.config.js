var webpack = require('webpack')

module.exports = {
    cache: true,
    entry: {
      app: './src/index.js',
    },
    output: {
        path: './dist/',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, include: /src/, loader: 'babel', query: {modules: 'common'} }
        ]
    },
    plugins: [
    ],
    devServer: {
        port: 9999
    },
    devtool: "source-map"
}
