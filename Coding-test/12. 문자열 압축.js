// Q1. 문자열 압축

/** 문제 설명
 * 
 *  데이터 처리 전문가가 되고 싶은 "어피치"는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 
 *  최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 
 *  문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
 *  간단한 예로 "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 
 *  이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, "abcabcdede"와 같은 문자열은 전혀 압축되지 않습니다. 
 *  "어피치"는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.
 *  예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 
 *  다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.
 *  다른 예로, "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만, 3개 단위로 자른다면 "2abcdede"가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 
 *  이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.
 *  압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.
**/

/** 제한 사항
 *  
 *  --s의 길이는 1 이상 1,000 이하입니다.
 *  --s는 알파벳 소문자로만 이루어져 있습니다.
**/

/** 입출력 예시
 *   s                        result
 *                          
 *  "aabbaccc"	                7
 *  "ababcdcdababcdcd"	        9
 *  "abcabcdede"	            8
 *  "abcabcabcabcdededededede"	14
 *  "xababcdcdababcdcd"	        17
 */

// 문자열 splice 바로 하기 1 -> substring(start number, end number)
{
    const str = 'Mozilla'
    
    console.log(str.substring(1,3));  // oz -> 인덱스처럼 1<=x<3 자리에 해당하는 문자열 출력
    console.log(str.substring(2));    // zilla -> 뒤에 숫자가 없을 경우 2<=x 적용
}
// 문자열 splice 바로 하기 2 -> substr(start number, length)
{
    const str = 'Mozilla'
    
    console.log(str.substr(1,3));     // ozi -> 자리 1부터 3개 끊기
    console.log(str.substring(2));    // zilla -> 자리 2부터 끝까지 끊기
}

// 풀이 1-1 substring()
/**{
    const s = "aabbaccc";

    for(var len=1;len<=s.length/2;len++){
        var idx=0;
        var tmp=s.substring(0,len);
        for(idx=len;idx<=s.length;idx+=len){
            const later =s.substring(idx,idx+len);  // "aabbaccc" i=1 (curr,next) => (a,a) | (a,b) | (a,b) | (a,a) | (a,c) | (a,c) | (a,c) | (a, ) 
            console.log('----------');              // "aabbaccc" i=2 (curr,next) => (aa,bb) | (aa,ac) | (aa,cc) | (aa, )
            console.log(tmp);                       // "aabbaccc" i=3 (curr,next) => (aab,bac) | (aab,cc)
            console.log(later);                     // "aabbaccc" i=4 (curr,next) => (aabb,accc) | (aabb, )
        }
    }                                               // str = "2ab2aaa" 이상하게 7개를 만족하네 ...
}

// 풀이 1-2 substr()
{
    const s = "aabbaccc";

    for(let i=1; i<=parseInt(s.length/2); i++){    // for(i=1; i<=문자열 길이/2; i++)
        for(let j=0; j<s.length; j+=i){            //   for(j=0; j<문자열 길이; j+=i)
            const current = s.substr(j,i);
            const next = s.substr(j+i, i);         // "aabbaccc" i=1 (curr,next) => (a,a) | (a,b) | (b,b) | (b,a) | (a,c) | (c,c) | (c,c) | (c, ) 
                console.log('----------');         // "aabbaccc" i=2 (curr,next) => (aa,bb) | (bb,ac) | (ac,cc) | (cc, )
                console.log(current);              // "aabbaccc" i=3 (curr,next) => (aab,bac) | (bac,cc) | (cc, )
                console.log(next);                 // "aabbaccc" i=4 (curr,next) => (aabb,accc) | (accc, )
        }
    }                                              // str = "2a2ba3c" 원하는 값으로 7개 만족
}**/


// 풀이 2

// 문자열을 최소!!로 압축했을 때는 2개씩만 겹친다
// 1개, 2개, 3개 ... 문자열/2개까지 계속 비교하기
{
    function solution(s) {
    
        var answer = 0;
        var strings = [];

        for(let i=1; i<=parseInt(s.length/2); i++){
            let string = '';          // for문 안에서 선언해야만 답이 나온다...
            let cnt = 1;              // for문 안에서 선언해야만 답이 나온다...
            for(let j=0; j<s.length; j+=i){           
                const current = s.substr(j,i);
                const next = s.substr(j+i, i);                
                if(current === next){                  
                    cnt++;
                }else{
                    string = cnt > 1 ? string+cnt+current : string+current;
                    cnt = 1;
                }
            }
            strings.push(string.length);
        }
        answer = Math.min(...strings);
        return answer;
    }
}

// 일단 머리로는 완벽하게 계산 불가하니까 ... 
// 문자열을 내가 원하는대로 순환시키는 식을 완성시키는 걸 목표로 접근해야할 듯
// 아니면 건드리지도 못함 ...