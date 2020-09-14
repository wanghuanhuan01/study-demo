// 题目1
function ques1() {
  Promise.resolve(1)
         .then(2)
         .then(Promise.resolve(3))
         .then(console.log);
}
/**
 * 1.如果Promise.resolve的参数是一个不具有then方法的对象，则生成该对象的时候状态就为resolved
 * 2. .then()方法需要接受一个函数，如果接受的不是函数，实际上等于then(null),所以1会链式传给最后一个then
 */
// ques1(); // 1

// 题目2:红灯3秒亮一次，绿灯1秒亮一次，黄灯2s亮一次，用Promise实现让三个灯不断交替重复亮灯
/**
 * 思路：使用Promise.then实现交替，采用递归实现重复
 */
function ques2() {
  function red() {
    console.log('red');
  }
  function green() {
    console.log('green');
  }
  function yellow() {
    console.log('yellow');
  }
  const light = (fn, timer) => {
    return new Promise(resolve => {
      setTimeout(() => {
        fn();
        resolve();
      }, timer);
    });
  };
  const step = () => {
    return Promise.resolve()
                  .then(() => light(red, 3000))
                  .then(() => light(green, 2000))
                  .then(() => light(yellow, 1000))
                  .then(() => step());
  }
  step();
}
ques2();