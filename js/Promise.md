# Promise

### Questions

* **Q1**

```js

const p = new Promise((resolve,reject) => {
  ....
})

// 写法一
p.then((result) => {
  ...
}, (reason) => {
  ...
})

// 写法二

p.then((result) => {
  ...
}).catch((reason) => {
  ...
})

```

> 为什么写法二优于写法一

* **Q2**

```js
console.log(1);
let promise = new Promise((resolve, reject) => {
    console.log(2);
+   setTimeout(() => {
        resolve('这次一定');
+       console.log(4);
+   });
})
promise.then(
    result => {
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);
```