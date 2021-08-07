// 함수에 할당된 변수는 name속성을 가지게 됩니다. 
var math = {
    'facit': function factorial(n){
        console.log(n);                  // 출력 결과 3;2;1; 도랏 ㄷㄷㄷ
        if(n<=1){
            return 1;
        }
        return n * factorial(n-1);
    }
};

math.facit(3);

var foo = function(){};
console.log(foo.name);                   // "foo"

var foo2 = foo;
console.log(foo2.name);                  // "foo"


// 도대체 이게 무슨 구조야 ...1
// var add1 = (function(){}());
var add1 = (function(){
    var a = 10;
    return function(x, y){
        return x + y + a;
    };
}());

console.log(add1(1,2));                  // 13

// 도대체 이게 무슨 구조야 ...2
// (function name(){});
// 그룹 연산자(...)의 피연산자는 값으로 평가됨.
// ***기명 또는 무명 함수를 그룹 연산자로 감싸면 함수 리터럴로 평가되어 '함수 객체'가 된다
(function bar(){console.log('bar');});

/*bar();                                   // ReferenceError: bar is not defined */

let score = 80;

function doStuff(value){
    return value = 90;
}

console.log(doStuff(score));
console.log(score);