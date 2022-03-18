# app.mount('#app')

vue在创建了app实例之后，会执行 `app.mount('#app')` 方法，将实例挂载到宿主元素上，那么在这个方法里面，vue 具体干了什么呢？

通过以下流程图，来了解vue在mount中都做了什么:

![mount](./mount.png)