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

// * 재귀 함수 * (Recursion)
{
    function f(n){                     
        if(n <= 1){                        // 재귀 함수는 100부터 순회한 다음, 호출 스택에 쌓여있는 값을 처리해 나간다.
            return 1;                      // Stack은 LIFO (Last In First Out)방식.              
        }                                  // 이때, 스택에 제일 마지막으로 반환된 1부터 제일 처음 반환된 100까지 차례대로 꺼내가며 더한다.
        return n + f(n - 1);          
    }
    console.log(f(100));
}

// (내가 생각하는 그) Tree 구조
{
    const numbers = [1,1,1,1,1];

    function recur(idx, sum){               // *** 재귀함수는 '종료 조건'이 없으면 무한 반복한다 = Maximum call stack size exceeded
        recur(idx+1, sum + numbers[idx]);   // 입력값 recur(0,0)이 2개가 되고, 4개가 되고, 8개, 16개, 32개가 되어가는 현장을 보고 계십니다
        recur(idx+1, sum - numbers[idx]);   // inx를 다 돌고, sum이 target을 만족할 땐 멈추고 경우의 수를 반환하는 미덕을 보여줘야겠죠 
    }
    recur(0,0);                                       
}
// 풀이 2 완성 
{
    var numbers = [1,1,1,1,1];
    var target = 3;
    var answer = 0;
    
    function solution(numbers, target) {
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
        recur(0,0);                         // recur()함수 앞쪽에 선언했을 때, recur(0,0) is not defined 뜬다.
        return answer;
    }
    console.log(solution(numbers, target));
}
