class MyPromise {
  static PENDING = 'pending';
  static FUIFILLED = 'filfilled';
  static REJECTED = 'rejected';

  constructor(fn) {
    this.PromiseState = MyPromise.PENDING;
    this.PromiseResult = null;
    this.onFulfilledCallbacks = []; // 保存成功回调
    this.onRejectedCallbacks = []; // 保存失败回调
    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(result) {
    if(this.PromiseState === MyPromise.PENDING) {
      setTimeout(() => {
        this.PromiseState = MyPromise.FUIFILLED;
        this.PromiseResult = result;
        this.onFulfilledCallbacks.map(cb => {
          cb(this.PromiseResult);
        })
      })
    }
  }
  reject(reason) {
    if(this.PromiseState === MyPromise.PENDING) {
      setTimeout(() => {
        this.PromiseState = MyPromise.REJECTED;
        this.PromiseResult = reason;
        this.onRejectedCallbacks.map(cb => {
          cb(this.PromiseResult);
        })
      })
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
      throw reason;
    };
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.PromiseState === MyPromise.FUIFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.PromiseResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        })
      } else if (this.PromiseState === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.PromiseResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        })
      } else if (this.PromiseState === MyPromise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulfilled(this.PromiseResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.PromiseResult);
            resolvePromise(promise2, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        });
      }
    })
    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }
  
  if (x instanceof MyPromise) {
    if (x.PromiseState === MyPromise.PENDING) {
      x.then(
        result => {
          resolvePromise(promise2, result, resolve, reject);
        },
        reason => {
          reject(reason);
        }
      );
    } else if (x.PromiseState === MyPromise.FULFILLED) {
      // TODO: 为什么不调用 resolvePromise
      resolve(x.PromiseResult);
    } else if (x.PromiseState === MyPromise.REJECTED) {
      reject(x.PromiseResult);
    }
  } else if (x !==null && ((typeof x === 'object') || (typeof x === 'function'))) {
    //TODO: 为 then 对象 或者函数
    resolve(x);
  } else {
    resolve(x);
  }
}

const p1 = new MyPromise((resolve,reject) => {
  setTimeout(() => {
    console.log('1');
    resolve('done');
    // reject('reject');
    console.log('2');
  },2000)
})

p1.then(
  data => {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        reject("promise2 done")
      }, 5000)
    })
    // return () => {
    //   console.log(data);
    // }
  }
).then(null,e => {
  console.log(e);
})