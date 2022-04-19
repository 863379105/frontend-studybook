# 自定义loader

在 webpack 中，我们可以用自定义 loader 来处理 module ，写一个自定义 loader 需要遵循一些规则。

webpack 中的自定义 loader 其实就是一个函数，接受需要处理的 module 内容作为参数， 返回处理后的内容。

### 配置自定义loader

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: path.resolve(__dirname, './myloaders/test-loader.js'),
      },
    ],
  },
};
```

### test-loader

```js
// test_loader.js
module.exports = function testLoader(source) {
  return source;
}

```

### 自定义 loader 参数

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, './myloaders/test-loader.js'),
          options: {
            name: "test-loader"
          }
        },
      },
    ],
  },
};
```

```js
// test_loader.js
module.exports = function testLoader(source) {
  // 通过 this.query 获取 传入的 options 参数
  return source;
}

```