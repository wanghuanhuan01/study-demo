/**
 * Iterator遍历器
 */
// 1.模拟Iterator的遍历机制
function demo1() {
  function makeIterator(array) {
    var nextIndex = 0;
    return {
      next: function() {
        let nextObj = {};
        nextObj = nextIndex < array.length ? {
          value: array[nextIndex++],
          done: false,
        } : {
          value: undefined,
          done: true,
        };
        console.log(nextObj);
      }
    };
  }
  var arr = makeIterator(['a', 'b']);
  arr.next();
  arr.next();
  arr.next();
}

// 2. 一个数据结构只要有Symbol.iterator属性,它就可以遍历,Symbol.iterator本身是一个函数
function demo2() {
  const arr = ['a', 'b', 'c'];
  const it = arr[Symbol.iterator]();
  it.next();
  it.next();
  it.next();
}

// 3. 对于没有默认Iterator接口的数据结构，需要手动在Symbol.iterator上部署Iterator接口
class RangeIterator {
  constructor(value, stop) {
    this.value = value;
    this.stop = stop;
  }

  [Symbol.iterator]() { return this; }

  next() {
    const value = this.value;
    if (value < this.stop) {
      this.value ++;
      return { value, done: false };
    }
    return {value: undefined, done: true };
  }
}

function demo3(value, stop) {
  return new RangeIterator(value, stop);
}

for (var iterator of demo3(0, 3)) {
  console.log(iterator);
}



