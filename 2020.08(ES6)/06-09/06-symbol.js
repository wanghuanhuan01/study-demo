// 用法1：消除魔术字符串(在代码中写死与代码形成强耦合的字符串)
// const shapType = {
//   triangle: Symbol(),
// };
// function getArea(shape, options) {
//   let area = 0;
//   switch(shape) {
//     case shapType.triangle:
//       area = .5 * options.width * options.height;
//       break;
//   }
//   return area;
// }
// const area = getArea(shapType.triangle, { width: 100, height: 100 });
// console.log(area);

// 2. symbol属性名的遍历(使用for循环无法访问)
const a = Symbol('a');
const b = Symbol('b');
let obj = {};
obj[a] = 'Hello';
obj[b] = 'World';
obj.name = '普通属性';
// for (let key in obj) {
//   console.log(key); // 无输出
// }
// console.log(Object.getOwnPropertyNames(obj)); // []
// console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(a), Symbol(b) ]
// console.log(Reflect.ownKeys(obj)); // 可输出所有类型的属性名

// 3.Symbol.for()
console.log(Symbol.for("bar") === Symbol.for("bar")); // true
console.log(Symbol("bar") === Symbol("bar"));// false
let f1 = Symbol.for("bar");
console.log(Symbol.keyFor(f1));