// 题目3:考察promise控制异步流程
function ques3() {
  const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
  });
  
  const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
  });
  
  const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
  });
  
  const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
  });
  
  const mergePromise = ajaxArray => {
    // 在这里实现你的代码
    /**
     * 思路：通过对Promise.resolve()的重复赋值延长Promise链
     */
      const data = [];
      let thenObj = Promise.resolve();
      ajaxArray.forEach(item => {
        thenObj = thenObj.then(item).then(res => {
          data.push(res);
          return data;
        });
      });
      return thenObj;
  };
  
  mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
  });
  
  // 要求分别输出
  // 1
  // 2
  // 3
  // done
  // [1, 2, 3]
}

// 题目4：考察JS执行机制
function ques4() {
  const first = () => (new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
        console.log(7);
        setTimeout(() => {
            console.log(5);
            resolve(6);
        }, 0)
        resolve(1);
    });
    resolve(2);
    p.then((arg) => {
        console.log(arg);
    });
}));

first().then((arg) => {
    console.log(arg);
});
console.log(4);
}
// ques4(); // 3 7 4 1 2 5

// 题目5:
/**
 * 要求：同时下载图片的数量不能超过3个, 要求尽可能快速地将所有图片下载完成
 */
function ques5() {
  var urls = ['https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg', 'https://www.kkkk1000.com/images/getImgData/gray.gif', 'https://www.kkkk1000.com/images/getImgData/Particle.gif', 'https://www.kkkk1000.com/images/getImgData/arithmetic.png', 'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif', 'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg', 'https://www.kkkk1000.com/images/getImgData/arithmetic.gif', 'https://www.kkkk1000.com/images/wxQrCode2.png'];
  const loadingArr = [];
  function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
            console.log('一张图片加载完成');
            resolve();
        }
        img.onerror = reject;
        img.src = url;
    })
  };
  function limitLoad(urls, handler, limit) {
    // 对数组做一个拷贝
    const sequence = [].concat(urls)
    let promises = [];

    //并发请求到最大数
    promises = sequence.splice(0, limit).map((url, index) => {
        // 这里返回的 index 是任务在 promises 的脚标，用于在 Promise.race 之后找到完成的任务脚标
        return handler(url).then(() => {
            return index
        }); 
    });

    // 利用数组的 reduce 方法来以队列的形式执行
    return sequence.reduce((last, url, currentIndex) => {
        return last.then(() => {
            // 返回最快改变状态的 Promise
            return Promise.race(promises)
        }).catch(err => {
            // 这里的 catch 不仅用来捕获 前面 then 方法抛出的错误
            // 更重要的是防止中断整个链式调用
            console.error(err)
        }).then((res) => {
            // 用新的 Promise 替换掉最快改变状态的 Promise
            promises[res] = handler(sequence[currentIndex]).then(() => { return res });
        })
    }, Promise.resolve()).then(() => {
        return Promise.all(promises)
    })

  }
  limitLoad(urls, loadImg, 3)
}
ques5();