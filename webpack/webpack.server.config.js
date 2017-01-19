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
                    presets : ['es2015','react']
                }
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract('style','css?modules'),
                plugins:[new ExtractTextPlugin('../statics/styles.css')]
            }
        ]
    },
    target : 'node'
};