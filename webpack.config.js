const { resolve } = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [resolve(__dirname, 'src')],
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },
};
