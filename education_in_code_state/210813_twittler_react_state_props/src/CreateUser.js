import React from 'react';

function CreateUser({ username, content, onChange, onCreate, info }) {
  return (
    <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={onChange}
                ></input>
                <textarea
                  type="text"
                  name="content"
                  value={content}
                  placeholder="your comment is.."
                  className="tweetForm__input--message"
                  onChange={onChange}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total: ' + info.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
                <button
                className="tweetForm__submitButton" 
                onClick={onCreate}
                >Tweet</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CreateUser;