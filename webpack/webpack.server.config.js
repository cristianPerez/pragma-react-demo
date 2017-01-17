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
            }
        ]
    },
    target : 'node'
};