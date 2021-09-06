// Q1.프린터

/** 문제 설명
 * 
 *  일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 
 *  그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다. 
 *  이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 
 *  이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.
 * 
 *  1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
 *  2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
 *  3. 그렇지 않으면 J를 인쇄합니다. 
 * 
 *  예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.
 *  내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.
 *  현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 
 *  내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.
**/

/** 제한 사항
 * 
 *  --현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
 *  --인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
 *  --location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.
 */

/** 입출력 예시
 *  priorities          location    return
 * 
 *  [2, 1, 3, 2]	          2	         1
 *  [1, 1, 9, 1, 1, 1]	    0	         5
 */

// 문제 파악
// array = []; 빈 배열 선언
// priorities.length가 0이 아닐때 (while)
    // priorities에서 최댓값을 찾는다 (let 지정)
    // (prev,curr) => prev값이 최댓값보다 작을 때
    // priorities.shift(); , priorities.push(prev);
    // (prev,curr) => prev값이 최댓값일 때
    // priorities.shift();, array.push(prev); -> array는 [3 2 2 1] 완성

// 그런데.. location을, 즉 index를 나중에 가늠할 수가 없음
// 처음부터 {0: 2, 1: 1, 2: 3, 3: 2} 이렇게 지정해줘야하나 !!

// 풀이 1
// location 기억 => 문자열 변환으로 풀자 !
{
  function solution(priorities, location) {
    var answer = 0;

    priorities[location] = String(priorities[location]);
    
    while(priorities.length > 0){
        
      for(let i=0; i<priorities.length; i++){
            
        let max = Math.max(...priorities);
            
        if(Number(priorities[0]) !== max){
          priorities.push(priorities.shift());
        }else{
          if(typeof priorities[0] === 'string'){
            return answer + 1;
          }
          answer++;
          priorities.shift();
        }
      }
    }
  }
}

// 풀이 2
// location 기억 => 객체의 키값으로 풀자 !  -->  근데 이 방법 시간초과 뜸 OUT
{
  function solution(priorities, location) {
		var answer = 0;

		const newArr = priorities.map((el, idx) => {
			let obj = {};
			obj[idx] = el;
			return obj;
		});

		while(newArr.length > 0){
			
			for(let i=0; i<newArr.length; i++){
				
				let valueArr = newArr.map(el => { return Object.values(el); }).flat();
				let max = Math.max(...valueArr);
				
				if(newArr[0][i] !== max){
					newArr.push(newArr.shift());
				}else{
					if(newArr[0][i] === newArr[0][location]){
						return answer + 1;
					}
					answer++;
					newArr.shift();
				}
			}
		}
  }
}

// 다른 사람 풀이
// 와 some에 대해 배워갑니다
{
  function solution(priorities, location) {
    var answer = 0;

    const newArr = priorities.map((el, idx) => ({
      my: idx === location,
      val: el
    }));

    while(true){
      let cur = newArr.shift();
      if(newArr.some(el => el.val > cur.val)){
        newArr.push(cur);
      }
      else{
        answer++;
        if(cur.my) return answer;
      }
    }
  }
}
