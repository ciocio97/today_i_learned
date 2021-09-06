// Q1. 모의고사

/** 문제 설명
 * 
 *  수포자는 수학을 포기한 사람의 준말입니다. 
 *  수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
 *  수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
 *  1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 *  2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
 *  3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 *  1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
 *  가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
**/

/** 제한 사항
 * 
 *  시험은 최대 10,000 문제로 구성되어있습니다.
 *  문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
 *  가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
 */

/** 입출력 예시
 *    answer       result
 * 
 *  [1,2,3,4,5]      [1]
 *  [1,3,2,4,2]    [1,2,3]
 */

// 문제 파악
// 1번 수포자 : 1,2,3,4,5... 2번 수포자 : 2,1,2,3,2,4,2,5... 3번 수포자 : 3,3,1,1,2,2,4,4,5,5...
// value가 계속 반복되는 점 발견. -> for문 , 1번,2번,3번으로 학생의 수가 정해져 있음. -> [0,0,0] 배열 자리 지정 가능
// 문제의 정답(배열)과 답안(배열)을 계속 비교하면서 가장 문제를 많이 맞힌 사람 찾기.
// 가장 많이 맞춘 사람이 여럿일 경우 오름차순으로 return

// 풀이 1
{
  function solution(answers) {
      
      const one = [1,2,3,4,5];
      const two = [2,1,2,3,2,4,2,5];
      const three = [3,3,1,1,2,2,4,4,5,5];
      const result = [0,0,0];   // 아예 1,2,3번 자리를 지정

      for (let i=0; i<answers.length; i++) {
          if(answers[i] === one[i%5]) result[0]++;
          if(answers[i] === two[i%8]) result[1]++;
          if(answers[i] === three[i%10]) result[2]++;
      }

      const answer = [];
      
      for (let j=0; j<result.length; j++) {         // -> 문제점 : result = [3,4,5]; 나왔을 때 
          if (result[j] != 0) answer.push(j+1);     //            answer = [3]; 인데, [1,2,3]; 으로 출력됌 !!
      }

      return answer;
  }
}
// 문제점 고치는 풀이
{
  function solution(answers) {
      
    const one = [1,2,3,4,5];
    const two = [2,1,2,3,2,4,2,5];
    const three = [3,3,1,1,2,2,4,4,5,5];
    const result = [0,0,0];

    for(let i=0; i<answer.length; i++){
      if(answers[i] === one[i%5]) result[0]++;
      if(answers[i] === two[i%8]) result[1]++;
      if(answers[i] === three[i%10]) result[2]++;
    }

    const answer = [];
    const set = new Set(result);
    const array = Array.from(set);
      
    for(let j=0; j<result.length; j++){         // -> 문제점 해결 >ㅁ<
          
      if(array.length == result.length){        // 겹치는 값 없을 때 최댓값 가진 사람 출력
        const max = Math.max(array);
        answer.push(array.indexOf(max)+1);    
      }else if(result[j] != 0){                 // 겹치는 값 있을 때 값=0 빼고 차례로 사람 출력
        answer.push(j+1);
      }
    }
    return answer;
  }
}

// 풀이 2
// 코드가 좀 더 직관적이고 예뻐진 걸 볼 수 있다
{
  function solution(answers) {

    var answer = [];

    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let obj = {'1': 0, '2': 0, "3": 0};
    
    for(let i=0; i<answers.length; i++){
        if(answers[i] === one[i%5]){            
            obj['1'] += 1;
        }
        if(answers[i] === two[i%8]){
            obj['2'] += 1;
        }
        if(answers[i] === three[i%10]){
            obj['3'] += 1;
        }
    }

    const max = Math.max(...Object.values(obj));

    for(let key in obj){
        if(obj[key] === max){
            answer.push(Number(key));
        }
    }

    return answer;
  }
}
