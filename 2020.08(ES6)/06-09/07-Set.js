// 1.Set:ES6中提供的一种新的数据结构，它类似于数组，但成员的值都是唯一的，没有重复值
// const s = new Set();
// [1,2,3,4,3,2,1,5].forEach(item => s.add(item));
// console.log(s);

// 2.数组去重
// const a = [...new Set([1,2,3,3,2])];
// console.log(a);
// NaN / object
const set = new Set();
// set.add(NaN);
// set.add(NaN);
// console.log(set.size); // 1
set.add({});
set.add({});
console.log(set.size)

// 3.数组去重2:Array.from
// const a = Array.from(new Set([1, 2, 3, 3, 2]));
// console.log(a);

// 4.可以使用数组的方法
let s = new Set([1, 2, 3, 3, 2]);
s = new Set([...s].map(item => item * 2)); 
s = new Set([...s].filter(item => (item % 2) === 0));
console.log(s);

// 5.并集 || 交集 || 差集
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
// 并集
const union = new Set([...set1, ...set2]);
console.log([...union]);
// 交集
const intersect = new Set([...set1].filter(item => set2.has(item)));
console.log([...intersect]);
// set1相对于set2的差集
const difference = new Set([...set1].filter(item => !set2.has(item)));
console.log([...difference]);

// 6.同步修改原本set的结构
let originalSet = new Set([1, 2, 3]);
originalSet = Array.from(originalSet, value => value * 2);
console.log(originalSet);