# Postcss in Webpack

> 在 webpack 中，当我们想使用 postcss ，需要通过 postcss-loader 将 webpack 和 postcss 连接起来，在通过相应的 postcss.config.js 配置文件，使用 postcss 中的插件。

### postcss

PostCSS 是一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能。

PostCSS 在工业界被广泛地应用，其中不乏很多有名的行业领导者，如：维基百科，Twitter，阿里巴巴， JetBrains。PostCSS 的 Autoprefixer 插件是最流行的 CSS 处理工具之一。

PostCSS 接收一个 CSS 文件并提供了一个 API 来分析、修改它的规则（通过把 CSS 规则转换成一个抽象语法树的方式）。在这之后，这个 API 便可被许多插件利用来做有用的事情，比如寻错或自动添加 CSS vendor 前缀。

### postcss-loader

当我们通过 webpack 打包样式文件时，我们也可以借助 postcss 来对样式做处理，我们需要借助 `postcss-loader` ，来架起 webpack 和 postcss 之间的桥梁。

#### Install

```bush
npm install --save-dev postcss-loader postcss
```

#### webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ],
      },
    ],
  },
};
```

### postcss 插件

我们知道 postcss 本身是没有什么功能，他处理css主要是依赖他的插件，我们需要安装和配置插件，来达到我们处理css的目的。

#### postcss.config.js

```js
module.exports = {
  plugins: [
    // ...  插件列表 
  ],
};
```

#### Autoprefixer

你需要安装 autoprefixer：

```js
npm install autoprefixer -D
```

postcss.config.js 配置：

```js
module.exports = {
  plugins: [
    [
      'autoprefixer',
      {
        overrideBrowserslist: ["last 2 versions", ">1%"]
      }
    ]
  ]
}
```

package.json 配置

```js
{
  ...,
  "browserslist": ["last 2 versions", ">1%"]
}
```