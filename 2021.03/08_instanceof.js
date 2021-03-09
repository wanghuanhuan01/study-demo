/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2021-03-08 16:47:05
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2021-03-08 17:14:31
 * @Description: 手动实现instanceof
 */
function instanceOfFn(obj, Prototype) {
  return obj.__proto__ === Prototype;
}
function Foo(){};
var foo = new Foo();
var boo = {};
console.log(instanceOfFn(foo, Foo.prototype));
console.log(instanceOfFn(boo, Foo.prototype));

