import Config from 'webpack-config';
import webpack from 'webpack';

export default new Config().extend('conf/webpack.base.config.js').merge({
    entry: [
        'webpack-hot-middleware/client?reload=true',
        'react-hot-loader/patch',
        __dirname + '/../src/index.js'
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
