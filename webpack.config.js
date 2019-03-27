const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const Config = require('./config.json');

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = function(env, argv) {
    const isDev = argv.mode === 'development';
    const config = isDev ? Config.development : Config.production;
    const plugins = [
        new AsyncChunkNames(),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: path.resolve(__dirname, './dist/index.html'),
            baseUrl: config.routePrefix,
            inject: true
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false
        }),
        new CopyPlugin([
            { from: 'src/assets/fonts', to: 'assets/fonts' },
            { from: 'src/assets/images', to: 'assets/images' },
            { from: 'src/assets/videos', to: 'assets/videos' },
            { from: 'src/.htaccess', to: '' }
        ])
    ];
    if (!isDev) {
        plugins.push(new CleanWebpackPlugin());
    }

    return {
        entry: ['./src/index.tsx'],
        devtool: isDev ? 'source-map' : false,
        output: {
            filename: 'app.[hash].js',
            path: path.resolve(__dirname, './dist'),
            chunkFilename: '[name].js',
            publicPath: isDev ? './dist' : '/'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
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
                    test: /\.(t|j)sx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                getCustomTransformers: () => ({
                                    before: [styledComponentsTransformer]
                                })
                            }
                        },
                        { loader: 'eslint-loader' }
                    ]
                },
                { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
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
        plugins
    };
};
