const LCS = function(str1, str2){
  
  const M = str1.length;
  const N = str2.length;

  const memo = [];

  for(let i=0; i<M+1; i++) memo.push(Array(N+1).fill(-1));

  const compareOneByOne = (left, right, len) => {
    // 만약 memo 메트릭스 안의 요소가 기본값이 아니라면 !! 해당 값을 리턴한다
    if(memo[left][right] !== -1) return memo[left][right];
    // 만약 left 길이나 right 길이가 전체 길이랑 같으면 0을 리턴한다
    if(left === str1.length || right === str2.length) return 0;
    
    if(str1[left] === str2[right]){
      memo[left][right] = 1 + compareOneByOne(left + 1, right + 1, len + 1);
      return memo[left][right];
    }

    memo[left][right] = Math.max(
      compareOneByOne(left + 1, right, len),
      compareOneByOne(left, right + 1, len)
    );

    return memo[left][right];
  };

  return compareOneByOne(0, 0, 0);
};