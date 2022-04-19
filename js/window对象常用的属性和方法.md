---
theme: channing-cyan
---

# window对象常用的属性和方法

> 文章引用 [window对象常用的属性和方法](https://www.jianshu.com/p/b8ca6d923fec)

## window

window对象是 BOM 的核心对象，它表示浏览器的一个实例。在浏览器中，既是javascript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象，这就意味着在网页中定义的任意变量、函数、对象都是以window作为Global对象。

所有在全局作用域中声明的变量、函数、对象都会作为window的属性和方法。

## 常见的属性

### window.innerHeight和window.innerWidth

| 属性                 | 语法     | 描述                | 补充说明                     |
| ------------------- | -------- | ------------------ | --------------------------- |
| window.innerHeight | var intViewportHeight = window.innerHeight; | 浏览器窗口的视口（viewport）高度（CSS布局占据的浏览器窗口的高度），如果存在水平滚动条，则包括它 。属性只读，，且没有默认值 | 任何窗口对象都支持 innerHeight 属性 |
| window.innerWidth  | var intViewportWidth = window.innerWidth;   | 浏览器视口（viewport）宽度（单位：像素），如果存在垂直滚动条则包括它。属性只读，，且没有默认值                 | 任何窗口对象都支持 innerWidth 属性  |


### window.scrollX 和 window.scrollY

| 属性             | 语法                      | 描述                            | 补充说明                          |
| -------------- | ----------------------- | ----------------------------- | ----------------------------- |
| window.scrollX | var x = window.scrollX; | 返回文档/页面水平方向滚动的像素值，值随着滚动位置变化而变 | pageXOffset 属性是 scrollX 属性的别名 |
| window.scrollY | var y = window.scrollY; | 返回文档在垂直方向已滚动的像素值              | pageYOffset 属性是 scrollY 属性的别名 |

### window.frames

| 属性            | 语法                         | 描述                             |
| ------------- | -------------------------- | ------------------------------ |
| window.frames | frameList = window.frames; | 返回当前窗口，一个类数组对象，列出了当前窗口的所有直接子窗口 |

window.frames返回一个类似数组的对象，成员为页面内的所有框架，包括frame元素和iframe元素。需要注意的是，window.frames的每个成员对应的是框架内的窗口（即框架的window对象），获取每个框架的DOM树，需要使用window.frames[0].document\
iframe元素遵守同源政策，只有当父页面与框架页面来自同一个域名，两者之间才可以用脚本通信，否则只有使用window.postMessage方法。\
在iframe框架内部，使用window.parent指向父页面。

### window.navigator

window对象的navigator属性，指向一个包含浏览器相关信息的对象。它返回一个navigator对象的引用,可以用它来查询一些关于运行当前脚本的应用程序的相关信息.

| 属性                         | 描述                             | 补充说明                                                                                                                            |
| -------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| window.navigator.userAgent | 返回浏览器的User-Agent字符串，用来标示浏览器的种类 | 通过userAgent属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且无法保证未来的适用性。现在一般不再识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的JavaScript功能 |

### window.screen

screen对象包含了显示设备的信息。

| 属性                       | 描述            | 补充说明 |
| ------------------------ | ------------- | ---- |
| window.screen.height     | 显示设备的高度，单位为像素 |      |
| window.screen.width      | 显示设备的宽度，单位为像素 |      |
| window.screen.avaiHeight | 可用的屏幕高度       |      |
| window.screen.avaiWidth  | 可用的屏幕宽度       |      |

### window.location

| 属性                       | 描述                      | 补充说明                                                                      |
| ------------------------ | ----------------------- | ------------------------------------------------------------------------- |
| window.location.href     | 返回当前页面的 URL             | window.location.href = '你的链接 ' 会从当前页面跳转到你的链接（注意href的协议不能省，或者写// 表示继承当前协议） |
| window.location.protocol | 获取当前页面的协议               |                                                                           |
| window.location.hostname | 获取当前域名                  |                                                                           |
| window.location.port     | 获取端口                    |                                                                           |
| window.location.pathname | 获取路径                    |                                                                           |
| window.location.search   | 查询字符串                   |                                                                           |
| window.location.hash     | 获取锚点                    |                                                                           |
| window.location.origin   | 返回url中完整的协议和主机地址部分,包括端口 | IE不支持                                                                     |

### window.name

| 属性          | 语法                                           | 描述         | 补充说明                                                            |
| ----------- | -------------------------------------------- | ---------- | --------------------------------------------------------------- |
| window.name | string = window.name;/ window.name = string; | 获取/设置窗口的名称 | 在某些框架里，该属性也被用于作为 JSONP 的一个更安全的备选来提供跨域通信（cross-domain messaging） |

### window.parent

| 属性            | 描述           | 补充说明                                                                                   |
| ------------- | ------------ | -------------------------------------------------------------------------------------- |
| window.parent | 返回当前窗口的父窗口对象 | 如果一个窗口没有父窗口，则它的 parent 属性为自身的引用；如果当前窗口是一个 <iframe>，<object>，或者 <frame>，则它的父窗口是嵌入它的那个窗口 |

### window.self

| 属性          | 描述                    | 补充说明                                                                                    |
| ----------- | --------------------- | --------------------------------------------------------------------------------------- |
| window.self | 返回一个指向当前 window 对象的引用 | 常用来判断当前 window 是不是父 frameset 中的第一个 frame ，`if (window.parent.frames[0] != window.self)` |

### window.top

| 属性         | 描述               | 补充说明                                       |
| ---------- | ---------------- | ------------------------------------------ |
| window.top | 返回窗口体系中的最顶层窗口的引用 | 当你在处理父窗口的子框架（subframe），而你想获取顶层框架时，这个属性相当有用 |

## 常见方法

### window.scrollTo()、window.scrollBy()以及window.scroll()

| 方法                | 语法                                | 描述                                       | 补充说明                         |
| ----------------- | --------------------------------- | ---------------------------------------- | ---------------------------- |
| window.scrollTo() | window.scrollTo(x-coord,y-coord ) | 滚动到文档中的某个坐标                              |                              |
| Window.scrollBy() | window.scrollBy(X, Y);            | 在窗口中按指定的距离滚动文档。X、Y分别是水平和垂直方向滚动的偏移量，单位：像素 | 正数坐标会朝页面的右下方滚动，负数坐标会滚向页面的左上方 |
| window.scroll()   | window.scroll(x-coord, y-coord)   | 滚动窗口至文档中的特定位置                            |                              |

### window.getComputedStyle() 方法

getComputedStyle是一个可以获取当前元素所有最终使用的CSS属性值。返回的是一个**实时的**CSS样式声明对象([object CSSStyleDeclaration])

| 方法                        | 语法                                                         | 描述                                                                       | 补充说明                                                                                       |
| ------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| window.getComputedStyle() | let style = window.getComputedStyle(element, [pseudoElt]); | element 指用于获取计算样式的element；pseudoElt （可选）指定一个要匹配的伪元素的字符串。必须对普通元素省略（或null） | 从getComputedStyle返回的对象是只读的                                                                 |
| element.currentStyle      |                                                            | 功能同上，这个是低版本IE的实现方案                                                       | [兼容性](https://link.jianshu.com?t=https%3A%2F%2Fcaniuse.com%2F%23search%3DgetComputedStyle) |

兼容写法：

```
<body>
<div id="ct">div
    <img class="img" src="https://i.loli.net/2018/03/05/5a9d2c1f93351.jpg" alt="" width="400px" height="260px">
</div>

<script>
    function $(selector) {
        return document.querySelector(selector)
    }

    var ct = $('#ct'),
        img = $('.img');

    function getFinalStyle(t) {
        return t.currentStyle ? t.currentStyle : window.getComputedStyle(t)
    }

    console.log('div的宽度是' + getFinalStyle(ct).width); // div的宽度是1420px
    console.log('div的高度是' + getFinalStyle(ct).height); // div的高度是265px
    console.log('图片的宽度是' + getFinalStyle(img).width); // 图片的宽度是400px
    console.log('图片的高度是' + getFinalStyle(img).height); // 图片的高度是260px

</script>
</body>
```

### alert()，prompt()，confirm() 方法

alert()、prompt()、confirm()都是浏览器用来与用户互动的方法。它们会弹出不同的对话框，要求用户做出回应。\
alert()、prompt()、confirm()这三个方法弹出的对话框，都是浏览器统一规定的式样，是无法定制的。

| 方法        | 语法                                   | 描述                                                                                                                                            | 补充说明                                                                                                                                                 |
| --------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| alert()   | window.alert(message);               | 只有一个“确定”按钮，往往用来通知用户某些信息                                                                                                                       | message是要显示在对话框中的文本字符串,如果传入其他类型的值,会转换成字符串                                                                                                            |
| prompt()  | result = window.prompt(text, value); | 弹出的对话框，在提示文字的下方，还有一个输入框，要求用户输入信息，并有“确定”和“取消”两个按钮。它往往用来获取用户输入的数据。prompt方法的第二个参数是可选的，但是如果不提供的话，IE浏览器会在输入框中显示undefined。因此，最好总是提供第二个参数，作为输入框的默认值。 | prompt方法的返回值是一个字符串（有可能为空）或者null，具体分成三种情况： 1. 用户输入信息，并点击“确定”，则用户输入的信息就是返回值。 2. 用户没有输入信息，直接点击“确定”，则输入框的默认值就是返回值。 3. 用户点击了“取消”（或者按了Escape按钮），则返回值是null。 |
| confirm() | result = window.confirm(message);    | 除了提示信息之外，只有“确定”和“取消”两个按钮，往往用来征询用户的意见。confirm方法返回一个布尔值，如果用户点击“确定”，则返回true；如果用户点击“取消”，则返回false。|                                                              |

