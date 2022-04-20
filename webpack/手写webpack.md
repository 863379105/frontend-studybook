# 手写mini-webpack

### code
```js
const fs = require('fs');
const path =require('path');

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const { transformFromAst } = require('@babel/core')

const { isString } = require('./utils');

class Webpack {
  constructor(option) {
    this.entry = option.entry;
    this.output = option.output;
    this.modules = {}
  }
  run() {
    if (isString(this.entry)) {
      this.entry = {
        main: this.entry
      }
    }
    Object.keys(this.entry).map(key => {
      this.modules[this.entry[key]] = this.parse(this.entry[key]);
    })
    // Object.keys(this.modules).map(key => {
      const dep = this.modules['./src/index.js']
      this.bundleFile(dep)
    // })
  }
  parse(modulePath,dep = {}) {
    // 分析模块
    // 1. 检查依赖
    // 2. 编译模块
    const dependencies = {};
    const content = fs.readFileSync(modulePath,'utf-8')
    const ast = parser.parse(content,{
      sourceType: 'module'
    })
    traverse(ast, {
      ImportDeclaration({node}) {
        //TODO: './' 存在问题
        dependencies[node.source.value] = 
          './' + path.join(path.dirname(modulePath), node.source.value);
      }
    })
    const { code } = transformFromAst(ast, null, {
      presets: ['@babel/preset-env']
    })
    dep[modulePath] = {
      dependencies,
      code
    }
    Object.keys(dependencies).map(key => {
      this.parse(dependencies[key], dep)
    })
    return dep;
  }
  bundleFile(dep) {
    const bundlePath = path.join(this.output.path, this.output.filename);

    const dpMap = JSON.stringify(dep);
    const content = `
      (function(modulesInfo){
        function require(modulePath) {

          function fixPath(relativePath) {
            return require(modulesInfo[modulePath].dependencies[relativePath]);
          }

          const exports = {}

          (function(require, code){
            eval(code);
          })(fixPath, modulesInfo[modulePath].code)

          return exports;
        }

        require('${'./src/index.js'}');

      })(${dpMap})
    `
    fs.writeFileSync(bundlePath, content, 'utf-8');
  }
}

module.exports = Webpack;



```