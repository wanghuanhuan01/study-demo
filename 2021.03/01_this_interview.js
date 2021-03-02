/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2021-03-01 17:34:35
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2021-03-02 10:51:00
 * @Description: this面试题
 */
// 题目1
function ques1() {
  function foo(arg){
    this.a = arg;
    return this;
  };

  var a = foo(1);
  var b = foo(10);

  console.log(a.a);    // ? undefined  ==> var a相当于window.a
  console.log(b.a);    // ? 10
}

// 题目2
function ques2() {
  var x = 10;
  var obj = {
      x: 20,
      f: function(){ console.log(this.x); }
  };
  var bar = obj.f;
  var obj2 = {
      x: 30,
      f: obj.f
  }
  obj.f(); // 20
  bar(); // 10
  obj2.f(); // 30
}

// 题目3
function ques3() {
  function foo() {
    getName = function () { console.log (1); }; // 这个getName没有声明，所以会创建到全局window上
    return this;
  }
  foo.getName = function () { console.log(2);}; // 这个getName是添加到foo上的
  foo.prototype.getName = function () { console.log(3);}; // 这个getName是添加到foo的原型上的，foo函数new出来的对象也会有这个getName函数
  var getName = function () { console.log(4);}; // 这个getName也会创建到全局window上
  function getName () { console.log(5);} // 函数声明提升优先级最高，所以其他同名函数或变量会覆盖这个函数声明
  
  foo.getName ();                // ?  2
  getName ();                    // ?  4  函数声明提前，同名变量将其覆盖
  foo().getName ();              // ?  1  调用foo函数 ——》使全局的getName输出变为1
  getName ();                    // ?  1   输出全局的getName
  new foo.getName ();            // ?  2   new也相当于调用foo.getName()函数
  new foo().getName ();          // ?  3  相当于var obj = new foo(); obj.getName();
  new new foo().getName ();      // ?  3
}

ques3();
