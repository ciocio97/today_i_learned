// 정규 표현식

// 1.
// RegExp의 method - exec | test
// String의 method - match | replace | search | split
// 와 함께 많이 쓰인다.

var re = /ab+c/;
var re = new RegExp("ab+c");
         
         new RegExp("pattern", "flags")
                 // pattern = 정규식 표현
                           // flags : g = 처음 일치에서 중단하지 않고 문자열 전체 판별
                           //         i = 대소문자 구분없이 판별
                           //         m = 여러줄(multiple line) 검색
                           //         s = .에 개행 문자도 매칭 *?
                           //         u = 유니 코드 포인트를 시퀀스로 처리
                           //         y = lastIndex 속성에 명시된 index에서만 판별
                           //             이전,이후의 index는 판별하지 않음
    
    re.exec(pattern & flags);

    re.test(pattern & flags);

    re.match(pattern & flags);

    re.replace(SearchValue, ReplaceValue);
            // pattern/flags

    re.search(pattern & flags);

    re.split(pattern & flags);


// 2. / / 슬래쉬 안의 세상들

    ^A = // 입력의 시작 부분 대응 ex. "an A" (x) "An E" (o)
    A$ = // 입력의 끝 부분 대응  ex. "an A" (o) "An E" (x)
         // ^$ -> 문자열이 비어있다.
    ao* = // 바로 앞 표현식이 0회 이상 반복 부분과 대응 
            // ex. "The aooooe" (o)-4회  "An aid" (o)-0회
    a+ = // 바로 앞 표현식이 1회 이상 반복 부분과 대응
           // ex. "caaaandy" (o)-4회 
    e?le? = // 바로 앞 표현식이 0회 or 1회 등장 부분과 대응
              // ex. 2*2 = 4가지 경우의 수가 나옴
              //     'l' or 'le' or 'el' or 'ele'

    a{n} = // 바로 앞 표현식이 n번 나타는 부분과 대응 (a가 n번)
    a{n,m} = // 바로 앞 표현식이 최소 n개, 최대 m개 나타나는 부분과 대응

    [xyz] = // 문자 set 내용 대응(내부: 특수문자라고 차이 없음) ex. /[a-z.]/ = /[\w.]/
    [^xyz] = // 문자 set 내용 제외하고 대응
    
    [\b] = // back space (<-)


    \단어문자 = // 특별한 뜻 有 

        \b = // 단어 공백 (경계)
        \B.. = // 단어 공백 x (문자열 시작/끝 단어가 아닌 것으로 간주)
        \cX = // 문자열 내부 제어 문자에 대응 ( X = [A-Z] )
        \d = // 숫자에 대응 ( = [0-9] )
        \D = // 문자에 대응 ( = [^0-9] )
        \w = // 숫자&문자에 대응 (단어문자) ( = [A-Z a-z 0-9 _] )
        \W = // 특수문자에 대응 (단어문자 반대) ( = [^A-Z a-z 0-9 _] )

        \0 = // null (8진 escape sequence)

    \특수문자 = // 특별한 뜻 無



// Q1. 신규 아이디 추천

// 문제 파악
// 1. 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

// 풀이
{
    function solution(new_id) {
        var answer = new_id
            .toLowerCase()
            .replace(/[^\w-_.]/g,'')
            .replace(/\.+/g, '.')
            .replace(/^\.|\.$/g, '')
            .replace(/^$/, 'a')
            .slice(0,15).replace(/\.$/, '');
    
        const len = answer.length;
        return len > 2 ? answer : answer + answer.charAt(len-1).repeat(3-len);
    }
}

// Q2. 모의고사

// 문제 파악
// 1번 수포자 : 1,2,3,4,5... 2번 수포자 : 2,1,2,3,2,4,2,5... 3번 수포자 : 3,3,1,1,2,2,4,4,5,5...
// value가 계속 반복되는 점 발견. -> for문 , 1번,2번,3번으로 학생의 수가 정해져 있음. -> [0,0,0] 배열 자리 지정 가능
// 문제의 정답(배열)과 답안(배열)을 계속 비교하면서 가장 문제를 많이 맞힌 사람 찾기.
// 가장 많이 맞춘 사람이 여럿일 경우 오름차순으로 return

// 풀이
{
    function solution(answers) {
        
        const one = [1,2,3,4,5];
        const two = [2,1,2,3,2,4,2,5];
        const three = [3,3,1,1,2,2,4,4,5,5];
        const result = [0,0,0];
        for (let i=0; i<answers.length; i++) {
            if(answers[i] === one[i%5]) result[0]++;
            if(answers[i] === two[i%8]) result[1]++;
            if(answers[i] === three[i%10]) result[2]++;
        }
        const answer = [];
        for (let j=0; j<result.length; j++) {
            if (result[j] != 0) answer[j] = j+1;
        }
        return answer;
    }
}    