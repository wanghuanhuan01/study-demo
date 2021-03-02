/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2021-03-02 10:52:36
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2021-03-02 11:26:37
 * @Description: 箭头函数的this
 */
function demo1() {
  function foo() {
    return () => {
        console.log(this.a);
    }
  }
  foo.a = 10;

  // 1. 箭头函数关联父级作用域this

  var bar = foo();
  bar();   // undefined   this——>全局

  var baz = foo.call(foo)
  baz();  // 10   this——>foo

  // 2. 箭头函数this不可修改
  //这里我们使用上面的已经绑定了foo 的 baz
  var obj = {
      a : 999
  }
  baz.call(obj); // 10    箭头函数的this无法修改, 所以this——>foo
}

function demo2() {
  var people = {
    name: '箭头函数',
    getName: function() {
      return () => {
        console.log(this.name);
      };
    },
  };
  var bar = people.getName();
  bar();
}

// 关于箭头函数为什么要用一层函数包裹
function demo3() {
  var obj = {
    that: this,   // this ——> 全局
    bar: function() {
      return () => {
        console.log(this);  // this ——> obj
      };
    },
    baz: () => {
      console.log(this);   // this ——> 全局
    },
  };
  console.log(obj.that);
  obj.bar()();
  obj.baz();
}
