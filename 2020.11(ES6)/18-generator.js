/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2020-11-18 10:08:14
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2020-11-18 10:24:18
 * @Description: 
 */
// 1. 如果想给第一个next()传参，可以在generator函数外面再包一层函数
function wrapper(generatorFun) {
  return function () {
    const obj = generatorFun();
    obj.next();
    return obj;
  }
}
const wrapperObj = wrapper(function* () {
  console.log(`yield put:${yield}`);
  return 'DONE';
});

wrapperObj().next('hello');
