const { merge } = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

const postCssConfig = require("./postcss.config.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const commonConfig = require("./webpack.common.config.js");

const BASE_PATH = path.resolve(__dirname, "");
const DIST_PATH = `${BASE_PATH}/build`;

module.exports = function (env = { target: "local" }) {
    const devConfig = {
        mode: "development",

        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].bundle.js"
        },

        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 2
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: postCssConfig.plugins()
                                }
                            }
                        },
                        "sass-loader"
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: postCssConfig.plugins()
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|csv|pdf)$/i,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg)(\?[a-z0-9=.]+)?$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: "10000"
                        }
                    }
                }
            ]
        },
        devServer: {
            contentBase: `${DIST_PATH}`,
            historyApiFallback: true,
            port: 8000,
            compress: true,
        },

        plugins: [
            new webpack.DefinePlugin({
                BUILD_TYPE: JSON.stringify("dev")
            }),
            new webpack.HotModuleReplacementPlugin(),
            new ReactRefreshWebpackPlugin()
        ]
    }

    return merge(commonConfig(env), devConfig);

}