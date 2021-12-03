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
