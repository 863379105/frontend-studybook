# Webpack多页面打包解决方案

**思路:** 通过 `htmlwebpackplugin` 插件，我们可以对每个入口文件和将要生成的html对应起来，观察 `entry` 和 `htmlwebpackplugin` 的关系

```js
module.exports = {
  entry: {
    index: './src/index.js',
    login: './src/login.js'
  },
  plugins: [
    new htmlwebpackplugin({
      template: './src/public/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new htmlwebpackplugin({
      template: './src/public/login.html',
      filename: 'login.html'
    }),
  ],
}
```
发现 `entry` 中的一个 `key` 对应着一个 `new htmlwebpackplugin({...})` ，于是我们可以在webpack加载配置文件之前，自动生成这两个配置。

### 规范

我们需要约定好一个目录层级

### code
```js
// webpack.config.js

const path = require('path')
const { join } = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')

const glob = require('glob')

const setMPA = function() {
  const entry = {};
  const htmlwebpackplugins = [];
  
  // 1、 查询页面入口模块 路径 及相应的html模块
  const entryPath = glob.sync(path.join(__dirname, "./src/*/index.js"))
  // 2、 提取页面入口名称， 用于entry的chunkName
  entryPath.map(path => {
    const entryName = path.match(/src\/(.*)\/index\.js$/)[1];
    entry[entryName] = path;
    htmlwebpackplugins.push(
      new htmlwebpackplugin({
        template: join(__dirname, `./src/${entryName}/index.html`),
        filename: `html/${entryName}.html`,
        chunks: [`${entryName}`]
      })
    )
  })
  return {
    entry,
    htmlwebpackplugins
  }
}

const { entry, htmlwebpackplugins } = setMPA();

module.exports = {
  entry,
  plugins: [
    ...htmlwebpackplugins
  ],
  ... // 其他配置
}

```