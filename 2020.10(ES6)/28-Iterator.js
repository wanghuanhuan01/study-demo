// 1. 对于类数组的对象(有数值键名和length属性)，可以直接引用数组的Iterator接口
function demo1() {
  let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator],
  };
  for (const i of obj) {
    console.log(i);
  }
}

// 2. 调用Iterator接口的场合：扩展运算符（只要部署了Iterator接口的数据结构就可以对它使用扩展运算符转换成数组）
function demo2() {
  let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator],
  };
  let arr = [...obj];
  console.log(arr);
}

// 3. 调用Iterator接口的场合：字符串(也属于类数组对象)
function demo3() {
  // 可通过覆盖原生的Symbol.iterator方法，达到修改遍历器行为的目的
  let str = new String('hi');
  str[Symbol.iterator] = function() {
    return {
      next: function() {
        if (this._first) {
          this._first = false;
          return { value: 'bye', done: false };
        } else {
          return { done: true }
        }
      },
      _first: true,
    };
  }
  console.log(...str); 
}

// 4.Iterator和Generator函数
function demo4() {
  const iteratorObj = {
    *[Symbol.iterator] () {
      yield 1;
      yield 2;
      yield 3;
    }
  };
  for (const i of iteratorObj) {
    console.log(i);
  }
}

// 5. for of只会返回键名为数值的键值
function demo5() {
  const arr = ['a', 'b', 'c', 'd'];
  arr.foo = 'foo';
  // for in 和for of的区别： for in读取键名，for of读取键值
  for (const iterator of arr) {
    console.log(iterator); // a, b, c, d
  }
  console.log('-------');
  for (const key in arr) {
    console.log(key); // 0, 1, 2, 3, foo
  }
}

/**
 * 6. Set和Map使用for of
 * 注意：使用for of遍历Set返回的是值，Map返回的是键值对数组
 */
function demo6() {
  const setObj = new Set(['a', 'b', 'c', 'c'])
  for (const iterator of setObj) {
    console.log('set---', iterator); // a, b, c
  }
  const mapObj = new Map();
  mapObj.set('name', 'whh');
  mapObj.set('age', 18);
  for (const m of mapObj) {
    console.info('map---', m); // [ 'name', 'whh' ], [ 'age', 18 ]
  }
}
demo6();