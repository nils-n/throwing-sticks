const path  = require("path")

module.exports = {
    entry: "./assets/scripts/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
};