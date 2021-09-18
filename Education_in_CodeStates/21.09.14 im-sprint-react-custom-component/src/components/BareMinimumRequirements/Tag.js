import { useState } from 'react';
import styled from 'styled-components';

// TODO: Styled-Component 라이브러리를 활용해 여러분만의 tag 를 자유롭게 꾸며 보세요!

export const TagsInput = styled.div`
  margin: 8rem auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 15px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 20px;
      margin: 0 8px 8px 0;
      background: #9EC3F3;
        > .tag-title {
          font-family: 'Open Sans', sans-serif;
          font-size: 12px;
        }
        > .tag-close-icon {
          display: block;
          width: 16px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          font-size: 14px;
          margin-left: 8px;
          color: #9EC3F3;
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
      }
    }
  }

  > input {    
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
    outline: transparent;
    }

    // 찾았다 내 사랑
    &.tag-input {
      background-color: transparent;
    }
  }

  &:focus-within {
    border: 1px solid #9EC3F3;
  }

`;

export const Tag = () => {

  const initialTags = ['Code', 'Design'];

  const [tags, setTags] = useState(initialTags);

  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, idx) => { return idx !== indexToRemove}));
  };

  // const [text, setTexts] = useState('');

  // const addTexts = (event) => {
  //   setTexts(event.target.value);
  // }
  
  const addTags = (event) => {

    const text = event.target.value;
    const filtered = tags.filter((el) => el === text);

    if(text !== '' && filtered.length === 0){
      setTags([...tags, text]);
      event.target.value = '';
    }

    // if(!tags.includes(text) && text.length !== 0){
    //   setTags([...tags, text]);
    //   event.target.value = '';
    // }
    // else{
    //   event.target.value = '';
    // }

    console.log(text);

  }
  

  return (
    <>
      <TagsInput>
        <ul id='tags'>
          {tags.map((tag, index) => (
            <li key={index} className='tag'>
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon' onClick={() => {removeTags(index)}}>&times;</span>
            </li>
          ))}
        </ul>
        <input
          className='tag-input'
          type='text'
          // value={text}
          // onChange={addTexts}
          onKeyUp={(e) => e.key === 'Enter' ? addTags(e) : null}
          // 왜 안될까 1번
          /*onKeyUp={(event) => {
            addTags(event.key);
          }}*/
          // 테스트케이스는 왜 안될까 2번
          /*onKeyUp={addTags}*/
          placeholder='Press enter to add tags'
        />
      </TagsInput>
    </>
  );
};