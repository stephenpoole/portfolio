const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env, argv) {
    var isDev = argv.mode === 'development';

    return {
        entry: ['@babel/polyfill', './src/index.js'],
        devtool: isDev ? 'source-map' : false,
        output: {
            filename: 'app.[hash].js',
            path: path.resolve(__dirname, './dist'),
            chunkFilename: '[name].js',
            publicPath: isDev ? './dist' : '/'
        },
        node: {
            crypto: 'empty',
            dns: 'empty',
            net: 'empty'
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        toplevel: false,
                        mangle: true
                    }
                })
            ],
            splitChunks: {
                name: true,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'app.vendor',
                        chunks: 'initial',
                        priority: 20
                    },
                    vendorAsync: {
                        test: /[\\/]node_modules[\\/]/,
                        minChunks: 2,
                        chunks: 'async',
                        priority: 0,
                        name: 'app.vendor.async'
                    },
                    common: {
                        name: 'app.common',
                        minChunks: 2,
                        chunks: 'async',
                        priority: 10,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            '@babel/preset-react',
                            [
                                '@babel/preset-env',
                                { targets: 'last 2 versions, ie >= 11', useBuiltIns: 'usage' }
                            ]
                        ],
                        plugins: [
                            [
                                '@babel/plugin-syntax-export-namespace-from',
                                {
                                    exportNamespaceFrom: true
                                }
                            ],
                            '@babel/plugin-syntax-dynamic-import',
                            [
                                '@babel/plugin-proposal-decorators',
                                {
                                    legacy: true
                                }
                            ],
                            [
                                '@babel/plugin-proposal-class-properties',
                                {
                                    loose: true
                                }
                            ],
                            '@babel/plugin-proposal-object-rest-spread',
                            [
                                '@babel/plugin-transform-runtime',
                                {
                                    regenerator: true
                                }
                            ]
                        ]
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'sass-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: isDev ? 'inline' : false,
                                ident: 'postcss',
                                plugins: [
                                    postcssPresetEnv({
                                        browsers: ['last 2 versions', 'ie >= 10']
                                    })
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: '/assets/images/'
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: '/assets/fonts/'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new AsyncChunkNames(),
            new HtmlWebPackPlugin({
                template: './src/index.html',
                filename: path.resolve(__dirname, './dist/index.html'),
                inject: true
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false
            }),
            new CleanWebpackPlugin()
        ]
    };
};
