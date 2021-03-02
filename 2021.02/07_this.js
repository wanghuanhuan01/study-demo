/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2021-02-06 10:23:52
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2021-02-22 10:02:01
 * @Description: this指向
 */
function demo1() {
  var people = {
    name: '饼干',
    getName: function() {
      console.log(this.name);
    },
  };
  var bar = people.getName;
  bar();
  // people.getName();
}
demo1();