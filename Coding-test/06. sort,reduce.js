const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];
const result = [];

const array1 = new Array();
const array2 = new Array();
const array3 = new Array();
const array4 = new Array();
const array5 = new Array();
for (let i=0; i<board.length; i++){
    array1.push(board[i][0])
    array2.push(board[i][1])
    array3.push(board[i][2])
    array4.push(board[i][3])
    array5.push(board[i][4])
}
const new_array = [array1,array2,array3,array4,array5];
console.log(new_array);

for (let move of moves) {
    for (let i=0; i<board.length; i++){
        if (new_array[move-1][i] == true){
            result.push(new_array[move-1][i]);
            new_array[move-1].slice(i+1);
        }
    }
}


// 배열 내 정렬 (문자열, 숫자)

const arr = ["a.x",'a.x','x.t','b.x','x.t',"a.x"];

arr.sort();                             // 문자열 정렬
console.log(arr);                       // ["a.x",'a.x','a.x','b.x','x.t',"x.t"]

var numbers = [4,2,5,1,3];
              
numbers.sort(function(a,b) {            // 숫자 정렬 간략화 
    return a-b;                         // function compare(a, b){return a - b}
});                                     

numbers.sort(function(a,b) {            // 숫자 정렬 
    if(a>b) return 1;                   // a - b > 0 : b를 a보다 낮은 색인으로 정렬
    if(a===b) return 0;                 // a - b = 0 : a와 b 놔두고 다른 색인 정렬 (둘이 같으니까!)
    if(a<b) return -1;                  // a - b < 0 : a를 b보다 낮은 색인으로 정렬
});

console.log(numbers);  // [1,2,3,4,5]


// 배열 내 중복값 개수 구하기 (문자열, 숫자)
// .reduce((){}) 함수
// 보통 array.reduce((acc,cur){return acc+cur},0) 이용해서 합을 구함
// reduce 특성 이용해서 빈 통에 중복되는 값 차례차례 더해주기 **

var array = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];

var count = array.reduce(function(A, a){  // ==(acc,cur) 개념 똑같이 적용. // A는 prv값, {}이 됨
    if(a in A){                           
        A[a]++;                           // 02. A = {2:1,4:1,5:1...} 이제 빈 통 아닙니다. 중복되는 값 있으면 ++1
    }else{                                
        A[a]=1;                           // 01. A = {} 빈 통이기에, 일단 A에 a를 1과 같이 넣어줍시다
    }
    return A;                             // 03. {2: 5, 4: 1, 5: 3, 9: 1} 완성
},{});
  
var count2 = arr.reduce(function(result,num){
    if(num in result){
        result[num]++;
    }else{
        result[num]=1;
    }
    return result;
},{});
console.log(count2);  // {a.x: 3, b.x: 1, x.t: 2}

const set5 = Array.from(count2);
console.log(set5);

var answer = [];
function result5(count2){
    for(let i=0; i<count2.length; i++){
        if(count2[i] === 1){
            answer.push(`${count[i]}`);
        }
    }
    return answer;    
}
console.log(result5(count2));


const a = [];
const b = [];

for(let value of array){
    const index = array.lastIndexOf(value);
    a.push(index+1);
}
const set = new Set(a);
const set2 = Array.from(set);
// const set3 = set2.reverse();

console.log(set2);

set2.reduce((prv,cur)=>{
    if(cur-prv === 1){
        return true;
    }else{
        b.push(cur-prv);
    }
    prv = 0 + cur;  
},0)

console.log(b);


/*{
    const arr = ['a', 'b', 'a', 'b', 'c'];

    const result = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
    }, {});

    console.log(JSON.stringify(result));
}*/



