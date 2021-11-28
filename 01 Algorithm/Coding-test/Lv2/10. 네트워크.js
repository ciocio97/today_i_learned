// Q1. 네트워크

/** 문제 설명
 *  
 *  네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 
 *  예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 
 *  컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
 *  따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.
 *  컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 
 *  네트워크의 개수를 return 하도록 solution 함수를 작성하시오. 
**/

/** 제한 사항
 * 
 *  --컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
 *  --각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
 *  --i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
 *  --computer[i][i]는 항상 1입니다.
**/

/** 입출력 예시
 * 
 *  n                 computers                return
 * 
 *  3      [[1, 1, 0], [1, 1, 0], [0, 0, 1]]      2
 *  3      [[1, 1, 0], [1, 1, 1], [0, 1, 1]]      1
**/

// 문제 파악
// 노드들을 탐색하면서 연결되어있는지, 연결되어있지 않는지 체크해야한다.
// 깊게 깊게 탐색할건지 (자식의 자식의 자식의 자식...),                  -->  DFS
// 자식노드들부터 차근차근탐색할건지 (자식1, 자식2, 자식3, 자식4 ...)      -->  BFS
// 선택해야한다.

// 풀이 1 (DFS) Deapth First Search
{
  function solution(n, computers) {
    
    // 트리의 개수를 셀 count
    let count = 0;
    // 방문한 노드를 표시할 visited 배열
    let visited = new Array(n).fill(false);
    
    // DFS 함수 선언 (노드(index)를 인자로 받음)
    function DFS(idx){
        // DFS 함수의 인자로 들어온 노드는 방문했다고 체크한다
        visited[idx] = true;
        // 노드의 자식들을 차례차례 탐색하면서
        for(let i=0; i<n; i++){
            // 자식 노드가 다른 노드와 연결되어있고 & 아직 방문 전이라면
            if(computers[idx][i] === 1 && !visited[i]){
                // DFS 함수에 자식노드(index)를 전달함으로써 재귀함수를 호출한다.
                // 자식의 자식의 자식 ... 깊게 파고드는 식으로 노드를 방문한다는 것을 확인할 수 있다.
                DFS(i);
            }
        }
    }
    
    // 노드의 개수만큼 차례로 돌면서
    for(let i=0; i<n; i++){
        // 방문 전인 노드가 발견되면 count를 +1 한다.  
        // -->  깊게 깊게 탐색하며 방문한 노드에는 true를 표시하기 때문에
        //      아직 방문 전인 노드가 있다 ? === 새로운 트리 시작 ㅇㅇ
        if(!visited[i]){
            // DFS 함수에 노드(index)를 전달하여 호출한다.
            DFS(i);
            count++;
        }
    }
    
    // 카운트 된 트리의 개수를 반환한다.
    return count;
  }
}

// 풀이 2 (BFS)  Breadth First Search
{
  function solution(n, computers) {
    
    // 트리의 개수를 셀 count
    let count = 0;
    // 방문한 노드를 표시할 visited 배열
    let visited = new Array(n).fill(false);
    
    // BFS 함수 선언 (노드(index)를 인자로 받음)
    function BFS(idx){
        
        // 노드의 자식 노드들을 차례대로 방문하기 위해 queue 라는 배열을 선언해준다.
        // 앞으로 다른 노드와 연결된 자식 노드가 발견되면 즉시 queue에 넣어줄 것이다.
        // 처음으로 들어온 노드(index)는 queue에 담아준다.
        let queue = [idx];
        // 방문할거니까 인자로 들어온 노드는 방문했다고 체크한다.
        visited[idx] = true;
        
        // queue가 비어있지 않을 때
        while(queue.length > 0){
            
            // queue에 들어있는 노드를 꺼내 curr에 할당한다.
            let curr = queue.shift();
            
            // 노드의 자식들을 차례차례 탐색하면서
            for(let i=0; i<n; i++){
                // 자식 노드가 다른 노드와 연결되어있고 & 아직 방문 전이라면
                if(computers[curr][i] === 1 && !visited[i]){
                    // queue에 자식노드를 push 해준다.
                    queue.push(i);
                    // 이 자식노드도 앞으로 방문할꺼니까 방문했다고 체크한다.
                    visited[i] = true;
                }
            }
        }
    }
    
    // 노드의 개수만큼 차례로 돌면서
    for(let i=0; i<n; i++){
        // 방문 전인 노드가 발견되면 count를 +1 한다.  
        // -->  노드의 자식이란 자식은 싹- 탐색하며 (넓게 넓게) 방문한 노드에는 true를 표시하기 때문에
        //      아직 방문 전인 노드가 있다 ? === 새로운 트리 시작 ㅇㅇ
        if(!visited[i]){
            // BFS 함수에 노드(index)를 전달하여 호출한다.
            BFS(i);
            count++;
        }
    }
    // 카운트 된 트리의 개수를 반환한다.
    return count;
  }
}