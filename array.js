'use strict';

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// Index position
const fruits = ['🍓','🥑'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]);

console.clear()
// 3. Looping over an array
// print all fruits
// a. for
for ( let i = 0; i < fruits.length; i++ ){
    console.log(fruits[i]);
}

// b. for of ; value앞에 let 붙여라 undefined라잖냐
for (let value of fruits) {
    console.log(value);
}

// c. forEach
// api 쓸 때 ctrl키 눌러서 속성,특성 확인하면서 코딩할 것.
fruits.forEach(function(fruit, index, array) {
    console.log(fruit, index, array); // 보통은 array는 받아오지 않음
});

//깔끔 anonymous 함수는 => arrow를 쓸 수 있답니다 :)
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push: add an item to the end 뒤에서 추가
fruits.push('🥝','🍑');
console.log(fruits);

// pop: remove an item from the end 뒤에서 제거
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning 앞에서 추가
fruits.unshift('🍋','🍊');
console.log(fruits);

// shift: remove an item from the beginning 앞에서 제거
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position 중간에 제거, 중간에 추가
fruits.push('🍐','🍇','🍉');
console.log(fruits);
fruits.splice(2, 2);
console.log(fruits);
fruits.splice(1,1,'🍍','🍒');
console.log(fruits);

// combine two arrays
const fruits2 = ['🥭','🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍓')); // 0
console.log(fruits.indexOf('🍒')); // 2
console.log(fruits.indexOf('🍏')); // -1

// includes
console.log(fruits.includes('🍍')); // true
console.log(fruits.includes('🍏')); // false

// lastIndexOf
console.clear();
fruits.push('🍓');
console.log(fruits);
console.log(fruits.indexOf('🍓'));
console.log(fruits.lastIndexOf('🍓'));