const path = require("path");

module.exports = {
  // Setting the mode to 'production' optimizes the bundle size
  mode: "production",
  // Entry point of your application
  entry: "./index.js",
  // Configuration for the output of the bundle
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Name of the output file
  },
  target: "node", // Ensures that Webpack compiles code for Node.js environment
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile all .js files
        exclude: /node_modules/, // Except for node_modules
        use: {
          loader: "babel-loader", // Using babel-loader for transpiling
          options: {
            presets: ["@babel/preset-env"], // Preset used for env setup
          },
        },
      },
    ],
  },
};
