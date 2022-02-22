// Q1. 여행경로

/** 문제 설명
 * 
 *  주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 
 *  항상 "ICN" 공항에서 출발합니다.
 *  항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 
 *  방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
**/

/** 제한 사항
 * 
 *  --모든 공항은 알파벳 대문자 3글자로 이루어집니다.
 *  --주어진 공항 수는 3개 이상 10,000개 이하입니다.
 *  --tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
 *  --주어진 항공권은 모두 사용해야 합니다.
 *  --만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
 *  --모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.
**/

/** 입출력 예시
 * 
 *                    tickets                                                                               return
 *  [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]                                             ["ICN", "JFK", "HND", "IAD"]
 *  [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]              ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
**/

// 문제 파악
// 일단 모든 경로는 ICN부터 시작한다. -> DFS의 향기가 여기서부터 풍긴다...
// 배열 안의 경로들은 서로서로 연결되어있고 끊어지지 않는다는 특이한 전제가 있다. -> 배열의 개수 만큼 count를 세줘야하나? 생각함
// -> 물론 이 생각은 테스트가 통과하기 쉬울거라고 생각한 오산(?) 에서 온 착각이었지만...
// 모든 경로를 다 구하고, 알파벳 순으로 정렬해서 가장 앞쪽에 위치한 배열을 리턴하는 것이 가장 이상적이다.
// 난 처음에 전체 배열을 정렬해주고 나면 건드릴게 없다고 생각해서 indexOf로 무조건 첫번째에 오면서, 일치하는 경로를 찾아줬다.
// 그런데 문제는 ! 알파벳 순은 전체 배열 기준이고, 이후의 요소들은 사실 차례대로 정렬되어있지 않을 수도 있다는 게 문제였다.
// -> ex. B A E C D >>>>>> B C A D E 이것처럼 이후의 요소는 알파벳 순으로 정렬이 안되어있어도 정답이 될수도있다는 것.
// -> 처음에 내가 간과한 사실

// 풀이 -> 틀린 풀이
{
  function solution(tickets) {
    
    let answer = [];
    let sortTicket = tickets.sort();
    
    // visited 역할, 현재 위치(출발지)
    // -> 정답 루트가 당연히 한번에 나올거라는 발상에서 나온 결과 
    const dfs = (count, city) => {
        
        answer.push(city);
        
        if(count === tickets.length){
            return;
        }
        
        for(let el of sortTicket){
            if(el[0] === city){
                let idx = sortTicket.indexOf(el);  // indexOf로 접근한 부분
                let next = sortTicket[idx][1];
                sortTicket.splice(idx, 1);
                return dfs(count + 1, next);  // 여기서 dfs()를 리턴하고 끝내는 것도 문제임
            }
        }
    }
    
    dfs(0, "ICN");
    
    return answer;

  }
}

// 풀이 -> 틀린 부분 개선
{
  function solution(tickets){
    
    let answer = [];
    
    // 개선된 인자 : visited 역할, 현재 위치(출발지), 최종 결과를 담는 배열
    const dfs = (extraTCK, currentTCK, route) => {
        
      if(extraTCK.length === 0){
          answer.push(route);
      }
      else{
        extraTCK.forEach(([departure, destination], idx) => {
          if(currentTCK === departure){
            let newTCK = extraTCK.slice();
            newTCK.splice(idx, 1);
            dfs(newTCK, destination, route.concat(destination));  // 여기선 모든 dfs() 호출
          }
        })    
      }
        
    }
    
    dfs(tickets, "ICN", ["ICN"]);
    
    return answer.sort()[0];
  }
}

// 풀이 -> 페어의 풀이 : 독특한 dfs() 구동 방식
{
  function solution(tickets) {

    // 티켓 오름차순 정렬
    tickets.sort();
    // 티켓의 쓰임 유무를 기록하는 visited 배열
    let visited=Array(tickets.length).fill(false);
    // 최종 결과를 담을 배열
    let answer = [];

    // dfs() 호출
    dfs("ICN",0,["ICN"])

    // dfs() 함수
    function dfs(cur,cnt,path){

      if(cnt === tickets.length && answer.length === 0){
        answer = path;
        return;

      }

      for(let i = 0;i < tickets.length; i++){

        if(visited[i]) continue;

        if(tickets[i][0]===cur){

          visited[i] = true;

          // 함수는 ... 본인이 선언된 환경을 기억한다 .... 미쳤다 진짜 ;;
          // 만약 dfs()가 BASE CASE를 일치시키지 못해서 undefined를 반환하면, 당시의 인덱스를 기억하기 때문에 (scope)
          // visited[idx] = false 처리를 해서 방문했던 기록을 지운다.
          // 그리고 dfs() 실행으로 인해 접근하지 못했던 나머지 인덱스들을 for문으로 돌면서 처리한다....
          dfs(tickets[i][1],cnt+1,[...path,tickets[i][1]]);

          visited[i] = false;

        }

      }

    }

    return answer;

  }
}