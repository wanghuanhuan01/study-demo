// 1.简单示例
function timeOut(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, 'done');
  });
}
timeOut(100).then(value => console.log(value));