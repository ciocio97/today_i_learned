const sleep = (wait) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();  // resolve함수가 정의되지 않았을 때는 해당 매개 변수를 반환한다.
    }, wait);
  });
}