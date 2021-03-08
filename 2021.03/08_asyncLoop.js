/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2021-03-08 14:19:46
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2021-03-08 16:29:33
 * @Description: 循环中的异步操作处理
 */

/**
 * 让以下代码按顺序执行输出
  function asyncFunc() {
    return new Promise(reslove => reslove());
  }
  for (i = 0; i < 5; i++) {
   asyncFunc().then(() => console.log(i));
  }
 */
function asyncFunc(i) {
  return new Promise(reslove => reslove(i));
}

// 1. 使用let
// for (let i = 0; i < 5; i++) {
//   asyncFunc().then(() => console.log(i));
// }

// 2. 使用forEach
// const arr = [0, 1, 2, 3, 4];
// arr.forEach((_, i) => asyncFunc().then(() => console.log(i)));

// 3. 使用async/await
// async function someFunc() {
//   for (i = 0; i < 5; i++) {
//     await asyncFunc();
//     console.log(i)
//    }
// }
// someFunc();

// 4. 使用promise all
function someFunc() {
  let promises = [];
  for (let i = 0; i < 5; i++) {
    promises.push(asyncFunc(i));
  }
  return Promise.all(promises);
}
someFunc().then(res => console.log(res));

