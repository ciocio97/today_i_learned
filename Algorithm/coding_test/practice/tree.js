// tree를 배열이나 객체로 표현한다 ??!??

// solution with segment tree: O(logN) (search only)
// object implementaion
const rangeMinimum = function (arr, ranges) {
  // ts: tree start. te: tree end
  // arr의 ts부터 te까지를 tree로 만든다.
  const createMinTree = (arr, ts, te) => {
    // base case
    if (ts === te) {
      return { value: arr[ts] };
    }

    // recursive case
    // 현재 범위를 절반을 기준으로 왼쪽과 오른쪽으로 나눈다
    const mid = parseInt((ts + te) / 2);
    const left = createMinTree(arr, ts, mid);
    const right = createMinTree(arr, mid + 1, te);

    return {
      value: Math.min(left.value, right.value),
      left,
      right,
    };
  };
  const tree = createMinTree(arr, 0, arr.length - 1);

  // rs: range start, re: reange end
  const findMin = (ts, te, rs, re, tree) => {
    // 현재 tree와 구간이 정확히 일치하거나
    // 구간이 tree를 포함할 경우
    if (rs <= ts && te <= re) {
      return tree.value;
    }

    // 현재 tree에 주어진 구간이 겹치지 않는 경우
    if (te < rs || re < ts) {
      return Number.MAX_SAFE_INTEGER;  
      // Number.MAX_SAFE_INTEGER : 자바스크립트에서 안전한 최대 정수값 = 2^53 - 1
    }

    // 겹치는 부분이 존재하는 경우
    const mid = parseInt((ts + te) / 2);
    return Math.min(
      findMin(ts, mid, rs, re, tree.left),
      findMin(mid + 1, te, rs, re, tree.right)
    );
  };

  const mins = ranges.map((range) => {
    const [start, end] = range;
    return findMin(0, arr.length - 1, start, end, tree);
  });
  return mins;
};

// 배열로 tree 구현해보기 Advanced



// 아 트리 너무 어렵다 .....
// divide and conquer: O(N * logN)
{
  const largestRectangularArea = function (histogram) {

    // 트리 만드는 함수
    const createMinIdxTree = (arr, ts, te) => {
      // 가장 작은 값의 '인덱스'를 구하기 위한 트리 .. ^!^
      if(ts === te) return { idx: ts, val: arr[ts] };
  
      const mid = parseInt((ts + te) / 2);
      const left = createMinIdxTree(arr, ts, mid);
      const right = createMinIdxTree(arr, mid + 1, te);
  
      return {
        idx: left.val < right.val ? left.idx : right.idx,
        val: Math.min(left.val, right.val),
        left,
        right
      };
    };
    const tree = createMinIdxTree(histogram, 0, histogram.length - 1);
  
    // 최저 인덱스를 구하는 함수
    const getMinIdx = (ts, te, rs, re, tree) => {
      if(rs <= ts && te <= re) return tree.idx;
      if(te < rs || re < ts) return rs;
  
      const midIdx = parseInt((ts + te) / 2);
      const leftIdx = getMinIdx(ts, midIdx, rs, re, tree.left);
      const rightIdx = getMinIdx(midIdx + 1, te, rs, re, tree.right);
  
      return histogram[leftIdx] < histogram[rightIdx] ? leftIdx : rightIdx;
    }
  
    // 사각형 넓이를 구하는 함수
    const getRangeArea = (start, end) => {
      
      if(start > end) return 0;
      // 최저 인덱스
      const minIdx = getMinIdx(0, histogram.length - 1, start, end, tree);
  
      return Math.max(
        (end - start + 1) * histogram[minIdx],
        getRangeArea(start, minIdx - 1),
        getRangeArea(minIdx + 1, end)
      );
    };
  
    // histogram [2,1,4,5,1,3,3] 막대 높이가 들어있는 배열의 시작 인덱스와 끝 인덱스를 넣어
    // 사각형 넓이를 구하는 함수에 넣어 리턴
    return getRangeArea(0, histogram.length - 1);
  
  };
}

{
  const largestRectangularArea = function (histogram) {
    const N = histogram.length;
    const stack = [];
    let maxArea = 0;

    for(let i=0; i<N; i++){
      while(stack.length && histogram[i] <= histogram[stack[stack.length - 1]]){
        maxArea = Math.max(maxArea, getArea(i, histogram, stack));
      }
      stack.push(i);
    }

    while(stack.length){
      maxArea = Math.max(maxArea, getArea(N, histogram, stack));
      return maxArea;
    }

    const getArea = (i, histogram, stack) => {
      const h = histogram[stack.pop()];
      const w = stack.length ? i - stack[stack.length - 1] - 1 : i; // 이 코드는 뭐야 ??
      return h * w;
    }
  }
}
