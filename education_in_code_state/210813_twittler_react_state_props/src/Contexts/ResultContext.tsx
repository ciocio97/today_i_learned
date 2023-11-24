// context.js ??
import { createContext, useContext, useReducer, useCallback, useState } from "react";
import dummyData from '../static/dummyData';

export const ResultContext = createContext(null);
// 01 createContext 만들고

// export const ResultContext = createContext(undefined);
// createContext 선언 -> 이게 뭐야
// createContext 의 parameter에는 Context의 기본값을 설정할 수 있다
// 이 기본값은 Context를 쓸 때, 값을 따로 지정하지 않을 경우 사용된다. (기본값)

export function ResultContextProvider({ children }){
  const [result, setResult] = useState(dummyData);  // 글로벌하게 관리할 state

  const value = {
    result,
    setResult
  };

  return <ResultContext.Provider value={value}>{ children }</ResultContext.Provider>;
}

export function useResultContext(){
  return useContext(ResultContext);
  // 02 useContext 사용합니다

} // 다른 컴포넌트에서 context를 사용할 때 쓰임