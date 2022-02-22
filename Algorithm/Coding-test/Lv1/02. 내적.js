// Q2.내적

// 문제 파악
// 1. 2개의 parm 안의 배열 값을 같은 index에 있는 것끼리 곱하고,
//    총합을 구한다. -> for문 or reduce

// 풀이 1
{
  function solution(a, b) {
      let answer = 0;
      for (let i in a) {
          answer += a[i]*b[i];
      }
      
      return answer
  }
}
// 풀이 2
{
  function solution(a, b) {
      return a.reduce((prvNum, currNum, index) => prvNum + currNum * b[index], 0);
  }
}
// 풀이 3
{
  function solution(a, b) {
      const answer = a.reduce((prvNum, currNum, index) => {
          return prvNum += currNum * b[index];
      },0);
      return answer;
  }
}
