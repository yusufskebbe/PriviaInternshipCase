const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = function (env) {
    const commonConfig = {
        entry: {
            app: ["./src/index.tsx"],
            vendor: ["react", "react-dom"]
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].bundle.js",
            chunkFilename: "[name].bundle.js",

        },
        devtool: "source-map",
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                plugins:
                                    env.target === "local" ? [require.resolve("react-refresh/babel")] : null
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/,
                    use: ["@svgr/webpack", "url-loader"]
                }
            ]
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                maxInitialRequests: 5,
                minSize: 90000,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            // get the name. E.g. node_modules/packageName/not/this/part.js
                            // or node_modules/packageName
                            const packageName = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                            )[1];

                            // npm package names are URL-safe, but some servers don't like @ symbols
                            return `npm.${packageName.replace("@", "")}`;
                        }
                    }
                }
            }
        },
        plugins: [
            new CleanWebpackPlugin({
                verbose: true
            }),
            new HtmlWebpackPlugin({
                inject: true,
                template: "./src/index.html",
                meta: {
                    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
                }
            }),
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    diagnosticOptions: {
                        semantic: true,
                        syntactic: true
                    }
                },
                eslint: { files: "./src/**/*.{ts,tsx,js,jsx}" }
            }),
            new webpack.DefinePlugin({
                TARGET_ENV_TYPE: JSON.stringify(env.target)
            })
        ]
    }

    return commonConfig;
};
