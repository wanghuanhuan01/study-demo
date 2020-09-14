// 1. Promise.all([p1, p2, p3]) 
function all() {
  const p1 = new Promise((resolve, rejected) => {
    resolve('ok');
  })
  .then(res => res)
  .catch(err => err);
  
  const p2 = new Promise((resolve, rejected) => {
    throw new Error('报错了');
  })
  .then(res => res)
  .catch(err => err);
  
  // catch后p2状态变为resolved,所以p1,p2的状态都为resolved,所以Promise.all的catch就不会执行
  Promise.all([p1, p2])
  .then(res => console.log(res))
  .catch(err => console.log(err));
}

// 2. Promise.allSettled([p1, p2, p3])
/**
 * Promise.allSettled()的返回值状态只会是fulfilled
 */
function allSettled() {
  const p1 = Promise.resolve('ok');
  const p2 = Promise.reject('bad');
  Promise.allSettled([p1, p2]).then(value => console.log('Promise.allSettled结果', value));
}
allSettled();