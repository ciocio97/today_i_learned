// Q1. 나라의 숫자

// 문제 파악
// 비교적 간단 1,2,4 만으로 10진수 숫자들을 풀어내는 문제

// 풀이 1
{
    function solution(n){
        var answer = '';
        var frontNum = parseInt(n/3);    // 몫을 정수로 바꿔주는 parseInt 함슈
        if(n % 3 === 1){
            return answer.concat(frontNum,1).replace('0','');
        }else if(n % 3 === 2){
            return answer.concat(frontNum,2).replace('0','');
        }else{
            return answer.concat(frontNum-1,4).replace('0','');
        }
    }
}
// 풀이 2
{
    function solution(n){
        let answer = '';

        while (n > 0){
            switch (n % 3){      // switch 문 n % 3 나머지로 접근
                case 1:
                    answer = "1" + answer;
                    n = Math.floor(n / 3);
                    break;
                case 2:
                    answer = "2" + answer;      // answer = "2" + answer
                    n = Math.floor(n / 3);      // 어짜피 반복은 1,2,4니까 나머지로 뒤쪽 구해주고
                    break;                      // 몫으로 앞쪽 구해서 더해주기 wow
                case 0:
                    answer = "4" + answer;      // 어짜피 1,2,4 내 반복 -> switch문 떠올릴 수 있다. 
                    n = n / 3 - 1;
                    break;
            }
        }
        return answer;
    }
}

// Q2. 멀쩡한 사각형

// 문제 파악
// 음 이거 Lv2 맞나 ? 직사각형 가로지르는 대각선 그었을 때 겹치지 않는 멀쩡한 1 x 1 정사각형 구하기
// 라고 생각했지만 전혀 오산이었고 내가 간과한 것들이 훨씬 ;;; 더 많음 ;;;
// 규칙 발견하기 🐶어려운 문제 --> 실제 공식: 사각형의 가로 + 사각형의 세로 - (사각형의 가로, 세로의 최대 공약수)
// 최대 공약수는 어떻게 구합니까 ??!???!! --> 유클리드 호제법 ...

// 풀이 1 (사실 틀림)
{
    function solution(w, h) {
        var answer = 1;
        if(w < h){
            answer = w * h - (2 * w);
        }else{
            answer = w * h - (2 * h);
        }
        return answer;
    }
}
// 풀이 2 
{
    // 유클리드 호제법을 이용한 최대 공약수 구하기  -> GCD = Greatest Common Divisor 
    function gcd(w, h){  // 처음 w와 h를 받는다.
        
        // w와 h의 나머지를 구한다.
        const mod = w % h;

        // 만약 나머지가 0일 경우, h를 반환한다.
        if (mod === 0){
            return h;
        }
        
        // 만약 0이 아닐 경우, w에 h를 넣고 h엔 나머지인 mod를 넣어 해당 함수를 다시 호출한다
        return gcd(h, mod);
    }

    function solution(w, h){
        const gcdVal = gcd(w, h);
        return w * h - (w + h - gcdVal);  // W * H 값에 최대 공약수 빼기
    }                                     // return 명령문은  01 함수 실행을 종료하는 역할
}                                         //                 02 주어진 값을 함수 호출 지점으로 반환하는 역할


// GCD(최대공약수)와 LCM(최소공배수)
// a * b = GCD * LCM
// ex. a = 24, b = 16 -> a = 3*8, b = 2*8 즉, a와 b의 최대공약수는 8, 최대공배수는 48(8*3*2) 

// 01 최대공약수 구하기 O(N)
{
    let getGCD = (a, b) => {
        let gcd = 1;

        for (let i=2; i<=Math.min(a,b); i++){   // Math.min() 인자 중 가장 작은 수 반환
            if(a % i === 0 && b % i === 0){
                gcd = i;
            }
        }
        return gcd;
    }
}
// 02 최대 공약수 구하기 O(logN)
{
    let getGDC = (a, b) => {

        while(b > 0){
            let r = a % b;
            a = b;
            b = r;
        }
        return a;
    }
}

// 01 최대공배수 구하기
{
    function getLCM(a, b){

        function getGDC(a, b){
            let gcd = 1;

            for(i=2; i<=Math.min(a, b); i++){
                if(a % i === 0 && b % i === 0){
                    gcd = i;
                }
            }
            return gcd;
        }

        const result = (a * b)/getGDC(a, b);
        return result;
    }
}

