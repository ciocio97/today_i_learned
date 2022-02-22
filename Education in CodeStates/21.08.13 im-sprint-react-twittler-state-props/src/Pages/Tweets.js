// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import { useRef } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';
import CreateUser from '../CreateUser';

const Tweets = () => {
  // {username, content}
  const [inputs, setInputs] = useState({
    username: '',
    content: ''
  });

  const { username, content } = inputs; 
  // onChange 함수
  const onChange = (el) => {
    const { name, value } = el.target; /* el.target으로 객체 전체를 불러와 {name,value}만 구조할당 ㄷㄷ */
    setInputs({...inputs, [name]:value});
  };

  // data들 useState로 불러오기
  const [info, setInfo] = useState(dummyTweets);

  const nextId = useRef(6);
  // onCreate 함수
  // 버튼이 눌러졌을 때 순차적으로 일어나는 모든 일들
  const onCreate = () => {
    const plusInfo = {
      id: nextId.current,
      username,
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      content,
      createdAt: '2019-02-28T16:17:47.000Z',
      updatedAt: '2019-02-28T16:17:47.000Z'
    };
    setInfo([plusInfo, ...info]);

    setInputs({ username: '', content: '' });
    nextId.current += 1;
  };

  return (
    <React.Fragment>
      <CreateUser 
        username={username}
        content={content}
        onChange={onChange}
        onCreate={onCreate}
        info = {info}
      />
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {info.map((el) => {
          return (
              <Tweet tweet={el} key={el.id}/>
          )
        })}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
