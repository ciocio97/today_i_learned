// Q1. 키패드 누르기
// 문제 파악
// 맨 처음 왼손은 *에서, 오른손은 #에서 시작한다. 
//     => 값을 지정해놓고 시작해야 할듯?
// 손가락은 상하좌우 4가지 방향으로 한칸씩(1씩)만 이동할 수 있다. 
//     => 숫자 위치(location)로 접근해야 할 듯 ?
//     => 숫자 간의 이동 패턴을 안다면 위치 개념 필요 없어도 된다 !!
// 왼쪽 열 1,4,7은 무조건 왼손 : 오른쪽 열 3,6,9는 무조건 오른손
// 가운데 열 2,5,8,0은 현재 키패드의 위치에서 더 가까운 쪽이 누르기
// *but 두 손가락의 거리가 같다면, 왼손잡이 or 오른손잡이로 판단 
//     => function 정의 후 나중에 불러와야겠다.


// 풀이 1
// 숫자 자체로 접근해서 +,-로 규칙을 찾아보려 했으나 실패....
{
    function solution(numbers, hand) {
        var answer = '';
        for( let num in numbers) {
            const arrayL = [];
            const arrayR = [];
            if (num % 3 === 1) {
                answer.concat('L');
                arrayL.push(num);
            } else if (num % 2 === 1) {
            
            } else if (num === 0) {

            } else {
                answer.concat('R');
                arrayR.push(num);
            }
        }
        return answer;
    }
}

// 풀이 2
// const location {1:[], 2:[], 3:[], ...} => 위치 지정 => 규칙 찾을 수 있었음
// lH= '*', rH= '#' 처음 값 선언해준 후 lH=num, rH=num을 통해 값 꾸준히 업데이트
{   
    function solution(numbers, hand){

        function middle(location,num,lH,rH,hand){
            const lD = Math.abs(location[lH][0] - location[num][0]) + Math.abs(location[lH][1] - location[num][1]);
            const rD = Math.abs(location[rH][0] - location[num][0]) + Math.abs(location[rH][1] - location[num][1]);

            if(lD === rD) return hand === 'left'? 'L' : 'R';
            else return lD < rD ? 'L' : 'R';
        }

        const location = {                                   // 각 번호마다 위치를 지정해준 게 뽀인트
            1:[0,0],2:[0,1],3:[0,2],
            4:[1,0],5:[1,1],6:[1,2],
            7:[2,0],8:[2,1],9:[2,2],
            '*':[3,0],0:[3,1],'#':[3,2]
        };

        var lH = '*', rH = '#';
        var answer = '';

        for(var num of numbers){                             // for in vs for of => object vs array
            if(num % 3 === 1){
                answer += 'L';
                lH = num;
            } else if(num % 3 === 0 && num != 0){            // = : (value값)
                answer += 'R';                               // == : (value 와 value를 비교)
                rH = num;                                    // === : (value 와 data type을 비교)
            } else {
                answer += middle(location,num,lH,rH,hand);
                answer.lastIndexOf('R') === answer.length-1 ? rH = num : lH = num
            }
        }

        return answer;
    }
}

// 풀이 3
// reduce((prv,curr)=> {},sth) 함수를 이용해 numbers의 값을 차례대로 돌면서 변환한다.
// 맨 처음 값을 {answer:"",l:10, r:12} 로 지정.
// curr = 1 -> {answer:"L", l:1, r:12}
// curr = 3 -> {answer:"LR", l:1, r:3}
// curr = 4 -> {answer:"LRL", l:4, r:3}
// curr = 5 -> {answer:""} ... 
{
    numbers = [1,3,4,5,8,2,1,4,5,9,5];

    function solution(numbers, hand) {
        return numbers.reduce((prv, curr) => {
            switch(curr) {
                case 1: case 4: case 7: return {answer: prv.answer+'L', l: curr, r: prv.r};
                case 3: case 6: case 9: return {answer: prv.answer+'R', l: prv.l, r: curr};
                default:
                    if(curr===0) curr=11;
                    var ld = getDist(prv.l, curr);
                    var rd = getDist(prv.r, curr);
                    return ld < rd ? {answer: prv.answer+'L', l: curr, r: prv.r} : 
                           ld > rd ? {answer: prv.answer+'R', l: prv.l, r: curr} :
                           hand === 'right' ? {answer: prv.answer+'R', l: prv.l, r: curr} : {answer: prv.answer+'L', l: curr, r: prv.r};
                    
            }
        },{answer:"",l:10, r:12}).answer;

        function getDist(h, v){
            var num = Math.abs(h - v);
            return parseInt(num/3 +num%3); // 번호 이동할 때 규칙을 찾아내는 것이 포인트인 문제.
        }
    }
}
