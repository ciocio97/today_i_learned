// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10,24,76,73]);

// description

const mergeSort = function (arr) {
    // BASE CASE
    // 들어온 배열의 길이가 1이면 해당 배열을 리턴한다.
    if(arr.length === 1) return arr;
    // 배열의 중앙 인덱스를 찾는다.
    let mid = Math.floor(arr.length / 2);
    // 중앙을 기준으로 나눈 왼쪽을 mergeSort에 담아 재귀 호출한다. (또 나누기 위해 !!)
    let left = mergeSort(arr.slice(0, mid));
    // 중앙을 기준으로 나는 오른쪽을 mergeSort에 담아 재귀 호출한다. (또 나누기 위해 !!)
    let right = mergeSort(arr.slice(mid));
    // 나눠진 왼쪽과 오른쪽을 비교하는 merge 함수를 리턴한다.
    return merge(left, right);
  };
  
// merge 함수는 두 배열을 입력받아 최종적으로 정렬된 배열을 리턴한다.
const merge = function (arr1, arr2) {
    // 결과를 담는 result 배열
    let result = [];
    // 인덱스 i
    let i = 0;
    // 인덱스 j
    let j = 0;
    // 인덱스 i와 j가 배열의 길이보다 작은 동안 배열의 요소를 서로 비교해준다.
    while(i < arr1.length && j < arr2.length){
      // 배열1보다 배열2의 요소가 크면
      if(arr1[i] < arr2[j]){
        // 배열1요소를 추가한다.
        result.push(arr1[i]);
        // 인덱스 i 올려준다.
        i++;
      }
      // 배열2보다 배열1의 요소가 크면
      else{
        // 배열2요소를 추가한다.
        result.push(arr2[j]);
        // 인덱스 j 올려준다.
        j++;
      }
    }
    // 혹시나 남아있을 요소를 넣어준다.
    while(i < arr1.length){
      result.push(arr1[i]);
      i++;
    }
    // 혹시나 남아있을 요소를 넣어준다.
    while(j < arr2.length){
      result.push(arr2[j]);
      j++;
    }
    // 정렬된 요소를 담은 배열을 리턴한다.
    return result;
  };
