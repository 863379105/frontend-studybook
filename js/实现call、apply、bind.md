---
theme: hydrogen
---
# 实现call、apply、bind

想要实现call、apply、bind，首先我们要知道这三个方法是用来干嘛的。

这三个方法是在函数实例原型上的方法，函数实例调用这三个方法可以改变函数内部的 `this` 指向，这就是这三个方法最重要的作用，具体这三个方法有什么使用区别就不详细阐述了，我们要来如何实现这三个方法？

首先我们要知道函数函数的 `this` 是在什么时候被绑定的，有哪些办法可以改变 `this`。

函数的 `this` 是在函数执行，创建函数执行上下文的时候被确定的，既然如此，我们也只能在这个时候改变函数的 `this` 指向。

那么函数的不同调用，会带来 `this` 的表现形式不一样，有如下四种调用：

1. new 一个构造函数， `this` 指向`new`过程创建的对象
2. 普通调用，一般指向  `window` 
3. 通过对象调用，`this` 指向该对象 
4. 通过call、apply、bind的方式

> 想了解函数的调用带来的 `this` 的不同表现形式，详细可以参考 [# this的四种指向形式](https://juejin.cn/post/7054586334177919013)

显然这里我们可以巧妙的通过对象调用，隐式改变 `this` ，我们来实现一下。

### myCall
```js

Function.prototype.myCall = function(context, ...arguments) {
    if(context === null || context === undefined){
        context = window // 如果context不存在，则让context 指向 window
    } else {
        context = Object(context)
    }
    context.fn = this 
    // 这里的 this 指向调用 myCall 的函数，即我们要改变 this 的目标函数
    // 通过将目标函数绑定到 context 上，再调用目标函数，此时目标函数的 this 将会指向 context
    // 然后再执行目标函数
    // 最后讲目标函数从 context 上移除
    let result = context.fn(...arguments)
    delete context.fn
    return result
}

```

### myApply
**apply的实现和call类似**
```js

Function.prototype.myApply = function(context,arguments) {
  if(context === null || context === undefined){
    context = window // 如果context不存在，则让context 指向 window
  } else {
      context = Object(context)
  }
  context.fn = this 
  let result = arguments instanceof Array ? context.fn(...arguments) : context.fn()
  delete context.fn
  return result
}

```

### myBind

bind方法同上面两种方法有点区别，它返回的是一个函数，这里简单实现一下，（因为我也没完全搞懂，等我完全搞懂再来更新）实际上的bind方法比较复杂。

```js

Function.prototype.myBind = function(context, ...outArg) {
  if(context === null || context === undefined){
    context = window // 如果context不存在，则让context 指向 window
  } else {
      context = Object(context)
  }
  context.fn = this 

  return function(...innerArg) {
    let result = context.fn(...outArg, ...innerArg)
    delete context.fn
    return result
  }
}

```



