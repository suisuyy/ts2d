const path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }

        ],
    },
    resolve: { extensions: ['.ts', '.js'] },   //make webpack look for ts files
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
    }
}