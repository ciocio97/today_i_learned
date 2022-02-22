// Q1. 나라의 숫자

/** 문제 설명
 * 
 *  124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.
 *  01. 124 나라에는 자연수만 존재합니다.
 *  02. 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
 *  예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.
 *  ex. 1-1 / 2-2 / 3-4 / 4-11 / 5-12 / 6-14 / 7-21 / 8-22 / 9-24 / 10-41 ...
 *  자연수 n이 매개변수로 주어질 때, 
 *  n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.
**/

/** 제한 사항
 * 
 *  --n은 500,000,000이하의 자연수 입니다.
**/

/** 입출력 예시
 * 
 *  n  result
 * 
 *  1    1
 *  2    2
 *  3    4
 *  4    11
**/

// 풀이 1 -> 사실 틀림 ..
{
    // 입출력 예시에만 맞게끔 짜여진 코드 ^^
    // n에 대한 값이 업데이트가 되지 않기 때문에 
    // parseInt(n/3)에서 1,2,4가 나오지 않는 경우가 생깁니다 ;; 
    // 수도 코드 습관화 하자 ...

  function solution(n) {
    const answer = '';
    const frontNum = parseInt(n/3);

    if(n % 3 === 1){
      return answer.concat(frontNum,1).replace('0','');
    }else if(n % 3 === 2){
      return answer.concat(frontNum,2).replace('0','');
    }else{
      return answer.concat(frontNum-1,4).replace('0','');
    }
  }
}
// String.concat(string1, string2,,,);
{
  // 추가하고 싶은 문자열 다 드루와 ! concat()
  var hello = 'Hello, ';
  var plusString = hello.concat('LSY', '. Have a nice day.');
  
  console.log(plusString);  // 'Hello, LSY. Have a nice day.'

  // 배열도 문자열로 변환시키는 concat()
  var greetList = ['Hello', ' ', 'Seung-yeon', '!'];
  plusString = "".concat(...greetList);

  console.log(plusString);  // 'Hello Seung-yeon!'

  "".concat(null);  // 'null'
  "".concat(true);  // 'ture'
  "".concat(4, 5);  // '45'
}

// 풀이 2 완성
{
  // n % 3 === 1 -> answer + '1'
  // n % 3 === 2 -> answer + '2'
  // n % 3 === 0 -> answer + '4'
  // 이 3가지 수(1,2,4)가 계속 반복되야 하기때문에 ! answer 값 추가할 때마다 n값을 업데이트 해야겠다 !
  // n 업데이트 -> n = n ?? 규칙찾기
  // 근데 언제 결과값 answer을 도출할꺼야 ?
  // while문으로 감싸주고, 
  // n이 자연수일때만 switch문 실행되게끔. 그게 끝나면 answer 도출
    
  function solution(n) {
    var answer = '';
    while(n > 0){                 // n이 음수가 되면 끝나는 while문
      switch(n % 3){
        case 1:
          answer = '1' + answer;  // answer에 할당된 값을 뒷쪽에 더함으로써 원하는 결과 도출
          n = Math.floor(n / 3);
        break;    
        case 2:
          answer = '2' + answer;
          n = Math.floor(n / 3);
        break;    
        case 0:
          answer = '4' + answer;
          n = n / 3 - 1;
        break;    
      }
    }
    return answer;
  }
}
