module.exports = {
    entry: './react-example.js',
    output: {
        path: './public',
        filename: 'compiled.js'
    },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
