// Q1. 기능 개발

/** 문제 설명
 *
 *  프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
 *  또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 
 *  이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
 *  먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때, 
 *  각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
**/

/** 제한 사항
 * 
 *  --작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
 *  --작업 진도는 100 미만의 자연수입니다.
 *  --작업 속도는 100 이하의 자연수입니다.
 *  --배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 
 *    예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
**/

// 문제 파악
// 배포 가능한 일수를 넣은 배열을 만든다
// 배열 안의 일수 : 앞<뒤 1출력, 앞>뒤 1+뒤 개수 출력  
// -> 배열[0]이랑 뒤 큰 수랑 계속 비교하면서 끝난 아이들은 삭제하고, 
// -> (예외 처리) 비교할 대상이 없을 때 출력할 것 정해주고 !!

// 풀이 1 -> 발상은 ok 구현은 실패
{
    const progresses = [93, 30, 55];
    const speeds = [1, 30, 5];
    const answer = [1];

    let real_days = new Array(progresses.length).fill(0);
    for (let i=0; i<progresses.length; i++){
        while(progresses[i] < 100){
            progresses[i+1] = progresses[i] + speeds[i];
            real_days[i]++
        }
    }
    const result = real_days.reduce((prev,curr)=>{    // reduce 는 이렇게 못쓴다...
        if(prev < curr){
            answer.push(1);
        }else if(prev >= curr){
            answer[answer.length-1]++
        }
    },0);
}

// reduce는 이렇게 쓴다.
{
    const array = [3,4,5,6,7,8,9];
    const result = array.reduce((prev,curr) => {
        console.log('-------');
        console.log(prev);        // 0 un un un un un un un
        console.log(curr);        // 3 4  5  6  7  8  9  -> 애초에 현재값에 집중하도록 만들어진 구조임
    }, 0);
    console.log(result);
}

// 풀이 2 -> 오류 ( var, const, let 개념 정리 다시 )
// 배열에서, [3,5,1,1,8,2] -> 5보다 작은 1,1까지 총 3개 구할 때 findIndex() 유용하게 썼다
{
    var progresses = [95, 90, 99, 99, 80, 99];
    var speeds = [1, 1, 1, 1, 1, 1];

    function solution(progresses, speeds){

        var answer = [];
        let arr = []; 
        const number = 0;       // 오류: Uncaught TypeError : assignment to constant variable -> const = constant 일정한, 지속적인
        const remainder = 0;    // var나 let과 달리, const 키워드를 사용해 선언한 변수는 재할당이 금지된다. -> 뒤에 재할당에 이루어지는 수식이 있으니 당연히 오류;;

        for(let i=0; i<progresses.length; i++){
            number = parseInt((100 - progresses[i])/speeds[i])
            remainder = (100 - progresses[i])%speeds[i]

            if(remainder != 0){
                number +=1
            }

            arr.push(number);
        }
        while(arr.length > 0){
            let count = arr[0];
            let result = arr.findIndex(num => num > count);    // findIndex() 사용법
                                                               // Returns the index of the first element in the array where predicate is true, and -1 otherwise.
            if(count !== -1){                                  // 조건에 만족하는 제일 첫번째 인텍스 반환하고, 조건 만족하지 않으면 -1 반환한다 !!
                answer.push(result);
                arr.splice(0,result);                          // 오류: signal: aborted (core dumped)
            }else{                                             // 범위를 벗어났다. count !== -1 이 아니라 result !== -1 였어야 함 !!
                answer.push(arr.length);
                arr.splice(0,arr.length);
            }
        }
        return answer;
    }
}
// 풀이 2 완성
{
    function solution(progresses, speeds) {
        var answer = [];
    
        let arr = [];
        var result = 0;
        var remainder = 0;
        for(let i=0; i<progresses.length; i++){
            result = parseInt((100 - progresses[i])/speeds[i])
            remainder = (100 - progresses[i])%speeds[i]
        
            if(remainder != 0){
                result += 1;
            }
        
            arr.push(result);
        }
    
        while(arr.length > 0){
            let first = arr[0];
            let count = arr.findIndex(num => first<num);
        
            if(count !== -1){
                answer.push(count);
                arr.splice(0, count);
            }else{
                answer.push(arr.length)
                arr.splice(0, arr.length);
            }
        }
    
        return answer;
    }
}