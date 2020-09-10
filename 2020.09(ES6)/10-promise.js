// 1. Promise.finally()的实现：无论promise对象的状态是成功还是失败，都会执行callback
Promise.prototype.finally = function(callback) {
  let P = this.constructor;
  return this.then(
    val => P.resolve(callback()).then((val) => console.log(val)),
    err => P.resolve(callback()).then(() => { throw err }),
  );
}

const p = new Promise((resolve, rejected) => {
  // resolve('ok');
  rejected('bad');
});
p.then(val => console.log(val))
 .finally(() => console.log('promise执行完毕'));