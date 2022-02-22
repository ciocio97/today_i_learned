// import { useState } from 'react';
// import styled from 'styled-components';

// const ToggleContainer = styled.div`
//   position: relative;
//   margin-top: 8rem;
//   left: 47%;
//   cursor: pointer;

//   > .toggle-container {
//     width: 50px;
//     height: 24px;
//     border-radius: 30px;
//     background-color: #8b8b8b;
//   }

//   > .toggle-circle {
//     position: absolute;
//     top: 1px;
//     left: 1px;
//     width: 22px;
//     height: 22px;
//     border-radius: 50%;
//     background-color: #ffffff;
//   }

//   > .toggle--checked {
//     background-color: green;
//   }
// `;

// const Desc = styled.div`
//   // TODO : 설명 부분의 CSS를 구현합니다.
// `;

// export const Toggle = () => {
//   const [isOn, setisOn] = useState(false);

//   const toggleHandler = () => {
//     // TODO : isOn의 상태를 변경하는 메소드를 구현합니다.
//     setisOn(!isOn);
//   };

//   return (
//     <>
//       <ToggleContainer
//         // TODO : 클릭하면 토글이 켜진 상태(isOn)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.
//         onClick={toggleHandler}
//       >
//         {/* TODO : 아래에 div 엘리먼트 2개가 있습니다. 각각의 클래스를 'toggle-container', 'toggle-circle' 로 지정하세요. */}
//         {/* TIP : Toggle Switch가 ON인 상태일 경우에만 toggle--checked 클래스를 div 엘리먼트 2개에 모두 추가합니다. 조건부 스타일링을 활용하세요. */}
//         <div className={"toggle-container" (isOn ? "toggle--checked" : null)}/>
//         <div className={"toggle-circle"  (isOn ? "toggle--checked" : null)}/>
//       </ToggleContainer>
//       {/* TODO : Desc 컴포넌트를 활용해야 합니다. */}
//       {/* TIP:  Toggle Switch가 ON인 상태일 경우에 Desc 컴포넌트 내부의 텍스트를 'Toggle Switch ON'으로, 그렇지 않은 경우 'Toggle Switch OFF'가 됩니다. 조건부 렌더링을 활용하세요. */}
//       {isOn ? <Desc>Toggle Switch ON</Desc> : <Desc>Toggle Switch OFF</Desc>}
//     </>
//   );
// };

import { useState } from 'react';
import styled from 'styled-components';
// import cn from 'classnames';

const ToggleContainer = styled.div`
  position: absolute;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;
  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &.toggle--checked {
      width: 50px;
      height: 24px;
      border-radius: 30px;
      background-color: green;
    }
  }
  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &.toggle--checked {
      top: 1px;
      left: 27px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: #ffffff;
    }
  }
`;

const Desc = styled.div`
  // TODO : 설명 부분의 CSS를 구현합니다.
  text-align: center;
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    // TODO : isOn의 상태를 변경하는 메소드를 구현합니다.
    setisOn(!isOn);
  };

  return (
    <>
      <ToggleContainer
        // TODO : 클릭하면 토글이 켜진 상태(isOn)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.
        onClick={toggleHandler}
      >
        {/* TODO : 아래에 div 엘리먼트 2개가 있습니다. 각각의 클래스를 'toggle-container', 'toggle-circle' 로 지정하세요. */}
        {/* TIP : Toggle Switch가 ON인 상태일 경우에만 toggle--checked 클래스를 div 엘리먼트 2개에 모두 추가합니다. 조건부 스타일링을 활용하세요. */}
        <div className={'toggle-container' + (isOn? ' toggle--checked' : '')}/>
        <div className={'toggle-circle' + (isOn? ' toggle--checked' : '')}/>
      </ToggleContainer>
      {/* TODO : Desc 컴포넌트를 활용해야 합니다. */}
      {/* TIP:  Toggle Switch가 ON인 상태일 경우에 Desc 컴포넌트 내부의 텍스트를 'Toggle Switch ON'으로, 그렇지 않은 경우 'Toggle Switch OFF'가 됩니다. 조건부 렌더링을 활용하세요. */}
      <Desc>{isOn? 'Toggle Switch ON' : 'Toggle Switch OFF'}</Desc>
    </>
  );
};