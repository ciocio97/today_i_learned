/* eslint-disable */ // 우와아 노란색글씨 다 없애줌 ~~

import React , { useState }from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';

// React는 데이터바인딩이 굉장히 쉽다

function App() {

  const [articleName, articleNameChange] = useState(["프론트엔드개발자", "자바스크립트", "리액트"]);
  const [createdDate, chngeDate] = useState(["2021.06.23", "2021.07.11", "2021.08.03"]);

  const [num, plusNum] = useState(0);  // 이렇게 state변경 함수로 만들어야 재렌더링이 잘 일어난다.
  const plusNumOne = () => plusNum(num+1);  // 그리고 원본 state는 직접 변경안됩니다.
                                            // 때문에 보통 자료의 '복사본'을 만들어서 변경하곤 합니다.
  // const changeName = () => articleNameChange(["백엔드개발자" ,"자바스크립트", "리액트"])
  const changeName = () => {          // state를 수정하고 싶어서 데이터를 복사하는 건 아주 React적인 관습이다.
//  const newArr = articleName;          근데 이렇게 "값을 공유"하면 안되고, deep copy"깊은 복사"를 해야한다.           
    const newArr = [...articleName];  // 이것이 바로 deep copy -> 내용은 같지만 서로 독립적인 아이를 탄생시킨다.
    newArr[0] = "백엔드개발자";
    articleNameChange(newArr);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav className="navigator">
            <div>개발이 하고싶니?</div>
          </nav>
        </header>
        <main>
          <article className="list">
            <h3>{articleName[0]} <span onClick={ plusNumOne }> 👍 </span> {num} </h3>
            <button onClick={ changeName }>변경</button>
            <p>{createdDate[0]}</p>
            <hr/>
          </article>
          <article className="list">
            <h3>{articleName[1]}</h3>
            <p>{createdDate[1]}</p>
            <hr/>
          </article>
          <article className="list">
            <h3>{articleName[2]}</h3>
            <p>{createdDate[2]}</p>
            <hr/>
          </article>
        </main>  
        
        {/* Switch ? 여러 Route를 감싸서 그 중 경로가 일치하는 단 하나의 라우터만 렌더링 시켜주는 역할 */}
        {/* Switch 사용안하면 매칭되는 모든 요소를 렌더링한다 */}
        {/* Route ? path 속성을 지정하여 해당 path에 어떤 컴포넌트를 보여주는 역할 */}
        {/* exact ? 주어진 경로와 정확히 일치해야만 설정한 Route 컴포넌트를 보여주는 역할 */}
        {/* exact 속성이 없으면 해당 경로와 일치하는 중복된 Route 컴포넌트를 모두 보여줘버린다ㅜ */}


      </div>
    </BrowserRouter>
  );
}



export default App;  // 오 여기서 App 함수를 불러오는군 !
