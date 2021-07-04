// Q1. 타겟 넘버

// 문제 파악
// numbers = [] -> 2개 이상 20개 이하 숫자가 들어간 배열 (각 숫자는 1이상 50이하)
// target = int -> 1이상 1000이하인 자연수
// 배열 안에 있는 숫자를 더하거나 or 빼서 target을 만족하는 조합을 찾아낼 것
// -> 배열안의 모든 수를 돌면서 + or - 덧붙여서 합을 구하는 식 필요
// -> 합이 target을 만족할 때 answer에 +1 해 줄 것

// 풀이 1 (사실 틀림)
{
    function solution(numbers, target) {
        var answer = 0;
        for (let i=0; i<numbers.length; i++){
            answer += numbers[i];
            if(answer === target){
                if(numbers[i+1] === numbers[i+2]){
                    return numbers.length
                }
            }
        }
    }
}

// 풀이 2

// * 재귀함수 * (Recursion)
// (내가 생각하는 그) Tree 구조
{
    const numbers = [1,1,1,1,1];
    recur(0,0);

    function recur(idx, sum){
        recur(idx+1, sum + numbers[idx]);   // 입력값 recur(0,0)이 2개가 되고, 4개가 되고, 8개, 16개, 32개가 되어가는 현장을 보고 계십니다
        recur(idx+1, sum - numbers[idx]);   // inx를 다 돌고, sum이 target을 만족할 땐 멈추고 경우의 수를 반환하는 미덕을 보여줘야겠죠 
    }
}
// 풀이 2 완성 ㅎㅎ
{
    function solution(numbers, target) {
        var answer = 0;
        function recur(idx, sum){
            if(idx === numbers.length){
                if(sum === target){
                    answer++;
                }
                return;
            }
            recur(idx+1, sum + numbers[idx]);
            recur(idx+1, sum - numbers[idx]);
        }
        recur(0,0);   // recur()함수 앞쪽에 선언하면 안먹힘 why ??
        return answer;
    }
}