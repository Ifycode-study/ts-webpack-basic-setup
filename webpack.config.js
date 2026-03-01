const { resolve, join } = require('path');

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
        // publicPath: 'dist', // commented out because using this didn't work for dev server. Fix(es) have been added towards the end of this file.
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },

    //--------------------------------------------
    // Tiny fix to solve "cannot get /" in browser
    //--------------------------------------------
    devServer: {
        static: {
            directory: join(__dirname, 'dist'),
        },
    },
    //-------------------------------------------
    // webpack dev server needs mode set, to work
    //-------------------------------------------
    mode: 'development',
    //--------------------------------------------
};
