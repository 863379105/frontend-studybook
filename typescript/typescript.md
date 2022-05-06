# TypeScript

### 基础数据类型

* Boolean
* String
* Number
* Undefined
* Null
* Symbol
* BigInt

typescript 定义变量：

```typescript
let isDone: boolean = false;
let age: number = 22;
let name: string = 'Jackson';
let u: undefined = undefined;
let n: null = null;

// undefined 和 null 是所有类型的子类型
let year: number = undefined;
let words: string = null;

```

### 复杂数据类型

* Object

### any类型

当我们不确定一个变量是什么类型的时候我们可以使用 any：

```ts
let notSure: any = 'notsure';
notSure = 20;
```

当一个变量定义为 any 时，可以接受任何类型的值，但是不推荐使用

### 联合类型

当我们知道一个变量可能为几种类型中的一种，我们可以用联合类型定义：

```ts
let nos: numbere | string = 123;
nos = '123';
```

### 数组类型

```ts
let arr: number[] = [1,2,3];
let strnum: [string,number] = ['string', 2022];
```
typescript 中类数组不能这样定义，ts 为类数组类型提供了相应的接口

### Interface

#### 作用
  * 对对象的形状进行描述

    ```ts
    interface IPerson {
      name: string;
      age?: number; // 可选属性
      readonly id: number; // 只读属性
    }

    let jack: IPerson = {
      name: 'jack',
      age: 18,
      id: 1
    }
    ```

  * 对类进行抽象

    ```ts
    interface Radio {
      switchRadio(): void
    }

    interface Battery {
      checkBatteryStatus(): void
    }

    // 接口之间可以可以继承
    // interface Battery extends Radio {
    //   checkBatteryStatus(): void
    // }

    class Car implements Radio {
      ...
      switchRadio() {}
    }

    class Cellphone implements Radio, Battery {
      ...
      switchRadio() {}
      checkBatteryStatus() {}
    }
    ```

  * Duck Typing（推断类型）

### Function

```ts
function add(x: number, y: number, z: number = 10, a?:number): number {
  return x + y + z;
}

// 如果定义时不声明变量类型，ts 会根据赋值推断出变量类型
const test = function(x: number, y: number): number {
  return x + y;
}

const testCopy: (x: number, y: number) => number = test;
```

### Class

#### 修饰符

* public

默认属性和方法都是 public

* private

用 private 修饰的属性和方法，外部无法访问，子类也无法访问

* protected

用 protected 修饰的属性和方法，外部无法访问，子类可以访问

* static

用 static 修饰的属性和方法，无法通过实例访问，只能通过类访问

* readonly

用 protected 修饰的属性和方法，只能访问不能修改

### enum 

### 泛型

```ts
function getValue(arg) {
  return arg;
}

const value = getValue(123);
```

如上述代码，当我们调用函数之前，并不知道参数的类型，也不知道返回值的类型，当调用的时候，会导致类型丢失。

当定义时类型不确定，参数和返回值有一定关系时，可以使用泛型定义类型。

```ts
function getValue<T>(arg: T): T {
  return arg;
}

const value = getValue(123);
```

泛型便是用来解决此类问题。

#### 泛型与函数

##### 普通泛型

```ts
function getValue<T>(arg: T): T {
  return arg;
}

const value = getValue(123);
```
上述就是一个普通泛型的使用。

##### 约束泛型

```ts
function getValue<T>(arg: T): T {
  let len: number = arg.length;
  return arg;
}

const value = getValue(123);
```

如上，当我们需要调用 arg 的 length 方法，但是我们此时不知道啊 arg 的类型，更无法知道 arg 是否存在 length 方法，此时是会产生错误的。

普通泛型在这里已经无法满足我们的使用了，于是有了约束泛型，通过和 interface 的配合，使用约束泛型。

```ts
interface IWithLength{
  length: number;
}

function getValue<T extends IWithLength>(arg: T): T {
  let len: number = arg.length;
  return arg;
}

const value = getValue('123');
```

通过上述代码，我们约束了我们的泛型必须是包含 length 属性的类型。

#### 泛型与类

```ts

class Queue<T> {
  private data = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const strQueue = new Queue<string>();

const numQueue = new Queue<number>();

```

#### 泛型与接口

```ts
interface KeyPair<T,U> {
  key: T;
  value: U
}

let kp1: KeyPair<number,string> = {
  key: 202205,
  value: "20220506"
}

let kp2: KeyPair<string,number> = {
  key: "202205",
  value: 20220506
}
```

#### 泛型与接口与函数

```ts
interface IFun<T> {
  (a: T, b: T): T
}

function plus(a: number, b: number): number {
  return a + b;
}

function connect(a: string, b: string): string {
  return a + b;
}

const a: IFun<number> = plus;
const b: IFun<string> = connect;

```