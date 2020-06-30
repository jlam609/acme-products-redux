const path = require('path')

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    devtool:'source-map',
    mode:'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      },
    module:{
        rules:[{
            use:{
                loader:'babel-loader',
            },
            exclude:/node_modules/
        }]
    }
}