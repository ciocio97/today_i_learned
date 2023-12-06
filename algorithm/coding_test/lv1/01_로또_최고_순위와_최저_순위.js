// 로또 최고 순위와 최저 순위
// Q1.기본 조건
{
    function solution(lottos, win_num) {
        var answer = [];
        return answer;
    }
}

// 조건 파악
// 1. 2개의 parm를 받는 함수
// 2. 전역 변수로 answer 배열 정의
// 3. return으로 함수 끝내기

// 문제 파악
// 1. 2개의 parm 안에 들어있는 배열 값을 서로 비교해야한다 -> filter
// 2. answer 배열에 값을 넣어준다 -> unshift (앞에서 값 추가)
// 3. 순위 = [1,2,3,4,5,6] 당첨개수 = [6,5,4,3,2,1 or 0] -> map

// 풀이
{
    function solution(lottos, win_num) {
        var answer = [];
        const min = lottos.filter((num) => win_num.includes(num));
        const max = lottos.filter((num) => num === 0);
        answer.unshift(7 - min.length);
        answer.unshift(7 - min.length - max.length);
    
        answer = answer.map(num => {
            if (num > 6) return 6;
            else if (num < 1) return 1;
            else return num;
        });

        return answer;

    }
}












