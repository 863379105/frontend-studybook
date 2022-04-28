class MyPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';
  constructor(func) {
    this.PromiseState = MyPromise.PENDING;
    this.PromiseResult = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch(e) {
      this.reject(e)
    }
  }
  resolve(result) {
    if (this.PromiseState === MyPromise.PENDING) {
      setTimeout(() => {
        this.PromiseState = MyPromise.FUIFILLED
        this.PromiseResult = result;
        this.onFulfilledCallbacks.map(cb => {
          cb()
        })
      })
    }
  }
  reject(reason) {
    if (this.PromiseState === MyPromise.PENDING) {
      setTimeout(() => {
        this.PromiseState = MyPromise.FUIFILLED
        this.PromiseResult = reason;
        this.onRejectedCallbacks.map(cb => {
          cb();
        })
      })
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : value => value;

    const promise2 = new MyPromise((resolve, reject) => {
      if (this.PromiseState === MyPromise.FUIFILLED) {
        try {
          let x = onFulfilled(this.PromiseResult);
          resolvePromise(promise2, x, resolve, reject)
        } catch(e) {
          reject(e);
        }
      }
      if (this.PromiseState === MyPromise.REJECTED) {
        try {
          let x = onRejected(this.PromiseResult);
          resolvePromise(promise2, x, resolve, reject)
        } catch(e) {
          reject(e);
        }
      }
      if (this.PromiseState === MyPromise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulfilled(this.PromiseResult)
            resolvePromise(promise2, x, resolve, reject)
          } catch(e) {
            reject(e)
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.PromiseResult)
            resolvePromise(promise2, x, resolve, reject)
          } catch(e) {
            reject(e)
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
  if (x instanceof myPromise) {
    if (x.PromiseState === myPromise.PENDING) {
        x.then(y => {
            resolvePromise(promise2, y, resolve, reject)
        }, reject);
    } else if (x.PromiseState === myPromise.FULFILLED) {
        resolve(x.PromiseResult);
    } else if (x.PromiseState === myPromise.REJECTED) {
        reject(x.PromiseResult);
    }
  } else if (x !== null && ((typeof x === 'object' || (typeof x === 'function')))) {
    //...
  } else {
    return resolve(x);
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve('done')
    reject('fail');
  }, 2000);
})

p.then((data) => {
  console.log(data);
}, (error) => {
  console.log(error);
})