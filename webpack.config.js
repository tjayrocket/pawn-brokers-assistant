const path = require('path');
//'Path' is a part of node. Just require it because you should already have Node. if not, how the HELL did you get this far?!

module.exports = {
  entry: './src/components/App.jsx', 
  //This sets my entry point for my app. I chose App.jsx out of the components folder.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  //This is where it sends the bundled files. The 'dist' folder, bundle.js - I link this in my html file for now.
  module: {
    rules: [
      //This looks for and implements CSS Files.
      { 
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      //This looks for and implements JS files. It is using the babel-loader dependency in case it needs to be transpiled, which it most likely does.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, 
      //This looks for and implements JSX files - you know, because React...
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
}

//I will be implementing 'HtmlWebpackPlugin' later so this should NOT be seen as finished at this time.

