const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist'
  },
  devtool: 'inline-source-map',
  // to use SASS
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // rewrite links to images
          "resolve-url-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'resolve-url-loader',
            options: {
              limit: 8192, // Set a limit in bytes for inlining as Data URL
              name: 'images/[name].[hash].[ext]',
            },
          },
        ],
      },
    ]
  }
};