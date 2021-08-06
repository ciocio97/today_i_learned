// Q1.프린터

// array = []; 빈 배열 선언
// priorities.length가 0이 아닐때 (while)
    // priorities에서 최댓값을 찾는다 (let 지정)
    // (prev,curr) => prev값이 최댓값보다 작을 때
    // priorities.shift(); , priorities.push(prev);
    // (prev,curr) => prev값이 최댓값일 때
    // priorities.shift();, array.push(prev); -> array는 [3 2 2 1] 완성

// 그런데.. location을, 즉 index를 나중에 가늠할 수가 없음
// 처음부터 {0: 2, 1: 1, 2: 3, 3: 2} 이렇게 지정해줘야하나 !!