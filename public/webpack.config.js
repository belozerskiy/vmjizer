'use strict'

module.exports = {
    entry:  "./jsx/app.jsx", //target
    output: {
        path:  __dirname + "/build/",
        filename: "build.js",
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: 'node_modules',
                query: {
                    presets: ['es2015', 'react'],
                }
            }
        ]
    }
};
