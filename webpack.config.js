const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { clear } = require("console");

module.exports = {
    mode: 'development',
    entry: {
        index: "./src/scripts/index.js",
        print: "./src/scripts/print.js"
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        })
    ],
    output: {
        filename: "[name]bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: "asset/resource"
            }
        ],
    },
};