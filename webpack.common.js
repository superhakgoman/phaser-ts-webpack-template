const path = require('path');
module.exports = {
    // mode : '', /* development || production */
    entry: {
        game: path.join(__dirname, 'src', 'game.ts'),
    },
    output: {
        filename: '[name].js', /* 복수의 entry 파일이 존재하는 경우 각각의 파일명과 같은 빌드 결과물 생성 */
        // path: path.resolve(__dirname, 'dist/dev')  /* 빌드 결과물 경로 */
    },
    module: {
        rules: [{
            test: /.tsx?$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'bower_components')
            ],
            loader: 'ts-loader',
        }, {
            test: /.jsx?$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'bower_components')
            ],
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css', '.tsx', '.ts']
    },
    externals: {
        phaser: "Phaser", /* 빌드 결과물에 Phaser 모듈을 포함하지 않음(cdn 사용) */
    },
    devServer:{},
    plugins: []
};