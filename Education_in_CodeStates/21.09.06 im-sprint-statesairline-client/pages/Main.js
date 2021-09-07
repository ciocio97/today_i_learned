import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getFlight } from '../api/FlightDataApi'
import Debug from './component/Debug'
import FlightList from './component/FlightList'
import LoadingIndicator from './component/LoadingIndicator'
import Search from './component/Search'

import json from '../resource/flightList'

// Main 항공편 검색창은 크게, 검색할 수 있는 <Search/> 컴포넌트와 검색한 결과를 나타내는 <FlightList/> 컴포넌트를 자식으로 두고 있다.
// 이 자식 컴포넌트들은 모두 항공편 데이터를 다루고 싶어한다.
// <Search/> 컴포넌트     : 사용자가 검색창에 입력한 정보에 해당하는 항공편 데이터를 찾고싶다 !
// <FlightList/> 컴포넌트 : 찾아낸 항공편 데이터를 형식에 맞게 출력하고 싶다 !
// 모두 업데이트된 정보(검색 결과)에 접근하고 싶어하기에, 부모 컴포넌트인 Main에 상태를 위치시켰다.
export default function Main() {
  
  const [condition, setCondition] = useState({           // 01 조건 상태
    departure: 'ICN'
  })
  const [isLoading, setIsLoading] = useState(false)      // 02 로딩 상태
  const [flightList, setFlightList] = useState(json)     // 03 결과 상태 (조건에 부합하는)

  // search함수는 [01 조건 상태]를 업데이트한다.
  const search = ({ departure, destination }) => {
    // 인자로 받아온 값이 이전의 상태와 같지 않을 때
    if (condition.departure !== departure || condition.destination !== destination) {
      // 받아온 값으로 [01 조건 상태]를 업데이트한다.
      setCondition({
        departure : departure,
        destination : destination
      });
    }
  }

  // useEffect Hook은 [03 결과 상태]를 업데이트한다.
  useEffect(() => {
    // [02 로딩 상태]를 업데이트한다. 항공편 데이터를 받아오기 전까지 로딩...
    setIsLoading(true);
    // // getFlight 함수에 [01 조건 상태]를 넣어 원하는 데이터만 추출해온다
    // getFlight(condition).then(result => {
    //   // 추출해온 데이터로 [03 결과 상태]를 업데이트한다.
    //   setFlightList(result);
    //   // [02 로딩 상태]를 업데이트한다. 항공편 데이터 받아왔으니까 로딩... 끝
    //   setIsLoading(false);
    // });
  }, [condition]) // 조건이 변경될 때마다 useEffect가 실행된다.

  global.search = search // 실행에는 전혀 지장이 없지만, 테스트를 위해 필요한 코드입니다. 이 코드는 지우지 마세요!                       

  return (
    <div>
      <Head>
        <title>States Airline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          여행가고 싶을 땐, States Airline
        </h1>
        {/*검색창 컴포넌트 Search -> 조건 상태를 업데이트하는 함수를 props로 전달*/}
        <Search onSearch={search}/>
        <div className="table">
          <div className="row-header">
            <div className="col">출발</div>
            <div className="col">도착</div>
            <div className="col">출발 시각</div>
            <div className="col">도착 시각</div>
            <div className="col"></div>
          </div>
          {/*로딩이 true일때는 로딩창 반환, 
             로딩이 false일때는 검색한 결과 컴포넌트 FlightList를 반환. -> 검색된 결과로 업데이트 된 변수를 props로 전달*/}
            {isLoading ? <LoadingIndicator /> : <FlightList list={flightList}/>}
        </div>
        
        {/*이건 그냥 상태가 업데이트 된 조건 확인하는 구문 (== 검색어)*/}
        <div className="debug-area">
          <Debug condition={condition} />
        </div>
      </main>
    </div>
  )
}
