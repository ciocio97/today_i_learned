import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      {/* TODO : 메세지 아이콘을 작성합니다. */}
      <i class="far fa-comment-dots" className="far fa-comment-dots"></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          total: {dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <footer></footer>;
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {

        const isParkHacker = tweet.username === 'parkhacker';
        const tweetUserNameClass = isParkHacker ? 'tweet__username tweet__username--purple' : 'tweet__username';

        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              {/* TODO: 트윗 저자의 프로필 사진이 있어야 합니다.  */}
              <img src={tweet.picture}></img>
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                {/* TODO : 유져 이름이 있어야 합니다. */}
                <span className={tweetUserNameClass}>{tweet.username}</span>
                {/* TODO : 이름이 "parkhacker"인 경우, 이름 배경색을 rgb(235, 229, 249)으로 바꿔야 합니다. */}
                {/* TODO : 트윗 생성 일자가 있어야 합니다. */}
                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>
              <div className="tweet__message">
                {tweet.content}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      <Footer />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Features />
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };

/*import React, { useState } from 'react';
import './App.css';

const App = (props) => {
  const { dummyTweets, dummyNotice } = props;

  const [globalState, setGlobalState] = useState({
    currentPage: 'tweets',
  });
  const [Notice] = useState(dummyNotice);
  const [tweets] = useState(dummyTweets);

  const handleIconClick = (event) => {
    if (event.target.classList.contains('fa-comment-dots')) {
      setGlobalState({ currentPage: 'tweets' });
    }

    if (event.target.classList.contains('fa-bell')) {
      setGlobalState({ currentPage: 'notifications' });
    }

    return;
  };

  return (
    <div className="App">
      <main>
        <Sidebar handleIconClick={handleIconClick} />
        {!globalState.currentPage ? (
          'loading..'
        ) : (
          <Features
            tweets={tweets}
            Notice={Notice}
            currentPage={globalState.currentPage}
          />
        )}
      </main>
    </div>
  );
};

const Sidebar = ({ handleIconClick }) => {
  return (
    <section className="sidebar">
      <Icon name={'far fa-comment-dots'} handleIconClick={handleIconClick} />
      <Icon name={'far fa-bell'} handleIconClick={handleIconClick} />
    </section>
  );
};

const Icon = ({ name, handleIconClick }) => {
  return <i className={name} onClick={handleIconClick}></i>;
};

const Features = (props) => {
  const { tweets, Notice, currentPage } = props;

  return (
    <section className="features">
      {!currentPage ? (
        'loading'
      ) : currentPage === 'tweets' ? (
        <React.Fragment>
          <div className="tweetForm__container ">
            <div className="tweetForm__wrapper">
              <div className="tweetForm__profile"></div>
              <Counter total={tweets.length} />
            </div>
          </div>
          <Tweets tweets={tweets} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NotificationContainer notifications={Notice} />
          <Notifications notifications={Notice} />
        </React.Fragment>
      )}
      <Footer />
    </section>
  );
};

const NotificationContainer = () => {
  return (
    <div className="notificationBar__container">
      <NotificationTopBar />
    </div>
  );
};

const NotificationTopBar = () => {
  return (
    <div className="notificationBar__wrapper">
      <div className="notificationBar__icon">
        <i className={'fas fa-calendar-check'}></i>
      </div>
      <div className="notificationBar__message">알림을 확인하세요.</div>
    </div>
  );
};

const Notifications = ({ notifications }) => {
  return (
    <ul className="notifications">
      {notifications.map((notification) => (
        <Notification content={notification.content} key={notification.id} />
      ))}
    </ul>
  );
};

const Notification = ({ content }) => {
  return (
    <li className="notification">
      <div className="notification__sign">
        <i className={'fas fa-caret-right'}></i>
      </div>
      <div className="notification__content">
        <span className="notification__message">{content}</span>
      </div>
    </li>
  );
};

const Counter = ({ total }) => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          <span className="tweetForm__count__text">{'total: ' + total}</span>
        </div>
      </div>
    </div>
  );
};

const Tweets = ({ tweets }) => {
  return (
    <ul className="tweets">
      {tweets.map((tweet) => (
        <Tweet tweet={tweet} key={tweet.id} />
      ))}
    </ul>
  );
};

const Tweet = ({ tweet }) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-KR');

  const isParkHacker = tweet.username === 'parkhacker';
  const tweetUserNameClass = isParkHacker
    ? 'tweet__username tweet__username--purple'
    : 'tweet__username';

  return (
    <li className="tweet" key={tweet.id}>
      <div className="tweet__profile">
        <img src={tweet.picture} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <span className={tweetUserNameClass}>{tweet.username}</span>
          <span className="tweet__createdAt">{parsedDate}</span>
        </div>
        <div className="tweet__message">{tweet.content}</div>
      </div>
    </li>
  );
};

const Footer = () => {
  return <footer>Copyright @ 2021 Code States</footer>;
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };*/