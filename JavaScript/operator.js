// 1. String concatenation
console.log('my' + 'cat');
console.log('1'+ 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // X = X + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), $$ (and), ~ (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// 제일 연산이 많고 복잡한 아이를 뒤에다 놓을 것

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('omg')
    }
    return true;
}

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// 제일 연산이 많고 복잡한 아이를 뒤에다 놓을 것

// often used to compares long if-statement
// nullableObject && nullableObject.something

// ! (not)
console.log(!value1);

// Equality
const stringFive = '5';
const numberFive = 5;

// == loose quality, with type conversion 5 = 5
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion '5' != 5
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2)
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // 왜 true? ㅎ
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie'){
    console.log('Welcome, Ellie');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}
// if else if else 반복해야할 때 쓰면 좋다 ! - 가독성 좋음

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// 조건을 확인하고 실행하고 싶으면 while, 조건 확인 전에 실행하고 싶으면 do while

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for ( let i = 3; i > 0; i = i - 2) {
    //incline variable declaration
    console.log(`incline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
    if (i == 0) {
        continue;
    } else if (i % 2 == 0) {
        console.log(i)    
    } else {
        continue;
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for ( let i = 0; i < 11; i++) {
    while(i < 9) {
        console.log(i)
        break
    }
}

for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}
