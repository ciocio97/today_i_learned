'use strict';

// JavaScript is synchronous. 정해진 순서에 맞게 코드가 실행됨 (동기)
// Execute the code in order after hoisting.
// hoisting: var, function declaration
// => 선언들이 제일 위로 먼저 올라가는 것
console.log('1');
setTimeout(function() {   // browser api // asynchronous (비동기)
    console.log('2');
}, 1000);                 // 단위 milliseconds
// callback함수란: 우리가 전달해놓은 함수를 나중에 너가 불러조
// setTimeout이란 함수에 실행하고 싶은 함수(parm로) 져장 >ㅁ<
// 지금 당장 실행하진 말구 [condition] 맞춰서 내 함수 실행해조
{
setTimeout(() => console.log('2'), 1000);  // => 사용해서 단순화    
}
console.log('3');


// Synchronous callback
function printImmediately(print) {
    print()
}
printImmediately(() => console.log('hello'));


// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error ('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error ('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage(); // obj 변환
const id = prompt('enter your id:');
const password = prompt('enter your password:');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                    );
            },
            error => {
                console.log(error);
            }    
        );
    },
    error => {
        console.log(error);
    }
);