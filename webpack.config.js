const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./webpack.common");
config.mode = 'development';
config.output.path = path.resolve(__dirname, 'dist/dev');
config.devtool = 'source-map';
/**
 * game.html 템플릿을 사용해서 /dist/dev 디렉토리에 index.html 파일을 생성합니다.
 * game.html 템플릿에서 <%= htmlWebpackPlugin.options.{원하는 프로퍼티 이름} %> 으로 원하는 값을 넣을 수 있습니다.
 */
config.plugins.push(new HtmlWebpackPlugin({
  template: path.join(__dirname, '/game.html'),
  title: "Phaser Test : Dev Ver.",
  phaserVersion: "latest",      /* cdn에서 가져올 phaser 라이브러리 파일 버전*/
  phaserMinified : false        /* cdn에서 minified 된 파일을 가져오는지 아닌지 */
}))
module.exports = config;