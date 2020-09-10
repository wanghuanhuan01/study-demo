// 3.Map转为对象
function strMapToObj(strMap) {
  let obj = Object.create({});
  for (let [key, value] of strMap) {
    obj[key] = value;
  }
  return obj;
}
// 如果有非字符串的键，会先转为字符串
const m = new Map().set({ name: 'obj' }, 'a').set(2, 'b').set(3, 'c');
const obj = strMapToObj(m);
console.log('map转为对象', obj);

// 4.对象转为Map
// 方法1:使用Object.entries()
// const obj = { yes: true, no: false };
// const map = new Map(Object.entries(obj));
// console.log('对象转为map', map);
// 方法2:自定义方法
function objToStrMap(obj) {
  let map = new Map();
  for (let key of Object.keys(obj)) {
    map.set(key, obj[key]);
  }
  return map;
}
const map = objToStrMap({ yes: true, no: false });
console.log('对象转为map', map);

// 5.Map转为JSON
// 情况1：Map的键都是字符串，可先将Map转为对象，再转为JSON
(() => {
  function strMapToJSON(map) {
    return JSON.stringify(strMapToObj(map));
  }
  const map = new Map().set(1, 'content');
  console.log('Map转为JSON', strMapToJSON(map));
})();
// 情况2：Map的键不是字符串，可以将Map转为数组，再转为JSON
(() => {
  function strMapToJSON(map) {
    return JSON.stringify([...map]);
  }
  const map = new Map().set(1, 'content').set({ name: 'www' }, 'hahaha');
  console.log('Map转为JSON', strMapToJSON(map));
})();