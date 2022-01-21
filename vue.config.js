module.exports = {
    devServer: {
        historyApiFallback: true,
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'devtools';
                return args;
            });
    },
    transpileDependencies: [
        'vuetify'
    ]
}
