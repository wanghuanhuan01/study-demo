/**
 * Promise.resolve():将现有对象转为Promise对象
 */
function resolve() {
  setTimeout(() => {
    console.log('333');
  }, 0);
  Promise.resolve().then(() => {
    console.log('111');
  });
  console.log('222');
}
/**
 * Promise.try():让同步方法同步执行，异步方法异步执行
 */
function promiseTry() {
  const f = () => console.log('now');
  // 方法1：使用async()
  // (async () => f())();
  // 方法2：使用new Promsise()
  (() => new Promise(resolve => resolve(f())))();
  // 方法3：使用Promise.try() 需要使用Promise库引入
  // Promise.try(f);
  console.log('next');
}
promiseTry();