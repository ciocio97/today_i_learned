import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { createBrowserHistory } from 'history';

// react-dom package는 앱의 최상위 레벨에서 사용할 수 있는 
// DOM에 특화된 메서드와 필요한 경우 React 모델 외부로 나갈 수 있는 해결책을 제시한다.

// 01 render()
// ReactDOM.render(element, container[, callback]);
// container 노드의 콘텐츠를 제어한다. 즉, container의 노드를 수정하지 않고 하위 노드만 수정한다.
// 02 hydrate()
// 03 unmountComponentAtNode()
// 04 findDOMNde()
// 05 createPortal()

const customHistory = createBrowserHistory();

ReactDOM.render(<Router history={customHistory}><App /></Router>, document.getElementById('root'));
