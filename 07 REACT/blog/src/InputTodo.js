import react from "react";
import { Form, Input, Button } from "antd";
// 처음 써보는 antd 라이브러리
import './InputTodo.css';

function Inputform({ listname, onChange, onCreate, onCheckEnter, listInput }) {

  return (
    <section className="inputBox">
      <div className="inputText">
        <Form onKeyPress={onCheckEnter}>
          <input 
            type="text"
            placeholder="할 일을 입력하세요"
            // input에 이름을 설정한다
            name="listname"
            value={listname}
            // 우리가 선택하고 싶은 DOM에 (아까 만들어뒀던) Ref객체를 ref값으로 설정해준다
            onChange={onChange}
            ref={listInput}
          ></input>
        </Form>
      </div>
      <span className="inputBtn">
        <button onClick={onCreate}>
          ENTER
        </button>
      </span>
    </section>
  );
};

export default Inputform;