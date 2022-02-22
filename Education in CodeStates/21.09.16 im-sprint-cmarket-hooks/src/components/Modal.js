import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
`;

export const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  /* background-color: gray; */
  /* opacity: 0.5; */
`;

export const ModalBtn = styled.button`
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
  role: 'dialog'
}))`
  // TODO : Modal창 CSS를 구현합니다.
  text-align: center;
  text-decoration: none;
  padding: 30px 70px;
  background-color: white;
  border-radius: 30px;
  color: #4000c7;

  > div 
`;

export const Modal = ({ clicked, handleClick }) => {
  const [isOpen, setIsOpen] = useState(clicked);

  const openModalHandler = (event) => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    // console.log(event.target.id);
    if(event.target.id === 'dialog'){
      setIsOpen(isOpen);
    }
    else{
      setIsOpen(!isOpen);
      handleClick(false);
    }
  };

  return (
    <>
      {isOpen ? 
      <ModalBackdrop onClick={openModalHandler}>
        {/*이벤트 버블링, 캡쳐링 공부해볼것 onClick={(e) => e.stopPropagation()}*/}
        <ModalView>
          <div>상품이 장바구니에 담겼습니다.</div>
          <div>확인하시겠습니까 ?</div>
          <button onClick={openModalHandler}>네. 확인할게요.</button>
          <button onClick={openModalHandler}>아니오. 괜찮습니다.</button>
        </ModalView>
      </ModalBackdrop> 
      : null}
    </>
  );
};