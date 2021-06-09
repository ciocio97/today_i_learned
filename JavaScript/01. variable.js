// 1. Use strict
// added in ES5
// use this for Vanilla Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6) -mutable

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) // 면접 질문 :)
// has no block scope {}

// 3. Constant, r(read)
// const (added in ES6) -immutable
// use const whenever possible.
// only use let if variable needs to change.

// Note!
// Immutable data type: primitive types, frozen objectx (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// favor immutable data type always for a few reason:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// Number - special numeric values: infinity, -infinity, NaN( Not a Number )

// BigInt - ( fairly new, don't use it yet )

// string //자바스크립ㅌ 너무 자유롭다 ^^
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log('value: ${greeting}, type: ${typeof greeting}');
const helloBob = 'hi ${brendan}!';
console.log('value: ${helloBob}, type: ${typeof helloBob}'); //${} 함수값 호출하는데 용이

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

// null
let nothing = null; // 값이 아예 없음 텅텅 빔
console.log('value: ${nothing}, type: ${typeof nothing}');

// undefined
let x; // 선언은 되었지만 값이 있는지 없는 지 모름
console.log('value: ${x}, type: ${typeog x}');

//symbol, create unique identifiers for objects
// 정말 고유한 식별자 쓰고싶을 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 ===gSymbol2); //true
console.log('value: ${symbol1.description}') //.description 붙여서 출력

// object, real-life object, data structure



// 5. Dynamic typing: dynamically typed language
// 타입으로 인해 발생하는 문제가 많음
// 그래서 js위에 ts(타입스크립트) 올려서 사용한다 !


