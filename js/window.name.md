# window.name

### window.name是什么

`` window.name``，故名思意，是浏览器 ``window`` 对象下面的 ``name`` 属性。

默认是一个空字符串，可以读写。

### window.name有什么特性

1. 跨页面特性
2. 只能储存字符串

#### 跨页面特性

只要当前窗口不发生改变，窗口中的页面如何跳转，都不会改变当前窗口的 ``window.name``的值，除非手动修改了``window.name``的值

#### 只能储存字符串

字面意思，``window.name`` 只能用来储存字符串数据。