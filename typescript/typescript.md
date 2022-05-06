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

### Class With Interface

### enum 

### 泛型

#### 普通泛型

#### 约束泛型

