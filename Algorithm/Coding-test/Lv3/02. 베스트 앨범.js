// Q1. 베스트 앨범

/** 문제 설명
 * 
 *  스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 
 *  노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
 * 
 *  속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 *  장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 *  장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 * 
 *  노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 
 *  베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
 *  
 *  -->  아 이런식으로 백엔드에서 알고리즘이 쓰이는건가 ??!!
**/

/** 제한 사항
 * 
 *  --genres[i]는 고유번호가 i인 노래의 장르입니다.
 *  --plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
 *  --genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
 *  --장르 종류는 100개 미만입니다.
 *  --장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
 *  --모든 장르는 재생된 횟수가 다릅니다.
**/

/** 입출력 예시
 * 
 *                     genres                                        plays                     return
 * 
 *  ["classic", "pop", "classic", "classic", "pop"]       [500, 600, 150, 800, 2500]        [4, 1, 3, 0]
**/

// 문제 파악
// 알고리즘을 푼다기 보다 내 음악 재생 목록을 정리하듯 접근했다.
// 모두 예쁘게 정리해서 출력할 때 2개씩만 뽑자 !

// 풀이 1
{
  function solution(genres, plays) {
    let answer = [];
    let list = [];
    let set = new Set(genres);
    
    // 장르별로 [] & total(합계) 넣어주기 -> 객체로 묶어서 !
    for(let el of set){
        let obj = new Object();
        obj[el] = [];
        obj.total = 0;
        list.push(obj);
    }
    
    // 모든 장르를 돌면서 
    // 해당 장르의 인덱스, 재생 횟수, 합 list에 추가해주기
    for(let i=0; i<genres.length; i++){
        for(let j=0; j<list.length; j++){
            if(Object.keys(list[j])[0] === genres[i]){
                list[j][genres[i]].push([i, plays[i]]);
                list[j].total += plays[i];
            }
        }
    }
    
    // list 내립차순으로 정렬
    list = list.sort((b, a) => a.total - b.total);
    
    // list 안의 장르의 재생횟수를 기준으로 내림차순 정렬
    for(let el of list){
        for(let name of set){
            if(el[name]){
                el[name] = el[name].sort((a, b) => b[1] - a[1]);
            }
        }
    }
    
    // list 돌면서 장르별로 상위 2개만 뽑아서 answer 에 push!
    for(let i=0; i<list.length; i++){
        // 문제의 for문 
        for(let name of set){
            // list 의 장르 존재 여부를 꼭 따져줘야함
            // 항상 list의 모든 종류를 탐색하기 때문에 !!!!!
            if(list[i][name] && list[i][name].length >= 2){
                answer.push(list[i][name][0][0]);
                answer.push(list[i][name][1][0]);
            }
            // 음악의 개수가 1개일 때 예외처리 해주는 부분 
            else if(list[i][name]){
                answer.push(list[i][name][0][0]);
            }
        }
    }
    
    return answer;
  }
}