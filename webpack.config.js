const path = require('path')
const babelLoader = require('babel-loader')

module.exports = {
    entry: {
        index:'./src/main.js',
        hello: './src/hello.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.main.js'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test:
            }
        ]
    },
}

