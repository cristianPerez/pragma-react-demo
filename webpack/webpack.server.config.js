const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : './src/server.js',
    output : {
        filename : 'server.js',
        path : './dist/server'
    },
    module : {
        loaders : [
            {
                test : /\.json$/,
                loader : 'json'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query : {
                    presets : ['es2015', 'es2016', 'es2017', 'react'],
                    plugins : ['transform-regenerator', 'transform-runtime']

                }
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract('style','css?modules')
            }
        ]
    },
    target : 'node',
    node:{
        __dirname:false,
        __filename:false
    },
    plugins:[new ExtractTextPlugin('../statics/styles.css')]
};