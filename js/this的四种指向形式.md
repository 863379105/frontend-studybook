---
theme: hydrogen
---

# this的四种指向形式

js调用函数的四种方式会带来四种`this`指向形式，各有差异。

### 普通调用

`this` 指向 `window`,如：

```js
function foo(...){
    ...
}
foo() // 在全局执行上下文中调用，this 指向 window
```

需要注意的是，如果在严格模式下执行，`this` 会指向 `undefined`

### 对象调用

指向调用的对象，如：

```js
var obj = {
    foo: function(...){
        ...
    }
}
obj.foo() // 通过obj对象调用，this 指向 obj
```

### 通过 `new` 的方式调用构造函数

 通过 `new` 的方式调用构造函数, `this` 会指向 `new` 过程中创建的空对象，如:
```js
function Person(name){
    this.name = name
}

var lb = new Person('lb')
// new 的过程如下
{
    var obj = {}
    this = obj // `this` 会指向 `new` 过程中创建的空对象
    this.name = name
    ....
}
```

### 通过`call`、`apply`、`bind`的方式调用

通过`call`、`apply`、`bind`的方式调用，`this` 会指向这三个方法传入的第一个参数，如

```js
function foo(name){
 console.log(this)
}
var obj = {name: 'lb'}
foo.call(obj) // this 指向obj 
foo.apply(obj) // this 指向obj
foo.bind(obj)() // this 指向obj
```

### 注意

箭头函数的 `this` 比较特殊，因为箭头函数没有自己的 `this` ，它的`this`是继承自父作用域的`this`。