var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: {
        index: './src/app.js'
    },
    output: {
        filename: './public/assets/bin/[name].js'
    },
    module: {
        loaders: [
            {
                test: /app(\/|\\).*\.(js||jsx)$/,
                loader: 'babel',
                query: {
                    // https://github.com/babel/babel-loader#options
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    plugins: [
    ]
};
