# Vue 初始化都做了什么？
### createAPP() 创建App实例
vue初始化时会创建一个App实例，这个App实例是怎么创建的呢？又是什么样的呢？
#### 如何创建
  1. 首先vue会创建一个渲染器  **render** 
  2. 然后通过渲染器的 **createApp** 方法创建一个 **App** 实例
#### App实例长什么样
  * App实例是如下结构的对象，有我们熟悉的 **mount、use、mixin、component** 等方法
  ```js
  {
    _uid: uid++,
    _component: rootComponent as ConcreteComponent,
    _props: rootProps,
    _container: null,
    _context: context,
    _instance: null,

    version,

    get config() {...},

    set config(v) {...},

    use(plugin: Plugin, ...options: any[]) {
      ...
      return app
    },

    mixin(mixin: ComponentOptions) {
      ...
      return app
    },

    component(name: string, component?: Component): any {
      ...
      return app
    },

    directive(name: string, directive?: Directive) {
      ...
      return app
    },

    mount(...): any {...},

    unmount() {...},

    provide(key, value) {
      ...
      return app
    }
  }
  ```
### mount('#app)
在创建好 **App** 实例之后，就是我们的挂载，挂载会做什么呢？
1. 首先在 **mount** 方法中会创建虚拟dom --- **vNode**
2. 然后执行 **render**，通过 **patch** 方法将虚拟dom转化成真实dom，挂载在宿主元素上，即我们通过 **"#App"** 选择的元素