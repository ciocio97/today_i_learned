// TypeScript Word
// - 타입 리터럴(type literal)
//   : 오직 하나의 값을 나타내는 타입
//   : const 로 선언한 원시 타입의 값인 경우 여기에 해당된다 (상수)   

{
  /*[:any]*/
  // 타입의 대부. 뭐든지 될 수 있지만 꼭 필요한 상황이 아니면 사용하지 말 것.

  let a:any = 3;                 // any
  let b:any = ['danger'];        // any
  let c = a + b;                 // any
}

{
  /*[:unknown]*/
  // 타입을 미리 알 수 없는 값이 있을 땐 any대신 unknown 사용할 것.
  // any와 다른점은, 타입이 판명(refine)나기 전까지 값을 사용할 수 없게 강제한다는 점.

  let a:unknown = 50;            // unknown
  let b = a === 120;             // boolean (d는 상수가 아니고 언제든 120으로 재할당될 수 있으니까)
  let c = a + 70;                // *error[TS2571] : 객체의 타입이 'unknown'입니다.
  if(typeof a === 'number'){
      let d = a + 70;            // number
  }                              // -> unknown값을 사용하고 싶을 땐 조건문을 통해 unknown 타입을 검증해야한다.
                                 // -> 이렇게 type이 판명난 후에는 사용할 수 있음.
}

{
  /*[:boolean]*/
  
  let a = true;                  // boolean              ✔code👍🏻
  var b = false;                 // boolean              ✔code👍🏻
  const c = true;                // true (상수)          ✔code👍🏻
  let d: boolean = true;         // boolean              ✔code👎🏻
  let e: true = true;            // true (타입 리터럴)
  let f: true = false;           // *error[TS2322] : fasle타입은 ture타입에 할당할 수 없습니다.
}

{
  /*[:number]*/
  // 정수, 소수, 양수, 음수, Infinity, NaN

  let a = 1234;                  // number               ✔code👍🏻
  var c = Infinity * 0.10;       // number               ✔code👍🏻
  const d = 5678;                // 5678 (상수) 
  let e = a < c;                 // boolean
  let f: number = 100;           // number               ✔code👎🏻
  let g: 15.218 = 15.218;        // 15.218 (타입 리터럴)
  let h: 15.218 = 10;            // *error[TS2322] : '10'타입은 '15.218'타입에 할당할 수 없습니다.
}

{
  /*[:bigint]*/
  // 라운딩 관련 에러 걱정 없이 큰 정수 처리할 수 있다는 장점.

  let a = 1234n;                 // bigint (ES2020~)     ✔code👍🏻
  const e = 5678n;               // 5678n
  var d = a + e;                 // bigint
  let f = a < 1235               // boolean
  let g = 88.5n;                 // *error[TS1353] : bigint 리터럴은 반드시 정수여야합니다.
  let h: bigint = 100n;          // bigint               ✔code👎🏻
  let i: 100n = 100n;            // 100n
  let j: bigint = 100;           // *error[TS2322] : number타입은 bigint타입에 할당할 수 없습니다.
}

{
  /*[:string]*/
  
  let a = 'hello';               // string               ✔code👍🏻
  var e = 'world';               // string
  const f = '!';                 // '!'
  let g = a + ' ' + b + c;       // string
  let h: string = 'wow';         // string               ✔code👎🏻
  let i: 'sy' = 'sy';            // 'sy'
  let j: 'sy' = 'lee';           // *error[TS2322] : 'lee'타입은 'sy'타입에 할당할 수 없습니다.
}

{
  /*[:symbol]*/

  let a = Symbol('a');           // symbol
  let b: symbol = Symbol('b');   // symbol
  var f = a === b;               // boolean
  let i = a + 'x';               // *error[TS2469] : '+'연산자는 'symbol'타입에 적용될 수 없습니다.

  const g = Symbol('g');                     // typeof g
  const h: unique symbol = Symbol('h');      // typeof h
  let j: unique symbol = Symbol('j');        // 왜 error가 안뜨지 ..?
  let k = g === g;                           // boolean
  let l = g === h;                           // *error[TS2367] : 'typeof g'와 'typeof h' 즉, 'unique symbol'타입은 서로 겹침이 없기 때문에
                                             // 이 비교문의 결과는 항상 false를 반환합니다. (상수이기때문에 let을 쓸 수 없음)
}

{
  /*[:object]*/
  // 자바스크립트는 structural type(구조 기반 타입)을 갖도록 설계되었다.
  // 타입스크립트 또한 nominal type(이름 기반 타입)보다 structural type(구조 기반 타입)을 선호한다.
  // * structural type(구조 기반 타입) ?
  // : 객체의 이름에 상관없이 객체가 어떤 프로퍼티를 가지고 있는지 따진다. (ref. 덕타이핑duck typing)

  let a: object = {
    b: 'x',
  };

  a.b                                        // *error[TS2339] : 'object'타입에는 'b'속성이 없습니다.
                                             // 타입을 object로 지정했다 = 해당 값은 자바스크립트 객체이다 (객체임을 알려주고 끝.)

  /* ----------------------------- */

  let b = {
    c: 'x'
  };                                         // {b: string}
  
  b.c                                        // string

  /* ----------------------------- */

  let c = {
    d: {
      e: 'x'
    },
  };                                         // {d: {e: string}}

  let d: {f: number};
  d = {};                                    // *error[TS2741] : '{}'타입에는 '{f: number}'타입에 필요한 'f'속성이 없습니다.
  d = {
    f: 1,
    g: 2,                           
  }                                          // *error[TS2322] : 객체 리터럴은 알려진 속성만 지정할 수 있습니다.

  /* ----------------------------- */

  let e: {
    h: number,
    i?: string,
    [key: number]: boolean,
    // index signature(인덱스 시그니처)
  };

  e = {h: 1}
  e = {h: 1, i: undefined}
  e = {h: 1, i: 'i'}
  e = {h: 1, 10: true}
  e = {h: 1, 10: true, 20: false}

  e = {10: true}                             // *error[TS2741]
  e = {h: 1, 33: 'error'}                    // *error[TS2741] 
}