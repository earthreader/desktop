const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'renderer.tsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'renderer.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx', '.styl']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['ts-loader']
            },
            {
                test: /\.styl$/,
                loaders: [
                    'style',
                    'css?modules&camelCase&localIdentName=[path][name]---[local]---[hash:base64:5]',
                    'stylus'
                ]
            },
            {
                test: /\.svg$/,
                loaders: ['babel?presets[]=react', 'svg-react']
            }
        ]
    }
};
