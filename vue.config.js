module.exports = {
    outputDir: './dist',
    css: {
        extract: true,
        sourceMap: process.env.VUE_APP_ENV !== 'production'
    },
    configureWebpack: {
        devtool: 'source-map',
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000
            }
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    },
    productionSourceMap: false,
    publicPath: './',
    transpileDependencies: ['vuetify']
}
