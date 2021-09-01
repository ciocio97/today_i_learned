/* eslint-disable */ // 우와아 노란색글씨 다 없애줌 ~~

import React , { useState, useRef }from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import InputTodo from './InputTodo';
import Todolist from './Todolist';



function App() {

  const [inputs, setInputs] = useState({
    listname: '',
    /*check: false*/
  });

  const {listname} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({...inputs, [name]: value});
  }

  const [lists, setLists] = useState([]);

  // useRef() 사용할 때 넣어준 parm값 === .current의 기본값
  // 왜 const nextId = {current: 4} / let nextId = 4; 안되는가 ??!!
  /**
   * 
   * useRef는 일반적인 자바스크립트 객체입니다 즉 heap 영역에 저장됩니다
   * 그래서 어플리케이션이 종료되거나 가비지 컬렉팅 될 때 까지 참조할 때 마다 같은 메모리 주소를 가지게 되고
   * 같은 메모리 주소를 가지기 때문에 === 연산이 항상 true를 반환하고, 값이 바뀌어도 리렌더링 되지 않습니다.
   * 
   * 하지만 함수 컴포넌트 내부에 변수를 선언한다면, 렌더링 될 때마다 값이 초기화 됩니다.
   * 그래서 해당 방법을 지양하는 것 같습니다 :)
   */
  const listInput = useRef();
  const nextId = useRef(0);
  const onCreate = () => {
    
    const newList = {
      id: nextId.current,
      listname
    };

    if(newList.listname !== ''){
      setLists([...lists, newList]);
      // setLists(lists.concat(newList));
    }

    setInputs({
      listname: ''
    });
    // 값의 수정과 삭제 모두 .current 값을 이용한다 !!
    nextId.current += 1;
    listInput.current.focus();
  }

  const onCheckEnter = (e) => {
    if(e.key === 'Enter'){
      onCreate()
    }
  };

  return (
    <main className="container">
      <div id="contaunerBox">
        <InputTodo 
          listname={listname}
          onChange={onChange}
          onCreate={onCreate}
          onCheckEnter={onCheckEnter}
          listInput={listInput}
        />
        <Todolist lists={lists} />
      </div>
    </main>
  );
}

export default App;
