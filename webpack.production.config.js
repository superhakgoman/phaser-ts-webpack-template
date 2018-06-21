const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./webpack.common");
config.mode = 'production';
config.output.path = path.resolve(__dirname, 'dist/prod');
/**
 * game.html 템플릿을 사용해서 /dist/prod/ 디렉토리에 index.html 파일을 생성합니다.
 * game.html 템플릿에서 <%= htmlWebpackPlugin.options.{원하는 프로퍼티 이름} %> 으로 원하는 값을 넣을 수 있습니다.
 */
config.plugins.push(new HtmlWebpackPlugin({
  template: path.join(__dirname, '/game.html'),
  // filename: path.join(__dirname, '/index.html'), 
  title: "Phaser Test : Production Ver.",
  phaserVersion: "latest", /* cdn에서 가져올 phaser 라이브러리 파일 버전*/
  phaserMinified: true
}));
//uglify 적용, 소스 내 주석 삭제 
config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    })
  ]
}
module.exports = config;