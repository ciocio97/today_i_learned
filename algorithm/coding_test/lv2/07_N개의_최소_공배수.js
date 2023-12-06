// Q1. N개의 최소 공배수

/** 문제 설명
 *
 *  두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 
 *  예를 들어 2와 7의 최소공배수는 14가 됩니다. 
 *  정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. 
 *  n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.
**/

/** 제한 사항 
 * 
 *  --arr은 길이 1이상, 15이하인 배열입니다.
 *  --arr의 원소는 100 이하인 자연수입니다.
**/

/** 입출력 예시
 * 
 *     arr     result
 * 
 *  [2,6,8,14]   168 
 *   [1,2,3]      6
**/

// 풀이 1

// 유클리드 호제법을 이용해서 간단하게 풀었다.
// a > b : a가 b보다 크다는 전제 하에 진행한다.
// gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
// ex. gcd(16, 6) -> (6, 4) -> (4, 2) -> 2 : 16과 6의 최대공약수는 2이다.
// lcm = (a, b) => a * b / gcd(a, b);
// ex. lcm(16, 6) -> 96 / 2 = 48 : 16과 6의 최소공배수는 48이다.

{
  function solution(arr) {
    let answer = 1;
    // GCD : Greatest Common Divisor
    // LCM : Least Common Multiple
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    
    for(let el of arr){
      answer = lcm(answer, el);
    }
    
    return answer;
}
}