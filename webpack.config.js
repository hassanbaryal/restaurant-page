const path = require ('path');


module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },  
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].main.js',
        // clean: true,
    },
    
}