import React from 'react';
// TODO : React Router DOM을 설치 후, import 구문을 이용하여 BrowserRouter, Route, Switch 컴포넌트를 불러옵니다.
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import About from './Pages/About';
import MyPage from './Pages/MyPage';
import Selector from './Selector';

import './App.css';

import { ResultContextProvider } from './Contexts/ResultContext';
// 부모 컴포넌트에 provider 불러오기
// 자식 컴포넌트 감싸주고 적용하려고 component에 {} 자식요소들 명시해주는건가?

const App = (props) => {
  return (
    <ResultContextProvider>
      <BrowserRouter>
        <div className="App">
          <main>
            <Sidebar />
            <Selector />
            <section className="features">
              <Switch>
              {/* <Route exact path="/"> */}
                <Route exact path="/" component={Tweets}>
                  <Tweets />
                </Route>
              {/* </Route> */}
                <Route exact path="/about" component={About}>
                  <About />
                </Route>
                <Route exact path="/mypage" component={MyPage}>
                  <MyPage />
                </Route>
              {/* TODO : 유어클래스를 참고해서, 테스트 케이스를 통과하세요.
              TODO : React Router DOM 설치 후 BrowserRouter, Route의 주석을 해제하고 Swtich 컴포넌트를 적절하게 작성합니다. */}
              </Switch>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </ResultContextProvider>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
