// Q1. 체육복
// 문제 파악
// 총 n명이 있는데, 체육복 잃어버린 사람(lost), 체육복 여분 있는 사람(reverse) 섞여 있다.
// 본인 앞사람 혹은 뒷 사람한테서만 여분 빌릴 수 있음 (if else 떠오름)
// 체육에 참여 할 수 있는 사람의 '수'를 구하라. => 배열 추출이 아님 !!
//                                           => 새로운 배열을 만든 후 length로 계산해도 되겠다 !


// 풀이 1
// new Array(n).fill(n) = [n,n,n,n,n...]
{
    function solution(n,lost,reserve){
        let answer = 0;

        let hasUniform = new Array(n).fill(1); // [1,1,1,1,1] 와 이런 발상을;;
    
        for(let i=0; i<lost.length; i++){ // 잃어버린 사람 값 0 만들기
            hasUniform[lost[i]-1]--; // [1,0,1,0,1]
        }
        for(let i=0; i<reserve.length; i++){ // 여분 있는 사람 값 2 만들기
            hasUniform[reserve[i]-1]++; // [2,0,2,0,2]
        }

        for(let i=0; i<hasUniform.length; i++){
            if(hasUniform[i]===0){ 
                if(hasUniform[i-1]===2){ // if: 앞에 있는 사람이 여분 있을 때
                    hasUniform[i]++;
                    hasUniform[i-1]--;
                }else if(hasUniform[i+1]===2){ // else if: 뒤에 있는 사람이 여분 있을 때
                    hasUniform[i]++;
                    hasUniform[i+1]--;
                }
            }
        }

        answer = hasUniform.filter(num => num>0).length; // 체육복 갖고 있는 사람 수 세기
        return answer;
    }
}

// 풀이 2
// splice(index,n) = 여기부터 n개 없앨게요
{
    function solution(n,lost,reserve){
        // reserve의 얇은 복사본
        let tmp = reserve.slice();
        // 같은 수가 나오면 배열에서 지워야겠다 -> splice(x,1) -> x값은 어떻게 구하지?
        // 같은 수가 등장한 곳을 indexO를 이용해 찾자 
        for (let i in tmp){
            let keyL = lost.indexOf(tmp[i]);
            let keyR = reserve.indexOf(tmp[i]);

            if (keyL != -1){  // = 값이 있을 때
                lost.splice(keyL,1);     // key(index)부터 1개 없앤다 = 같은 수 방출
                reserve.splice(keyR,1)
            }
        }

        // reserve 값 주위로 lost값이 있는지 없는지 -> ? a:b -> lost값 있으면? 앞 or 뒤 
        for (let i of reserve){
            let key = lost.includes(i-1)? lost.indexOf(i-1) : lost.indexOf(i+1);

            if (key != -1){
                lost.slice(key, 1);
            }
        }
        // 옷을 빌리지 못한 친구들만 남았다 wow.. n개에서 뺴면 끝.
        return n - lost.length;
    }
}

// slice와 splice의 차이
const fruits = ['🍓','🥑'];
fruits.push('🍐','🍇','🍉');
console.log(fruits);             // ["🍓", "🥑", "🍐", "🍇", "🍉"]
// slice: 기본값 안변함.
console.log(fruits.slice(2));    // ["🍐", "🍇", "🍉"]
console.log(fruits);             // ["🍓", "🥑", "🍐", "🍇", "🍉"]
// splice: 기본값 아예 변함.
fruits.splice(1,2);              // ["🍓", "🍇", "🍉"] 1자리부터 2개 없애기
console.log(fruits);
fruits.splice(2);
console.log(fruits);             // ["🍓", "🥑"] (2) = (0,2) 0생략

