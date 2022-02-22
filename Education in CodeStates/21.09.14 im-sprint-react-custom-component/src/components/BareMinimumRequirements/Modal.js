import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  width: inherit;
  height: inherit;
  display: flex;
  flex-flow: column wrep;
  justify-content: center;
  align-items: center;
  background-color: pink;
  z-index: 2;
`;

export const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  width: 100%;
  height: inherit;
  position: sticky;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  /* background-color: gray; */
  /* opacity: 0.5; */
`;

export const ModalBtn = styled.button`
  position: absolute;
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  id: 'dialog'
}))`
  // TODO : Modal창 CSS를 구현합니다.
  text-align: center;
  text-decoration: none;
  padding: 30px 90px;
  background-color: white;
  border-radius: 30px;
  color: #4000c7;
`;

// export const OutOfView = styled.div.attrs(props => ({
//   id: 'background'
// }));

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (event) => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    // console.log(event.target.id);
    if(event.target.id === 'dialog'){
      setIsOpen(isOpen);
    }
    else{
      setIsOpen(!isOpen);
    }
  };

  // const ff = (event) => {
  //   if(event.target.role === 'dialog' && isOpen){
  //     setIsOpen(!isOpen);
  //   }
  // }

  // const closeModalHandler = () => {
  //   setIsOpen(false);
  // }

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현해야 합니다. */}
          {isOpen ? "Opened !" : "Open Modal"}
        </ModalBtn>
        {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현해야 합니다. */}
        {isOpen ? 
        <ModalBackdrop onClick={openModalHandler}>
          {/*이벤트 버블링, 캡쳐링 공부해볼것 onClick={(e) => e.stopPropagation()}*/}
          <ModalView>
            <div>&times;</div>
            <div>Hello World</div>
          </ModalView>
        </ModalBackdrop> 
        : null}
      </ModalContainer>
    </>
  );
};