/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2020-11-23 16:04:53
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2020-11-24 15:28:42
 * @Description: 
 */
/** ---------------------------
 * @description: 1. for of的使用
 * @param {*}
 * @return {*}
 */
// a.使用for of循环generator可以不使用next()
function demo1() {
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
  }
  for (const iterator of foo()) {
    console.log(iterator);
  }
}

// b. 使用for of和generator实现斐波那契数列
function demo2() {
  function* fibonacci() {
    let [prev, curr] = [1, 0];
    for(;;) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
  }
  for (const n of fibonacci()) {
    if (n > 10) break;
    console.log(n);
  }
}

// c. 使用Generator函数和 for of给本身不具备Iterator接口的对象部署Iterator接口
function demo3() {
  function* objectEntries() {
    let propKeys = Object.keys(this);
    for (const keys of propKeys) {
      yield [keys, this[keys]];
    }
  }
  let nameObj = { firstName: 'Jane', laseName: 'Done' };
  // 通过给对象添加Symbol.iterator属性的方式
  nameObj[Symbol.iterator] = objectEntries;
  for (const [key, value] of nameObj) {
    console.log('key---', key, 'value---', value);
  }
}

/** ---------------------------
 * @description: 2. yield*的使用
 * @param {*}
 * @return {*}
 */
/**
 * a. 当在一个generator函数内部调用另一个generator函数时，可以使用yield*表达式
 * (在yield*后面跟一个generator函数，等同于使用for of遍历这个generator函数)
 */
function demo4() {
  function* bar() {
    yield 'x';
    yield 'y';
  }
  function* foo() {
    yield 1;
    yield 2;
    yield* bar();
    yield 3;
  }
  for (const iterator of foo()) {
    console.log(iterator);
  }
}

// b. yield*可以遍历任何有Iterator接口的数据
function demo5() {
  function* gen() {
    yield* ['a', 'b', 'c'];
  }
  console.log(gen().next().value); // a
}

// c. 使用yield*平铺嵌套数组
function demo6() {
  function* iterTree(tree) {
    if (Array.isArray(tree)) {
      for (let i = 0; i < tree.length; i++) {
        yield* iterTree(tree[i]);
      }
    } else {
      yield tree;
    }
  }
  const tree = ['a', ['b', 'c'], 'd'];
  console.log([...iterTree(tree)]);
}

/**
 * @description: 3. Generator函数的this
 * @param {*}
 * @return {*}
 */
function demo7() {
  function* gen() {
    this.a = 'a';
  }
  const obj = gen();
  // undefined，因为迭代器返回的总是一个迭代器对象，而不是this对象
  console.log(obj.a);
}

demo7();
