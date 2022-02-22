// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculate a value

// 1. Function declaration
// function name(param1, param2) {body...return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello');
// JS는 타입이 없어 ㅠㅠ 
log('Hello');
log(1234);
// 타입스크립트로 타입 구분해줘야함
// function log(message: string) : number{ // e.g. TYPESCRIPT
    // console.log(message);
    // return 0;
// }


// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'}
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') { 
    // 사용자가 parm2 전송안했을 때 default 값 지정
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    
    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg)) // 배열에서 더 자세히 다루기
}
printAll('dream', 'coding', '승연');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {  // 부모 함수
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);  
    function printAnother() {  // 자식 함수
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
    return undefined; // 리턴 값이 없는 함수들은 이렇게 표현됨 (생략 가능)
}
printMessage();
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.

sum(2, 3); // sum이란 함수가 호출 되기도 전에 물어봐도 답 해줌 ...hoisting 현상
// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
        // scope 안의 로직이 많을 수록 가독성 저하
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) { // 조건이 맞지 않을 때는 빨리 리턴해서 함수를 종료하라
                            // 값이 undefined인 경우, 값이 -1인 경우
        return;
    }
    // long upgrade logic ...
    // 조건이 맞을 때만 로직을 실행하도록 짜기
}

// First-class function 
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned bu another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reached it.
const print = function() {  // anonymous function 이름없는 함수
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain =sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { 
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function() {  // printYes 변수에 함수 할당
    console.log('yes!');
};

// named function\
// better debugging in debugger's stack traces // 디버깅할 떄 쓰임
// recursions
const printNo = function print() {  //  printNo 변수에 print 함수 할당
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function() {
    console.log('simplePrint!');
};

const add = function(a, b) {
    return a + b;
};

// 변신
const simplePrint = () => console.log('simplePrint');

// 변신
const add = (a, b) => a + b;
// the other
const simpleMultiply = (a, b) => {
    return a * b;
};

// IIFE: Immediately Invoked Function Expression 
(function hello() {
    console.log('IIFE');
})()     // 선언함과 동시에 바로 선언 //wow amazing

// Fun quiz time
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, reminder

function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 3, 4));
