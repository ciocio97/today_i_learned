// 로또 최고 순위와 최저 순위
// Q1.기본 조건
/*{
    function solution(lottos, win_num) {
        var answer = [];
        return answer;
    }
}*/

//조건 파악
// 1. 2개의 parm를 받는 함수
// 2. 전역 변수로 answer 배열 정의
// 3. return으로 함수 끝내기

// 문제 파악
// 1. 2개의 parm 안에 들어있는 배열 값을 서로 비교해야한다 -> filter
// 2. answer 배열에 값을 넣어준다 -> unshift (앞에서 값 추가)
// 3. 순위 = [1,2,3,4,5,6] 당첨개수 = [6,5,4,3,2,1 or 0] -> map

// 풀이
/*{
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
}*/

// Q2.내적

// 문제 파악
// 1. 2개의 parm 안의 배열 값을 같은 index에 있는 것끼리 곱하고,
//    총합을 구한다. -> for문 or reduce

// 풀이1
/*{
    function solution(a, b) {
        let answer = 0;
        for (let i in a) {
            answer += a[i]*b[i];
        }
        
        return answer
    }
}*/
// 풀이2
/*{
    function solution(a, b) {
        return a.reduce((prvNum, currNum, index) => prvNum + currNum * b[index], 0);
    }
}*/
// 풀이3
/*{
    function solution(a, b) {
        const answer = a.reduce((prvNum, currNum, index) => {
            return prvNum += currNum * b[index];
        },0);
        return answer;
    }
}*/

const record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
];

const answer = [];
const map = new Map(); // new operator 왜 정의하는거야?
for (let i=0; i<record.length; i++) {
    const [state, uid, name] = record[i].split(' ');

    if(state == 'Enter') {
        console.log([uid] + '님이 들어왔습니다.');
    } else if(state == 'Leave') {
        console.log([uid] + '님이 나갔습니다.');
    }
    map.set(uid,name)

}

// for문
for (let i=0; i<record.length; i++) {
    const[state,uid,name] = record[i].split(' ');
    console.log([state,uid,name]); // 차례대로 나열 for문 [],[],[],[],[]
}

// map
const ss = record.map((str) => str.split(' '));
console.log(ss); // 배열 안에 배열 map [[],[],[],[],[]]










