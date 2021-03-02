/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2021-02-22 17:14:52
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2021-03-01 21:14:23
 * @Description: this面试题
*/
function ques1() {
  var x = 10;
  console.log(this.x);
  var obj = {
    x: 20,
    f: function(){
      console.log(this.x);        // ? 20
      var foo = function(){ 
        console.log(this.x);    // ? 浏览器里打印10，vscode打印undefined
        }
      foo();                      
    }
  };
  obj.f();
}
ques1();
