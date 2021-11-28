// 순열
function permutation(arr, selectNum) {
  let result = [];
  if(selectNum === 1) return arr.map((value) => [value]);

  arr.forEach((value, idx, arr) => {
    const fixed = value;
    const restArr = arr.filter((_, index) => index !== idx);  // 해당 인덱스 값만! 제외한 배열
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFixed = permutationArr.map((value) => [fixed, ...value]);
    result.push(...combineFixed);
  });

  return result;
}

// 중복 순열
function permutationOverlap(arr, selectNum){
  let result = [];
  if(selectNum === 1) return arr.map(value => [value]);

  arr.forEach((value, idx, arr) => {
    const fixed = value;
    // 따로 restArr가 필요없음. 중복 순열이기 때문에 그냥 arr 넣어주면 됌
    const permutationArr = permutationOverlap(arr, selectNum - 1);  
    const combineFixed = permutationArr.map((value) => [fixed, ...value]);
    result.push(...combineFixed);
  });

  return result;
}