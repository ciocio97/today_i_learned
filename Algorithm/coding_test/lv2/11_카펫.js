// Q1. 카펫

/** 문제 설명
 * 
 *  Leo는 카펫을 사러 갔다가 아래 그림과 같이 
 *  중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
 *  Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 
 *  전체 카펫의 크기는 기억하지 못했습니다.
 *  Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 
 *  카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
**/

/** 제한 사항
 * 
 *  --갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
 *  --노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
 *  --카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
**/

/** 입출력 예시
 *  
 *  brown   yellow   return 
 * 
 *   10       2      [4, 3]
 *   8        1      [3, 3]
 *   24       24     [8, 6]
**/

// 문제 파악
// 정수이면서 약수인 요소들을 찾으면 되지 않나 ?
// yellow 크기만큼 for문으로 돌면서 검사 ㄱㄱ

// 풀이 1 -> 틀렸는데 ... 왜지?
{
  function solution(brown, yellow) {
     if(yellow % 2 === 1){
        return [yellow + 2, 3];    
     }
     else{
        for(let i=1; i<=yellow / 2; i++){
            let num = i;
            let quo = yellow / num;
            let cal = (quo + 2) * 2 + (num + 2) * 2 - 4;
            if(cal === brown && yellow % num === 0){
                return [quo + 2, num + 2];
            }
        }
     }
  }
}

// 풀이 2 -> 정석대로 접근 정답
{
  function getMeasure(int) {
    let arr = [];
    for(let i=1; i<=int; i++){
        if(int % i === 0){
            arr.push(i);
        }
    }
    return arr.reverse();
  }

function solution(brown, yellow) {
    const candi = getMeasure(yellow);
    for(let i=0; i<candi.length; i++){
        let row = candi[i] + 2;
        let col = candi[candi.length - i - 1] + 2;
        let cal = row * 2 + col * 2 - 4;
        if(cal === brown) return [row, col];
    }
  }
}