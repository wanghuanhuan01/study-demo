/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2021-01-07 11:22:10
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2021-01-07 18:11:50
 * @Description: JS变量对象
 */
// 题目1
function ques1() {
  function foo() {
    console.log(a);
    a = 1;
  }
  foo(); // 报错 a is not defined
  
  function bar() {
    a = 1;
    console.log(a);
  }
  bar(); // 1
}

// 题目2
function ques2() {
  // js执行上下文的顺序
  // 1. 首先会处理函数声明:函数提升性质
  // 2. 然后是变量声明提升
  // 3. 如果变量声明和函数声明重名，则变量声明不会干扰已存在的这类属性
  console.log(foo); // 输出函数foo
  function foo() {
    console.log("foo");
  }
  var foo = 1;

  // 以上代码实际等于
  // function foo() {
  //   console.log("foo");
  // }
  // var foo;
  // console.log(foo);
  // foo = 1;
}
ques2();
