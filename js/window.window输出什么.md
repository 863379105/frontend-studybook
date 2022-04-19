# window.window输出什么？

### window.window

window.window输出window本身

### 为什么这么设计
在Html规范中，提供了Window接口，window代表的其实是Window的一个实例，所有在全局中声明的变量及方法都会挂载到window中，作为window的属性，为了方便的应引用window中的属性和方法，让 `window.window = window` ，这样就不用每次都声明 `var window = this` 。