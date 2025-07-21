// webpack.extra.js
const path = require('path');

module.exports = {
  output: {
    // use [name] so your entrypoint stays “main.js” (or whatever) instead of
    // everything clobbering widgets.js
    filename: '[name].js',
    // add a small hash to any lazy‑loaded chunk so it never collides
    chunkFilename: '[id].[hash:8].js',
    path: path.resolve(__dirname, 'dist/widgets'),
    libraryTarget: 'umd',
    library: 'widgets',
    // for UMD builds, ensure `this` is the global object
    globalObject: 'this'
  },
  optimization: {
    // turn off webpack’s built‑in code‑splitting completely—
    // ngx-build-plus’s singleBundle will already inline vendor & runtime
    splitChunks: false,
    runtimeChunk: false
  }
};
