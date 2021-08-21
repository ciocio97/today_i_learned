/* eslint-disable */ // 우와아 노란색글씨 다 없애줌 ~~

import React , { useState, useRef }from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';

{/* input의 개수가 여러개 됐을 때, 단순히 useState 여러번 사용하고 onChange도 여러개 만들어서 구현! 할 수 있다 */}
{/* 그치만, 더 좋은 방법은 01 input에 name을 설정하고, 02 이벤트가 발생했을 때 이 값을 참조하는 것이다. */}
{/* 그리고 03 useState에서는 문자열이 아니라 !! 객체 형태로 상태를 관리해줘야 한다. */}


function App() {

  // const [text, setText] = useState(''); 계속 문자열로 상태를 관리해주는 실수를 범하고 있었구나
  // input받는 값들에 이름을 붙여준다
  // useState는 그 이름들을 (값과 함께) 객체 형태로 관리한다
  const [input, setInput] = useState({
    list: ''
    /*check: false*/
  });

  // useRef로 특정 돔 선택하기
  // useRef()를 사용하여 Ref 객체를 만든다
  const listInput = useRef();

  // 비구조화 할당을 통해 값을 추출한다
  const {list} = input;

  const onChange = (e) => {
    // 비구조화 할당을 통해 값을 추출한다 (객체를 추출하는 방법)
    const {name, value} = e.target;
    // name키에 value값을 할당한 아이 + 기존 객체 같이 담아주기
    setInput({...input, [name]: value});
  }

  const onReset = () => {
    setInput({
      list: ''
    });
    // 버튼을 눌렀을 때 Ref의 원래값으로 focus를 옮기는 DOM API를 호출해주었다
    listInput.current.focus();
  }

  return (
    <div className="container">
      <div className="input">
        <input 
          type="text"
          placeholder="할일을 입력하세요"
          // input에 이름을 설정한다
          name="list"
          value={list}
          onChange={onChange}
          // 우리가 선택하고 싶은 DOM에 (아까 만들어뒀던) Ref객체를 ref값으로 설정해준다
          ref={listInput}
        ></input>
        <button
          onClick={onReset}
        >ENTER</button>
      </div>
      <div className="output">
        <ul>
          <li>
            {list}
          </li>
        </ul>
      </div>
    </div>
  );
}



export default App;
