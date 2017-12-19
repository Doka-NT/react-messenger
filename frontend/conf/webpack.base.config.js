import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default new Config().merge({
    entry: './src/index.js',
    output: {
        path: __dirname + '/../public',
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: "css-loader"},
                        {
                            loader: "less-loader",
                            options: {
                                includePaths: ["./less/", "./public/css/"]
                            }
                        },
                    ]
                })
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: "body"
        }),
    ],
});
