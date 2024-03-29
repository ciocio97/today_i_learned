# Next.js와 타입스크립트를 활용한 모던 개발

<br/>

## Next.js와 타입스크립트

<br/>

`Next.js` 는 _오픈 소스 웹 어플리케이션 **프레임워크**_.  
`React`(웹 프론트엔드 **라이브러리**) 를 기반으로 구현 및 개발됌.  
'SSR' 이나 '정적 웹 페이지 생성' 등 웹앱 개발에 편리하게 사용할 수 있는 기능이 추가됌.

<br/>

📌 `React` 가 **프레임워크** 가 아니라 **라이브러리** 인 이유는 ?  
📌 **프레임워크** 와 **라이브러리** 의 차이는 ?

<br/>

    라이브러리란, 소프트웨어 개발에서 자주 사용하는 작업들을 단순화해서 모아놓은 코드 조각 모음이다.  
    유용한 도구들로 가득찬 toolbox 라고 생각해보자. (flexible / unopinioned)
    때문에 라이브러리는 사용자가 프로젝트에 필요한 구성요소를 "선택" 하고, "적용" 하게끔 한다.
    리액트의 경우, 다이나믹한 사용자 UI를 설계하기 위한 다양한 툴들을 제공한다고 볼 수 있다.

    eg. data fetching 시, Fetch API or Axios 등 사용자에 따라 선택할 수 있음.
    eg. 라이브러리 예시) Lodash / NumPy / Pandas 

    프레임워크는, 상대적으로 (주장이) 강한 아키텍쳐와 워크플로우를 가진다.
    사용자로 하여금 특정 아키텍쳐 원칙과 디자인 패턴을 적용하게끔 유도하고,
    애플리케이션 흐름을 제어하고 사전에 정의된 구조를 준수하도록 요구한다. (rigid / opinioned)

    eg. Ruby on Rails 은 어플리케이션 내 모든 것을 제어하려고 함.
    eg. Express.js 처럼 기반만 제공하고 주요한 기능들은 3-party 모듈이나 미들웨어에 맡기는 프레임워크도 있음.
    eg. Django / Angular / Laravel / Spring Boot / AngularJS

