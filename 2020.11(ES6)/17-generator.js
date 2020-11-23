/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2020-11-17 16:37:59
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2020-11-17 18:04:01
 * @Description: 
 */
// 1. yield本身没有返回值，如果需要返回值，可以使用next()方法带一个参数，该参数就是上一个yield表达式的返回值
function demo1() {
  function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
  }
  var a = foo(5);
  console.log(a.next());
  console.log(a.next(3));
  console.log(a.next(2));
}
demo1();
