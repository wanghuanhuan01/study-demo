// 1. promise实例新建后就会立即执行
// let promise = new Promise((resolve) => {
//   console.log('promise');
//   resolve();
// });
// then会等所有同步函数执行完后再执行
// promise.then(() => {
//   console.log('then');
// });
// console.log('hi');

// 2. 带参数的resolve和rejected函数
// let p1 = new Promise((resolve, rejected) => {
//   setTimeout(() => rejected(new Error('出错')), 300);
// });
// let p2 = new Promise((resolve, rejected) => {
//   setTimeout(() => resolve(p1), 100);
// });
// p2.then(res => console.log(res))
//   .catch(err => console.error(err));

// 3. Promise.catch()
// 当promise对象状态发生改变后就不再改变了
// const p3 = new Promise((resolve, rejected) => {
//   resolve('ok');
//   throw new Error('test');
// });
// p3.then(val => console.log(val));
// 与上面例子不同的是，加了个定时器抛出异常，会在当前promise执行后抛出异常
const p4 = new Promise((resolve, rejected) => {
  resolve('ok');
  setTimeout(() => { throw new Error('test'); }, 0);
});
p4.then(val => console.log(val));
console.log('123');