// 조합
function combination(arr, selectNum){
  let result = [];
  if(selectNum === 1) return arr.map(value => [value]);

  arr.forEach((value, idx, arr) => {
    const fixed = value;
    const restArr = arr.slice(idx); // 무조건 해당 인덱스 값 기준으로 자른 뒷 부분 
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFixed = combinationArr.map(value => [fixed, ...value]);
    result.push(...combineFixed);
  });

  return result;
}