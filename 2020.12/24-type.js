/*
 * @Author: huanhuan.wang01@hand-china.com
 * @Date: 2020-12-24 16:45:16
 * @LastEditors: huanhuan.wang01@hand-china.com
 * @LastEditTime: 2020-12-25 14:40:33
 * @Description: JS判断数据类型的方式
 */

/**
 * @description: 1. Object.prototype.toString():会返回[object, class]格式的字符串，其中的class就是数据类型
 */
function demo1() {
  const number = 1; // [object Number]
  const string = 'test'; // [object String]
  const boolean = true; // [object Boolean]
  let und; // [object Undefined]
  const nul = null; // [object Null]
  const date = new Date(); // [object Date]
  const obj = {}; // [object Object]
  const arr = []; // [object Array]
  const func = function() {}; // [object Function]
  const err = new Error(); // [object Error]
  const reg = /a/g; // [object RegExp]

  function checkType() {
    for (let index = 0; index < arguments.length; index++) {
      console.log(Object.prototype.toString.call(arguments[index]));
    }
  }
  checkType(number, string, boolean, und, nul, date, obj, arr, func, err, reg);
}
// demo1();

/** 
 * @description: 2.使用Object.prototype.toString()写一个 type 函数，能检测各种类型的值，
 * 如果是基本类型，就使用 typeof，引用类型就使用 toString。
 * 此外鉴于 typeof 的结果是小写，希望这个函数所有的结果都是小写。
*/
function demo2() {
  let classType = {};
  'Boolean Number String Function Array Date RegExp Object Error Null Undefined'.split(" ").forEach(item => {
    classType[`[object ${item}]`] = item.toLowerCase();
  });

  function type(obj) {
    // 兼容性处理：null undefined在IE6中会被Object.prototype.toString()解析成[object, object]
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }
    return typeof obj === 'function' || typeof obj === 'object' ? 
            classType[Object.prototype.toString.call(obj)] :
            typeof obj;
  }

  // 有了type函数后可以封装一些常见的类型校验
  // 1. 判断函数类型
  function isFunction(obj) {
    return type(obj) === 'function';
  }
  console.log(isFunction(function() {}));
  // 2.判断数组类型（这个操作相当于手写Array.isArray()方法）
  function isArray(arr) {
    return type(arr) === 'array';
  }
  console.log(isArray([]));
}
demo2();

