module.exports = {
  // development or production
  mode: 'development',
  // オリジナルソースマップ
  devtool: 'eval-source-map',
  // エントリーポイント
  entry: './src/index.js',
  // 出力先フォルダ
  output: {
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'main.js'
  },
  devServer: {
    contentBase: './dist',
    port: 8080,
    open: true,
  }
}
