# Next.js와 타입스크립트를 활용한 모던 개발

<br/>

## Next.js와 타입스크립트

<br/>

`Next.js` 는 _오픈 소스 웹 어플리케이션 **프레임워크**_ 이다.  
`React`(웹 프론트엔드 **라이브러리**) 를 기반으로 구현 및 개발되었다.  
'SSR' 이나 '정적 웹 페이지 생성' 등 웹앱 개발에 편리하게 사용할 수 있는 기능이 추가됌.

<br/>

📌 `React` 가 **프레임워크** 가 아니라 **라이브러리** 인 이유는 ?  
📌 **프레임워크** 와 **라이브러리** 의 차이는 ?

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

