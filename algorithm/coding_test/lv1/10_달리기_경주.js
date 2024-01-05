/** Q1. 달리기 경주
 * 
 * 문제 파악
 * 
 * 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 
 * 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어짐.
 * 해설진들이 이름을 불렀다는 것은, 해당 선수가 그 앞 선수를 앞질렀다는 뜻임.
 * 경주가 끝났을 때 선수들 이름을 등수별로 배열에 담아 return 할 것.
 * 
 */

/* 풀이 1 */

{
    // 아 뭐야 ~ 그냥 callings 돌면서 배열 앞,뒤 순서 바꿔주면되네 ?
    function solution(players, callings) {
        const answer = players.slice();
        
        callings.forEach((name) => {
            const targetIndex = answer.indexOf(name);
            const formerIndex = targetIndex - 1
            
            answer[targetIndex] = answer[formerIndex];
            answer[formerIndex] = name;
        })
        
        return answer;
    }
    // 근데 time out error 남.
}

/* 풀이 2 */

{
    // 뭔가 비효율적으로 데이터를 찾고 있음..
    // → 선수의 index 를 찾는 시간을 줄여야겠다.
    // { 이름 : 인덱스 } 형식으로 데이터를 저장하고 접근하면 어떨까 ?
    function solution(players, callings) {
        const data = {};
        const answer = players.slice();
        
        players.forEach((player, rank) => {
            data[player] = rank;
        })
        
        callings.forEach((name) => {
            const currentPlayerIndex = data[name];
            const previousPlayerIndex = currentPlayerIndex - 1;
            const previousPlayerName = answer[previousPlayerIndex];
            
            answer[previousPlayerIndex] = name;
            answer[currentPlayerIndex] = previousPlayerName;
            
            data[previousPlayerName] = currentPlayerIndex;
            data[name] = previousPlayerIndex;
        })
        
        return answer;
    }
    // 통과 !!
    // 얻은 것 : 자주 접근하는 데이터는 Map 형태로 저장후 사용하면 효율적이다.
}