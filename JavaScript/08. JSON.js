// JSON
// JavaScript Object
// Object{ key : value }
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization and transmission of data between the network the network connection
// - independent programming language and platform

// object ----> string (how we serialize it ?)
// object <---- string (how we deserialize it ?)

// 1. Object to JSON
// stringify(obj) 끈으로 묶다 = 작성된 문서를 다른 언어로 변환한다.
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple", "banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);} /* {name: "tori", color: "white", size: null,
    }                                          birthDate: Tue Jun 08 2021 22:53:44 GMT+0900 */
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);  // 원하는 property만 변환 가능
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;  // 세밀하게 통제하고 싶을 때 callback 함수로 처리
})



// 2. JSON to Object
// parse(json) 문장을 문법적으로 해석하다 = 다른 언어로 작성된 문서를 디코딩한다
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json); // 🐶간단
console.log(json);

{
const obj = JSON.parse(json, (key, value) => {
console.log(`key: ${key}, value: ${value}`);
return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); 본래 js에는 new Date 라는 함수가 있었음
// 근데 json은 함수 취급하지 않아
// return에 callback 인자 넣어서 다시 불러오기 작업

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
}

// JSON Diff 
// 서버에게 요청했을 때 1번째로 받은 data != 2번째로 받은 data
// 디버깅할 때 유용

// JSON Beautifier
// 서버에서 받아온 JSON을 붙여놓으면 format이 망가지는 경우가 있음
// format 복구

// JSON Parser
// JSON type ---> object 형태로 확인해보고 싶을 때

// JSON Validator
// JSON에 (문법적)빠진 게 있나 없나 확인할 때

// JSON이 서버와 주고받는 data의 크기를 줄이려고 엄청 노력함
