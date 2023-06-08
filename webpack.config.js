const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"), 
    filename: "bundle.js" 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader', 
          'css-loader', 
          'postcss-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }  
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css",
      chunkFilename: "app.css"
    }),
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    })
  ]
};