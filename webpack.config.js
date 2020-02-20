/* constants */
const isDev = process.env.NODE_ENV !== "production";
const outputFolder = "dist";

const payfortRedirectionUrl = isDev
  ? "https://sbcheckout.payfort.com/FortAPI/paymentPage"
  : "https://checkout.payfort.com/FortAPI/paymentPage";
const IP_GEOLOCATION_API_KEY = "0f72e057ea6148d0b8203ec3d4cfb894";
const ipGeolocationApiUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${IP_GEOLOCATION_API_KEY}`;

/* imports */
const packageJson = require("./package.json");
const path = require("path");
const webpack = require("webpack");
const NodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const node = {
  name: "node",
  devtool: isDev ? "source-map" : "hidden-source-map",
  target: "node",
  node: {
    __dirname: true
  },
  externals: [NodeExternals()],
  entry: ["./app.babel.js"],
  output: {
    path: __dirname,
    filename: "app.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.IS_DEPLOY": JSON.stringify(process.env.DEPLOY),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.OUTPUT_FOLDER": JSON.stringify(outputFolder),
      "process.env.API_URL": JSON.stringify(process.env.API_URL),
      "process.env.API_PRIVATE_KEY": JSON.stringify(
        process.env.API_PRIVATE_KEY
      ),
      "process.env.CATEGORY_ID": JSON.stringify(process.env.CATEGORY_ID),
      "process.env.API_TOKEN_DURATION": 20,
      "process.env.ALLOW_PUSH_NOTIFICATON": false,
      "process.env.STORAGE_URL": JSON.stringify(""),
      "process.env.SHOW_HEADER_LOGO": true,
      "process.env.ALWAYS_SHOW_NAV": false,
      "process.env.NAME": JSON.stringify(packageJson.name),
      "process.env.DESCRIPTION": JSON.stringify(packageJson.description),
      "process.env.VERSION": JSON.stringify(packageJson.version),
      "process.env.AUTHOR.NAME": JSON.stringify(packageJson.author.name),
      "process.env.AUTHOR.EMAIL": JSON.stringify(packageJson.author.email),
      "process.env.AUTHOR.URL": JSON.stringify(packageJson.author.url),
      "process.env.CURRENCY_SYMBOL": JSON.stringify("SAR"),
      "process.env.PAYFORT_REDIRECT_URL": JSON.stringify(payfortRedirectionUrl),
      "process.env.IP_GEOLOCATION_API_URL": JSON.stringify(ipGeolocationApiUrl)
    })
  ].concat(
    process.env.DEPLOY ? [] : [new CleanWebpackPlugin(`./${outputFolder}`)]
  ),
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          fix: true,
          emitWarning: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [
            ["@babel/preset-env", { targets: { node: "current" } }],
            "@babel/preset-react"
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};

const web = {
  name: "web",
  devtool: isDev ? "eval" : "hidden-source-map",
  context: path.join(__dirname, "src"),
  externals: [
    {
      xmlhttprequest: "{XMLHttpRequest:XMLHttpRequest}"
    }
  ],
  entry: {
    "main.js": ["@babel/polyfill", "./js/index.jsx"],
    "style-ltr": "./scss/style-ltr.scss",
    "style-rtl": "./scss/style-rtl.scss",
    "inline-ltr": "./scss/inline-ltr.scss",
    "inline-rtl": "./scss/inline-rtl.scss"
  },
  output: {
    path: path.join(__dirname, outputFolder),
    filename: "[name]"
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.IS_DEPLOY": JSON.stringify(process.env.DEPLOY),
      "process.env.API_URL": JSON.stringify(process.env.API_URL),
      "process.env.API_PRIVATE_KEY": JSON.stringify(
        process.env.API_PRIVATE_KEY
      ),
      "process.env.CATEGORY_ID": JSON.stringify(process.env.CATEGORY_ID),
      "process.env.API_TOKEN_DURATION": 20,
      "process.env.ALLOW_PUSH_NOTIFICATON": false,
      "process.env.STORAGE_URL": JSON.stringify(""),
      "process.env.SHOW_HEADER_LOGO": true,
      "process.env.ALWAYS_SHOW_NAV": false,
      "process.env.NAME": JSON.stringify(packageJson.name),
      "process.env.DESCRIPTION": JSON.stringify(packageJson.description),
      "process.env.VERSION": JSON.stringify(packageJson.version),
      "process.env.AUTHOR.NAME": JSON.stringify(packageJson.author.name),
      "process.env.AUTHOR.EMAIL": JSON.stringify(packageJson.author.email),
      "process.env.AUTHOR.URL": JSON.stringify(packageJson.author.url),
      "process.env.CURRENCY_SYMBOL": JSON.stringify("SAR"),
      "process.env.PAYFORT_REDIRECT_URL": JSON.stringify(payfortRedirectionUrl),
      "process.env.IP_GEOLOCATION_API_URL": JSON.stringify(ipGeolocationApiUrl)
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? "[name].css" : "[name].css",
      chunkFilename: isDev ? "[id].css" : "[id].css"
    }),
    new CopyWebpackPlugin([
      {
        from: "./img/",
        to: "img/",
        ignore: [".DS_Store"]
      },
      {
        from: "./favicon.ico",
        to: "./"
      },
      {
        from: "./manifest.json",
        to: "./"
      },
      {
        from: "./sitemap.xml",
        to: "./"
      }
    ]),
    new StyleLintPlugin({ fix: true }),
    new WorkboxPlugin.InjectManifest({
      swSrc: "src/sw.js",
      swDest: "sw.js"
    })
  ].concat(process.env.DEPLOY ? [] : [new BundleAnalyzerPlugin()]),
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          fix: true,
          emitWarning: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["last 2 versions", "ie >= 11"] },
                useBuiltIns: "entry"
              }
            ],
            "@babel/preset-react"
          ]
        }
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false"
        ]
      },
      {
        test: /\.svg$/,
        loader:
          "url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]"
      },
      {
        test: /\.woff$/,
        loader:
          "url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]"
      },
      {
        test: /\.woff2$/,
        loader:
          "url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]"
      },
      {
        test: /\.[ot]tf$/,
        loader:
          "url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]"
      },
      {
        test: /\.eot$/,
        loader:
          "url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]"
      },
      {
        test: /\.modernizrrc.js$/,
        loader: "modernizr-loader"
      },
      {
        test: /\.modernizrrc(\.json)?$/,
        loader: "modernizr-loader"
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new TerserJSPlugin({
        cache: true,
        sourceMap: true,
        terserOptions: {
          compress: !isDev,
          mangle: true
        }
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          zindex: false
        }
      })
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      modernizr$: path.resolve(__dirname, "./.modernizrrc"),
      joi: "joi-browser"
    }
  }
};
module.exports = [node, web];
