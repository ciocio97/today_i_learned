function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1     // 비교 연산자의 새로운 모습
    }

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])

// 이중 for문이 아닐 땐 for문을 여러번 쓴다고해서 시간 복잡도가 커지는 건 아니라고 한다
// n이나 2n이나 3n이나 비슷비슷하니 코드 자체를 보기 편하게끔 리팩토링했다고 한다
// 구조가 눈에 더 잘 보이긴 함. 근데 여태 내 코드 스타일은 naive solution에 가까웠음 .. 또륵
