// Q1

// 문제 유형 : 약간 Queue 같기도 하고! 형식이 딱 정해져있진 않는 듯 ?
// 문제 요약 : 짐의 kg이 담긴 배열과 무게 제한이 있는 짐을 담을 박스의 limit이 인자로 주어진다.
//           박스로 짐을 옮길 때, 가장 최소한으로 옮길 수 있는 횟수를 리턴하세요.
//           (단, 최대 2개씩만 옮길 수 있음 & limit은 짐의 최댓값보다는 항상 큼)

// 내 접근 방법 -> 배열 자체를 splice 해가면서 count를 해주려고 함

// Reference Code
{
  function movingStuff(stuff, limit) {
  
    let twoStuff = 0;
  
    let leftIdx = 0;
    let rightIdx = stuff.length - 1;
    let sortedStuff = stuff.sort((a, b) => a - b);
  
    // 왼쪽 인덱스와 오른쪽 인덱스를 지정해줌
    // 2개씩 사라지는 요소들만 세서 count해준다음 전체 개수에서 빼주기
    // 1개씩 사라지는 친구들은 어짜피 전체 개수에 포함되어있는거늬까
    while(leftIdx < rightIdx){
  
      if(sortedStuff[leftIdx] + sortedStuff[rightIdx] <= limit){
  
        leftIdx++;
        rightIdx--;
        twoStuff++;
      
      }
      else{
  
        rightIdx--;
  
      }
    }
  
    return stuff.length - twoStuff;
  }
}

// Q2

// 문제 유형 : for문을 사용해 규칙만 찾는다면 금방 풀 수 있는 문제 ..?
// 문제 요약 : 1원, 5원, 10원, 50원, 100원, 500원 잔돈이 정해져있는데, 주어진 인자(거스름돈)에 맞춰
//           가장 최소한의 개수를 사용해 거스름돈을 맞춰야 한다 !

// 내 접근 방법 -> 어짜피 100단위 넘어가면 500원이 처리해야하니까,
//               3자리 수와 그 이상의 수를 나눠서 개수를 세주자 !
{
  function partTimeJob(k) {
  
    let count = 0;
    let digit = String(k).split('').reverse().map(el => Number(el));
    // 3자리 수
    let digit_111 = digit.slice(0, 3);
    // 그 이상의 수
    let digit_over = [...digit].slice(3).reverse().join('');  
    // mutable한 reverse()덕분에 얕은 복사를 진행했다
    
    for(let el of digit_111){
      if(el < 5){
        count += el;
      }
      else{
        count += el - 4;
      }
    }
    
    if(digit_over){
      count += Number(digit_over) * 2;  // 500원짜리 어짜피 2개 쓰이니깐 ^^
    }
  
    return count;
  
  }
}
// Reference Code
{
  function partTimeJob(k){
  
  let result = 0;
  let coin = [500, 100, 50, 10, 5, 1];

  for(let i=0; i<coin.length; i++){
    
    // 동전 종류를 BASE 삼아서 큰 coin부터 몫을 구하고 
    // count 세준 후
    // 거스름돈에서 그 양만큼 빼주기 ^!^ 내 뇌가 동작하는 것처럼 풀었넹
    let count = Math.floor(k / coin[i]);
    result += count;
    k = k - (count * coin[i]);

  }

  return result;
  }
}

// Q3

// 문제 유형 : if문(조건)이 여러개라 그렇지, 예외 처리를 해준다면 쉬운 문제 !
// 문제 요약 : 일단 matrix가 주어지고, 명령어가 들어있는 문자열이 주어지는데,
//           명령어에 따라 matrix의 위치를 이동시킨다. 이동할 때 해당 위치에 있는 값을 세서 반환할 것
//           (만약 matrix 자체를 벗어나게 되면 바로 'OUT'을 반환한다)

// 내 접근 방법 -> if문을 얼마나 깔쌈하게 쓰는지가 관건이겠는걸 ? 그리고 out 예외 처리 주의하자
{
  function boardGame(board, operation) {
  
    let [x, y] = [0, 0];
    let answer = board[x][y];
    let operate = operation.split('');
  
    // switch문으로 작성했었는데 'OUT'예외 처리 해결방안 못찾음 !
    for(let i=0; i<operate.length; i++){
  
      if(operate[i] === 'U'){
        [x, y] = [x - 1, y];
      }
      if(operate[i] === 'D'){
        [x, y] = [x + 1, y];
      }
      if(operate[i] === 'L'){
        [x, y] = [x, y - 1];
      }
      if(operate[i] === 'R'){
        [x, y] = [x, y + 1];
      }
  
      if(x < 0 || y < 0 || x >= board.length || y >= board.length){
        return 'OUT';
      }
  
      answer += board[x][y];
    }
  
    return answer;
  };
}
// Reference Code
{
  function boardGame(board, operation) {
    
    const DIR = {
      'U': [-1, 0],
      'D': [1, 0],
      'L': [0, -1],
      'R': [0, 1]
    }

    const LEN = board.length;
    const isValid = (y, x) => {
      return 0 <= y && y < LEN && 0 <= x && x < LEN;
      // 오 ... board.length 도 벗어나는 경우도 넣어줬구나 ! 깨달음
    }

    let Y = 0;
    let X = 0;
    let score = 0;

    for(let i=0; i<operation.length; i++){
      
      const [dY, dX] = DIR[operation[i]];
      Y += dY;
      X += dX;
      if(!isValid(Y, X)) return 'OUT';
      score += board[Y][X]; 
      // 그리고, matrix의 특성에 맞게 x 와 y 의 위치도 바로잡아준것도 치이는 포인트 ㅇㅇ
    }

    return score;
  }
}

