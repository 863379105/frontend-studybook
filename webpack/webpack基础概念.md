# Webpack

### Install

```bush
  mkdir webpack-demo
  cd webpack-demo
  npm init -y
  npm install webpack@4 webpack-cli@3 -D
```

### Webpack Config

> 默认配置文件名称： webpack.config.js

```js
// base nodeJS
const path = require('path')
module.exports = {
  // mode
  mode: 'development',
  // entry
  // 单入口
  // 多入口，对应多出口
  // entry: './src/index.js', 
  entry: {
    index: './src/index.js',
    login: './src/login.js'
  },
  // output
  output: {
    // 生成资源的路径 必须是绝对路径
    path: path.resolve(__dirname, './build'),
    // 生成的资源叫什么
    // filename: 'index.js'
    filename: '[name].js' // 占位符
  },
  plugins: [],
  module: {
    rules: [
      test: /\.css$/,
      use: 'css-loader'
    ]
  }
}
```
### Mode

* development 开发模式
* production 生产模式，上线，优化
* node 不开启任何模式

### chunk | chunks | chunkName

* **chunk**
    代码片段，一个 module 对应一个 chunk
* **chunks**
    chunk 组，包含至少一个 chunk
* **chunkName**
    chunks 的有效代码片段组的名称

> 一个 bundle 对应一个 chunkName，一个 chunkName 对应一个 chunk 组（至少包含一个chunk，即一个 module ）

### plugins

#### html-webpack-plugin

```bush
  npm install html-webpack-plugin -D
```

```
const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new htmlwebpackplugin({
      template: './src/public/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new htmlwebpackplugin({
      template: './src/public/login.html',
      filename: 'login.html'
    })
  ]
}
```

#### clean-webpack-plugin

```bush
  npm install clean-webpack-plugin -D
```

```
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  plugins: [
    new CleanWebpackPlugin()
  ]
}
```

#### mini-css-extract-plugin

```bush
  npm install mini-css-extract-plugin -D
```

```
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
    ],
  },
}
```



### loader

> webpack 默认只会识别打包 js 、 json 类型的文件

#### css-loader

```bush
  npm install css-loader -D
```

```
module.exports = {
  module: {
    rules: [
      test: /\.css$/,
      use: 'css-loader'
    ]
  }
}
```

#### style-loader

```bush
  npm install style-loader -D
```

```
module.exports = {
  module: {
    rules: [
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    ]
  }
}
```