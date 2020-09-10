// Map: ES6提供的一种新的数据结构，解决了js对象的键值对的键只能是字符串的问题
// 1. 基本操作
// const m = new Map();
// const o = { p: 'hello' };
// m.set(o, 'content');
// console.log(m.get(o));
// console.log(m.has(o));
// m.delete(o);
// console.log(m.has(o));

// 2.Map的forEach方法
const m = new Map().set(1, 'a').set(2, 'b').set(3, 'c');
m.forEach((value, key) => {
  console.log("Key: %s, Value: %s", key, value);
})
for (let [key, value] of m.entries()) {
  console.log(key, value);
}
console.log(m);
console.log(m.size);
console.log(Object.entries({"a":1, "b":2}));
