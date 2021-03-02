/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2021-02-22 16:16:35
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2021-02-22 17:11:18
 * @Description: this指向
 */
// 默认绑定
function demo1() {
  function foo() {
    console.log(this.a);
  }
  foo();
}
// 显性绑定：使用call,apply,bind调用
function demo2() {
  var obj = {
    a: 1,
  };
  function foo() {
    console.log(this.a);
  }
  foo = foo.bind(obj);
  foo();
}
// 隐性绑定：在某个上下文对象下调用
function demo3() {
  function foo() {
    console.log(this.a);
  }
  var obj = {
    a: 1,
    foo,
  };
  obj.foo(); // 1
}
// new绑定:
function demo4() {
  function foo() {
    this.a  = 1;
  }
  var obj = new foo();
  console.log(obj.a);
}
demo4();
