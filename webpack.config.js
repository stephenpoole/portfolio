const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const Dotenv = require('dotenv-webpack');
const Config = require('./config.json');

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = function(env, argv) {
    const isDev = argv.mode === 'development';
    const config = isDev ? Config.development : Config.production;
    const plugins = [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: path.resolve(__dirname, './dist/index.html'),
            baseUrl: config.routePrefix,
            inject: true
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
    } else {
        plugins.push(new Dotenv());
    }

    return {
        entry: './src/index.tsx',
        output: {
            filename: 'app.[hash].js',
            path: __dirname + '/dist',
            chunkFilename: '[name].js',
            publicPath: isDev ? './dist' : '/'
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json']
        },
        optimization: {
            splitChunks: {
                name: true,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'app.vendor',
                        chunks: 'initial',
                        priority: 20
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
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
