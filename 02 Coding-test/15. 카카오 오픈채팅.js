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

}