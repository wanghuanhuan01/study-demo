/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2021-03-05 16:24:49
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2021-03-05 17:28:56
 * @Description: 闭包面试题
 */
function fun(n,o) {
  console.log(o)
  return {
    fun:function(m){
      return fun(m,n);
    }
  };
}
var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);  // undefined, 0, 0, 0
var b = fun(0).fun(1).fun(2).fun(3);  // undefined, 0, 1, 2
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,0,1,1
//问:三行a,b,c的输出分别是什么？

