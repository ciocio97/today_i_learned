// Q1.카카오 오픈채팅
const record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
];

// 들어옴 (o)
// 들어옴 (o)         [이름 바꿈 (O)]
// 들어옴 (o) 나감 (O) [이름 바꿈 (O)] 들어옴 (o)

// record ','로 각각 배열로 나눠주기
// 배열 길이가 3일때 (Enter과 Change)
// uid-key 이름-value에 넣어서 name객체 업데이트 시켜주기
// 배열 돌면서 [0] Enter이면
// [1]에 해당하는 객체 value 넣어서 '들어왔습니다' 출력하기
// 배열 돌면서 [0] Leave이면
// [1]에 해당하는 객체 value 넣어서 '나갔습니다' 출력하기


// 풀이 1

// for문
for (let i=0; i<record.length; i++) {
    const[state,uid,name] = record[i].split(' ');
    console.log([state,uid,name]); // 차례대로 나열 for문 [],[],[],[],[]
}

function solution(record){
    var answer = [];
    var uidObject = {};
    for(let i=0; i<record.length; i++){
        const arr = record[i].split(' ');

        if(arr.length === 3) uidObject[arr[1]] = arr[2];
    }

    for(let i=0; i<record.length; i++){
        const arr = record[i].split(' ');

        if(arr[0] === 'Enter'){
            answer.push('"'+uidObject[arr[1]]+'님이 들어왔습니다."');
        }else if(arr[0] === 'Leave'){
            answer.push('"'+uidObject[arr[1]]+'님이 나갔습니다."');
        }
    }
    return answer;
}


// 풀이 2

// map
const ss = record.map((str) => str.split(' '));
console.log(ss); // 배열 안에 배열 map [[],[],[],[],[]]

function solution(record){
    const userInfo = {};     // uid는 키값에 하나의 값을 계속 업데이트시켜야하니까 객체 할당
    const action = [];       // 상태, uid 넣은 배열 -> 인덱스로 접근해야하니까 배열 할당
    const stateMapping = {   
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'        // state 객체
    }

    // 순서대로 접근하는 방법 forEach로도 할 수 있다 👍
    // forEach는 콜백함수 들어가니까... wow
    record.forEach((v) => { 
        const [state, uid, name] = v.split(' ');

        if(state !== 'Change'){
            action.push([state, uid]);  // state랑 uid 합쳐놓은 배열 만들어 놓고
        }

        if(name){
            userInfo[uid] = name;       // uid 객체
        }
    })
                                        
    return action.map(([state, uid]) => {  // 마지막에 그 배열 돌면서 state uid(객체)값들 합쳐주기
        return `${userInfo[uid]}${stateMapping[state]}`;
    })
}


// 풀이 3
// 이거는 ... 별로 안좋은 코드다. 나 자바스크립트 문법 잘 알고 있어요 자랑너낌

function solution(record){
    var name = {}
    var arr = record.map(v => v.split(' '));

    arr.slice().reverse().forEach(v => { if (v[2]) name[v[1]] = v[2] } )

    return arr.filter(v => { return v[0] !== 'Change'})
              .map(v => {return v[0] === 'Enter' ? name[v[1]]+'님이 들어왔습니다.' : name[v[1]]+'님이 나갔습니다.'})
}


// 풀이 4
// 이거 좋다 ! 코드가 한눈에 보인다 !

function solution(record){
    let answer = [];
    const uids = new Map();

    record.forEach(entry => {
        let [state, uid, name] = entry.split(' ');
        if(state !== 'Leave') uids.set(uid, name);
        // Map(2) {"uid1234" => "Muzi", "uid4567" => "Ryan"}
        // Map(2) {"uid1234" => "Muzi", "uid4567" => "Prodo"}
        // Map(2) {"uid1234" => "Muzi", "uid4567" => "Prodo"}
        // Map(2) {"uid1234" => "Prodo", "uid4567" => "Prodo"}
        // Map(2) {"uid1234" => "Prodo", "uid4567" => "Ryan"}
    })

    record.forEach(entry => {
        let [state, uid] = entry.split(' ')
        if(state === 'Enter') answer.push(`${uids.get(uid)}님이 들어왔습니다.`)
        if(state === 'Leave') answer.push(`${uids.get(uid)}님이 나갔습니다.`)
    })

    return answer;
}


// set Constructor

// Set내의 값은 유일해야한다.
// +0 !=== -0   (원래는 +0 === -0)
// NaN === NaN  (원래는 NaN !== NaN)

{
    const set1 = new Set([1,2,3,4,5]);

    console.log(set1.has(1));  // true
    console.log(set1.has(5));  // true
    console.log(set1.has(6));  // false

    let mySet = new Set();

    mySet.add(1);  // Set {1}
    mySet.add(7);  // Set {1, 7}
    mySet.add(7);  // Set {1, 7}

    // 서로 다른 객체를 참조하기 때문에 이건 괜찮음 ㄷㄷ
    const o = {a: 1, b: 2}
    mySet.add(o);             // Set {1, 7, {a: 1, b: 2}}
    mySet.add({a: 1, b: 2});  // Set {1, 7, {a: 1, b: 2}, {a: 1, b: 2}}

    mySet.size;               // 4
    mySet.delete(7);          // Set {1, {a: 1, b: 2}, {a: 1, b: 2}}

    // set내 항목에 대해 반복
    // item들을 순서대로 (콘솔에) 기록 -> 1, {a: 1, b: 2} (엇 여기서는 1개만 출력됨?!!)
    // (여기서 key와 value는 같음)
    for (let item of mySet) console.log(item);
    for (let item of mySet.keys()) console.log(item);
    for (let item of mySet.values()) console.log(item);
    for (let [key, value] of mySet.entries()) console.log(key);

    // Set과 Array 사이 변환
    mySet2 = new Set([1, 2, 3, 4]);
    mySet2.size   // 4
    console.log([...mySet2]);  // [1, 2, 3, 4]

    // 교집합(intersection) 흉내(simulate)내기
    var intersection = new Set([...set1].filter(x => set2.has(x)));

    // 차집합(difference) 흉내(simulate)내기
    var difference = new Set([...set1].filter(x => !set2.has(x)));

    // forEach로 set내 항목 반복
    mySet.forEach(function(value) {
        console.log(value);
    })  // 1 / 2 / 3 / 4

}