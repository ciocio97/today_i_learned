/**
 * 1. Browser에 존재하는 JSON.stringfy 함수를 직접 구현해 봅니다.
 * JSON.stringfy 함수는 input 값을 JSON 형식으로 변환합니다.
 * 단, undefined와 function은 JSON으로 생략되거나 null로 변환됩니다.
 *
 * 2. stringfyJSON은 아래와 같이 작동합니다.
 * - Boolean이 input으로 주어졌을 경우
 * stringifyJSON(true);                // 'true'
 * - String이 input으로 주어졌을 경우
 * stringifyJSON('foo');               // '"foo"'
 * - Array가 input으로 주어졌을 경우
 * stringifyJSON([1, 'false', false]); // '[1,"false",false]'
 * - Object가 input으로 주어졌을 경우
 * stringifyJSON({ x: 5 });            // '{"x":5}'
 * - undefined, function이 주어졌을 경우
 * stringifyJSON(undefined)            // undefined
 * stringifyJSON(function(){})         // undefined
 * stringifyJSON({ x: undefined, y: function(){} })   // '{}'
 *
 * 3. spec/stringifyJSONSpec.js의 stringifiableObjects 배열을 참고해서 테스트에서 어떤 input 값들이
 * 주어지고, 어떻게 stringify해 주어야 할지 생각해 보세요.
 *
 * 4. 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될 거예요.
 *  const stringifyJSON = JSON.stringify;
 *
 */

{
  function stringifyJSON(obj) {
    // obj가 숫자일 때
    if(typeof obj === 'number'){return String(obj);}
    // obj가 boolean일 때
    if(typeof obj === 'boolean'){return String(obj);}
    // obj가 null일 때
    if(obj === null){return String(obj);}
    // obj가 문자열일 때
    if(typeof obj === 'string'){return `"${obj}"`;}
    // obj가 배열일 때
    if(Array.isArray(obj)){
      let result = [];
      for(let el of obj){
        result.push(JSON.stringify(el));
      }
      return `[${result}]` 
    }
    // obj가 객체일 때
    else{

      let finalStart = "{";
      let finalLast  = "}";
      let str = '';

      for(let key in obj){
        
        if(typeof obj[key] === 'function' || obj[key] === undefined){
          continue;
        }
    
        str += ('\"' + key +'\"');
        str += ':';
        if(typeof obj[key] === 'boolean' || obj[key] === null){
          str += obj[key];
        }
        else if(Array.isArray(obj[key]) || typeof obj[key] === 'object'){
          str += stringifyJSON(obj[key]);
        }
        else{
          str += ('\"' + obj[key] +'\"');
        }
        str += ',';
          
      }
      return finalStart + str.slice(0, -1) + finalLast;
    }

  };

  // 다음 코드는 결과 제출을 위한 코드입니다. 신경 쓰지 않아도 좋습니다.
  if (typeof window === "undefined") {
    module.exports = stringifyJSON;
  }

}

/* Code Refactoring */
/* 재귀 함수 사용을 목적으로 코드 리팩토링 */
{
  function stringifyJSON(obj) {
    
    if(obj === null) return `${obj}`;
    if(typeof obj === 'number') return `${obj}`;
    if(typeof obj === 'boolean') return `${obj}`;
    if(typeof obj === 'string') return `"${obj}"`;
    // obj가 배열일 때
    if(Array.isArray(obj)){
      let array = [];

      for(let el of obj){
        if(typeof el !== 'number'){
          el = stringifyJSON(el);
          array.push(el);
        }
        else array.push(el);
      }

      return `[${array}]`;
    }
    // obj가 객체일 때
    if(typeof obj === 'object'){
      let object = [];

      for(let key in obj){
        if(obj[key] === undefined) continue;
        if(typeof obj[key] === 'function') continue;
        else object.push(stringifyJSON(key)+':'+stringifyJSON(obj[key])); 
      }

      return `{${object}}`;
    }

  };

  if (typeof window === "undefined") {
    module.exports = stringifyJSON;
  }

}