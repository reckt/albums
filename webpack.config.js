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
                test: /src(\/|\\).*\.(js||jsx)$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    plugins: [
    ]
};
