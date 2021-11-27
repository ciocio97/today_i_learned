function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
           
quickSort([100,-3,2,4,6,9,1,2,5,3,23])

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1


// description

// Quick Sort
// Quick Sort는 맨 앞의 수를 기준으로 작은 수는 왼쪽, 큰 수는 오른쪽으로 일단 보낸다.
// -> 맨 앞의 수가 있어야 할 자리를 먼저 정해주는거다. 그래서 Quick Sort.
// -> 순서대로 정렬이 아니라 해당 수가 위피할 자리를 바로 찾아주기 때문에 Quick Sort라고 부른다.

function quickSort(arr, transform = (item) => item) {
  // BASE CASE
  // 들어온 배열의 개수가 1이면, 배열 자체를 리턴한다.
  if (arr.length <= 1) return arr;

  // 배열의 가장 첫번째 수를 pivot으로 정의함
  const pivot = arr[0];
  // pivot을 기준으로 작은 수를 담을 left
  const left = [];
  // pivot을 기준으로 큰 수를 담을 right
  const right = [];

  // 들어온 배열을 돌면서 pivot을 기준으로 left, right 정렬
  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) < transform(pivot)) left.push(arr[i]);
    else right.push(arr[i]);
  }

  // left도 quickSort 재귀를 불러 정렬
  const lSorted = quickSort(left, transform);
  // right도 quickSort 재귀를 불러 정렬
  const rSorted = quickSort(right, transform);
  // 정렬된 아이를 pivot를 중심으로 배열에 담아 리턴
  return [...lSorted, pivot, ...rSorted];

};




