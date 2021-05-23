const { merge } = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const postCssConfig = require("./postcss.config.js");
const commonConfig = require("./webpack.common.config.js");

module.exports = function (env = { target: "release" }) {

    const releaseConfig = {
        mode: "production",

        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].bundle.js",

        },

        devtool: "source-map",

        module: {
            rules: [
                {
                    test: /.(woff(2)?|eot|ttf|otf|svg)(\?[a-z0-9=.#]+)?$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            name: "[name]-[hash].[ext]",
                            limit: "10000"
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
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
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
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
                        {
                            loader: "sass-loader"
                        }
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|csv|pdf)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name]-[hash].[ext]"
                            }
                        }
                    ]
                }
            ]
        },

        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        sourceMap: true
                    }
                })
            ],
            moduleIds: "deterministic"
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name]-[contenthash].css",
                chunkFilename: "[id]-[contenthash].css"
            }),
            new webpack.DefinePlugin({
                BUILD_TYPE: JSON.stringify("release")
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
                options: {
                    context: __dirname
                }
            }),
        ]
    }



    return merge(commonConfig(env), releaseConfig);
}