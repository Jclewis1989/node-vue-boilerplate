const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    publicPath:'',
    devServer: {
        proxy: {
            '/api': {
                target: process.env.PORT || 'http://localhost:5000',
            }
        }
    }
}