`참고` [리액트가 라이브러리인 이유](https://medium.com/@Angie.O/why-react-is-a-library-and-not-a-framework-533d95692fe1)

<br/>

## 프론트엔드 개발의 변천

<br/>

    01 1995년, 넷스케이프사 '브라우저에서 작동하는 스크립트 언어'로 자바스크립트 개발 
       비슷한 시기, 마이크로소프트사 window에 (JScript가 동작하는) internet explorer 탑재
       브라우저 시장 점유율을 차지하기 위해 호환보다는 자사 브라우저에서만 동작하는 기능들을 경쟁적으로 추가 😨
       크로싱 브라우저 이슈가 커져, 개발자가 모든 브라우저에 대응하기 매우 어려워짐 😡

    02 자바스크립트 파편화를 막기위해 넷스케이프사는 비영리 표준화 기구인 ECMA international 에 자바스크립트 표준화 요청
       1997년, ECMAScript 1(ES1) ('ECMA-262' 표준화 자바스크립트 초판 명세 완성)
       1999년, ECMAScript 3(ES3)
       2009년, ECMAScript 5(ES5)              → HTML5 와 함께 명세됌
       2015년, ECMAScript 6(ECMAScript 2015)  → 내가 익숙해하는 명세 (+ES모듈)

    03 초기 자바스크립트의 유효한 활용법은 유효성검사(validation) 정도였다.
       그 외 활용은 브라우저에 과한 부담을 주었고, 보안상 문제가 있다는 인식이 퍼지면서 선호도가 점점 떨어짐.
   
    04 2005년, 구글에서 지도 서비스(Google Maps)를 출시하며 시장의 판도가 바뀜.
       Ajax(Asynchronous JavaScript and XML) 비동기 데이터 통신 방식을 획기적으로 적용하며 활용도 상승.
       → 페이지를 새로고침하지 않아도 필요한 부분만 UI를 변경할 수 있게 됐기때문 😎
       → Desktop 애플리케이션과 비교해봐도 손색없는 퍼포먼스와 부드러운 화면 전환이 브라우저에서 구현 가능해짐 😲
       Ajax를 활용한 웹앱 개발 활성화 🔥 (Gmail / SNS / 게임 etc)

    05 2008년, 구글 크롬(Google Chrome) 브라우저 등장.
       크롬에 탑재된 V8 이라는 JIT VM 타입의 자바스크립트 엔진은 자바스크립트 실행 속도를 비약적으로 높임.

    06 결과적으로 웹 애플리케이션은 브라우저 위에서 동작하는 애플리케이션으로써,
       당시 건재했던 자바 애플릿(Java Applet)이나 플래시(Flash)로 만든 애플리케이션에 비해도 성능이 뒤지지 않게 됌 🤗
       브라우저만 있으면 설치하지 않고 실행할 수 있는, 자바스크립트를 활용한 웹앱이 점차 보급됌.

    07 RIA(Rich Internet Application : 기존보다 많은 기능을 가진 애플리케이션) 라 불리는 CSR 구현으로,
       Ajax 나 고도의 DOM 조작이 요구되는 분위기.
       
    08 2014년, 모질라, 마이크로소프트, 애플, 구글 등 거대 브라우저 벤더들의 최신 웹 표준 구현 경쟁 과열. (제 2차 브라우저 전쟁)
       이와 함께 아이폰이나 안드로이드 등 모바일용 단말기에도 웹 브라우저 기능을 제공하며 급속도록 보급됌.
       각 벤더에서 제공하는 브라우저의 성능이나 기능이 진화하는 것은 좋은 현상이나, 
       프론트엔드 엔지니어가 대응해야할 부분이 배로 늘어남.
       이를 배경으로, 브라우저 사이 작동의 차이를 어느정도 고려해 코드를 작성할 수 있는 자바스크립트 라이브러리, jQuery 가 유행.

`참고` [자바스크립트 역사](https://velog.io/@dongjun187/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8JavaScript%EC%9D%98-%ED%83%84%EC%83%9D-%EC%9D%B4%EC%9C%A0%EC%99%80-%EC%97%AD%EC%82%AC)

<br/>

📌 **jQuery** 장점과 단점 ?

<br/>

`장점`  

* 크로스 브라우저 호환 구현 가능
* DOM 간결하게 조작 가능
* 애니메이션 간결하게 구현 가능
* jQuery 내 주변 라이브러리 풍부

<br/>

`단점`  

* 글로벌 스코프 오염시킴 🤬
* DOM 조작 구현 코드가 복잡해지기 쉬움
* 라우팅 등 여러 페이지의 웹앱을 구현하는 구조 부재
* 브라우저의 표준화로 작동의 차이가 미비해져, 브라우저 호환 코드 필요성 저하

<br/>
       
## SPA 의 등장과 MVC/MVVM 프레임워크

<br/>

### SPA 란 ?

<br/>

**S**ingle **P**age **A**plication (SPA)  

작동 시 한 차례 HTML 전체를 로드하고, 이후에는 사용자 인터렉션에 맞춰  
Ajax로 정보를 얻고, 동적으로 페이지 업데이트를 하는 웹 애플리케이션.

<br/>

`장점`  

* 고성능의 애플리케이션 제공 가능
    → 향상된 사용자 경험 제공
    → 변경이 필요한 부분만 데이터를 요청하므로 오버헤드 감소
* 서버 사이드 엔지니어와 프론트엔드 엔지니어의 분업이 쉬워짐
* JSON API 를 통해 느슨한 결합의 설계 가능
    → iOS 나 안드로이드 등의 네이티브 애플리션도 동일한 서버 적용 가능

<br/>

`단점`  

* 자바스크립트 로딩에 다소 시간이 많이 걸림 (대비 필요)
* 불편한 검색엔진최적화 (SEO)
* 프론트엔드 코드양이 늘어남
* 프론트엔드 학습 비용이 높음

<br/>

`구성 요소` 

* URL 경로와 View 의 라우팅 관리
* 클라이언트 사이드에서의 브라우저 이력관리를 통한 페이지 이동
* 비동기를 통해 데이터 얻기
* View 렌더링
* 모듈화된 코드 관리

<br/>

### MVC/MVVM 란 ?

<br/>

#### MVC ?

**M** 데이터 모델층  
**V** 사용자 인터페이스층  
**C** 컨트롤러층   

기존 서버 사이드에 보급되었던 '프레임워크'의 개념이 프론트엔드에도 도입됌.
eg. Backbone.js (프레임워크)

<br/>

#### MVVM ?

**M** 데이터 모델층  
**V** 사용자 인터페이스층  
**V** View  
**M** Model  

View Model : 데이터와 화면 표시의 가교 역할  

`model <---> view`  
model 로부터 view, view 로부터 model 을 연동해 양방향 바인딩을 수행하는 아키텍쳐  
eg. AngularJS / Vue.js / KnockoutJS / Riot,js (라이브러리)

<br/>

## 리액트의 등장. 컴포넌트 지향과 상태 관리

<br/>

`특징`  

* 가상 DOM ⭐️
* 선언적 UI
* 단방향 데이터 전달
* 컴포넌트 전달 / 함수 컴포넌트
* Flux 아키텍처와의 친화성

<br/>

#### 가상 DOM ⭐️ ?

<br/>

`가상 돔` 을 두어, 브라우저가 가진 DOM 의 API 를 **직접 조작하지 않고**  
노드의 변경이 있을 경우에 변경 전후의 가상 DOM을 비교해서 업데이트 위치를 파악하고,  
필요에 따라 변경점들을 모아 `실제 DOM` 에 변경을 적용하는 기술  

<br/>

#### 상태 관리 아키텍쳐 Flux ?

<br/>

페이스북은 MVVM 프레임워크의 양방향 데이터 바인딩 기능에 문제를 제기함.  
MVVM 프레임워크로 개발하면 코드가 간략해지는 장점이 있지만,  
지나치게 사용하면 변경점의 영향도를 추적하기 어렵고 코드의 복잡성이 높아진다는 단점 주장.  

<br/>

<img src="https://raw.githubusercontent.com/facebookarchive/flux/main/img/flux-diagram-white-background.png" alt="flux_image">
<br/>

`참고` [flux](https://github.com/facebookarchive/flux)

<br/>

`Flux 특징`  

* **MVC** 와 같은 설계상의 지침으로 기능.
* 데이터 흐름이 단방향 (**uni-directional data binding**)
* 상태 흐름 추적 용이하게 끔 (**양**방향 → **단**방향)  

<br/>

애플리케이션 표시를 담당하는 `View` 에서 필요한 상태 획득은 `Store` 에서 수행.  
상태 업데이트는 `Action` 이라는 데이터를 `Dispatcher` 에 전달하여 수행.  

상태 관리 라이브러리, 프레임워크 대부분은 플럭스의 사상을 어느정도 받아들였다.

<br/>

## Node.js의 약진

`Node.js` 는 **서버 사이드** 에서 자바스크립트를 실행할 수 있는 환경.  
2009년, 라이언 달이 구글 크롬 자바스크립트 엔진 V8 사용해서 만듦.  
`non-blocking I/O` (여러 요청을 짧은 지연으로 해결할 수 있는) 성능 인정받음.  
`npm` 패키지 관리자, 패키지 시스템의 존재는 프론트 개발에 _package_ 개념을 도입하고,  
자바스크립트 에코 시스템을 만들어 냈음.

<br/>

📌 **npm** 사용했을 때 장점 ?

<br/>

* 모듈 로딩 구조
* 패키지 관리
* 빌드 시스템

<br/>

현재 많은 OSS(Open Source Software) 가 npm 을 통해 배포되고 있으며,  
애플리케이션 측은 사용할 라이브러리와 버전을 `package.json` 에 지정해 기술하기만 하면 해당 라이브러리 삽입 가능.  
→ 자바스크립트의 프로그램이 `모듈` 이라는 단위로 분할되므로, 유지보수성 or 재사용성 향상.  

`모듈` 을 `import` 해 `transpile` 하기 위한 `빌드 시스템` 또한 당연하게 프론트엔드 개발에 보급되었음.  
이 빌드 시스템을 통해, 많은 모듈로 개발된 것을 하나로 압축된 자바스크립트 파일로 만들어 브라우저에 쉽게 로드 가능 😉  
배포시 빌드 프로세스를 통해 자바스크립트 파일을 수행하기 때문에,  
개발자는 자바스크립트 뿐만 아니라 다른 언어도 기술할 수 있다는 `AltJS` 라는 발상도 생겨남. 😮  

<br/>

📌 **CommonJS** 와 **ES 모듈** ?  

<br/>

현재 기준 대표적인 **모듈 사양** : `CommonJS`, `ES 모듈`  
(`자바스크립트 모듈화` 의 역사는 아직 짧다. 구조 논의도 계속되고 있음.)  

<br/>

🧐 `CommonJS` 가 해결하고자한 문제 영역  
(Node.js 초기 모듈 사양)  

* 모듈 구조 부재
* 표준 라이브러리 부재
* 웹 서버와 데이터베이스 간의 표준 인터페이스 부재
* 패키지 관리 시스템 부재

<br/>

```js
/* [CommonJS 모듈 구현 예]
 * 모듈 정의에 module.exports, 로딩에 require() 사용
 */

// util.js 파일 정의
module.exports.sum = (x, y) => x + y;

// util.js 를 읽는 main.js
const { sum } = require('./util.js');
console.log(sum(2, 5)); // 7

```

<br/>

2015년, 자바스크립트 명세를 정하는 ECMA 표준화 단체가 `공식적인 모듈 구조` `ES 모듈` 발표.  
(Internet Explorer 이외의 모던 브라우저 모두 ES 모듈을 표준으로 사용할 수 있게 됌.)  
2019년, Node.js 에서도 ES 모듈을 표준으로 사용할 수 있게 됌 🤭

<br/>

```js

/* [ES 모듈 구현 예]
 *  모듈 정의에 export, 로딩에 import 사용
 */ 

// util.js 파일 정의
export const sum = (x, y) => x + y;

// util.js 를 읽는 main.js
import { sum } from './util.js';
console.log(sum(2, 5)); // 7

``` 

<br/>

📌 **Deno**

<br/>

Node.js 창시자 라이언 달이 개발한, 새로운 자바스크립트/타입스크입트 런타임 환경  
Node → Deno

`참고` [Node.js에 관해 후회하는 10가지](https://www.youtube.com/watch?v=M3BM9TB-8yA)  
`참고` [Deno](https://deno.com/)

<br/>

## AltJS의 유행과 TypeScript의 꾸준한 확산 

<br/>

`AltJS` 는 _컴파일을 통해 자바스크립트를 생성_ 하는 프로그래밍 언어의 대분류  

#### AltJS 등장 배경 

자바스크립트는 인기도 많고, 프론트엔드 개발에 자주 쓰이는 언어이지만, 문법에 문제가 있다고 생각하는 개발자들이 많음.  
2010년경부터, 자바스크립트가 아닌 언어로 코드를 기술하고, 그걸 컴파일해 자바스크립트로 변환하는 `AltJS` 들이 생겨남.  
eg. CoffeeScript / ClosureScript / Dart / TypeScript

<br/>

📌 **컴파일러** ?  
📌 **트랜스파일러** ?  
📌 **컴파일러** 와 **트랜스파일러** 의 차이는 ?

<br/>

|    구분    |   컴파일러   |  트랜스파일러  |
| --------- | ---------- | ---------- |
|  `language level`<br/>(언어 수준)  | `high` → `low` | `high` → `high` |
| `abstraction level`<br/>(추상화 수준) | input > output | input === output |
| `output code`<br/>(변환 완료 코드) | `assembly language` 이기에, <br/> 기계가 바로 읽을 수 있다. | 아직 `high-level language` 이기에, 기계가 읽기 위해선 `compile` 단계가 필요하다. |
| `inner workings`<br/>(내부 동작) | `scan` → `parse` → `abstract syntax tree` → `intermediate code` → `assembly language` | `parse` → `abstract syntax tree` → `intermediate model` → `abstract syntax tree of the target language` |
| `example`<br/>(예시) | Java code → assembly language  | Java code → C++ code |

`참고` [difference of compiler and transpiler](https://www.geeksforgeeks.org/difference-between-transpiler-and-compiler/)

<br/>

📌 **Babel** (바벨) ?  

<br/>

ECMA 2015+ 이상의 코드가 현재나 이전의 브라우저에서 호한가능하도록 변환시켜주는 툴체인.  
ECMA 기능을 **폴리필** 한다고 볼 수 있다.

브라우저 벤더가 최신 ECMA 사양에 기술된 기능을 제공하지 않을 수도 있기에,
표준 구현되지 않은 브라우저에서도 최신 ECMA 사양의 자바스크립트 문법을 읽을 수 있도록 변환해주는 **컴파일러**.  

**폴리필** (polyfill)  

    : 이전 브라우저에서 지원하지 않는 기능을 제공하는 데 필요한 코드 조각 혹은 그러한 동작.  
    : eg. [1st version of jQuery](https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.js)

`참고` [Babel](https://babeljs.io/docs/)  
`참고` [Pollyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)

<br/>

## 빌드 도구와 태스크 러너

<br/>

`빌드` 란, 소스 코드에 로딩된 모듈의 의존성을 해결하고, 실행 가능한 자바스크립트 형식으로 변환하는 것.  
자바스크립트를 사용하는 프론트엔드/백엔드 라면 양쪽 모두 필요한 과정.  

`참고` [AMD, CommonJS, UMD](https://www.zerocho.com/category/JavaScript/post/5b67e7847bbbd3001b43fd73) : npm 모듈을 프론트에서도 충돌없이 자유롭게 사용하기 위한 노력들 

빌드 단계를 관리하기 위한 `태스크 러너`, [Grunt](https://gruntjs.com/), [gulp](https://gulpjs.com/) 일시적 유행.  
그러나 태스크 러너 자체가 학습 비용이 있기 떄문에 인기 ↓.  
npm 스크립트를 활용해 커맨드 실행하는 방향으로 변경.  

2015년, `빌드 도구` `webpack` 등장.  

<br/>

📌 **webpack** 사용했을 때 장점 ?

<br/>

* 사용하는 의존 모듈의 버전 관리와 해결 자동화
* 파일 결합이나 코드 압축 자동화
* 플러그 매커니즘 통해 커스터마이징 가능
* 개발 효율화 도구 탑재 eg. hot report

<br/>

최근, ES 모듈 기반의 라이브러리 배포 등에 사용되는 rollup.js  
Next.js 에 채용된 Rust 기반 `SWC` 

<br/>

📌 **SWC** 란 ?  

<br/>

자바스크립트 코드를 트랜스파일(transpile) 하거나 
AltJS 를 자바스크립트 코드로 컴파일(compile) 하기 위해 사용되는 도구.  

SWC 등장 전에는 `Babel`(트랜스파일러)&`TSC`(타입스크립트 내장 컴파일러) 조합 유용.  
SWC 와 비교했을 때, 빌드 속도 굉장히 느림. (저수준 언어 Rust 로 개발된 SWC는 빌드 속도 빠름)

<br/>


<br/>

추가적인 학습이 필요한 지식 : 모듈화 / 빌드 / 정적 구문 확인 / 테스트  

<br/>
