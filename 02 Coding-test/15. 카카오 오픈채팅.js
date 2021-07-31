// Q3.카카오 오픈채팅
const record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
];

// for문
for (let i=0; i<record.length; i++) {
    const[state,uid,name] = record[i].split(' ');
    console.log([state,uid,name]); // 차례대로 나열 for문 [],[],[],[],[]
}

// map
const ss = record.map((str) => str.split(' '));
console.log(ss); // 배열 안에 배열 map [[],[],[],[],[]]


function solution(record){
    let answer = [];
    
    for (i=0; i<record.length; ++i) {  // 왜 ++i 해줬나 ?        
      const [state, uid, name] = record[i].split(' ');

      if (state === 'Leave') {
          answer.push(uid, '님이 나갔습니다');

          continue;
      }

      if (state === 'Enter') {
          answer.push(uid, '님이 들어왔습니다');
      }


    }
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
    [...mySet2];  // [1, 2, 3, 4]

    // 교집합(intersection) 흉내(simulate)내기
    var intersection = new Set([...set1].filter(x => set2.has(x)));

    // 차집합(difference) 흉내(simulate)내기
    var difference = new Set([...set1].filter(x => !set2.has(x)));

    // forEach로 set내 항목 반복
    mySet.forEach(function(value) {
        console.log(value);
    })  // 1 / 2 / 3 / 4

}