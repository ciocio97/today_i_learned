import { useState } from 'react'

// 검색창 컴포넌트 Search
function Search({onSearch}) {
  // 검색창에 입력되는 [문자 상태]
  const [textDestination, setTextDestination] = useState('')

  // handleChange함수는 [문자 상태]를 업데이트한다.
  const handleChange = (e) => {
    setTextDestination(e.target.value.toUpperCase())
  }

  // handleKeyPress함수는 Enter키가 눌렸을 때,
  // 검색창에 입력된 문자를 [01 조건 상태]에 반영하는 함수를 호출한다. 
  // (button의 onClick과 똑같은 역할을 한다.)
  const handleKeyPress = (e) => {
    // (보통 input창을 클릭하고, 검색어를 입력하고, enter키를 탁! 치므로 이렇게 따로 조건을 추가해준다.)
    if (e.type === 'keypress' && e.code === 'Enter') {
      handleSearchClick()
    }
  }

  // handleSearchClick함수는 [문자 상태]를 [01 조건 상태]반영한다. (인자로 전달한다.)
  const handleSearchClick = () => {
    console.log('검색 버튼을 누르거나, 엔터를 치면 search 함수가 실행됩니다')

    // State 끌어올리기 (Lifting State Up)가 수행되었다.
    // 상위 컴포넌트의 "상태를 변경하는 함수" 그 자체를 하위 컴포넌트로 전달하고, 이 함수를 하위 컴포넌트가 실행한다

    // Main.js의 search 함수 자체를 하위 컴포넌트 Search에 전달하고 해당 함수를 하위 컴포넌트에서 실행하였다. 
    // Main의 search함수는 [문자 상태]를 인자로 받아 [01 조건 상태]를 업데이트 할 수 있게되었다.
    onSearch({
      departure : "ICN",
      destination : textDestination
    });
  }

  return <fieldset>
    <legend>공항 코드를 입력하고, 검색하세요</legend>
    <span>출발지</span>
    <input id="input-departure" type="text" disabled value="ICN"></input>
    <span>도착지</span>
    <input id="input-destination" type="text" value={textDestination} onChange={handleChange} placeholder="CJU, BKK, PUS 중 하나를 입력하세요" onKeyPress={handleKeyPress} />
    <button id="search-btn" onClick={handleSearchClick}>검색</button>
  </fieldset>
}

export default Search