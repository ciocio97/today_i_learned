// Q1. 포켓몬

// 문제 파악
// 총 N마리의 포켓몬 중 N/2마리를 가져갈 수 있음.
// 최대한 다양한 종류의 포켓몬을 가져갈꺼임. 
//   => [3,1,2,3] 4/2=2개 가져갈 수 있는데, [1,2]or[2,3]or[1,3]등으로 구성 가능
// 가장 많은 종류의 포켓몬을 가져갈 수 있을 때, 그 개수를 return 해라

// 풀이
{
    var nums = [3,3,3,2,2,2];

    function solution(nums) {
        let answer = 0;
        const set = new Set(nums);           // 배열의 중복을 없애는 방법 1. new Set() 함수
        const newArray = Array.from(set);
        var num = nums.length / 2;
        
        if(newArray.length >= num) return answer + num;
        else return answer + newArray.length;
    }
}

{
nums = [3,3,3,2,2,2];
const set = new Set(nums);
console.log(set);                             // {3,2} <- new Set() 중복값을 제거하고 '객체'를 생성함
const newArray1 = [...set];
console.log(newArray1);                       // [3,2] <- [...{}] 배열의 형태로 변환.
const newArray2 = Array.from(set);
console.log(newArray2);                       // [3,2] <- Array.from() 배열의 형태로 변환.
}
{
nums = [1,3,4,1,3];
const newArray = nums.filter((element,index)=>
    nums.indexOf(element) === index           // [1,3,4] -> indexOf() 특정값이 '처음'으로 나타나는 index를 반환.   
);
console.log(newArray);
}


// 배열로 순열과 조합을 구현해보자 ^!^

// 순열 코드
{
    const arr = [2,3,4,5];
    const selectNum = 2; // 2개 뽑을 때 한정임 3개 뽑을 땐 또 달라지고 그려

    function permutation(arr,selectNum){
        let result = [];
        if (selectNum === 1) return arr.map((v) => [v]);

        arr.forEach((v, idx, arr)=> {
            const fixer = v;
            const restArr = arr.filter((_, index) => index !== idx);
            const permutationArr = permutation(restArr, selectNum - 1);
            const combineFixer = permutationArr.map((v) => [fixer,...v]);
            result.push(...combineFixer);
        });
        return result;
    }
}
// 순열 오ㅐ?? 이해안됌 ;;
{
    const arr = [2,4,5,7,9];
    const selectNum = 3;

    arr.forEach((v, idx, arr)=>{
        const fixer = v;
        const restArr = arr.filter((_,index) => index !== idx);
        console.log(restArr);   // [4,5,7,9], [2,5,7,9], [2,4,7,9], [2,4,5,9], [2,4,5,7]
                                // 1번씩 1개의 숫자 제외한 배열들이 출력됌..
    })
}

// 조합 코드
{
    function combination(arr, selectNum) {
        const result = [];
        if(selectNum === 1) return arr.map((v) => [v]);

        arr.forEach((v, idx, arr) => {
            const fixed = v;
            const restArr = arr.slice(idx + 1);
            const combinationArr = combination(restArr, selectNum - 1);
            const combineFix = combinationArr.map(() => [fixed,...v]);
            result.push(...combineFix);
        });
        return result;
    }
}
// 조합 이게 뭐냐고 ,,,,
{
    let answer = [];
    
    const dfs = (nums, num, arr = []) => {
        if (num === 3) answer.push([...arr]);
        else {
            for (let i=0; i<nums.length; i++){
                arr.push(nums[i]);
                dfs(nums.slice(i+1), num+1, arr);
                arr.pop();
            }
        }
    };

}